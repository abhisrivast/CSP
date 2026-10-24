# Cultural Shock Party — logo brief

## Who
Cultural Shock Party (CSP) — culturalshockparty.com — is an emerging political-cultural feminist movement
building a new political era for feminism. It seeks to shape the intellectual and political foundations of
what it calls the **Fourth Wave of Feminism**. Its work connects feminist politics, political research,
public memory, digital culture and media with collective action. Through **street politics and institutional
accountability**, it aims to turn feminist ideas into **organised political power**.

Personality: defiant, joyful, intelligent, collective, loud, handmade-but-serious. A movement, not a charity.
Not corporate, not pastel, not "girlboss". It must feel credible as a political force (it says "Party")
while staying rooted in protest culture.

## Inspiration (see `_reference/inspiration.png`)
A Women's Day protest poster: crumpled cream paper ground; huge red dry-brush script ("Women") under a black
dry-brush script ("Empowering") with a long swash underline; a collage of protest photos with flat duotone
overlays in red, signal green and electric blue; cardboard placards hand-lettered in black marker caps;
small clean grotesk captions in the corners; a marigold script date. Raw, collaged, energetic, analog-meets-digital.

## Palette (sampled from the poster)
| token | hex | use |
|---|---|---|
| paper | `#F6EEDD` | primary ground (cream) |
| ink | `#221F1D` | warm near-black — type, marks |
| protest red | `#CB3932` | primary brand colour |
| crimson | `#A9233A` | deep red / duotone shadow |
| plum | `#602048` | darkest duotone tone |
| signal green | `#36B024` | accent (sparingly) |
| electric blue | `#1F92B2` | accent (sparingly) |
| marigold | `#F1B362` | accent / highlight |
| cardboard | `#B49073` | placard tan (`#966C52` darker) |

The core logo should live in **red + ink on paper**. Green / blue / marigold are accents for the system,
not required in the mark.

## Toolkit (already installed — use it)
All paths relative to `/Users/Abhi/Developer/CSP/brand/`.
- `fonts/` — ~100 static TTFs from Google Fonts (all OFL/Apache: fine to outline in a logo). Specimens of every
  face: `logo/_reference/font-specimen-{1..4}.png` (look at these before choosing type).
  Good brush/marker candidates: MrDafoe, Knewave, KaushanScript, CaveatBrush, PermanentMarker, Mansalva,
  NanumBrushScript, Yellowtail, SedgwickAveDisplay, Splash, WaterBrush. Grotesks: SpaceGrotesk, Archivo, Inter,
  BricolageGrotesque, HankenGrotesk, Anton, BigShouldersDisplay. Serifs: Fraunces, InstrumentSerif, DMSerifDisplay.
  Stencil: SairaStencilOne, BigShouldersStencilDisplay, StardosStencil.
- `node tools/textpath.mjs <FontFile-weight> <sizePx> "<text>" [--x n --y n --ls em] [--svg out.svg --fill #hex]`
  → JSON `{d, bbox, advance, ...}`: real outlined glyph paths with kerning. Compose these `d` strings into your SVG.
  Example: `node tools/textpath.mjs SpaceGrotesk-700 64 "PARTY" --ls 0.12`
- `node tools/render.mjs in.svg out.png [--width 800 --bg #F6EEDD]` — headless-Chrome render. Then **look at the PNG
  with the Read tool**.
- `node tools/render.mjs in.svg out.png --sheet` — contact sheet: large on paper / ink / red, plus 16–128px tall
  renders on paper / white / ink. Use it for every mark and lockup.
- `node tools/render.mjs a.svg,b.svg out.png --grid` — side-by-side comparison.
- Python 3.12, Node 24 and ImageMagick (`magick`) are available for any geometry scripting you want
  (e.g. generating hand-drawn-looking paths, offsetting, or bolt geometry). Write helper scripts inside your own
  concept folder, not in `tools/`.

## Deliverables per concept — folder `logo/concepts/<id>/`
| file | what |
|---|---|
| `primary.svg` | primary lockup (symbol/monogram + "Cultural Shock Party"), full colour for a paper ground |
| `alt.svg` | alternate lockup (stacked if primary is horizontal, or vice versa) |
| `mark.svg` | standalone symbol / monogram, square viewBox, must read at 32px (favicon / avatar) |
| `reverse.svg` | primary lockup recoloured for an ink (`#221F1D`) ground |
| `mono.svg` | primary lockup in a single colour (ink) — for stamps, stencils, fax, newsprint |
| `textured.svg` | *(optional)* poster/social version with dry-brush or print texture (SVG filters allowed here only) |
| `*.png` | your renders (at least `primary.png`, `mark-sheet.png`, `primary-sheet.png`) |
| `concept.json` | see schema in your task prompt |

### Hard rules for the master SVGs (everything except `textured.svg`)
- Pure flat vector: `<path>`, `<rect>`, `<circle>`, `<polygon>`, `<g>` with fills. **No `<text>`**, no web fonts,
  no `<image>`, no filters, no masks with raster, no external references. All type outlined via `textpath.mjs`.
- Tight `viewBox` with even breathing room (≈5–8% padding). No background rect (transparent) — except where a
  shape is intrinsic to the mark (e.g. a placard or badge).
- Only palette colours.
- The full name is "Cultural Shock Party". You may emphasise "Shock" or "Party" typographically. The short form
  "CSP" may appear in the mark.
- Must hold up: wordmark legible at 28px tall in a website header; mark legible at 32px and 16px (favicon).

### Avoid (unfortunate or taken associations)
- A lightning bolt **inside a circle** (British Union of Fascists "flash and circle"; Singapore's People's Action
  Party). Double bolts / sig-rune shapes (SS). Anything that rotates into a swastika-like form.
- Copying the red lightning bolt of Poland's Strajk Kobiet as-is (a bolt *idea* is fine; their exact mark is not).
- Close resemblance to existing party symbols — e.g. Indian election symbols (hand, lotus, broom, elephant,
  bicycle, hammer-sickle, etc.), Labour rose, US donkey/elephant.
- Cliché-only answers: a plain Venus ♀ with a fist inside, a generic pink palette, a plain megaphone icon.
- Ransom-note styles that read as threatening rather than playful/political.

## Quality bar
Look at your renders like a senior identity designer would. Iterate at least 3 times on what you see:
balance, optical kerning, stroke weight consistency, how the mark sits next to the wordmark, small-size legibility,
whether it still feels like the poster. Prefer one excellent idea, executed with real craft, over many weak ones.
