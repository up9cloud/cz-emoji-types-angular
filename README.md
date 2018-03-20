# cz-emoji-types-angular

[![Build Status](https://travis-ci.org/up9cloud/cz-emoji-types-angular.svg?branch=master)](https://travis-ci.org/up9cloud/cz-emoji-types-angular)

The [cz-emoji](https://github.com/ngryman/cz-emoji) `types` for [Angular Git Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type)

## Install

```bash
npm i -g cz-conventional-changelog
# npm i -g cz-emoji
npm i -g https://github.com/up9cloud/cz-emoji.git # custom version load types by module name https://github.com/ngryman/cz-emoji/pull/16
npm i -g cz-emoji-types-angular
```

> package.json

```json5
{
  "config": {
    "commitizen": {
      "path": "cz-emoji"
    },
    "cz-emoji": {
      "types": "cz-emoji-types-angular",
      "mode": "replace"
    }
  }
}
```

## Usage

```bash
git add .
git cz
```

## Tell me why _____ with _____?

| key       | icon                        | why?                                                          | other options                               |
| --------- | --------------------------- | ------------------------------------------------------------- | ------------------------------------------- |
| feat      | 🎉 `:tada:`                  | I'm so excited to announce this feature! tada~                | :sparkles:                                  |
| fix       | 🐞 `:beetle:`                | Original bug is actually a worm, so i choose another red bug. | :bug:                                       |
| docs      | 📖 `:book:`                  | This is the shortest work in book-like emojis                 | :books: :notebook: :memo:                   |
| style     | 🌈 `:rainbow:`               | Style makes world colorful!                                   | :art:                                       |
| refactor  | 👍 `:+1:`                    | I'm refactoring things, you can cheer me with +1.             | :100:                                       |
| perf      | 🚀 `:rocket:`                | Launch a rocket, faster than ever!                            | :zap:                                       |
| test      | 🚥 `:traffic_light:`         | As you know, tests make things green(ok), red(fail)           | :vertical_traffic_light: :white_check_mark: |
| build     | 🏗 `:building_construction:` | Build, build, build.                                          | :construction_worker:                       |
| ci        | 🤖 `:robot:`                 | Make ci (auto robot) better!                                  |                                             |
| chore     | 🍺 `:beer:`                  | I'm doing chores, you should buy me a drink.                  |                                             |
| revert    | 🔙 `:back:`                  | Nothing special, Revert and `back` to previous version.       | :arrow_left:                                |
| [DEFAULT] | ❔ `:grey_question:`         | Unknown key.                                                  | :question:                                  |

## References

- https://github.com/liguoqinjim/github_emoji
- https://github.com/ellerbrock/conventional-commit-types-emoji/blob/master/src/index.json
- https://github.com/Falieson/TRAM/blob/master/package.json#L17
