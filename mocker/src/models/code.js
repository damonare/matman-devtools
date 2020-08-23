/* global chrome */
import { useState, useEffect } from 'react';
import { createModel } from 'hox';

function useCode() {
  // 元素跟踪
  const [code, setCode] = useState('// Typing....');

  // useEffect(() => {
    // chrome.storage.local.get({ code: '// Typing....' }, (item) => {
    //   setCode(item.code);
    // });
  // }, []);

  // useEffect(() => {
  //   chrome.storage.local.set({ code: code });
  // }, [code]);

  return {
    code,
    setCode,
  };
}

export default createModel(useCode);
