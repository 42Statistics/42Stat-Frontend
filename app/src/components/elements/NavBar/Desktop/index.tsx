import { Logo } from '@/components/elements/Logo';
import { DesktopNavMenu } from './DesktopNavMenu';
import { VStack } from '@/styles/components';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Device } from '@/utils/types/Device';

type DesktopNavBarProps = {
  device: Device;
};

export const DesktopNavBar = ({ device }: DesktopNavBarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(device === 'desktop');

  useEffect(() => {
    setIsOpen(device === 'desktop');
  }, [device, setIsOpen]);

  return (
    <DesktopNavBarLayout isOpen={isOpen}>
      <VStack h="100%" spacing="6rem">
        {isOpen ? (
          <>
            <Logo />
            <p>박용준</p>
            <DesktopNavMenu />
          </>
        ) : (
          <></>
        )}
      </VStack>
    </DesktopNavBarLayout>
  );
};

type DesktopNavBarLayoutProps = {
  isOpen: boolean;
};

const DesktopNavBarLayout = styled.nav<DesktopNavBarLayoutProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '26rem' : '9rem')};
  height: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-right: 0.1rem solid ${({ theme }) => theme.colors.mono.gray.light};
`;
