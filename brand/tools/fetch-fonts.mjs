// Downloads static TTF instances from the Google Fonts CSS2 API into ../fonts.
// All Google Fonts are SIL OFL / Apache licensed, so outlining them in a logo is allowed.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'fonts');

// [family, css2 axis spec]
const FAMILIES = [
  // brush, marker, hand-lettered
  ['Permanent Marker'], ['Caveat Brush'], ['Kaushan Script'], ['Rock Salt'],
  ['Sedgwick Ave Display'], ['Sedgwick Ave'], ['Marck Script'], ['Yellowtail'],
  ['Nanum Brush Script'], ['Gochi Hand'], ['Covered By Your Grace'], ['Knewave'],
  ['Mansalva'], ['Mr Dafoe'], ['Damion'], ['Water Brush'], ['Splash'],
  ['Rubik Dirt'], ['Rubik Spray Paint'], ['Rubik Wet Paint'], ['Rubik Distressed'],
  ['Kalam', 'wght@400;700'], ['Caveat', 'wght@400;700'], ['Reenie Beanie'],
  ['Homemade Apple'], ['Zeyada'], ['Sriracha'], ['Shadows Into Light'],
  ['Just Another Hand'], ['Londrina Solid', 'wght@400;900'], ['Amatic SC', 'wght@400;700'],
  ['Cabin Sketch', 'wght@400;700'], ['Gloria Hallelujah'], ['Patrick Hand'],
  // grotesk + display sans
  ['Space Grotesk', 'wght@400;500;700'], ['Inter', 'wght@400;600;800;900'],
  ['Archivo Black'], ['Archivo', 'wght@400;700;900'], ['Anton'], ['Bebas Neue'],
  ['Oswald', 'wght@500;700'], ['Big Shoulders Display', 'wght@700;900'],
  ['DM Sans', 'wght@400;700'], ['Space Mono', 'wght@400;700'], ['Rubik Mono One'],
  ['Dela Gothic One'], ['Bowlby One'], ['Climate Crisis'], ['Syne', 'wght@700;800'],
  ['Unbounded', 'wght@700;900'], ['Familjen Grotesk', 'wght@700'],
  ['Bricolage Grotesque', 'wght@400;700;800'], ['Instrument Sans', 'wght@400;700'],
  ['Schibsted Grotesk', 'wght@700;900'], ['Hanken Grotesk', 'wght@400;800;900'],
  ['Darker Grotesque', 'wght@900'], ['Epilogue', 'wght@800;900'], ['Sora', 'wght@800'],
  ['Manrope', 'wght@800'],
  // stencil
  ['Saira Stencil One'], ['Big Shoulders Stencil Display', 'wght@900'],
  ['Stardos Stencil', 'wght@700'], ['Allerta Stencil'],
  // serif
  ['Instrument Serif', 'ital@0;1'], ['DM Serif Display', 'ital@0;1'],
  ['Fraunces', 'ital,wght@0,700;0,900;1,700;1,900'], ['Playfair Display', 'wght@900'],
  ['Abril Fatface'], ['Bodoni Moda', 'wght@700'], ['Young Serif'], ['Gloock'], ['Rozha One'],
];

await mkdir(OUT, { recursive: true });
let ok = 0, failed = [];
for (const [family, axes] of FAMILIES) {
  const q = family.replace(/ /g, '+') + (axes ? ':' + axes : '');
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${q}`)).text();
    const faces = [...css.matchAll(/font-style:\s*(\w+);\s*font-weight:\s*(\d+);[^}]*?url\((https:[^)]+\.ttf)\)/g)];
    if (!faces.length) throw new Error('no ttf faces in css');
    for (const [, style, weight, url] of faces) {
      const name = `${family.replace(/ /g, '')}-${weight}${style === 'italic' ? 'Italic' : ''}.ttf`;
      const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
      await writeFile(join(OUT, name), buf);
      ok++;
    }
  } catch (e) {
    failed.push(`${family}: ${e.message}`);
  }
}
console.log(`downloaded ${ok} font files to ${OUT}`);
if (failed.length) console.log('failed:\n  ' + failed.join('\n  '));
