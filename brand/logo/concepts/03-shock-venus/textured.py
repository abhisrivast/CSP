"""Poster / social version (4:5) with print texture. SVG filters are allowed in this file only."""
from pathlib import Path
from geom import PAL, f, text
from build import lockup_stack, HERE, INK, RED, PAPER

W, H = 1080, 1350
items, bb = lockup_stack()
bw, bh = bb[2] - bb[0], bb[3] - bb[1]
s = (W * 0.62) / bw
tx = W / 2 - (bb[0] + bw / 2) * s
ty = H * 0.47 - (bb[1] + bh / 2) * s

groups = {}
for d, col in items:
    groups.setdefault(col, []).append(d)
logo = '\n'.join(f'<path fill="{c}" d="{" ".join(ds)}"/>' for c, ds in groups.items())

# small clean grotesk captions in the corners, like the reference poster (outlined, not live text)
CF, CS, M = 'SpaceGrotesk-500', 26, 64
def cap(s_, x, y, anchor='start'):
    t = text(CF, CS, s_, x=0, y=0)
    w = t['bbox']['x2']
    x0 = x if anchor == 'start' else x - w
    return text(CF, CS, s_, x=x0, y=y)['d']
caps = ' '.join([
    cap('Cultural Shock Party', M, M + 20),
    cap('culturalshockparty.com', W - M, M + 20, 'end'),
    cap('Feminist ideas into', M, H - M - 36),
    cap('organised political power.', M, H - M),
    cap('The Fourth Wave', W - M, H - M, 'end'),
])

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}">
<title>Cultural Shock Party — poster</title>
<defs>
  <filter id="paper" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.0022 0.003" numOctaves="2" seed="11" result="crumple"/>
    <feDiffuseLighting in="crumple" surfaceScale="1.6" lighting-color="#ffffff" result="lit">
      <feDistantLight azimuth="235" elevation="58"/>
    </feDiffuseLighting>
    <feComponentTransfer in="lit" result="soft">
      <feFuncR type="linear" slope="0.12" intercept="0.895"/>
      <feFuncG type="linear" slope="0.12" intercept="0.895"/>
      <feFuncB type="linear" slope="0.12" intercept="0.895"/>
    </feComponentTransfer>
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="4" result="grain"/>
    <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0.13  0 0 0 0 0.12  0 0 0 0 0.11  0 0 0 -0.5 0.275" result="grainA"/>
    <feBlend in="SourceGraphic" in2="soft" mode="multiply" result="paper"/>
    <feComposite in="grainA" in2="paper" operator="over"/>
  </filter>
  <filter id="print" x="-3%" y="-3%" width="106%" height="106%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="7" result="wobble"/>
    <feDisplacementMap in="SourceGraphic" in2="wobble" scale="4" xChannelSelector="R" yChannelSelector="G" result="rough"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.7 0.22" numOctaves="2" seed="21" result="brush"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="2" seed="5" result="wear"/>
    <feComposite in="brush" in2="wear" operator="arithmetic" k1="0" k2="1" k3="0.55" k4="-0.215" result="mix"/>
    <feColorMatrix in="mix" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -9 0 0 0 6.0" result="streaks"/>
    <feComposite in="rough" in2="streaks" operator="in"/>
  </filter>
</defs>
<rect width="{W}" height="{H}" fill="{PAPER}" filter="url(#paper)"/>
<g filter="url(#print)">
  <g transform="translate({f(tx)} {f(ty)}) scale({s:.5f})">
{logo}
  </g>
</g>
<path fill="{INK}" d="{caps}"/>
</svg>
'''
(HERE / 'textured.svg').write_text(svg)
print('wrote textured.svg')
