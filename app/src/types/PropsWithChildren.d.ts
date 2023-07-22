export type PropsWithReactNodeChildren<P = unknown> = P & {
  children: React.ReactNode;
};

export type PropsWithReactElementChildren<P = unknown> = P & {
  children: React.ReactElement | Iterable<React.ReactElement | null>;
};

export type PropsWithStringChildren<P = unknown> = P & {
  children: string;
};
