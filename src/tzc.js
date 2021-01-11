const timezones = require('../data/tz.json')
const codes = require('../data/codes.json')

export const IS_BROWSER = typeof window !== 'undefined'

export const detect = () => {
	if (!IS_BROWSER) return console.warn('Can\'t detect timezone without window object.') || null
	if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat === 'undefined') return console.log('Intl missing from window.') || null

	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
	if (!timezone) return null

	return parse(timezone)
}

export const parse = (input) => {
	const code = timezones[input]
	if (!code) return null

	return {
		code,
		name: codes[code]
	}
}