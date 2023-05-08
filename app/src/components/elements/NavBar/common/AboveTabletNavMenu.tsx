import { Spacer, VStack } from '@/components/common';
import { Fragment } from 'react';
import { useNavMenu } from '../hooks/useNavMenu';
import { AboveTabletNavItem } from './AboveTabletNavItem';

// TODO: SidebarMenu와 TabBar의 로직 유사하므로 통합 필요
export const AboveTabletNavMenu = () => {
  const { options } = useNavMenu();

  return (
    <VStack as="ul" w="100%" spacing="2rem">
      {options.map((option) => (
        <Fragment key={option.menu}>
          <AboveTabletNavItem option={option} />
          {option.trailingSpacer && <Spacer />}
        </Fragment>
      ))}
    </VStack>
  );
};
