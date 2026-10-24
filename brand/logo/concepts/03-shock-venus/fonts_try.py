"""Compare grotesk candidates for the wordmark (caps, SHOCK in red)."""
from pathlib import Path
from geom import *
OUT = Path(__file__).parent / 'explore'

def capheight(font):
    return -text(font, 1000, 'H')['bbox']['y1'] / 1000

def line(font, cap, words, ls, x=0, y=0):
    """words: list of (string, colour). Returns (body, width)."""
    size = cap / capheight(font)
    parts, cx = [], x
    for i, (s, col) in enumerate(words):
        s2 = s + (' ' if i < len(words) - 1 else '')
        t = text(font, size, s2, x=cx, y=y, ls=ls)
        parts.append(f'<path fill="{col}" d="{t["d"]}"/>')
        cx += t['advance'] + size * ls
    last = text(font, size, words[-1][0], x=0, y=0, ls=ls)
    return '\n'.join(parts), cx - size * ls

fonts = ['ArchivoBlack-400', 'BricolageGrotesque-800', 'HankenGrotesk-900', 'SpaceGrotesk-700',
         'SchibstedGrotesk-900', 'Inter-900', 'Epilogue-900', 'Archivo-900']
rows, y, maxw = [], 0, 0
for fnt in fonts:
    body, w = line(fnt, 100, [('CULTURAL', PAL['ink']), ('SHOCK', PAL['red']), ('PARTY', PAL['ink'])], 0.02, y=y + 100)
    rows.append(body); maxw = max(maxw, w); y += 170
(OUT / 'fonts.svg').write_text(svg((-40, -40, maxw + 80, y + 20), '\n'.join(rows)))
print(fonts)
