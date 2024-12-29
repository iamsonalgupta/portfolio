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
            value: 'www.iamsonalgupta.com', // Replace with your domain
          },
        ],
        destination: 'https://iamsonalgupta.com/:path*', // Replace with your root domain
        permanent: true,
      },
    ];
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
