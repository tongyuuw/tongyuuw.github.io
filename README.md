# Tongyu(Tory) Wang - research homepage

This repository contains the static GitHub Pages site for Tongyu(Tory) Wang. The public homepage is intentionally focused on research experience and research outputs. The legacy Academic Pages template files remain in the repository for reference, but `.nojekyll` makes the deployed site use the static `index.html` and `cv.html` files.

## Local preview

From the repository root:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Adding project media

Each research entry in `index.html` has a `data-project-media` container. The containers use these stable identifiers:

- `continuum-force-sensing`
- `ruggedized-wrist`
- `magnetic-robot-sim2real`
- `active-drops`
- `gravity-energy-storage`

Place new files in `images/research/`, then add a `figure` inside the matching container. Images can use the existing `research-figure` class. Videos can use this structure:

```html
<figure class="research-video-figure">
  <video controls preload="metadata" poster="images/research/project-poster.jpg">
    <source src="files/project-demo.mp4" type="video/mp4">
  </video>
  <figcaption>Short description of the experiment.</figcaption>
</figure>
```

The CSS already handles one or several media items and keeps the layout responsive. Empty containers stay hidden until media is added.

## Content notes

- `index.html` is the research-focused homepage.
- `cv.html` is the public web CV. PDF download is intentionally disabled until an updated CV with the corrected patent count is available.
- Three patent outputs are listed under `Publications` and are explicitly labeled as patent records rather than peer-reviewed papers.
- `images/tongyu-wang.png` is the profile image currently used on the homepage.
