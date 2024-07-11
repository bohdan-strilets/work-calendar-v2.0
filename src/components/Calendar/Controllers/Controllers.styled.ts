import styled from '@emotion/styled'

export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 50px;
	color: var(--light-green-color);
`

export const Item = styled.li`
	font-size: 34px;
	font-weight: 700;
`

export const Button = styled.button`
	background-color: transparent;
	color: var(--light-green-color);

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: var(--gray-color);
	}
`
