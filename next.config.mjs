/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  domains: ["res.cloudinary.com"],

  env: {
    dbConnect: process.env.dbConnect,
    githubProviderClientID: process.env.githubProviderClientID,
    clientSecret: process.env.clientSecret,
    MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME,
  },
};

export default nextConfig;
