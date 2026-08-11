# Provenance of public/photos

Recorded 2026-08-07. Every frame is Najath's own photograph.

## Weddings

`wedding-01.jpg` … `wedding-07.jpg` came from pixelparchment.com (the studio site),
fetched server-side with a `Referer: https://www.pixelparchment.com/` header. Those
are Pixieset-hosted and have clean, query-string-free URLs, so they are the easiest
set to re-pull at full size.

## Nature and city

Chosen by the owner from screenshots of his own grids, then matched tile by tile
against the two accounts. Sources are the Instagram **grid tile** renditions, which
are what the logged-in profile page serves (1080 to 1440 px on the long edge, except
where noted). Post URL is `https://www.instagram.com/p/<code>/`.

| Published | Post code | Frame |
|---|---|---|
| `nature-01.jpg` | `BsBa4F1hWTd` | heron on a bare branch in falling rain |
| `nature-02.jpg` | `DB1RCgAxuAS` | pelican with its bill open |
| `nature-03.jpg` | `DRiKetRCW_7` | gulls scattering above sea lions (landscape) |
| `nature-04.jpg` | `DSPSRksjvOw` | sea lions below a misty forest |
| `nature-05.jpg` | `DSownJ8Dmnt` | bald eagle in flight (landscape, see below) |
| `nature-06.jpg` | `DbBZ1HGOaHI` | lake sunrise, canoe at a dock |
| `urban-01.jpg` | `CU0DNSsl3IY` | hot air balloon canopy from below |
| `urban-02.jpg` | `CcS--4HuaQX` | glass towers above a street corner |
| `urban-03.jpg` | `CdUpRRrMAO_` | Chrysler Building at night |
| `urban-04.jpg` | `CgYcYl-sy49` | Brooklyn Bridge arches |
| `urban-05.jpg` | `ChVxf6apW3S` | Manhattan and the bridge at night |
| `urban-06.jpg` | `DBrQ8AzSPyc` | domed state capitol in winter |
| `urban-07.jpg` | `DZq5_GZkYZI` | Istanbul rooftops and mosques (carousel slide 1) |
| `urban-08.jpg` | `DZyhN3ODRMm` | Notre-Dame under scaffolding |
| `urban-09.jpg` | `DZq5_GZkYZI` | mosque interior arcade, worshippers (carousel slide 7) |
| `urban-10.jpg` | `DZq5_GZkYZI` | mosque courtyard and arcade (carousel slide 8) |
| `urban-11.jpg` | `DZq5_GZkYZI` | painted dome ceiling (carousel slide 9) |
| `urban-12.jpg` | `DalUlleIDr4` | CN Tower against an orange sunset (carousel slide 8) |

`nature-05.jpg` is only 832x665, the largest rendition Instagram serves for that
carousel item. It is still about twice the grid cell, so it holds up, but it is the
one frame worth replacing from an original if one turns up.

## Carousel slides (11-12)

`urban-09` through `urban-11` are slides 7, 8, 9 of the 11-slide Turkey post
(`DZq5_GZkYZI`); `urban-12` is slide 8 of the 8-slide Toronto post (`DalUlleIDr4`).
The profile grid only exposes a post's COVER image, not its other slides, so these
needed a different method than the grid harvest above:

1. Open the post directly: `https://www.instagram.com/p/<code>/`.
2. Click the right-arrow to advance slides; each click updates the URL's
   `img_index` query param, which is a reliable confirmation but not itself the
   selector.
3. **The reliable selector**: after a click, the visible slide is always the `img`
   (naturalWidth >= 800) whose bounding rect has `top < 150` and `left` within the
   photo panel's fixed screen column (~545-575px at a 1920px-wide window; verify
   once per session, it can drift a few px). All 5 slides in the load window render
   simultaneously at different `left` offsets, and only that one is the on-screen
   one. A version of this selector is `window.__grab` in the harvest flow below.
4. One important trap: the account's own profile grid can include **reshared posts
   from other accounts** (Instagram shows them inline, no visual marking in the
   grid). A wrong post code here (`DamUhSmDdfN`, a stranger's reel) came from
   exactly this — the fix was reading the tile's real `href` in the DOM
   (`a[href*="/p/"]`) rather than trusting a contact-sheet index from an
   alphabetically-`sort()`ed file listing, which does not match visual scroll order.

## If these need re-pulling

What does NOT work, so nobody repeats it:

- **Server-side fetch of `/p/<code>/embed/captioned/`.** Returns a 610 KB
  JavaScript login shell with no photo URL in it. `scripts/fetch-instagram.mjs`
  (deleted) was built on this and produced nothing but stylesheets.
- **Posting image bytes out of an instagram.com tab.** Its Content-Security-Policy
  forbids connections to localhost. Navigating out is allowed, though, which is
  what the harvest route used.
- **Reading the main image on a post page in a background tab.** It never lays out,
  so it has no `src`, no `naturalWidth`, and no bounding box. Only a real
  screenshot forces it to render. The profile grid tiles do not have this problem.
- **Picking "the largest decoded image on a post page."** The "More posts from"
  strip below the post decodes first, so several posts silently download the same
  file. Pair each tile with its own `a[href*="/p/"]` ancestor instead.

What worked: on the logged-in profile grid, walk `a[href*="/p/"]`, take the `img`
inside each anchor (exact code-to-image pairing), accumulate across real scroll
events, then navigate the tab to a local page with the whole batch in the URL
fragment and let the dev server download each one.
