const namedColors = {
	aliceblue: "#f0f8ff",
	antiquewhite: "#faebd7",
	aqua: "#00ffff",
	aquamarine: "#7fffd4",
	azure: "#f0ffff",
	beige: "#f5f5dc",
	bisque: "#ffe4c4",
	black: "#000000",
	blanchedalmond: "#ffebcd",
	blue: "#0000ff",
	blueviolet: "#8a2be2",
	brown: "#a52a2a",
	burlywood: "#deb887",
	cadetblue: "#5f9ea0",
	chartreuse: "#7fff00",
	chocolate: "#d2691e",
	coral: "#ff7f50",
	cornflowerblue: "#6495ed",
	cornsilk: "#fff8dc",
	crimson: "#dc143c",
	cyan: "#00ffff",
	darkblue: "#00008b",
	darkcyan: "#008b8b",
	darkgoldenrod: "#b8860b",
	darkgray: "#a9a9a9",
	darkgreen: "#006400",
	darkgrey: "#a9a9a9",
	darkkhaki: "#bdb76b",
	darkmagenta: "#8b008b",
	darkolivegreen: "#556b2f",
	darkorange: "#ff8c00",
	darkorchid: "#9932cc",
	darkred: "#8b0000",
	darksalmon: "#e9967a",
	darkseagreen: "#8fbc8f",
	darkslateblue: "#483d8b",
	darkslategray: "#2f4f4f",
	darkslategrey: "#2f4f4f",
	darkturquoise: "#00ced1",
	darkviolet: "#9400d3",
	deeppink: "#ff1493",
	deepskyblue: "#00bfff",
	dimgray: "#696969",
	dimgrey: "#696969",
	dodgerblue: "#1e90ff",
	firebrick: "#b22222",
	floralwhite: "#fffaf0",
	forestgreen: "#228b22",
	fuchsia: "#ff00ff",
	gainsboro: "#dcdcdc",
	ghostwhite: "#f8f8ff",
	goldenrod: "#daa520",
	gold: "#ffd700",
	gray: "#808080",
	green: "#008000",
	greenyellow: "#adff2f",
	grey: "#808080",
	honeydew: "#f0fff0",
	hotpink: "#ff69b4",
	indianred: "#cd5c5c",
	indigo: "#4b0082",
	ivory: "#fffff0",
	khaki: "#f0e68c",
	lavenderblush: "#fff0f5",
	lavender: "#e6e6fa",
	lawngreen: "#7cfc00",
	lemonchiffon: "#fffacd",
	lightblue: "#add8e6",
	lightcoral: "#f08080",
	lightcyan: "#e0ffff",
	lightgoldenrodyellow: "#fafad2",
	lightgray: "#d3d3d3",
	lightgreen: "#90ee90",
	lightgrey: "#d3d3d3",
	lightpink: "#ffb6c1",
	lightsalmon: "#ffa07a",
	lightseagreen: "#20b2aa",
	lightskyblue: "#87cefa",
	lightslategray: "#778899",
	lightslategrey: "#778899",
	lightsteelblue: "#b0c4de",
	lightyellow: "#ffffe0",
	lime: "#00ff00",
	limegreen: "#32cd32",
	linen: "#faf0e6",
	magenta: "#ff00ff",
	maroon: "#800000",
	mediumaquamarine: "#66cdaa",
	mediumblue: "#0000cd",
	mediumorchid: "#ba55d3",
	mediumpurple: "#9370db",
	mediumseagreen: "#3cb371",
	mediumslateblue: "#7b68ee",
	mediumspringgreen: "#00fa9a",
	mediumturquoise: "#48d1cc",
	mediumvioletred: "#c71585",
	midnightblue: "#191970",
	mintcream: "#f5fffa",
	mistyrose: "#ffe4e1",
	moccasin: "#ffe4b5",
	navajowhite: "#ffdead",
	navy: "#000080",
	oldlace: "#fdf5e6",
	olive: "#808000",
	olivedrab: "#6b8e23",
	orange: "#ffa500",
	orangered: "#ff4500",
	orchid: "#da70d6",
	palegoldenrod: "#eee8aa",
	palegreen: "#98fb98",
	paleturquoise: "#afeeee",
	palevioletred: "#db7093",
	papayawhip: "#ffefd5",
	peachpuff: "#ffdab9",
	peru: "#cd853f",
	pink: "#ffc0cb",
	plum: "#dda0dd",
	powderblue: "#b0e0e6",
	purple: "#800080",
	rebeccapurple: "#663399",
	red: "#ff0000",
	rosybrown: "#bc8f8f",
	royalblue: "#4169e1",
	saddlebrown: "#8b4513",
	salmon: "#fa8072",
	sandybrown: "#f4a460",
	seagreen: "#2e8b57",
	seashell: "#fff5ee",
	sienna: "#a0522d",
	silver: "#c0c0c0",
	skyblue: "#87ceeb",
	slateblue: "#6a5acd",
	slategray: "#708090",
	slategrey: "#708090",
	snow: "#fffafa",
	springgreen: "#00ff7f",
	steelblue: "#4682b4",
	tan: "#d2b48c",
	teal: "#008080",
	thistle: "#d8bfd8",
	tomato: "#ff6347",
	turquoise: "#40e0d0",
	violet: "#ee82ee",
	wheat: "#f5deb3",
	white: "#ffffff",
	whitesmoke: "#f5f5f5",
	yellow: "#ffff00",
	yellowgreen: "#9acd32",
};

