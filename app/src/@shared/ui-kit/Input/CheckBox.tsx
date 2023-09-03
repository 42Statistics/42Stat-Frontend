import styled from '@emotion/styled';

export const CheckBox = styled.input`
	type=checkbox
	width: 100%;
	checked: ${({ checked }) => checked};
`;
