import styled from '@emotion/styled';

export const Checkbox = styled.input`
	type=checkbox
	checked: ${({ checked }) => checked};
`;
