import emitter from 'tiny-emitter/instance';

export function useDialog() {
  function confirm(options) {
    emitter.emit('show-dialog', 'confirm', options);
  }

  function prompt(options) {
    emitter.emit('show-dialog', 'prompt', options);
  }

  function auth(options) {
    emitter.emit('show-dialog', 'auth', options);
  }

  return {
    prompt,
    confirm,
    auth,
  };
}
