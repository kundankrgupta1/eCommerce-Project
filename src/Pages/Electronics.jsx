import { Box, Button, Image, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";

const Electronics = () => {

	const [data, setData] = useState([])
	const [sorting, setSorting] = useState(null);

	async function getData() {
		let URL; 
		if (sorting === null) {
			URL = "https://fakestoreapi.com/products/category/electronics";
		} else if (sorting !== null) {
			URL = `https://fakestoreapi.com/products/category/electronics?sort=${sorting}`
		}

		try {
			const response = await fetch(URL)
			const finalData = await response.json();
			setData(finalData)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getData();
	}, [sorting])


	function handleSorting(e) {
		let sort = e.target.value === "default" ? "" : e.target.value === "low" ? "asc" : "desc";
		setSorting(sort)
	}


	return (
		<Box
			maxWidth='1300px'
			m='auto'
			mt="10px"
		>
			<Box display='flex' gap={10} mb={5} mt={5}>
				<Text display={{ base: "none", sm: "none", md: "block" }} border='1px solid #E71580' width='fit-content' py={1} px={5} rounded={10} bg='#E71580' color='white' fontWeight={700} fontSize={20} textTransform='capitalize'>shop for electronics</Text>
				<Select width='fit-content' onChange={handleSorting}>
					<option value="default">Sort by Price</option>
					<option value="low">Price Low to High</option>
					<option value="high">Price High to Low</option>
				</Select>
			</Box>
			<SimpleGrid
				columns={{ base: "2", sm: "2", md: "3", lg: "4" }}
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

export default Electronics