#!/usr/bin/env node

const {
	ramp,
	tailwinRamp,
	colorAtLightness,
	namedColors,
	termColorString,
} = require("./index.js");

let generator = ramp;

const printPalette = (inputColor, options = {}) => {
	const terminalStrings = [];

	Object.entries(generator(inputColor, options)).forEach(([code, color]) => {
		terminalStrings.push(
			"    " + termColorString(color, `"${code}" : "${color}"`)
		);
	});

	console.log(`{\n${terminalStrings.join(",\n")}\n}`);
};

const args = process.argv.slice(2);
const colors = [];
const optionArgs = [];
const options = {};

args.forEach((arg) => {
	if (arg[0] === "#" || arg in namedColors) {
		colors.push(arg);
	}
	if (arg.substring(0, 2) === "--") {
		optionArgs.push(arg.substring(2));
	}
	if (arg.substring(0, 2) === "-t") {
		generator = tailwinRamp;
	}
});

optionArgs.forEach((option) => {
	const [key, value] = option.split("=");
	options[key] = value;
});

colors.forEach((color) => {
	printPalette(color, options);
});
