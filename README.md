# electron-vue-pure

> electron-vue-pure project by sc

#### Build Setup

``` bash
# install dependencies
yarn/npm install

# serve with hot reload at localhost:9080
yarn/npm run dev

# build electron application for production
yarn/npm run build


# lint all JS/Vue component files in `src/`
yarn/npm run lint

```

---

#### Remark
1. Try to use yarn instead of npm (can avoid some dependency installation failures)
2. The problem of vue-devtools runtime installation failure has been resolved (see`./src/main/index.dev.js` for details)
2. The error `Object.fromEntries is not a function` has been resolved (see`./electron-vue/dev-client` line 1 for details)

