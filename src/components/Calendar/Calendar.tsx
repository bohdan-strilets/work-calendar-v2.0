import { FC } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import {
	CalendarWrapper,
	ControllerItem,
	Controllers,
	Day,
	DayNumber,
	Week,
	WeekDayName,
	WeekDayText,
	WeekDays,
	Wrapper,
} from './Calendar.styled'

const Calendar: FC = () => {
	return (
		<Wrapper>
			<Controllers>
				<ControllerItem>
					<IoIosArrowBack size={30} />
				</ControllerItem>
				<ControllerItem>
					<p>February 2017</p>
				</ControllerItem>
				<li>
					<IoIosArrowForward size={30} />
				</li>
			</Controllers>

			<WeekDays>
				<WeekDayName currentDay={true}>
					<WeekDayText>Mon</WeekDayText>
				</WeekDayName>
				<WeekDayName>
					<WeekDayText>Tue</WeekDayText>
				</WeekDayName>
				<WeekDayName>
					<WeekDayText>Wed</WeekDayText>
				</WeekDayName>
				<WeekDayName>
					<WeekDayText>Thu</WeekDayText>
				</WeekDayName>
				<WeekDayName>
					<WeekDayText>Fri</WeekDayText>
				</WeekDayName>
				<WeekDayName>
					<WeekDayText>Sat</WeekDayText>
				</WeekDayName>
				<WeekDayName>
					<WeekDayText>Sun</WeekDayText>
				</WeekDayName>
			</WeekDays>

			<CalendarWrapper>
				<Week>
					<Day>
						<DayNumber>29</DayNumber>
					</Day>
					<Day>
						<DayNumber>30</DayNumber>
					</Day>
					<Day>
						<DayNumber>31</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>1</DayNumber>
					</Day>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>2</DayNumber>
					</Day>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>3</DayNumber>
					</Day>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>4</DayNumber>
					</Day>
				</Week>
				<Week>
					<Day>
						<DayNumber currentMonth={true}>5</DayNumber>
					</Day>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>6</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>7</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>8</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>9</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>10</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>11</DayNumber>
					</Day>
				</Week>
				<Week>
					<Day>
						<DayNumber currentMonth={true}>12</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>13</DayNumber>
					</Day>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>14</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>15</DayNumber>
					</Day>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>16</DayNumber>
					</Day>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>17</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>18</DayNumber>
					</Day>
				</Week>
				<Week>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>19</DayNumber>
					</Day>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>20</DayNumber>
					</Day>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>21</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>22</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>23</DayNumber>
					</Day>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>24</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>25</DayNumber>
					</Day>
				</Week>
				<Week>
					<Day>
						<DayNumber currentMonth={true}>26</DayNumber>
					</Day>
					<Day isEvent={true}>
						<DayNumber currentMonth={true}>27</DayNumber>
					</Day>
					<Day>
						<DayNumber currentMonth={true}>28</DayNumber>
					</Day>
					<Day>
						<DayNumber>1</DayNumber>
					</Day>
					<Day>
						<DayNumber>2</DayNumber>
					</Day>
					<Day>
						<DayNumber>3</DayNumber>
					</Day>
					<Day>
						<DayNumber>4</DayNumber>
					</Day>
				</Week>
			</CalendarWrapper>
		</Wrapper>
	)
}

export default Calendar
