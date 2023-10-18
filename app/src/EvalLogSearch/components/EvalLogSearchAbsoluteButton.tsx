import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactComponent as MdSearch } from '@shared/assets/icon/md-search.svg';
import { ARIA_LABEL } from '@shared/constants/accessibility';
import { FAB } from '@shared/ui-kit/FAB';
import { mq } from '@shared/utils/facepaint/mq';

type EvalLogSearchAbsoluteButtonProps = {
  onClick: () => void;
};

export const EvalLogSearchAbsoluteButton = ({
  onClick,
}: EvalLogSearchAbsoluteButtonProps) => {
  const theme = useTheme();

  return (
    <Layout>
      <FAB
        icon={
          <MdSearch width={30} height={30} fill={theme.colors.mono.white} />
        }
        onClick={onClick}
        tabIndex={1}
        aria-label={ARIA_LABEL.BUTTON.SEARCH_EVAL_LOGS}
      />
    </Layout>
  );
};

const Layout = styled.div`
  position: fixed;

  ${mq({
    bottom: ['10rem', '5rem'],
    right: ['3rem', '5rem'],
  })}
`;
