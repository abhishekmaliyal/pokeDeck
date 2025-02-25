/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [{ protocol: 'https', hostname: 'raw.githubusercontent.com' }, { protocol: 'http', hostname: 'raw.githubusercontent.com' }]
      },
};

export default nextConfig;
