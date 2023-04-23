import { Clickable, HStack, Spacer } from '@/components/common';
import { ProfileMenu, ProfileMenuOption } from '@/utils/types/ProfileMenu';
import styled from '@emotion/styled';

type ProfileTabBarProps = {
  value: string;
  onChange: (selected: ProfileMenu) => void;
  options: ProfileMenuOption[];
};

// TODO: ProfileTabBar와 NavBar의 로직 유사하므로 통합 가능할 듯
export const ProfileTabBar = ({
  value,
  onChange,
  options,
}: ProfileTabBarProps) => {
  return (
    <ProfileTabBarLayout>
      <HStack>
        {options.map((option, idx) => (
          <Clickable
            key={idx}
            element={
              <ProfileTabItemLayout isFocused={option.menu === value}>
                {option.text}
              </ProfileTabItemLayout>
            }
            onClick={() => onChange(option.menu)}
          />
        ))}
        <Spacer />
      </HStack>
    </ProfileTabBarLayout>
  );
};

const ProfileTabBarLayout = styled.div`
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.primary.default}`};
`;

type ProfileTabItemLayoutProps = {
  isFocused: boolean;
};

const ProfileTabItemLayout = styled.div<ProfileTabItemLayoutProps>`
  border-bottom: ${({ theme, isFocused }) =>
    isFocused && `3px solid ${theme.colors.primary.default}`};
  padding: 1.4rem 2rem;
`;
