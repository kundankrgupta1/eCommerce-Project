import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Image, List, ListItem, Spacer, Text, useColorMode, useDisclosure } from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"
import { FcHome, FcUnlock, FcBusinessman, FcBusinesswoman, FcElectronics, FcDebian } from "react-icons/fc";
import { FiSun, FiMoon } from "react-icons/fi";
import logo from "../../assets/main-logo.png";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const Navbar = () => {

	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";
	const { isAuth, setIsAuth } = useContext(AuthContext);

	let Links = [
		{ name: "home", link: "/", icon: <FcHome /> },
		{ name: "mens", link: "/mens", icon: <FcBusinessman /> },
		{ name: "womens", link: "womens", icon: <FcBusinesswoman /> },
		{ name: "electronics", link: "/electronics", icon: <FcElectronics /> },
		{ name: "jewellery", link: "/jewellery", icon: <FcDebian /> }
	]


	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Drawer placement="right" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='2px'>Menu</DrawerHeader>
					<DrawerBody p={0}>
						<List display='flex' flexDirection="column">
							{
								Links.map((e, index) =>
									<ListItem key={index}>
										<Link to={e.link}><Button bg="none" textTransform="uppercase">{e.icon}&nbsp;{e.name}</Button></Link>
									</ListItem>
								)
							}
						</List>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			<Flex h={{ sm: "75px", md: "80px", lg: "90px" }} boxShadow="base" align="center" py="2" px="2" maxWidth="1300px" m='auto'>
				<Link to="/"><Image src={logo} h={{ base: "30px", sm: "40px", md: "50px", lg: "70px" }} /></Link>
				<Spacer />
				<Flex display={{ base: "none", sm: "none", md: "none", lg: "block", xl: "block" }} >
					<List display='flex' gap={2}>
						{
							Links.map((e, index) =>
								<ListItem key={index}>
									<Link to={e.link}><Button variant='none' textTransform="uppercase">{e.icon}&nbsp;{e.name}</Button></Link>
								</ListItem>
							)
						}
					</List>
					{/* #E71580 */}
				</Flex>
				<Spacer />
				<Flex gap={{ base: "2", sm: "2", md: "4", lg: "3" }} display="flex" alignItems="center">
					<Box display='flex'>
						<Link to="/cart">
							<FaCartPlus className="relative" />
							<Text
								className="absolute"
								bg='#E71580'
								color='white'
								rounded={50}
								px={2}
								py={0.5}
								mx={{ base: "2", sm: "2", md: "2", lg: "2" }}
								my={{ base: "-2", md: "-3", lg: "-3.5" }}
								fontSize={{ base: "9px", sm: "12px", md: "10px", lg: "12px" }}
							>
								0
							</Text>
						</Link>
					</Box>
					<Spacer />
					<Box>
						<IconButton icon={isDark ? <FiSun /> : <FiMoon />} onClick={toggleColorMode} />
					</Box>
					<Spacer />
					<Link to="/login">
						<Button
							colorScheme='#E71580'
							variant='outline'
							fontSize={{ base: "12px", sm: "12px", md: "15px" }}
							px={{ base: "2" }}
							py={{ base: "1" }}
							onClick={() => setIsAuth(false)}
						>
							<FcUnlock />&nbsp;{isAuth ? "Logout" : "Login"}
						</Button>
					</Link>
					<Spacer />
					<IconButton fontSize='2xl' variant='ghost' onClick={onOpen} display={{ lg: "none" }}><FaBars /></IconButton>
				</Flex>
			</Flex>
		</>
	)
}

export default Navbar

