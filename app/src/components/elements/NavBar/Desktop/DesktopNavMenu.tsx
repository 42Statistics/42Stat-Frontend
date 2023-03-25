import { DesktopNavItem } from './DesktopNavItem';
import { Spacer, VStack } from '@/components/common';
import { useNavMenu } from '../hooks/useNavMenu';
import { Fragment } from 'react';

// TODO: SidebarMenu와 TabBar의 로직 유사하므로 통합 필요
export const DesktopNavMenu = () => {
  const { options } = useNavMenu();

  return (
    <VStack as="ul" w="100%" h="100%" spacing="2rem">
      {options.map((option) => (
        <Fragment key={option.menu}>
          <DesktopNavItem option={option} />
          {option.trailingSpacer && <Spacer />}
        </Fragment>
      ))}
    </VStack>
  );
};
