# 256 Color Matcher

This is a simple web app written in pure HTML, CSS and JS for finding the closest matching standard 256 color from a given input color. This is useful if you're styling e.g. `xterm` and need to find the closest color in the palette.

## Features

[x] Pure HTML, CSS and JS — no frameworks
[x] `Hex` and `RGB` modes (updates color texts and inputs)
[x] `18kb` bundle size
[x] 3 `npm` dependencies
[x] Bundled with `webpack`
[x] Tests for all non-vendor library modules (`jest`)

## Building / testing / running

- Build: `yarn && yarn build`
- Test: `yarn && yarn test` (or `test:watch`)
- Serve: `yarn && yarn build && npx serve dist/`
