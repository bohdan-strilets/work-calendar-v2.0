import styled from '@emotion/styled'

export const Week = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Day = styled.li<{ isEvent?: boolean }>`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100px;

	::after {
		content: '';
		display: ${({ isEvent }) => (isEvent ? 'block' : 'none')};

		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%);

		width: 8px;
		height: 8px;

		background-color: var(--light-green-color);
		border-radius: 50%;
	}
`

export const Label = styled.p<{ currentMonth?: boolean }>`
	font-weight: 700;
	color: ${({ currentMonth }) => (currentMonth ? '#9D9D9D' : '#E1E1E1')};
`
