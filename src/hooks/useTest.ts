/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-08-02 10:31:29
 * @Description: 页面/组件/功能的描述
 * @FilePath: /hr-react-web/src/hooks/useTest.ts
 */
import { useRef } from 'react';

export function useTest() {
  const lastCallId = useRef(0);
  const fn = () => {
    console.log('执行到位');
    lastCallId.current = lastCallId.current + 1;
  };
  lastCallId.current++;
  //   setInterval(() => {
  //     lastCallId.current++;
  //   });

  console.log('lastCallId.current: ', lastCallId.current);

  return [fn, lastCallId] as const;
}
