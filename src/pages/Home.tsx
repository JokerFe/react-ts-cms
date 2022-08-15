import { useImmer } from '@hooks/useImmer';
import { memo, useCallback } from 'react';
import { Button } from 'antd';

function Home() {
  const [uppercase, setUppercase] = useImmer({ a: 123 });
  const handleChange = useCallback(() => {
    setUppercase(draf => {
      draf.a = 1234;
    });
  }, [setUppercase]);
  return (
    <>
      <input type="button" value={uppercase.a} onClick={handleChange} />
      <Button type="primary">hah</Button>
    </>
  );
}
Home.whyDidYouRender = true;
export default memo(Home);
