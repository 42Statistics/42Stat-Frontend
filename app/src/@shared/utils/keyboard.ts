export const isEscapeKeyDown = (e: KeyboardEvent) => {
  return e.key === 'Escape';
};

export const isMacKKeyDown = (e: KeyboardEvent) => {
  return e.metaKey && e.key === 'k';
};

export const isMacBKeyDown = (e: KeyboardEvent) => {
  return e.metaKey && e.key === 'b';
};

export const isCtrlKKeyDown = (e: KeyboardEvent) => {
  return e.ctrlKey && e.key === 'k';
};

export const isCtrlBKeyDown = (e: KeyboardEvent) => {
  return e.ctrlKey && e.key === 'b';
};

export const isArrowUpKeyDown = (e: KeyboardEvent) => {
  return e.key === 'ArrowUp';
};

export const isArrowDownKeyDown = (e: KeyboardEvent) => {
  return e.key === 'ArrowDown';
};

export const isSlashKeyDown = (e: KeyboardEvent) => {
  return e.key === '/';
};

export const isEnterKeyDown = (e: KeyboardEvent) => {
  return e.key === 'Enter';
};
