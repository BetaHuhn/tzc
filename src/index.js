import * as tzc from './tzc'
export default tzc

export const parse = tzc.parse
export const detect = tzc.detect

if (tzc.IS_BROWSER) {
	(function(window) {
		window.tzc = tzc
	}(window))
}