import { HStack, MediumText, Spacer } from '@components/common';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

type LinkLabelProps = {
  left: ReactNode;
  text: string;
  right?: ReactNode;
};

export const LinkLabel = ({ left, text, right }: LinkLabelProps) => {
  return (
    <Layout>
      <HStack w="100%" spacing="2rem">
        {left}
        {text && <MediumText>{text}</MediumText>}
        <Spacer />
        {right && right}
      </HStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 40rem;
  padding: 1.2rem 2rem;
  background-color: #f0f0f0;
  border-radius: ${({ theme }) => theme.radius.sm};
`;
