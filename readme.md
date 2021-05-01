# niceramps
a color ramp generator for design systems

## how it works

the two main ways of mixing colors are to treat colors like paint or like ink.

to get a ramp of lightess values, you can either mix with white or black paint like so:

or vary the concentration of ink like so:

the results of either don't look too pleasing, but a combination of the two methods looks perfect:

## functions
```js
const {colorAtLightness, ramp, tailwindRamp} = require("niceramps");
colorAtLightness(hex, lightness, options)
ramp(hex, options)
tailwindRamp(hex, options)
```

`tailwindRamp()` generates colors for tailwindcss' naming convention
<https://tailwindcss.com/docs/customizing-colors>


## options

all options are optional, by default 10 colors are generated with 40% ink and 60% paint

```js
{
	increment: 10,
//     distance between shades
//     0 is black and 100 is white

	saturation: 0.4,
//     0 is pure paint
//     1 is pure ink
}
```

## cli

this package includes a command line utility in cli.js
### usage

```sh
./cli.js '#d972d6' --increment=10 --saturation=1
```

add the `-t` flag to generate tailwindcss colors
