import { Clickable } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';

export const EvalLogSearchAbsoluteBtn = ({
  toggleModal,
}: {
  toggleModal: () => void;
}) => {
  const theme = useTheme();

  return (
    <Clickable
      onClick={toggleModal}
      element={
        <SearchIconLayout>
          <MdSearch color={theme.colors.mono.white} size="20px" />
        </SearchIconLayout>
      }
    />
  );
};

const SearchIconLayout = styled.div`
  position: fixed;
  bottom: 8rem;
  right: 5rem;
  border-radius: ${({ theme }) => theme.radius.circle};
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: ${({ theme }) => theme.zIndex.absoluteButton};
  cursor: pointer;
`;
