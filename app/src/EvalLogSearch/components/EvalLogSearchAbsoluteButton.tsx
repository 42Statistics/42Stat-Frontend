import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactComponent as MdSearch } from '@shared/assets/icon/md-search.svg';
import { Clickable } from '@shared/ui-kit';

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
          <MdSearch width={26} height={26} fill={theme.colors.mono.white} />
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
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: ${({ theme }) => theme.zIndex.absoluteButton};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;
