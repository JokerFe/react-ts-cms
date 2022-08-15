/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-08-02 10:31:29
 * @Description: 页面/组件/功能的描述
 * @FilePath: /hr-react-web/src/hooks/useImmer.ts
 */
import produce, { freeze, Draft } from 'immer';
import { useCallback, useState } from 'react';
export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = (arg: S | DraftFunction<S>) => void;
export type ImmerHook<S> = [S, Updater<S>];

export function useImmer<S = unknown>(initialValue: S | (() => S)): ImmerHook<S>;
export function useImmer<S>(initialValue: unknown) {
  const [val, updateVal] = useState(() =>
    freeze(typeof initialValue === 'function' ? initialValue() : initialValue, true)
  );
  return [
    val,
    useCallback(
      (updater: Updater<S>) => {
        if (typeof updater === 'function') {
          updateVal(produce(val, updater));
        } else {
          updateVal(freeze(updater));
        }
      },
      [val]
    ),
  ];
}

// useReducer(reducer, initialState); redux一模一样
