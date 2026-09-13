const path = require("path");

module.exports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.aceternity.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/inspiration",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sponsor",
        destination: "/",
        permanent: true,
      },
      {
        source: "/boxshadows",
        destination: "/",
        permanent: true,
      },
      {
        source: "/test",
        destination: "/",
        permanent: true,
      },
      {
        source: "/playground",
        destination: "/",
        permanent: true,
      },
      {
        source: "/demos",
        destination: "/",
        permanent: true,
      },
      {
        source: "/demos/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/friday",
        destination: "/",
        permanent: true,
      },
      {
        source: "/snippets",
        destination: "/",
        permanent: true,
      },
      {
        source: "/snippets/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/",
        permanent: true,
      },
      {
        source: "/links",
        destination: "/",
        permanent: true,
      },
      {
        source: "/freelance",
        destination: "/",
        permanent: true,
      },
      {
        source: "/design-inspiration",
        destination: "/",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/",
        permanent: true,
      },
      {
        source: "/freecodecamp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/api/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed.xml",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
