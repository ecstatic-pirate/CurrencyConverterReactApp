export const api = (path = "") => {
  if (path) return Promise.resolve({ test: true });
};
