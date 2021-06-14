export const parser = Range.prototype.createContextualFragment.bind(
  document.createRange(),
);

export function randomID() {
  const digits = String(Math.random()).split('.')[1].substr(0, 10);
  return `ID${digits}`;
}
