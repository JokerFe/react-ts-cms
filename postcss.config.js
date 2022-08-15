/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-08-02 17:28:16
 * @Description: 页面/组件/功能的描述
 * @FilePath: /hr-react-web/postcss.config.js
 */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    'postcss-preset-env': {},
    autoprefixer: {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
