import { Avatar, HStack, Text } from '@/components/common';
import { useTheme } from '@emotion/react';

type RankItemPropType = {
  rank: number;
  name: string;
  value: number;
  imgUrl?: string;
  unit: string;
};

export const RankItem = ({
  rank,
  name,
  value,
  imgUrl,
  unit,
}: RankItemPropType) => {
  const theme = useTheme();
  return (
    <>
      <HStack style={{ justifyContent: 'space-between' }}>
        <HStack
          style={{
            alignItems: 'baseline',
            marginRight: '1rem',
          }}
        >
          <Text
            style={{
              verticalAlign: 'bottom',
              color: rank < 1 ? theme.colors.secondary.default : 'black',
              display: 'inline-block',
            }}
            fontSize={theme.fonts.size.h1}
            fontWeight={theme.fonts.weight.bold}
          >
            {rank + 1}
          </Text>
          <Text
            style={{
              marginRight: '1rem',
              verticalAlign: 'bottom',
              color: rank < 1 ? theme.colors.secondary.default : 'black',
              display: 'inline-block',
            }}
            fontSize={theme.fonts.size.h3}
          >
            위
          </Text>
        </HStack>
        <HStack>
          <Text
            style={{
              display: 'inline-block',
              color: rank < 1 ? theme.colors.secondary.default : 'black',
            }}
            fontSize={theme.fonts.size.h3}
            fontWeight={theme.fonts.weight.bold}
          >
            {name}
          </Text>
          <Text
            style={{
              display: 'inline-block',
              color: rank < 1 ? theme.colors.secondary.default : 'black',
            }}
            fontSize={theme.fonts.size.h3}
          >
            ({value}
            {unit})
          </Text>
        </HStack>
        <HStack>
          {imgUrl ? (
            <Avatar size="4rem" src={imgUrl} style={{ marginLeft: '2rem' }} />
          ) : null}
        </HStack>
      </HStack>
    </>
  );
};

// <HStack alignItems="baseline">
//   <HStack marginRight="1rem">
//     <StyledText rank={rank}>
//       {rank + 1}
//     </StyledText>
//     <StyledText fontSize="h3">
//       위
//     </StyledText>
//   </HStack>
//   <HStack>
//     <StyledText fontWeight="bold">
//       {name}
//     </StyledText>
//     <StyledText>
//       ({value}{unit})
//     </StyledText>
//   </HStack>
//   <HStack align="flex-end">
//     {imgUrl && <Avatar size="4rem" src={imgUrl} />}
//   </HStack>
// </HStack>

// const StyledText = styled(Text)<{ rank: number; theme: Theme }>`
//   vertical-align: bottom;
//   color: ${({ rank, theme }) =>
//     rank < 1 ? theme.colors.secondary.default : 'black'};
//   display: inline-block;

//   &:first-of-type {
//     font-size: ${({ theme }) => theme.fonts.size.h1};
//     font-weight: ${({ theme }) => theme.fonts.weight.bold};
//   }

//   &:last-of-type {
//     font-size: ${({ theme }) => theme.fonts.size.h3};
//     margin-right: 1rem;
//   }
// `;
