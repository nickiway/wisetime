/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    dbConnection: process.env.dbConnection,
    githubProviderClientID: process.env.githubProviderClientID,
    clientSecret: process.env.clientSecret,
  },
};

export default nextConfig;
