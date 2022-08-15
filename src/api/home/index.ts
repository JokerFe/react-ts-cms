import request from '@service/index';

/** 接口作用xxx POST /api/xxx */
export async function currentUser(options?: { [key: string]: any }) {
  const res = await request.post({
    url: '/xxx',
    ...options,
  });

  return res;
}
