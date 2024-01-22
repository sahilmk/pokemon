export const getFromLocalStorage = (storageKey: string) => {
  try {
    return localStorage.getItem(storageKey);
  } catch (e) {
    throw Error("Item not exists in the localstorage.");
  }
};
