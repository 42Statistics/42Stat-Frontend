import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactComponent as MdSearch } from '@shared/assets/icon/md-search.svg';
import { ARIA_LABEL_BUTTON } from '@shared/constants/accessibility/ARIA_LABEL';
import { Clickable } from '@shared/ui-kit';
import { mq } from '@shared/utils/facepaint/mq';

type EvalLogSearchAbsoluteButtonProps = {
  onClick: () => void;
};

export const EvalLogSearchAbsoluteButton = ({
  onClick,
}: EvalLogSearchAbsoluteButtonProps) => {
  const theme = useTheme();

  return (
    <>
      <Clickable
        onClick={onClick}
        tabIndex={1}
        aria-label={ARIA_LABEL_BUTTON.SEARCH_EVAL_LOGS}
      >
        <Layout>
          <MdSearch width={26} height={26} fill={theme.colors.mono.white} />
        </Layout>
      </Clickable>
    </>
  );
};

const Layout = styled.div`
  position: fixed;
  border-radius: ${({ theme }) => theme.radius.circle};
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: ${({ theme }) => theme.zIndex.absoluteButton};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${mq({
    bottom: ['10rem', '5rem'],
    right: ['3rem', '5rem'],
  })}

  &:hover {
    transform: translateY(-5px);
  }

  &:focus {
    outline: 2px solid blue;
  }
`;
