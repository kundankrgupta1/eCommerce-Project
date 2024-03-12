import { Box, Button, Text } from "@chakra-ui/react";
import Mens from "./Mens";
import Womens from "./Womens";
import Jewellery from "./Jewellery";
import Electronics from "./Electronics";
import { Link } from "react-router-dom";

const Shop = () => {

	const shopData = [
		{ name: "shop for mens", components: <Mens />, button: "view more" },
		{ name: "shop for womens", components: <Womens />, button: "view more" },
		{ name: "shop for jewellery", components: <Jewellery />, button: "view more" },
		{ name: "shop for electronics", components: <Electronics />, button: "view More" }
	]

	return (
		<Box>
			{
				shopData.map((e, ind) =>
					<Box key={ind} border='2px solid #E71580' rounded={10} p={5} mb={10}>
						<Text border='1px solid #E71580' width='fit-content' py={1} px={5} rounded={10} bg='#E71580' color='white' fontWeight={700} fontSize={20} textTransform='capitalize'>{e.name}</Text>
						{e.components}
						<Link to='/mens'>
							<Button _hover={{ color: "white" }} bg='#E71580' float='right' mt={1} textTransform='capitalize' color='white'>{e.button}</Button></Link>
					</Box>
				)
			}
		</Box>
	)
}

export default Shop
