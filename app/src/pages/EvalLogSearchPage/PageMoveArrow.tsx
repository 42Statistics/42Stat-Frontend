import { Clickable, HStack, Text } from '@/components/common';
import { useTheme } from '@emotion/react';
import { BsTriangleFill } from 'react-icons/bs';

export const PageMoveArrow = ({
  handleDecrease,
  handleIncrease,
  pageNumber,
  maxPageNumber,
}: {
  handleDecrease: () => void;
  handleIncrease: () => void;
  pageNumber: number;
  maxPageNumber: number;
}) => {
  const theme = useTheme();

  return (
    <HStack spacing="1rem">
      <Clickable
        element={
          <BsTriangleFill
            size="12px"
            css={{ transform: 'rotate(-90deg)' }}
            color={
              pageNumber !== 1
                ? theme.colors.primary.default
                : theme.colors.mono.gray[200]
            }
          />
        }
        onClick={handleDecrease}
        disabled={pageNumber === 1}
      />
      <Text color={theme.colors.primary.default}>
        {pageNumber.toLocaleString()} / {maxPageNumber.toLocaleString()}
      </Text>
      <Clickable
        element={
          <BsTriangleFill
            size="12px"
            css={{ transform: 'rotate(90deg)' }}
            color={
              pageNumber !== maxPageNumber
                ? theme.colors.primary.default
                : theme.colors.mono.gray[200]
            }
          />
        }
        onClick={handleIncrease}
        disabled={pageNumber === maxPageNumber}
      />
    </HStack>
  );
};
