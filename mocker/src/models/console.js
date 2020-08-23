import { useState } from 'react';
import { createModel } from 'hox';

function useConsole() {
  const [consoleData, setConsoleData] = useState([]);

  const handelConsole = (data) => {
    let temp = [];
    if (data instanceof Array) {
      temp = [...data];
    } else {
      temp = [data];
    }

    temp
      .filter(
        (item) => item._resourceType === 'xhr' || item._resourceType === 'fetch'
      )
      .forEach((item) => {
        item.getContent((content) => {
          setConsoleData((s) => {
            return [
              ...s,
              {
                request: {
                  ...item.request,
                  resourceType: item._resourceType,
                },
                response: { ...item.response, body: content },
              },
            ];
          });
        });
      });
  };

  const clearConsole = () => {
    setConsoleData(() => {
      return [];
    });
  };

  return {
    consoleData,
    handelConsole,
    clearConsole,
  };
}

export default createModel(useConsole);
