const { writeFile } = require('fs').promises
const js = require('rosid-handler-js')

js('src/index.js', {

	optimize: true,
	browserify: {
		standalone: 'tzc'
	}

}).then((data) => {

	return writeFile(`dist/tzc.min.js`, data)

})