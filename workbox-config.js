module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,css,js,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};