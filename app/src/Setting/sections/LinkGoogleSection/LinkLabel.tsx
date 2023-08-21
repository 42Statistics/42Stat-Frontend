import styled from '@emotion/styled';
import { HStack, MediumText, Spacer } from '@shared/ui-kit';

type LinkLabelProps = {
  left: React.ReactNode;
  text: string;
  right?: React.ReactNode;
};

export const LinkLabel = ({ left, text, right }: LinkLabelProps) => {
  return (
    <Layout>
      <HStack w="100%" spacing="2rem">
        {left}
        <MediumText
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {text}
        </MediumText>
        <Spacer />
        {right !== undefined ? right : null}
      </HStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 1.2rem 2rem;
  background-color: ${({ theme }) => theme.colors.mono.gray100};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.mono.gray500};
  }
`;
