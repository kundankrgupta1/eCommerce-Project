import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Jewellery = () => {

	const [data, setData] = useState([])

	async function getData() {
		try {
			const response = await fetch("https://fakestoreapi.com/products/category/jewelery?limit=5")
			const finalData = await response.json();
			setData(finalData)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getData();
	})
	return (
		<Box
			mt="10px"
		>
			<SimpleGrid
				columns={{ base: "2", sm: "2", md: "3", lg: "5" }}
				spacing={5}
			>
				{
					data.map((e, ind) =>
						<Box
							key={ind}
							border='2px solid #E71580'
							rounded={10}
							p={2}
						>

							<Link to={`/product/${e.id}`}>

								<Image src={e.image}
									h={{ base: "80px", sm: "80px", md: "130px", lg: "120px" }}
									w={{ base: "80px", sm: "80px", md: "130px", lg: "120px" }}
									m='auto'
								/>

								<Text
									m="auto"
									whiteSpace='nowrap'
									overflow='hidden'
									textOverflow='ellipsis'
									width={{ base: "110px", sm: "110px", md: "140px", lg: "160px" }}
									fontSize={{ base: "13px", sm: "13px", md: "18px" }}
								>
									{e.title}
								</Text>

								<Text
									fontWeight={700}
									fontSize={{ base: "13px", sm: "13px", md: "18px" }}
									textAlign='center'
								>
									₹ {e.price}
								</Text>

							</Link>

							<Box
								display='flex'
								gap={2}
								mt={2}
								justifyContent='center'
								width='100%'
							>
								<Button
									bg="gold"
									_hover={{ bg: "gold" }}
									width='100%'
								>
									<FaCartPlus />
								</Button>

								<Link to={`/product/${e.id}`}>
									<Button
										bg="blue"
										color="white"
										_hover={{ color: "white" }}
										width='100%'
									>
										<BsFillEyeFill />
									</Button>
								</Link>

							</Box>
						</Box>
					)
				}
			</SimpleGrid>
		</Box>
	)
}

export default Jewellery