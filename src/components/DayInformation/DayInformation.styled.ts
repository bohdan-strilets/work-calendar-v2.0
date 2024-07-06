import styled from '@emotion/styled'

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;

	background-color: rgba(255, 255, 255, 0.7);
	backdrop-filter: var(--blur-effect);
`

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: 470px;
	height: 100%;
	padding: 70px;

	color: var(--white-color);
	background-color: var(--light-green-color);
	box-shadow: var(--box-shadow);
`

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding-bottom: 40px;
	margin-bottom: 40px;

	border-bottom: 2px solid var(--white-color);
`

export const DateBar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Number = styled.p`
	font-size: 60px;
	line-height: 1;
	margin-bottom: 10px;
`

export const Day = styled.p`
	text-transform: uppercase;
`

export const WeatherBar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`

export const TemperatureGroup = styled.div`
	display: flex;
	align-items: center;
	margin: 5px 0;
`

export const Temperature = styled.p`
	margin-left: 8px;
	font-size: 20px;
`

export const Time = styled.p`
	font-size: 20px;
`

export const Task = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 15px;

	:last-child {
		margin-bottom: 0;
	}
`

export const TimeBar = styled.div<{ isCurrent?: boolean }>`
	position: relative;

	font-weight: 300;
	margin-right: 30px;

	::after {
		content: '';
		display: ${({ isCurrent }) => (isCurrent ? 'block' : 'none')};

		position: absolute;
		top: 50%;
		left: -30px;

		width: 8px;
		height: 8px;

		background-color: var(--white-color);
		border-radius: 50%;
	}
`

export const TaskBar = styled.div<{ isCurrent?: boolean }>`
	width: 100%;
	height: 100%;
	padding: 10px;

	background-color: rgba(
		255,
		255,
		255,
		${({ isCurrent }) => (isCurrent ? 0.4 : 0.2)}
	);
	border-radius: 5px;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	font-weight: 500;

	width: 100%;
	height: 40px;
	margin-top: 100%;

	background-color: transparent;
	color: var(--white-color);

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: var(--dark-green-color);
	}
`

export const ButtonLabel = styled.span`
	margin-left: 5px;
`
