const { createSecureHeaders } = require("next-secure-headers"); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  reactStrictMode: false,
  async rewrites() {
    return [
     
      {
        source: '/checkmyresident/resident',
        destination: '/renterdashboard',
      },
      {
        source: '/create-account',
        destination: '/landlord/signup',
      },
      {
        source: '/checkmyresident/property/dashboard',
        destination: '/applications',
      },
      {
        source: '/checkmyresident/resident-invitiation/:path',
        destination: '/signup/renter/:path',
      },
      {
        source: '/',
        destination: '/login',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/renterdashboard',
        destination: '/checkmyresident/resident',
        permanent: true,
      },
      {
        source: '/landlord/signup',
        destination: '/create-account',
        permanent: true,
      },
      {
        source: '/applications',
        destination: '/checkmyresident/property/dashboard',
        permanent: true,
      },
      {
        source: '/signup/renter/:path',
        destination: '/checkmyresident/resident-invitiation/:path',
        permanent: true,
      },
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ["modivesdev.blob.core.windows.net", "modivesuat.blob.core.windows.net"],
  },
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }]; // check default enabled headers here: https://github.com/jagaapple/next-secure-headers#rules
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["next/babel", "@babel/preset-typescript"],
        },
      },
    });

    return config;
  },
};
