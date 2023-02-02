/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
			{
				protocol: 'https',
				hostname: 'www.vhv.rs',
			},
		],
	},
	swcMinify: true,
	compiler: {
	  styledComponents: true,
	},
  };

module.exports = nextConfig;
