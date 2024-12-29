/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.iamsonalgupta.com',
          },
        ],
        destination: 'https://iamsonalgupta.com/:path*',
        permanent: true,
      },
    ];
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
