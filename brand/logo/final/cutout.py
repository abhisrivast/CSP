"""Cut the finalised CSP badge out of its cream background.

The banner's cream band connects to the page background through the torn ribbon ends, so a plain
flood fill eats it. Instead: opaque = (not page background) | badge disc | banner band (closed between
its red stripes).

    ../../tools/.venv/bin/python cutout.py csp-badge-original.webp csp-badge-transparent.png
"""
import sys

import numpy as np
from PIL import Image
from scipy import ndimage

src, out = sys.argv[1], sys.argv[2]
rgb = np.asarray(Image.open(src).convert("RGB")).astype(np.int16)
h, w, _ = rgb.shape

corners = np.array([rgb[5, 5], rgb[5, w - 6], rgb[h - 6, 5], rgb[h - 6, w - 6]])
paper = np.median(corners, axis=0)
paperish = np.sqrt(((rgb - paper) ** 2).sum(axis=2)) < 30

# Page background = paper-coloured components touching the image border.
labels, _ = ndimage.label(paperish)
border = np.unique(np.concatenate([labels[0], labels[-1], labels[:, 0], labels[:, -1]]))
outside = np.isin(labels, border[border > 0])

# Fit the badge circle to the left/right edges of the upper half (above the banner).
pts = []
for y in range(90, 700, 4):
    xs = np.where(~outside[y])[0]
    if len(xs):
        pts += [(xs[0], y), (xs[-1], y)]
pts = np.array(pts, float)
A = np.c_[2 * pts[:, 0], 2 * pts[:, 1], np.ones(len(pts))]
cx, cy, c = np.linalg.lstsq(A, (pts ** 2).sum(axis=1), rcond=None)[0]
r = np.sqrt(c + cx ** 2 + cy ** 2)
yy, xx = np.mgrid[0:h, 0:w]
disc = (xx - cx) ** 2 + (yy - cy) ** 2 <= (r + 1.5) ** 2

# Banner band: close vertically between the red stripes in the banner's rows.
red = (rgb[..., 0] > 140) & (rgb[..., 1] < 110) & (rgb[..., 2] < 110)
band = np.zeros_like(red)
y0, y1 = int(cy + 0.20 * r), min(h, int(cy + 0.78 * r))
band[y0:y1] = ndimage.binary_closing(red[y0:y1], structure=np.ones((int(0.45 * r), int(sys.argv[3]) if len(sys.argv) > 3 else 61)))

opaque = ndimage.binary_fill_holes(~outside | disc | band)
opaque = ndimage.binary_opening(opaque, structure=np.ones((3, 3)))
alpha = ndimage.gaussian_filter(opaque.astype(float), 0.8)
alpha = (np.clip(alpha, 0, 1) * 255).astype(np.uint8)

rgba = np.dstack([rgb.astype(np.uint8), alpha])
img = Image.fromarray(rgba, "RGBA")
img = img.crop(img.getbbox())
img.save(out, optimize=True)
print(f"circle centre=({cx:.0f},{cy:.0f}) r={r:.0f}; saved {out} {img.size}")
