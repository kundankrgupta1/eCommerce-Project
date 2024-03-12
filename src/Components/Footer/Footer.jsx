import { Box, Image } from '@chakra-ui/react'
import logo from "../../assets/main-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
	return (
		<Box flexDirection={{ base: "column", md: "row" }} bg='black' color='white' display='flex' justifyContent='space-evenly' maxWidth='1300px' m='auto' px={{base: "10", sm:"10", md:"20"}} py={10}>

			<Box p={5} color='white'>
				<Image src={logo} alt='logo' mb={10} h={20} />
				<Box display='flex' fontSize={40} gap={5}>
					<FaFacebookF /> <FaTwitter /> <FaLinkedinIn /> <FaPinterestP />
				</Box>
			</Box>

			<Box fontSize={20} display='flex' gap={ {base: "15px", sm: "15px", md: "30px"}}>
				<Box>
					<p>Quick Menu</p>
					<p>Home</p>
					<p>Mens</p>
					<p>Womens</p>
					<p>Jewellery</p>
					<p>Electronics</p>
				</Box>

				<Box>
					<p>Help</p>
					<p>Track Order</p>
					<p>Returns</p>
					<p>Shipping</p>
					<p>FAQ</p>
					<p>Offers</p>
				</Box>
			</Box>
		</Box>
	)
}

export default Footer