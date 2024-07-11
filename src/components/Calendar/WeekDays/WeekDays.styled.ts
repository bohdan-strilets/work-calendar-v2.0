import styled from '@emotion/styled'

export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 50px 0;
`

export const Item = styled.li<{ currentDay?: boolean }>`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;

	::after {
		content: '';
		display: ${({ currentDay }) => (currentDay ? 'block' : 'none')};

		position: absolute;
		top: 130%;
		left: 50%;
		transform: translate(-50%);

		width: 20%;
		height: 2px;

		background-color: var(--light-green-color);
	}
`

export const Label = styled.p`
	text-transform: uppercase;
	font-weight: 700;
`
