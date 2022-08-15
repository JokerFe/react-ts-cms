/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-08-02 17:28:34
 * @Description: 页面/组件/功能的描述
 * @FilePath: /hr-react-web/src/pages/App.tsx
 */
import { RouterGurad } from '@components/RouterGurad';
import routes from '../routers';
import './App.css';
const App = (): JSX.Element => {
  const routing = RouterGurad(routes);

  return <div>{routing}</div>;
};
export default App;
