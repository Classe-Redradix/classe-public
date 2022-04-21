const urlRoot = 'https://classe.dev'

module.exports = {
  siteUrl: urlRoot,
  autoLastmod: new Date().toISOString(),
  generateRobotsTxt: true,

  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: config.autoLastmod,
    }
  },
}
