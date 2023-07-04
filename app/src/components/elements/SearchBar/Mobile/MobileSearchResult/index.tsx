import { ProjectPreview, UserPreview } from '@/__generated__/graphql';
import { H3Text, VStack } from '@components/common';
import { useTheme } from '@emotion/react';
import { MobileProjectSearchResult } from './MobileProjectSearchResult';
import { MobileUserSearchResult } from './MobileUserSearchResult';

type MobileSearchResultProps = {
  users: UserPreview[];
  projects: ProjectPreview[];
  onUserSubmit: (name: string) => void;
  onProjectSubmit: (name: string) => void;
  isPreviewDisplaying: boolean;
};

export const MobileSearchResult = ({
  users,
  projects,
  onUserSubmit,
  onProjectSubmit,
  isPreviewDisplaying,
}: MobileSearchResultProps) => {
  const theme = useTheme();

  return (
    <>
      {isPreviewDisplaying ? (
        <VStack w="100%" spacing="4rem">
          {!!users.length && (
            <MobileUserSearchResult users={users} onSubmit={onUserSubmit} />
          )}
          {!!projects.length && (
            <MobileProjectSearchResult
              projects={projects}
              onSubmit={onProjectSubmit}
            />
          )}
        </VStack>
      ) : (
        <VStack w="100%" h="10rem">
          <H3Text color={theme.colors.mono.gray300}>
            검색어를 입력해주세요
          </H3Text>
        </VStack>
      )}
    </>
  );
};
