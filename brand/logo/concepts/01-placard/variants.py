"""Exploration variants for the v2 critique pass (writes into work2/)."""


def run(G, work):
    M, P, H, FAV = G['M'], G['P'], G['H'], G['FAV']
    mark_svg, placard_svg, header_svg, write = G['mark_svg'], G['placard_svg'], G['header_svg'], G['write']
    PAPER, CARD, CRIMSON, RED = G['PAPER'], G['CARD'], G['CRIMSON'], G['RED']
    # mark colour / contrast options
    write('m-a-card-red.svg', mark_svg(dict(M, keyline=0)), work)
    write('m-b-card-red-key.svg', mark_svg(M), work)
    write('m-c-card-red-key6.svg', mark_svg(dict(M, keyline=6.0)), work)
    write('m-d-paper-rim.svg', mark_svg(dict(M, keyline=0, board=PAPER, rim=7.0)), work)
    write('m-e-card-crimson.svg', mark_svg(dict(M, keyline=0, s_color=CRIMSON)), work)
    write('m-fav.svg', mark_svg(FAV, pad=0.04), work)
    # placard underline modes with the venus O
    for mode, gap, uly in (('single', 150, 84), ('double', 178, 84), ('none', 110, 0)):
        write(f'p-{mode}.svg', placard_svg(dict(P, ul=mode, line_gap=(48, gap), ul_y=uly)), work)
    write('h-primary.svg', header_svg(H), work)


def run_key(G, work):
    P, placard_svg, write = G['P'], G['placard_svg'], G['write']
    for k in (0, 3.5, 5.0):
        write(f'pk-{k}.svg', placard_svg(dict(P, key=k)), work)
