const fs = require('fs').promises

const run = async () => {
	const rawData = await fs.readFile('./tzdata/zone.tab')
	const data = rawData.toString().split('\n')

	if (data.length === 0) throw new Error('Data missing')

	const result = {}

	data.forEach((line) => {
		if (line.startsWith('#')) return

		const items = line.split('\t')
		if (items.length < 3) return

		const code = items[0]
		const tz = items[2]

		result[tz] = code

	})

	await fs.writeFile('./data/tz.json', JSON.stringify(result))

	console.log(`Done. File contains ${ Object.keys(result).length } timezones.`)
}

run()
	.catch((err) => {
		console.log(err)
	})