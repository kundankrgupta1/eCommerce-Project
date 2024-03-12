import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from './Routes/AllRoutes'

function App() {

	const breakpoints = {
		base: "0em", // 0px
		sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
		md: "48em", // ~768px
		lg: "62em", // ~992px
		xl: "80em", // ~1280px
		"2xl": "96em", // ~1536px
	};
	console.log(breakpoints);


	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<AllRoutes />
			</BrowserRouter>
		</div>
	)
}

export default App