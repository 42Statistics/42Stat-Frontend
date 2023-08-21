import { useTheme } from '@emotion/react';
import { ReactComponent as MdHorizontalRule } from '@shared/assets/icon/md-horizontal-rule.svg';

export const NoneDash = () => {
  const theme = useTheme();

  return (
    <MdHorizontalRule width={20} height={20} fill={theme.colors.mono.black} />
  );
};
