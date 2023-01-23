/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
		],
	},
	swcMinify: true,
	compiler: {
	  styledComponents: true,
	},
  };

module.exports = nextConfig;
