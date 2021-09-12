/** @type {import('next').NextConfig} */

const { withEffectoReactAliases } = require('effector-next/tools')

const enhance = withEffectoReactAliases()

module.exports = enhance({
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Important: return the modified config
  //   return config
  // },
  reactStrictMode: false,
})
