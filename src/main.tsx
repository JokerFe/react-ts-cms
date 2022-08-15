/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-08-02 10:31:29
 * @Description: 页面/组件/功能的描述
 * @FilePath: /hr-react-web/src/main.tsx
 */
import App from '@pages/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './wdyr';
import './style.css';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
