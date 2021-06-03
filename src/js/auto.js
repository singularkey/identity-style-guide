import 'uswds/src/js/polyfills';
import domready from 'domready';
import * as components from './components';

function initialize() {
  const target = document.body;
  Object.keys(components).forEach((key) => {
    const behavior = components[key];
    behavior.on(target);
  });
}

function cleanup() {
  Object.keys(components).forEach((key) => {
    const behavior = components[key];
    behavior.off();
  });
}

function reinitialize() {
  cleanup();
  initialize();
}

domready(initialize);

window.uswds = {
  cleanup,
  initialize,
  components,
  reinitialize,
};
