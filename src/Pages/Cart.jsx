import { Box } from "@chakra-ui/react"


const Cart = () => {
	return (
		<Box
			maxWidth='1300px'
			m='auto'
			mt="10px"
			border='2px solid var(--default-color)'
			rounded={20}
			p={20}
		>
			<Box shadow='xl' textAlign='center'>

				Your cart is empty
			</Box>
		</Box>
	)
}

export default Cart