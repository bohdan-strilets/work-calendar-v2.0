import styled from '@emotion/styled'

export const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
`

export const Controllers = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 50px;
	color: var(--light-green-color);
`

export const ControllerItem = styled.li`
	font-size: 34px;
	font-weight: 700;
`

export const ControllerBtn = styled.button`
	background-color: transparent;
	color: var(--light-green-color);

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: var(--gray-color);
	}
`

export const WeekDays = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 50px 0;
`

export const WeekDayName = styled.li<{ currentDay?: boolean }>`
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

export const WeekDayText = styled.p`
	text-transform: uppercase;
	font-weight: 700;
`

export const CalendarWrapper = styled.div``

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

export const DayNumber = styled.p<{ currentMonth?: boolean }>`
	font-weight: 700;
	color: ${({ currentMonth }) => (currentMonth ? '#9D9D9D' : '#E1E1E1')};
`
