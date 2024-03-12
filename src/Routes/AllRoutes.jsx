import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Mens from "../Pages/Mens"
import Womens from "../Pages/Womens"
import Electronics from "../Pages/Electronics"
import Jewellery from "../Pages/Jewellery"
import Login from "../Pages/Login"
import Cart from "../Pages/Cart"
import SingleProductPage from "../Pages/SingleProductPage"
import Signup from "../Pages/Signup"
import PrivateRoute from "./PrivateRoute"

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mens" element={<Mens />} />
				<Route path="/womens" element={<Womens />} />
				<Route path="/electronics" element={<Electronics />} />
				<Route path="/jewellery" element={<Jewellery />} />
				<Route path="/cart" element={
					<PrivateRoute>
						<Cart />
					</PrivateRoute>
				} />
				<Route path="/product/:id" element={<SingleProductPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	)
}

export default AllRoutes