// Build-time Open Graph images (1200×630 PNG) in the poster style: paper ground, giant condensed title,
// red footer bar, the badge. Rendered with satori → resvg; no runtime cost.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const root = process.cwd();
const font = (f: string) => readFileSync(join(root, 'src/assets/og-fonts', f));
const FONTS = [
  { name: 'Display', data: font('archivo-xcond-black.ttf'), weight: 900 as const, style: 'normal' as const },
  { name: 'Sans', data: font('archivo-600.ttf'), weight: 600 as const, style: 'normal' as const },
  { name: 'Hand', data: font('caveat-brush.ttf'), weight: 400 as const, style: 'normal' as const },
];
const BADGE = `data:image/jpeg;base64,${readFileSync(join(root, 'public/brand/csp-badge-512.jpg')).toString('base64')}`;

export type OgInput = { title: string; label?: string; note?: string };

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

function titleSize(t: string) {
  const n = t.length;
  return n <= 18 ? 150 : n <= 32 ? 124 : n <= 52 ? 100 : n <= 80 ? 82 : 68;
}

export async function ogPng({ title, label = 'Fourth Wave feminist movement', note = 'Hope first. Receipts always.' }: OgInput) {
  const tree = h('div', { width: 1200, height: 630, display: 'flex', flexDirection: 'column', background: '#F3ECDC', position: 'relative' }, [
    h('div', { display: 'flex', flex: 1, padding: '56px 64px 0 64px', gap: 40 }, [
      h('div', { display: 'flex', flexDirection: 'column', flex: 1, gap: 22 }, [
        h('div', { display: 'flex', fontFamily: 'Sans', fontSize: 24, letterSpacing: 4, textTransform: 'uppercase', color: '#B3261E', borderTop: '5px solid #1D1C18', paddingTop: 14 }, label),
        h('div', { display: 'flex', fontFamily: 'Display', fontSize: titleSize(title), lineHeight: 0.86, textTransform: 'uppercase', color: '#1D1C18', letterSpacing: -1 }, title),
      ]),
      h('div', { display: 'flex', flexDirection: 'column', alignItems: 'center', width: 300, gap: 26 }, [
        { type: 'img', props: { src: BADGE, width: 280, height: 280, style: { transform: 'rotate(5deg)' } } },
        h('div', { display: 'flex', fontFamily: 'Hand', fontSize: 34, color: '#1D1C18', background: '#F1B362', padding: '8px 18px 4px', transform: 'rotate(-4deg)' }, note),
      ]),
    ]),
    h('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 86, padding: '0 64px', background: '#B3261E', color: '#FBF7EE', borderTop: '5px solid #1D1C18' }, [
      h('div', { display: 'flex', fontFamily: 'Display', fontSize: 46, textTransform: 'uppercase', letterSpacing: 1 }, 'Cultural Shock Party'),
      h('div', { display: 'flex', fontFamily: 'Sans', fontSize: 22, letterSpacing: 3, textTransform: 'uppercase' }, 'culturalshockparty.com'),
    ]),
  ]);
  // satori's types expect ReactNode; the plain-object tree is the documented non-JSX form.
  const svg = await satori(tree as any, { width: 1200, height: 630, fonts: FONTS });
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}
