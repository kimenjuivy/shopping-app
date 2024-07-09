module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,html,png,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};