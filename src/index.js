
var worker = new Worker("url:./worker.js");
worker.onmessage = (message) => {
  console.log("WORKER MESSAGE", message);
};
worker.onerror = (error) => {
  console.log("WORKER ERROR", error.message);
};
