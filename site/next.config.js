/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'HYQuest Technologies',
    description: 'Private store for Kasm supported workspaces.',
    icon: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/y0hevvdjp1b5mimcbeuv',
    listUrl: 'https://hyim28.github.io/kasm-registry/',
    contactUrl: 'https://github.com/hyim28/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
