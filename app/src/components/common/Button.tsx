import styled from '@emotion/styled';
import { Clickable } from './Clickable';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const Button = ({ text, ...propsExceptText }: ButtonProps) => {
  return (
    <Clickable element={<ButtonView text={text} />} {...propsExceptText} />
  );
};

const ButtonView = ({ text }: { text: string }) => {
  return <ButtonViewLayout>{text}</ButtonViewLayout>;
};

const ButtonViewLayout = styled.div`
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.mono.white};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;
