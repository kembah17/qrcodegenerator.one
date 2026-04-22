/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://qrcodegenerator.one',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
