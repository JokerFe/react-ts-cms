/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-08-02 10:32:56
 * @Description: 页面/组件/功能的描述
 * @FilePath: /hr-react-web/tailwind.config.js
 */
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.html'],
  theme: {
    // 背景颜色
    backgroundColor: {
      base: 'var(--color-base)',
      'off-base': 'var(--color-off-base)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      muted: 'var(--color-text-muted)',
    },
    // 字体颜色
    textColor: {
      base: 'var(--color-text-base)',
      muted: 'var(--color-text-muted)',
      'muted-hover': 'var(--color-text-muted-hover)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
    },
    /**
     * 间距：多用于margin、padding
     * 这些值用于
     * padding, margin, width, height, maxHeight, flex-basis, gap, inset, space, translate,
     * scrollMargin,scrollPadding和textIndent等属性。
     */
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    extend: {
      // 扩展样式
    },
  },
  plugins: [],
};
