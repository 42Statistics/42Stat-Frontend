import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import {
  Clickable,
  HStack,
  WhiteBody1MediumText,
  type ClickableProps,
} from '@shared/ui-kit';

// text를 넣으면 Extended FAB가 됩니다.
export type FABProps = Omit<ClickableProps, 'children'> & {
  icon: React.ReactElement;
  backgroundColor?: string;
  text?: string;
};

export const FAB = ({
  icon,
  backgroundColor,
  text,
  ...clickableProps
}: FABProps) => {
  const theme = useTheme();

  backgroundColor = backgroundColor ?? theme.colors.primary.default;

  return (
    <Clickable {...clickableProps}>
      <Layout backgroundColor={backgroundColor}>
        {text ? (
          <HStack spacing="1rem">
            {icon}
            <WhiteBody1MediumText>{text}</WhiteBody1MediumText>
          </HStack>
        ) : (
          icon
        )}
      </Layout>
    </Clickable>
  );
};

type LayoutProps = {
  backgroundColor?: string;
};

const Layout = styled.div<LayoutProps>`
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1.8rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: ${({ theme }) => theme.zIndex.absoluteButton};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  &:focus {
    outline: 2px solid blue;
  }
`;
