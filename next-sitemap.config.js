module.exports = {
  siteUrl: process.env.SITE_URL,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/api" },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [`${process.env.SITE_URL}/server-sitemap-index.xml`],
  },
  exclude: ["/api"],
  generateRobotsTxt: true,
};
