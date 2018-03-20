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

## Tell me why _____ with _____ ?

| key       | icon                        | why?                                                                |
| --------- | --------------------------- | ------------------------------------------------------------------- |
| feat      | 🎉 `:tada:`                  | I'm so excited to announce this feature! tada~                      |
| fix       | 🐞 `:beetle:`                | Original :bug: is actually a worm, so i choose another red bug.     |
| docs      | 📖 `:book:`                  | It's shortest word in all book-like emojis. (:books: :notebook:...) |
| style     | 🌈 `:rainbow:`               | Style makes world colorful!                                         |
| refactor  | 👍 `:+1:`                    | I'm refactoring things, you can cheer me up with +1.                |
| perf      | 🚀 `:rocket:`                | Launch a rocket, faster than ever!                                  |
| test      | 🚥 `:traffic_light:`         | As you know, tests make things green(ok), red(fail)                 |
| build     | 🏗 `:building_construction:` | Build, build, build.                                                |
| ci        | 🤖 `:robot:`                 | Make ci (auto robot) better!                                        |
| chore     | 🍺 `:beer:`                  | I'm doing chores, you should buy me a drink.                        |
| revert    | 🔙 `:back:`                  | Nothing special, Revert and back to previous version.               |
| [DEFAULT] | ❔ `:grey_question:`         | Unknown key.                                                        |

## References

- https://github.com/liguoqinjim/github_emoji
- https://github.com/ellerbrock/conventional-commit-types-emoji/blob/master/src/index.json
- https://github.com/Falieson/TRAM/blob/master/package.json#L17
