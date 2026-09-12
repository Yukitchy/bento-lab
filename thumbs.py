#!/usr/bin/env python3
"""Bento Lab LPの17箱カードにサムネ（4:3・文字なしフラットイラスト）を作る。生成部は記事量産PJの blog_thumbs.py を流用。
  python3 thumbs.py [idx ...]   # 指定なし＝無い分だけ。--sheet でコンタクトシートだけ作る
出力: lp/art/thumbs/<idx>.png（原本）→ lp/art/thumbs/<idx>.jpg（480×360）／ sheet.jpg
"""
import sys, pathlib, json
sys.path.insert(0, str(pathlib.Path.home() / "affiliate-kit/factory/seo"))
from blog_thumbs import call, key, STYLE
from PIL import Image, ImageDraw
HERE = pathlib.Path(__file__).parent; OUT = HERE / "art/thumbs"
SCENES = json.loads((HERE / "thumbs_scenes.json").read_text())

def sheet():
    ims = [Image.open(OUT / f"{i}.jpg") for i in range(len(SCENES)) if (OUT / f"{i}.jpg").exists()]
    cols = 4; w, h = 240, 180; rows = -(-len(ims) // cols)
    c = Image.new("RGB", (cols * w, rows * (h + 22)), "white"); d = ImageDraw.Draw(c)
    for n, im in enumerate(ims):
        x, y = (n % cols) * w, (n // cols) * (h + 22); c.paste(im.resize((w, h)), (x, y + 22)); d.text((x + 4, y + 4), str(n), fill="red")
    c.save(OUT / "sheet.jpg", quality=85); print(OUT / "sheet.jpg")

if __name__ == "__main__":
    if "--sheet" in sys.argv: sheet(); sys.exit()
    want = [int(a) for a in sys.argv[1:]] or [i for i in range(len(SCENES)) if not (OUT / f"{i}.jpg").exists()]
    k = key()
    for i in want:
        img = call(k, STYLE + "\n題材: " + SCENES[i], aspect="4:3")
        if not img: print(i, "失敗"); continue
        (OUT / f"{i}.png").write_bytes(img)
        Image.open(OUT / f"{i}.png").convert("RGB").resize((480, 360), Image.LANCZOS).save(OUT / f"{i}.jpg", quality=86, optimize=True); print(i, "ok")
    sheet()
