import { FC } from 'react'
import Calendar from './components/Calendar'
import DayInformation from './components/DayInformation'

const App: FC = () => {
	return (
		<>
			<Calendar />
			<DayInformation />
		</>
	)
}

export default App
