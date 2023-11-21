const host = "vscode";
const port = 9876;

const connect = () => {
  console.log("Connecting to native host " + host);
  const connection = chrome.runtime.connectNative(host);
  connection.onMessage.addListener(message => {
    console.log(message);
  });

  connection.postMessage({
    name: "open",
    arguments: []
  });
};

connect();
