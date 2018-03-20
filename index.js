const { types } = require('conventional-commit-types')

const options = {
  feat: {
    emoji: '🎉',
    code: ':tada:'
  },
  fix: {
    emoji: '🐞',
    code: ':beetle:'
  },
  docs: {
    emoji: '📖',
    code: ':book:'
  },
  style: {
    emoji: '🌈',
    code: ':rainbow:'
  },
  refactor: {
    emoji: '👍',
    code: ':+1:'
  },
  perf: {
    emoji: '🚀',
    code: ':rocket:'
  },
  test: {
    emoji: '🚥',
    code: ':traffic_light:'
  },
  build: {
    emoji: '🏗',
    code: ':building_construction:'
  },
  ci: {
    emoji: '🤖',
    code: ':robot:'
  },
  chore: {
    emoji: '🍺',
    code: ':beer:'
  },
  revert: {
    emoji: '🔙',
    code: ':back:'
  },
  '[DEFAULT]': {
    emoji: '❔',
    code: ':grey_question:'
  }
}

let list = []
for (let key of Object.keys(types)) {
  let item
  if (options[key]) {
    item = options[key]
  } else {
    item = options['[DEFAULT]']
  }
  list.push({
    ...types[key],
    name: key,
    ...item
  })
}
module.exports = list
exports.options = options
