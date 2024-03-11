/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    dbConnect: process.env.dbConnect,
    githubProviderClientID: process.env.githubProviderClientID,
    clientSecret: process.env.clientSecret,
    MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
  },
};

export default nextConfig;
