export const isEscapeKeyDown = (e: KeyboardEvent): boolean => {
  return e.key === 'Escape';
};

export const isMacKKeyDown = (e: KeyboardEvent): boolean => {
  return e.metaKey && e.key === 'k';
};

export const isMacBKeyDown = (e: KeyboardEvent): boolean => {
  return e.metaKey && e.key === 'b';
};

export const isArrowUpKeyDown = (e: KeyboardEvent): boolean => {
  return e.key === 'ArrowUp';
};

export const isArrowDownKeyDown = (e: KeyboardEvent): boolean => {
  return e.key === 'ArrowDown';
};

export const isSlashKeyDown = (e: KeyboardEvent): boolean => {
  return e.key === '/';
};
