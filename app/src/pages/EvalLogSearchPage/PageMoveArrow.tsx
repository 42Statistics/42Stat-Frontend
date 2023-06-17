import { Clickable, HStack, PrimaryText } from '@components/common';
import { useTheme } from '@emotion/react';
import { BsTriangleFill } from '@react-icons/all-files/bs/BsTriangleFill';

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
      <Clickable onClick={handleDecrease} disabled={pageNumber === 1}>
        <BsTriangleFill
          size="12px"
          css={{ transform: 'rotate(-90deg)' }}
          color={
            pageNumber !== 1
              ? theme.colors.primary.default
              : theme.colors.mono.gray200
          }
        />
      </Clickable>
      <PrimaryText>
        {pageNumber.toLocaleString()} / {maxPageNumber.toLocaleString()}
      </PrimaryText>
      <Clickable
        onClick={handleIncrease}
        disabled={pageNumber === maxPageNumber}
      >
        <BsTriangleFill
          size="12px"
          css={{ transform: 'rotate(90deg)' }}
          color={
            pageNumber !== maxPageNumber
              ? theme.colors.primary.default
              : theme.colors.mono.gray200
          }
        />
      </Clickable>
    </HStack>
  );
};
