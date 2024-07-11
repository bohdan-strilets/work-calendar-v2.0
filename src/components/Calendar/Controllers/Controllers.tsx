import { MonthsOfYear } from '@/default-data/months-of-year'
import { ControllersProps } from '@/types/props/CalendarProps'
import { FC } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Button, Item, List } from './Controllers.styled'

const Controllers: FC<ControllersProps> = ({
	handlePrevMonthClick,
	handleNextMonthClick,
	monthYear,
}) => {
	return (
		<List>
			<Item>
				<Button type="button" onClick={handlePrevMonthClick}>
					<IoIosArrowBack size={30} />
				</Button>
			</Item>
			<Item>
				<p>
					{MonthsOfYear[monthYear.month].name} {monthYear.year}
				</p>
			</Item>
			<Item>
				<Button type="button" onClick={handleNextMonthClick}>
					<IoIosArrowForward size={30} />
				</Button>
			</Item>
		</List>
	)
}

export default Controllers
