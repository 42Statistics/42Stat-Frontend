import { Clickable } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { RiSearchLine } from '@react-icons/all-files/ri/RiSearchLine';

type EvalLogSearchAbsoluteButtonProps = {
  onClick: () => void;
  dialog: React.ReactNode;
};

export const EvalLogSearchAbsoluteButton = ({
  onClick,
  dialog,
}: EvalLogSearchAbsoluteButtonProps) => {
  const theme = useTheme();

  return (
    <>
      <Clickable onClick={onClick}>
        <Layout>
          <RiSearchLine color={theme.colors.mono.white} size="20px" />
        </Layout>
      </Clickable>
      {dialog}
    </>
  );
};

const Layout = styled.div`
  position: fixed;
  bottom: 8rem;
  right: 5rem;
  border-radius: ${({ theme }) => theme.radius.circle};
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: ${({ theme }) => theme.zIndex.absoluteButton};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;
