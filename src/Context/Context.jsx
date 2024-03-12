import PropTypes from 'prop-types';
import { createContext, useState } from "react"

export const AuthContext = createContext();
const Context = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

Context.propTypes = {
	children: PropTypes.node
};

export default Context
