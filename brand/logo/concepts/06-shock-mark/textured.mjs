// textured.svg — poster / social version (v2): the '!' sprayed big through its stencil onto crumpled
// paper, with the name stacked under it. SVG filters are allowed in this file only. Type is outlined.
// No captions: the v1 corner slogans were unapproved copy.
// Also writes mark-sprayed.png (a crop of the sprayed mark) for the presentation.
import { execFileSync } from 'node:child_process';
import { MARK, placeMark, CAP } from './build.mjs';
import { sword } from './type.mjs';
import { C, xform, T, write, TOOLS } from './lib.mjs';

const OUT = new URL('./', import.meta.url).pathname;
const W = 1200, H = 1500;
// the mark: 700 tall, centred
const mh = 700;
const mk = placeMark(MARK, { x: 0, top: 150, h: mh });
const mdx = W / 2 - (mk.bbox.x1 + mk.bbox.x2) / 2;
const red = [], ink = [];
mk.pieces.forEach(d => red.push(xform(d, T(mdx, 0))));
// the name, two centred lines, justified to the same width
const width = 820, ls = 0.02;
const l1 = sword('CULTURAL', 100, { ls }), l2 = sword('SHOCK PARTY', 100, { ls });
const s2 = 100 * width / l2.bbox.w, s1 = s2;            // same size: ink over red, like the primary
const cap = s2 * CAP;
const y1 = 150 + mh + 150 + cap, y2 = y1 + cap * 1.15;
const a = sword('CULTURAL', s1, { ls });
ink.push(sword('CULTURAL', s1, { ls, x: W / 2 - (a.bbox.x1 + a.bbox.x2) / 2, y: y1 }).d);
const b = sword('SHOCK PARTY', s2, { ls });
let x = W / 2 - (b.bbox.x1 + b.bbox.x2) / 2;
red.push(sword('SHOCK', s2, { ls, x, y: y2 }).d);
x += sword('SHOCK ', s2, { ls }).advance + ls * s2;
ink.push(sword('PARTY', s2, { ls, x, y: y2 }).d);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Cultural Shock Party — sprayed poster">
  <title>Cultural Shock Party — sprayed poster</title>
  <defs>
    <!-- crumpled paper: low-frequency noise lit from the top left -->
    <filter id="crumple" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.0035 0.005" numOctaves="5" seed="7" result="n"/>
      <feDiffuseLighting in="n" surfaceScale="5" lighting-color="#ffffff" diffuseConstant="1.05" result="lit">
        <feDistantLight azimuth="225" elevation="58"/>
      </feDiffuseLighting>
      <feColorMatrix in="lit" type="matrix" values="0 0 0 0 0.13  0 0 0 0 0.12  0 0 0 0 0.11  -0.42 0 0 0 0.38" result="shade"/>
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="2" result="grain"/>
      <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0.2  0 0 0 0 0.17  0 0 0 0 0.12  0 0 0 0.07 0" result="grainA"/>
      <feMerge><feMergeNode in="shade"/><feMergeNode in="grainA"/></feMerge>
    </filter>
    <!-- spray paint through a stencil: rough edge, paint drop-outs, wide overspray mist -->
    <filter id="spray" x="-12%" y="-8%" width="124%" height="116%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="4" result="edgeN"/>
      <feDisplacementMap in="SourceGraphic" in2="edgeN" scale="3.6" xChannelSelector="R" yChannelSelector="G" result="rough"/>
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="9" result="patchN"/>
      <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="1" seed="12" result="dotN"/>
      <feComposite in="patchN" in2="dotN" operator="arithmetic" k1="0" k2="0.55" k3="0.75" k4="0" result="mix"/>
      <feColorMatrix in="mix" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -7 0 0 0 5.15" result="keep"/>
      <feComposite in="rough" in2="keep" operator="in" result="paint"/>
      <feGaussianBlur in="SourceGraphic" stdDeviation="17" result="halo"/>
      <feColorMatrix in="dotN" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  9 0 0 0 -4.45" result="speck"/>
      <feComposite in="halo" in2="speck" operator="in" result="mist0"/>
      <feComponentTransfer in="mist0" result="mist"><feFuncA type="linear" slope="1"/></feComponentTransfer>
      <feMerge><feMergeNode in="mist"/><feMergeNode in="paint"/></feMerge>
    </filter>
    <filter id="spray-type" x="-4%" y="-20%" width="108%" height="140%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="5" result="edgeN"/>
      <feDisplacementMap in="SourceGraphic" in2="edgeN" scale="2.6" xChannelSelector="R" yChannelSelector="G" result="rough"/>
      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="3" result="patchN"/>
      <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="1" seed="8" result="dotN"/>
      <feComposite in="patchN" in2="dotN" operator="arithmetic" k1="0" k2="0.55" k3="0.75" k4="0" result="mix"/>
      <feColorMatrix in="mix" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -7 0 0 0 5.25" result="keep"/>
      <feComposite in="rough" in2="keep" operator="in" result="paint"/>
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="halo"/>
      <feColorMatrix in="dotN" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  9 0 0 0 -4.9" result="speck"/>
      <feComposite in="halo" in2="speck" operator="in" result="mist0"/>
      <feComponentTransfer in="mist0" result="mist"><feFuncA type="linear" slope="0.7"/></feComponentTransfer>
      <feMerge><feMergeNode in="mist"/><feMergeNode in="paint"/></feMerge>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="${C.paper}"/>
  <rect width="${W}" height="${H}" fill="${C.paper}" filter="url(#crumple)"/>
  <path fill="${C.red}" filter="url(#spray)" d="${red[0] + red.slice(1, mk.pieces.length).join('')}"/>
  <g filter="url(#spray-type)">
    <path fill="${C.ink}" d="${ink.join('')}"/>
    <path fill="${C.red}" d="${red.slice(mk.pieces.length).join('')}"/>
  </g>
</svg>
`;
write(OUT + 'textured.svg', svg);
execFileSync('node', [`${TOOLS}/render.mjs`, OUT + 'textured.svg', OUT + 'textured.png', '--width', '900']);
// textured.png: 900 wide + 54px padding each side (render.mjs pads 6%); scale = 0.75
const k = 900 / W, pad = Math.round(900 * 0.06);
const side = Math.round(mh * 1.22 * k), cx = pad + W / 2 * k, cy = pad + (150 + mh / 2) * k;
execFileSync('magick', [OUT + 'textured.png', '-crop', `${side}x${side}+${Math.round(cx - side / 2)}+${Math.round(cy - side / 2)}`, '+repage', OUT + 'mark-sprayed.png']);
console.log('wrote textured.svg, textured.png, mark-sprayed.png');
