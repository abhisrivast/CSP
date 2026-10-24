#!/bin/zsh
# Re-render every deliverable PNG for this concept.
cd "$(dirname "$0")"
R=/Users/Abhi/Developer/CSP/brand/tools/render.mjs
node $R primary.svg primary.png --width 1400 &
node $R primary.svg primary-sheet.png --sheet &
node $R alt.svg alt.png --width 900 &
node $R alt.svg alt-sheet.png --sheet &
node $R mark.svg mark-sheet.png --sheet &
node $R mark-favicon.svg mark-favicon-sheet.png --sheet &
wait
node $R reverse.svg reverse.png --width 1400 --bg '#221F1D' &
node $R alt-reverse.svg alt-reverse.png --width 900 --bg '#221F1D' &
node $R mark-reverse.svg mark-reverse.png --width 500 --bg '#221F1D' &
node $R mono.svg mono.png --width 1400 &
node $R alt-mono.svg alt-mono.png --width 900 &
node $R mark-mono.svg mark-mono.png --width 500 &
node $R textured.svg textured.png --width 1000 &
wait
node $R primary.svg,alt.svg,mark.svg,mark-favicon.svg overview.png --grid
