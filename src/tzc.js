const timezones = require('../data/tz.json')
const codes = require('../data/codes.json')

export const IS_BROWSER = typeof window !== 'undefined'

export const detect = () => {
	if (!IS_BROWSER) throw new Error('Can\'t detect timezone, window object missing.')
	if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat === 'undefined') {
		console.warn('Can\'t detect timezone, Internationalization API missing from window.')
		return null
	}

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