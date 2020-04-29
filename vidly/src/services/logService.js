// import Raven from "raven-js";

function init() {
  // Raven.config(
  //   'https://4f88cb0450994f2cb2c333b9e1f62fc1@o384686.ingest.sentry.io/5216286',
  //   {
  //     release: '1-0-0',
  //     environment: 'development-test'
  //   }
  // ).install();
}

function log(error) {
  // Raven.captureException(error);
  console.log(error);
}

export default {
  init,
  log
};
