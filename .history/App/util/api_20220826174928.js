export const api = (path = "") => {
  if (path.length === 0) {
    return Promise.reject(new Error("Path is required"));
  }
  if (path !== "latest") {
    return Promise.reject(new Error("Invalid Path"));
  }
  return Promise.resolve({ test: true });
};
