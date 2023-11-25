import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import SectionOne from './components/Sections/SectionOne'
import SectionTwo from './components/Sections/SectionTwo'
import SectionThree from './components/Sections/SectionThree'
import Footer from './components/Footer/Footer'
import SectionFour from './components/Sections/SectionFour'
import SectionFive from './components/Sections/SectionFive'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
		<div className="w-full h-full relative">
			<Header />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
			<Footer />
		</div>
		</>
	)
}

export default App
