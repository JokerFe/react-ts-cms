/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-08-02 17:28:16
 * @Description: Layout布局组件
 * @FilePath: /hr-react-web/src/layouts/MainLayout.tsx
 */
import { Outlet } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { ProLayout, ProBreadcrumb } from '@ant-design/pro-components';
import { Avatar, Select } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import defaultProps from './_defaultProps';

export default () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pathname, setPathname] = useState(location.pathname || '/');

  const [themeVal, setThemeVal] = useState('dark');

  const themChange = (theme: any) => {
    setThemeVal(theme);
  };
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
      className={`theme-${themeVal}`}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: '工单系统',
        }}
        onMenuHeaderClick={e => console.log(1111, e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              console.log(item);
              setPathname(item.path || '/');
              navigate(item.path || '/', { replace: true });
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
            <Select style={{ width: 120 }} defaultValue={themeVal} onChange={themChange}>
              <Select.Option value="light">theme-light</Select.Option>
              <Select.Option value="dark">theme-dark</Select.Option>
              <Select.Option value="solar">theme-solar</Select.Option>
              <Select.Option value="evergreen">theme-evergreen</Select.Option>
            </Select>
          </div>
        )}
        headerContentRender={() => <ProBreadcrumb />}
        breadcrumbRender={(routers = []) => [...routers]}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};
