import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Clickable } from './Clickable';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md';
  text: string;
  color?: string;
  bgColor?: string;
  bg?: string;
};

// TODO: size 변경 가능하도록 수정
export const Button = ({
  size = 'sm',
  text,
  color,
  bgColor,
  bg = '',
  ...propsExceptText
}: ButtonProps) => {
  const theme = useTheme();
  color = color ?? theme.colors.mono.white;
  bgColor = bgColor ?? theme.colors.primary.default;
  const fontSize = size === 'sm' ? theme.fonts.size.body : theme.fonts.size.h3;
  const padding = size === 'sm' ? '1.1rem 2rem' : '1.3rem 2.4rem';

  return (
    <Clickable
      element={
        <ButtonView
          color={color}
          bgColor={bgColor}
          bg={bg}
          text={text}
          fontSize={fontSize}
          padding={padding}
        />
      }
      {...propsExceptText}
    />
  );
};

type ButtonViewProps = {
  text: string;
  color: string;
  bgColor: string;
  fontSize: string;
  padding: string;
  bg: string;
};

const ButtonView = ({
  color,
  bgColor,
  text,
  fontSize,
  padding,
  bg,
}: ButtonViewProps) => {
  return (
    <ButtonViewLayout
      color={color}
      bgColor={bgColor}
      fontSize={fontSize}
      padding={padding}
      bg={bg}
    >
      {text}
    </ButtonViewLayout>
  );
};

type ButtonViewLayoutProps = Omit<ButtonViewProps, 'text'>;

const ButtonViewLayout = styled.div<ButtonViewLayoutProps>`
  border-radius: 3rem;
  background-color: ${({ bgColor }) => bgColor};
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ fontSize }) => fontSize};
  padding: ${({ padding }) => padding};
`;