const white = [1, 1, 1];
const black = [0, 0, 0];

const toGamma = (a) => {
	return 0.0031308 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - 0.055;
};
const toLinear = (a) => {
	return 0.04045 < a ? Math.pow((a + 0.055) / 1.055, 2.4) : a / 12.92;
};
const clamp = (n, min, max) => {
	return Math.min(Math.max(n, min), max);
};

const rgbToHex = (linear) => {
	const gamma = linear.map(toGamma);
	return (
		"#" +
		gamma
			.map((c) =>
				clamp(Math.round(c * 255), 0, 255) // safety
					.toString(16)
					.padStart(2, "0")
			)
			.join("")
	);
};

const hexToRgb = (hex) => {
	if (hex in namedColors) hex = namedColors[hex];
	hex = Number(hex.replace("#", "0x"));
	return [hex >> 16, hex >> 8, hex].map((c) => toLinear((c & 0xff) / 255));
};

const termColorString = (hex, string) => {
	const luma = toGamma(getLuma(hexToRgb(hex)));
	const textColor = luma < 0.5 ? `\x1b[38;5;231m` : `\x1b[38;5;16m`;
	hex = Number(hex.replace("#", "0x"));
	return `\x1b[48;2;${(hex >> 16) & 0xff};${(hex >> 8) & 0xff};${
		hex & 0xff
	}m${textColor}${string}\x1b[0m`;
};

const getLuma = (rgb) => {
	return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
};

const paintLuma = (color, targetLuma) => {
	const originalLuma = getLuma(color);
	const paint = originalLuma < targetLuma ? white : black;
	// mix(originalLuma,paint,a) = targetLuma;
	const a = (originalLuma - targetLuma) / (originalLuma - paint[0]);
	return paintMix(color, paint, a);
};

const paintMix = (a, b, x) => {
	return a.map((c, i) => a[i] * (1 - x) + b[i] * x);
};

const inkMix = (a, b, x) => {
	const { pow } = Math;
	return a.map((c, i) => pow(a[i], 1 - x) * pow(b[i], x));
};

//const exponentFromLuma = (y) => -log(y / 1) / log(1 / getLuma(linear));
const inkLuma = (originalColor, luma) => {
	const min = toLinear(0.4 / 255);
	const max = toLinear(254.6 / 255);
	let p = 0.02;
	let color = [1, 1, 1];
	while (getLuma(color) > luma) {
		color = originalColor.map((c) => Math.pow(clamp(c, min, max), p));
		p *= 1.02;
	}
	return color;
};

const colorAtLightness = (inputColor, lightness, options = {}) => {
	//prevent cases where it's impossible to make color dark enough because one component is 1
	const color = hexToRgb(inputColor);
	const luma = toLinear(lightness / 100);

	let a = paintLuma(color, luma);
	let b = inkLuma(color, luma);

	return rgbToHex(paintMix(a, b, options.saturation ?? 0.4));
};

const tailwindRamp = (inputColor, options = {}) => {
	const increment = options.increment ?? 10;
	const tailwindColors = {};
	let lightness = 100;
	while (true) {
		lightness -= increment;
		if (lightness <= 0) break;
		const color = colorAtLightness(inputColor, lightness, options);
		tailwindColors[1000 - lightness * 10] = color;
	}
	return tailwindColors;
};

const ramp = (inputColor, options = {}) => {
	const increment = options.increment ?? 10;
	const tailwindColors = {};
	let lightness = 100;
	while (true) {
		lightness -= increment;
		if (lightness <= 0) break;
		const color = colorAtLightness(inputColor, lightness, options);
		tailwindColors[lightness] = color;
	}
	return tailwindColors;
};

module.exports = {
	ramp,
	tailwindRamp,
	colorAtLightness,
	namedColors,
	termColorString,
};

// a color ramp generator for design systems
//
// how it works:
//
// the two main ways of mixing colors are
// to treat colors like paint or like ink.

// to get a ramp of lightess values, you can
// either mix with white or black paint
// like so:

// or vary the concentration of ink like so:

// the results of either don't look too
// pleasing, but a combination of the two
// methods looks perfect:

// function:
// colorAtLightness(hex, lightness, options)
// ramp(hex, options)
// tailwindRamp(hex, options)
//

// options:
//   increment:
//     distance between shades
//     0 is black and 100 is white
//     default: 10
//   saturation:
//     0 is pure paint
//     1 is pure ink
//     default: 0.4
// density

// cli:
// this package includes a command line utility in cli.js
// usage: ./cli.js '#d972d6' --increment=10 --saturation=1
// ad the "-t" flag to genrate tailwindcss colors
