const { types } = require('conventional-commit-types')

let list = []
for (let key of Object.keys(types)) {
	let emoji
	let code
	switch (key) {
		case 'feat':
			emoji = '💡'
			code = ':bulb:'
			break
		case 'fix': // cz-emoji fix
			emoji = '🐛'
			code = ':bug:'
			break
		case 'docs': // cz-emoji docs
			emoji = '📝'
			code = ':memo:'
			break
		case 'style':
			emoji = '🌈'
			code = ':rainbow:'
			break
		case 'refactor': // cz-emoji refactoring
			emoji = '🔨'
			code = ':hammer:'
			break
		case 'perf': // cz-emoji perf
			emoji = '⚡️'
			code = ':zap:'
			break
		case 'test': // cz-emoji test
			emoji = '✅'
			code = ':white_check_mark:'
			break
		case 'build': // cz-emoji ci
			emoji = '👷'
			code = ':construction_worker:'
			break
		case 'ci':
			emoji = '🏭'
			code = ':factory:'
			break
		case 'chore':
			emoji = '😓'
			code = ':sweat:'
			break
		case 'revert':
			emoji = '⬅️'
			code = ':arrow_left:'
			break
		default:
			emoji = '❓'
			name = ':question:'
	}
	list.push({
		...types[key],
		name: key,
		emoji,
		code
	})
}

module.exports = list
