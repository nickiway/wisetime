/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    dbConnect: process.env.dbConnect,
    githubProviderClientID: process.env.githubProviderClientID,
    clientSecret: process.env.clientSecret,
  },
};

export default nextConfig;
