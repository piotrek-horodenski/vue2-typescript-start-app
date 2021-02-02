
export default (to, from, next) => {
  if (!to.matched.length) {
    next({
      name: 'home',
      replace: true
    })
    return
  }
  next()
}
