import { MonthProps } from '@/types/props/CalendarProps'
import { FC } from 'react'
import { Day, Label, Week } from './Month.styled'

const Month: FC<MonthProps> = ({ weeksFromSelectedMonth }) => {
	return (
		<div>
			{weeksFromSelectedMonth.map((week, index) => (
				<Week key={index}>
					{week.map((day, index) => (
						<Day key={index}>
							<Label>{day?.getDate()}</Label>
						</Day>
					))}
				</Week>
			))}
		</div>
	)
}

export default Month
