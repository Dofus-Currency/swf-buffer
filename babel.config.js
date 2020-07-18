module.exports = api => {
  api.cache(true)

  const presets = [
    require('@babel/preset-env'),
    require('@babel/preset-typescript'),
  ]

  const plugins = [
    'transform-class-properties',
  ]

  return {
    presets,
    plugins,
  }
}
