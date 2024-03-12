import mens from "../assets/mens.webp"
import womens from "../assets/womens.webp"
import electronics from "../assets/electronics.png"
import jewellery from "../assets/jewellery.png"
import { Box, Center, Flex, Image, Stack, } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Slider from "../Components/Slider/Slider"
import Shop from "../Components/Others/Shop"

const Home = () => {

	const data = [
		{ img: mens, name: "mens", link: "/mens" },
		{ img: womens, name: "womens", link: "/womens" },
		{ img: electronics, name: "electronics", link: "/electronics" },
		{ img: jewellery, name: "jewellery", link: "/jewellery" },
	]

	return (
		<>
			<Stack w={{ sm: "480px", md: "768px", lg: "992px", xl: "1280px" }} maxWidth="1300px" m='auto' mt={2}>
				<Flex justifyContent='space-around' flexWrap='wrap'>
					{
						data.map((e, ind) =>
							<Box key={ind}
								border='1px solid black'
								h={{ base: '75px', sm: "75px", md: "130px", lg: "150px" }}
								w={{ base: '75px', sm: "75px", md: "130px", lg: "150px" }}
								textAlign='center'
								shadow='lg'
								rounded={10}
								p={1}
							>
								<Link to={e.link}>
									<Image src={e.img} h='100%' m='auto' />
									<Center
										fontWeight='bold'
										textTransform='capitalize'
										rounded={10}
										py={0}
										px={1}
										textColor='#fff'
										bg='#E71580'
										fontSize={{ base: "10px", sm: "10px", md: "15px", lg: "18px" }}
									>
										{e.name}
									</Center>
								</Link>
							</Box>
						)
					}
				</Flex>
				<Slider />
				<Shop />
			</Stack>
		</>
	)
}

export default Home
