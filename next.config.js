/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        //route this applies to
        source: '/api/(.*)',
        //headers
        headers: [
          //allow for specific domains to have access or * for all
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          //allows for specific methods accepted
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          //allows for specific headers accepted (These are a few standard ones)
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
