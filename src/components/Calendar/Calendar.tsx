import { DaysWeek } from '@/default-data/days-week'
import { MonthsOfYear } from '@/default-data/months-of-year'
import useRenderCalendar from '@/hooks/useRenderCalendar'
import { FC } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import {
	CalendarWrapper,
	ControllerBtn,
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
	const date = new Date('2024-07-25')
	const {
		getDaysOfMonth,
		getMonthYear,
		handleNextMonthClick,
		handlePrevMonthClick,
		getCurrentDay,
	} = useRenderCalendar(date)

	const weeksFromSelectedMonth = getDaysOfMonth()
	const monthYear = getMonthYear()

	return (
		<Wrapper>
			<Controllers>
				<ControllerItem>
					<ControllerBtn type="button" onClick={handlePrevMonthClick}>
						<IoIosArrowBack size={30} />
					</ControllerBtn>
				</ControllerItem>
				<ControllerItem>
					<p>
						{MonthsOfYear[monthYear.month].name} {monthYear.year}
					</p>
				</ControllerItem>
				<ControllerItem>
					<ControllerBtn type="button" onClick={handleNextMonthClick}>
						<IoIosArrowForward size={30} />
					</ControllerBtn>
				</ControllerItem>
			</Controllers>

			<WeekDays>
				{DaysWeek.map(({ id, name }) => (
					<WeekDayName currentDay={getCurrentDay() === id} key={id}>
						<WeekDayText>{name}</WeekDayText>
					</WeekDayName>
				))}
			</WeekDays>

			<CalendarWrapper>
				{weeksFromSelectedMonth.map((week, index) => (
					<Week key={index}>
						{week.map((day, index) => (
							<Day key={index}>
								<DayNumber>{day?.getDate()}</DayNumber>
							</Day>
						))}
					</Week>
				))}
			</CalendarWrapper>
		</Wrapper>
	)
}

export default Calendar
