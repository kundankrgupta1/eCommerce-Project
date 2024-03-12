import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {

	const [data, setData] = useState([])
	const { id } = useParams();

	async function getData() {
		try {
			const response = await fetch(`https://fakestoreapi.com/products/${id}`)
			const finalData = await response.json();
			setData(finalData)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getData();
	})

	const { title, price, description, category, image } = data;

	return (
		<Box
			maxWidth='1300px'
			m='auto'
			mt={10}
		>
			<Box
				display={{ md: "flex", lg: "flex" }}
				gap='3%'
			>
				<Box
					flexBasis="40%"
					display='flex'
					justifyContent='center'
				>
					<Image
						src={image}
						h={80}
					/>
				</Box>
				<Box
					flexBasis="57%"
					display='flex'
					flexDirection='column'
					gap={5}
					p={{ base: "15px", sm: "15px" }}
				>
					<Text
						as="h1"
						fontWeight={500}
						fontSize='20px'
					>
						{title}
					</Text>
					<Box
						display='flex'
						gap={2}
						alignItems='flex-end'
						mt={-3}
					>
						<Text
							bg='#388E3C'
							// py={1}
							px={1}
							borderRadius={3}
							color='gold'
						>
							4.5 ★
						</Text>
						<Text
							fontSize={14}
						>
							34 reviews
						</Text>
					</Box>
					<Text
						fontWeight={700}
						fontSize='30px'>
						₹ {price}
					</Text>
					<Text
						fontWeight={400}
						fontSize='15px'
					>
						{description}
					</Text>
					<Text
						textTransform='uppercase'
						color='blue'
						fontWeight={700}
					>
						{category}
					</Text>
					<Box
						display="flex"
						gap={4}
					>
						<Button
							bg="gold"
							_hover={{ bg: "gold" }}
						>
							Add to Cart
						</Button>
						<Button
							bg="blue"
							color="white"
							_hover={{ color: "white" }}
						>
							Buy Now
						</Button>
					</Box>
				</Box>
			</Box>

		</Box>
	)
}

export default SingleProductPage