import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { ReactComponent as MdGroup } from '@shared/assets/icon/md-group.svg';
import { Body1BoldText, H1BoldText, HStack } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

type FollowPageHeaderProps = {
  title: string;
  totalCount?: number;
};

export const FollowPageHeader = ({
  title,
  totalCount,
}: FollowPageHeaderProps) => {
  const theme = useTheme();

  return (
    <TitleLayout>
      <MdGroup fill={theme.colors.mono.black} width="30" height="30" />
      <H1BoldText>{title}</H1BoldText>
      <BadgeLayout>
        {totalCount && (
          <Body1BoldText>
            {numberWithUnitFormatter(totalCount, '명')}
          </Body1BoldText>
        )}
      </BadgeLayout>
    </TitleLayout>
  );
};

const TitleLayout = styled(HStack)`
  justify-content: start;
  width: 100%;
  gap: 1rem;
  padding: 0 1rem;
`;

const BadgeLayout = styled(HStack)`
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: 0.5rem 1rem;
`;
