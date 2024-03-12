import { Box, Button, Center, FormControl, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {


	const navigate = useNavigate();
	const [input, setInput] = useState({
		"name": "",
		"email": "",
		"password": "",
	});
	function HandleSubmit(e) {
		e.preventDefault();

		localStorage.setItem("user", JSON.stringify(input));
		navigate("/login");
	}

	return (
		<Box maxWidth='500px' m='auto'>
			<form action="" className="py-4 px-10 shadow-2xl rounded-2xl" onSubmit={HandleSubmit}>
				<Center fontSize='50px' textTransform='uppercase' mb={5} color='#E71580'><span className="underline">si</span>gnup</Center>
				<FormControl display="flex" flexDirection='column' gap={35}>
					<Input type="text" name="name" id="name" placeholder="Name"
						onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })
						} />

					<Input type="email" name="email" id="email" placeholder="Email"
						onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />

					<Input type="password" name="password" id="password" placeholder="Password" required
						onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
					<Button type="submit" bg='#E71580' _hover={{ bg: "#E71580" }} color='white'>Signup</Button>
					<Text mb={5}>By continuing, you agree to Conditions of Use and Privacy Notice.</Text>
				</FormControl>
				<Box>
					<hr />
					<Text mt={5} mb={2} display='flex' justifyContent='flex-start' alignItems='center'><VscDebugBreakpointData />&nbsp;Already have an account?</Text>
					<Link to="/login"><Button type="button" w='100%' mb={5} border='2px solid var(--default-color)'>Login</Button></Link>
				</Box>
			</form>
		</Box>
	)
}

export default Signup

// <div class="inline-block shadow-md" style="box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
//     <!-- Your content here -->
// </div>
