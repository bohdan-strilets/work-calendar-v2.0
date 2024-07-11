import { DaysWeek } from '@/default-data/days-week'
import { WeekDaysProps } from '@/types/props/CalendarProps'
import { FC } from 'react'
import { Item, Label, List } from './WeekDays.styled'

const WeekDays: FC<WeekDaysProps> = ({ currentDay }) => {
	return (
		<List>
			{DaysWeek.map(({ id, name }) => (
				<Item currentDay={currentDay === id} key={id}>
					<Label>{name}</Label>
				</Item>
			))}
		</List>
	)
}

export default WeekDays
