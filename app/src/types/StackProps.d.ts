type JustifyContentType =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type AlignItemsType = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type FlexWrapType = 'wrap' | 'nowrap';

export type StackProps = Partial<{
  w: string;
  h: string;
  spacing: string;
  align: AlignItemsType;
  justify: JustifyContentType;
  wrap: FlexWrapType;
}>;
