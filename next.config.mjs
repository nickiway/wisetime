/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    dbConnection: process.env.dbConnection,
  },
};

export default nextConfig;
