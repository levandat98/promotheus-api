export function ErrorsHandler(err, param) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(param)) {
    err = err.replace(key, param[key]);
  }
  return err;
}
