import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Context from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Context>
		<ChakraProvider>
			<ColorModeScript initialColorMode="light"></ColorModeScript>
			<App />
		</ChakraProvider>
	</Context>
)
