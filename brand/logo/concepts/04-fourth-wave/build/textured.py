"""Poster / social tile (4:5) with dry-brush + paper texture. SVG filters are allowed here only."""
import sys
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import build_all as B
from compose import text, PAPER, INK, RED

W, H = 1080, 1350
parts = B.alt_parts()
x0 = min(p[2][0] for p in parts); y0 = min(p[2][1] for p in parts)
x1 = max(p[2][2] for p in parts); y1 = max(p[2][3] for p in parts)
target_w = 760
k = target_w / (x1 - x0)
tx = (W - target_w) / 2 - x0 * k
ty = (H - (y1 - y0) * k) / 2 - y0 * k - 10


def cap(s, x, y, anchor='start', size=24, font='SpaceGrotesk-500', fill=INK, ls=0.02):
    t = text(font, size, s, 0, 0, ls)
    if anchor == 'end':
        x -= t['bbox']['x2']
    t = text(font, size, s, round(x, 2), y, ls)
    return f'<path fill="{fill}" d="{t["d"]}"/>'

M = 64
captions = ''.join([
    cap('The Fourth Wave of Feminism', M, M + 18),
    cap('culturalshockparty.com', W - M, M + 18, 'end'),
    cap('Street politics', M, H - M - 30),
    cap('+ institutional accountability', M, H - M),
    cap('Ideas into organised power', W - M, H - M, 'end'),
])

markp = [p for p in parts if p[3]]          # traced brush mark (evenodd)
typep = [p for p in parts if not p[3]]      # outlined type
g_red = ''.join(f'<path fill="{p[1]}" fill-rule="evenodd" d="{p[0]}"/>' for p in markp)
g_ink = ''.join(f'<path fill="{p[1]}" d="{p[0]}"/>' for p in typep)

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}">
<defs>
  <filter id="paper" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="5" seed="4" result="n"/>
    <feDiffuseLighting in="n" surfaceScale="3" lighting-color="#ffffff" result="light">
      <feDistantLight azimuth="235" elevation="62"/>
    </feDiffuseLighting>
    <feComponentTransfer in="light" result="soft">
      <feFuncR type="linear" slope="0.3" intercept="0.76"/>
      <feFuncG type="linear" slope="0.3" intercept="0.76"/>
      <feFuncB type="linear" slope="0.3" intercept="0.76"/>
    </feComponentTransfer>
    <feBlend in="SourceGraphic" in2="soft" mode="multiply" result="lit"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="9" result="grain"/>
    <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0.35  0 0 0 0 0.3  0 0 0 0 0.26  0 0 0 1.4 -0.66" result="grainA"/>
    <feComposite in="grainA" in2="lit" operator="over" result="g2"/>
    <feComposite in="g2" in2="SourceGraphic" operator="in"/>
  </filter>
  <!-- dry brush: rough edges + sparse streaky voids (units = lockup units, ~0.3px each) -->
  <filter id="dry" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="2" result="warp"/>
    <feDisplacementMap in="SourceGraphic" in2="warp" scale="16" xChannelSelector="R" yChannelSelector="G" result="rough"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.04 0.022" numOctaves="4" seed="7" result="spk"/>
    <feColorMatrix in="spk" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  14 0 0 0 -9.3" result="holes"/>
    <feComposite in="rough" in2="holes" operator="out"/>
  </filter>
  <filter id="press" x="-2%" y="-5%" width="104%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="5" result="w"/>
    <feDisplacementMap in="SourceGraphic" in2="w" scale="5" xChannelSelector="R" yChannelSelector="G" result="r"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="2" seed="3" result="s"/>
    <feColorMatrix in="s" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  16 0 0 0 -11.4" result="h"/>
    <feComposite in="r" in2="h" operator="out"/>
  </filter>
  <filter id="press-px" x="-2%" y="-20%" width="104%" height="140%">
    <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="2" seed="5" result="w"/>
    <feDisplacementMap in="SourceGraphic" in2="w" scale="0.9" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
</defs>
<rect width="{W}" height="{H}" fill="{PAPER}" filter="url(#paper)"/>
<g filter="url(#press-px)">{captions}</g>
<g transform="translate({tx:.2f} {ty:.2f}) scale({k:.5f})">
  <g filter="url(#press)">{g_ink}</g>
  <g filter="url(#dry)">{g_red}</g>
</g>
</svg>
'''
open(B.OUT + 'textured.svg', 'w').write(svg)
print('wrote textured.svg', len(svg) // 1024, 'KB')
