export const getPrescriptionInputValue = (selector: string) => {
  return Number(document.querySelector(selector).value);
};
