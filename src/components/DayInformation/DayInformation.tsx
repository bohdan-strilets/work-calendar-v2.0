import { FC } from 'react'
import { BsPlus, BsSunFill } from 'react-icons/bs'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import {
	Backdrop,
	Button,
	ButtonLabel,
	DateBar,
	Day,
	Header,
	Number,
	Task,
	TaskBar,
	Temperature,
	TemperatureGroup,
	Time,
	TimeBar,
	WeatherBar,
	Wrapper,
} from './DayInformation.styled'

const DayInformation: FC = () => {
	return (
		<Backdrop>
			<Wrapper>
				<Header>
					<DateBar>
						<Number>19</Number>
						<Day>sunday</Day>
					</DateBar>
					<WeatherBar>
						<WiMoonAltFirstQuarter size={24} />
						<TemperatureGroup>
							<BsSunFill size={18} />
							<Temperature>11 °</Temperature>
						</TemperatureGroup>
						<Time>16:10</Time>
					</WeatherBar>
				</Header>
				<ul>
					<Task>
						<TimeBar>
							<p>12:30</p>
							<p>14:00</p>
						</TimeBar>
						<TaskBar>
							<p>Lunch with husband</p>
						</TaskBar>
					</Task>
					<Task>
						<TimeBar isCurrent={true}>
							<p>15:00</p>
							<p>16:30</p>
						</TimeBar>
						<TaskBar isCurrent={true}>
							<p>Daily UI</p>
						</TaskBar>
					</Task>
					<Task>
						<TimeBar>
							<p>19:00</p>
							<p>22:00</p>
						</TimeBar>
						<TaskBar>
							<p>Freelance work</p>
						</TaskBar>
					</Task>
					<Task>
						<TimeBar>
							<p>22:30</p>
							<p>23:30</p>
						</TimeBar>
						<TaskBar>
							<p>Clean apartment</p>
						</TaskBar>
					</Task>
				</ul>
				<Button type="button">
					<BsPlus size={24} />
					<ButtonLabel>Add event</ButtonLabel>
				</Button>
			</Wrapper>
		</Backdrop>
	)
}

export default DayInformation
