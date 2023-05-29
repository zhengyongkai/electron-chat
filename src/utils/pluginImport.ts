export function svgPluginImport() {
  const requireContext = require.context('../assets/icons', false, /\.svg$/)
  requireContext.keys().forEach(requireContext)
}
