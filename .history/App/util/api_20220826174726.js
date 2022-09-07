export const api = (path = "") => {
  if (path.length === 0) {
    return Promise.reject(newe);
  }
  return Promise.resolve({ test: true });
};
