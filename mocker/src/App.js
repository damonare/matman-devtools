/*global chrome*/
import React, { useEffect } from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Main from './components/Main';
import useConsoleModel from './models/console';

function App() {
  const { handelConsole, clearConsole } = useConsoleModel();

  useEffect(() => {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
      if (changeInfo.status === 'loading') {
        clearConsole();
      }
    });

    chrome.devtools.network.onRequestFinished.addListener((request) => {
      handelConsole(request);
    });
  }, []);

  return (
    <Layout>
      <Header />
      <Main />
    </Layout>
  );
}

export default App;
