/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {      //source from where images are coming
    domains: ['ipfs.infura.io', 'th.bing.com','https://krishna.infura-ipfs.io']
  }
}

module.exports = nextConfig
