/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV = 'production';
const nextConfig = {
    basePath: isProd ? '/MyPage' : '',
    assetPrefix: '/MyPage/',
    distDir: 'dist',
    reactStrictMode: true,
  };
  
export default nextConfig;