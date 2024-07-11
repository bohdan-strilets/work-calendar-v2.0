import { MonthYear } from '../types/MonthYear'

export type ControllersProps = {
	handlePrevMonthClick: () => void
	handleNextMonthClick: () => void
	monthYear: MonthYear
}

export type WeekDaysProps = {
	currentDay: number
}

export type MonthProps = {
	weeksFromSelectedMonth: (undefined[] | Date[])[]
}
