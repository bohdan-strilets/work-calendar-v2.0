import useRenderCalendar from '@/hooks/useRenderCalendar'
import { FC } from 'react'
import { Wrapper } from './Calendar.styled'
import Controllers from './Controllers'
import Month from './Month'
import WeekDays from './WeekDays'

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
	const currentDay = getCurrentDay()

	return (
		<Wrapper>
			<Controllers
				handleNextMonthClick={handleNextMonthClick}
				handlePrevMonthClick={handlePrevMonthClick}
				monthYear={monthYear}
			/>

			<WeekDays currentDay={currentDay} />
			<Month weeksFromSelectedMonth={weeksFromSelectedMonth} />
		</Wrapper>
	)
}

export default Calendar
