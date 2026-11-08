# Book artwork sources

The original `elysia.webp` and `cyrene.webp` character illustrations are existing game artwork, not AI-generated project assets. Copyright belongs to HoYoverse / miHoYo and the respective rights holders. The files are mirrored locally for this design preview; no ownership or commercial redistribution license is claimed. User-supplied wallpapers are documented separately below and are not represented as official game assets.

| Local file | Character | Source page | Downloaded image |
| --- | --- | --- | --- |
| `elysia.webp` | Elysia — Herrscher of Human: Ego, Honkai Impact 3rd | https://marisaimpact.com/valk/hoh | https://marisaimpact.com/images/valkfull/hoh.webp |
| `cyrene.webp` | Cyrene, Honkai: Star Rail | https://www.icy-veins.com/honkai-star-rail/cyrene-profile | https://static.icy-veins.com/images/honkai-star-rail/characters/full/cyrene.webp |

Retrieved 2026-10-30; originals retained without image manipulation. CSS controls layout and scaling. Source links are also displayed below the artwork. Publication/reuse rights for the eventual commercial services site remain to be checked before deployment.

## Animation requested by the user

- Pin: https://www.pinterest.com/pin/940900547163181564/
- Local video: `pinterest-loop.mp4`, 1,216,460 bytes, 6.72 seconds, looped/muted inline.
- Video URL found in the public pin HTML: https://v1.pinimg.com/videos/iht/expMp4/23/4a/6f/234a6f40901754b583c1294aee5ddc9c_720w.mp4
- Local poster: `pinterest-loop-poster.jpg`, 107,345 bytes.
- Poster URL from pin metadata: https://i.pinimg.com/736x/9d/a3/20/9da320056762d24d15476c42d53ad5a6.jpg
- Retrieved 2026-10-30 without transcoding or image generation. Pinterest's MP4 rendition is used rather than a GIF container. The original artist/animator and commercial reuse license have not been verified; the Pinterest uploader is not assumed to own the artwork. This clip is not represented as an official HoYoverse asset.
- Shown on Cyrene's chapter illustration pages (Services and ToS). A source link appears below the video. Pause/resume stops both clip playback and ambient petals; reduced-motion preference prevents automatic playback.

The cover medallion, borders, page-turn effects and new starry/ruins/water backdrop are code-drawn SVG/CSS inspired by the user's Amphoreus screenshots. No in-game screenshot, UID or game HUD is used as a website background. No image-generation tool was used for this update.

`metal-corner.svg` is a project-authored decorative vector inspired by the metal corner mounts in those screenshots. It is drawn in SVG and mirrored with CSS, not extracted from a game image. The two hardcover boards, spine, paper edges and fold lighting are CSS; no AI-generated raster image is used.

`cover-relief.svg` and the expanded `AstralSeal` React SVG are project-authored front-cover decorations: silver arches, edge engravings, moon phases and orbital rings. They are code-drawn interpretations of the user's references, not ripped game assets or generated raster images.

## Wallpapers supplied by the user — 2026-11-08

The original JPEGs remain untouched in `public/img/`. The filenames mention WallpaperFlare, but no exact source page or commercial reuse license was supplied or inferred. User provenance is recorded here rather than shown as a generic caption in the book; visible captions retain the available artist signatures. No ownership or permission to redistribute commercially is asserted.

- `wallpaperflare.com_wallpaper (2).jpg` (3840×2400): smiling Elysia artwork, original artist not verified. Used for About. Derivatives: `art_elysia_smile_main_640.webp` and `art_elysia_smile_main_1280.webp`.
- `wallpaperflare.com_wallpaper.jpg` (2568×1280): blue flag above clouds; visible signature reads “Art by: Iriza_katou”. Artist identity/source/rights have not been independently verified. Used for Contact. Derivatives: `art_blue_flag_main_640.webp` and `art_blue_flag_main_1280.webp`.
- `wallpaperflare.com_wallpaper (1).jpg` (4096×2158): blue chess scene; visible signature reads “ILLUSTRATION BY Ui”. Artist identity/source/rights have not been independently verified. Used for ToS. Derivatives: `art_blue_chess_main_640.webp` and `art_blue_chess_main_1280.webp`.

Derivatives preserve the full compositions and visible signatures: EXIF orientation correction, proportional resize and WebP encoding only; no cropping, generative editing or watermark removal. `scripts/prepare-book-images.py` reproduces them using Pillow (quality 82, method 6). Pillow is needed only to regenerate these committed assets, not for the website or normal Vite builds. The six derivatives total 327,270 bytes; the largest is 143,786 bytes. Services keeps the existing Cyrene clip.
