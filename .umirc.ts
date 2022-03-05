import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'coding',
  favicon:
    '/images/logo.png',
  logo: '/images/coding.png',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: process.env.NODE_ENV === 'production' ? '/zxsite/' : '/',
  history:{
    type:"hash"
  }
  // more config: https://d.umijs.org/config
});
