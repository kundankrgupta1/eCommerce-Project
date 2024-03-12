import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/slider1.jpg"
import img2 from "../../assets/slider2.jpg"
import img3 from "../../assets/slider3.png"
import { Box } from "@chakra-ui/react";
const Slider = () => {

	return (
		<Box my={{ base: "10px", sm: "10px", md: "20px", lg: "30px" }}>
			<Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={true} showIndicators={true} stopOnHover={true} transitionTime={1000}>
				<div>
					<img src={img1} />
				</div>
				<div>
					<img src={img2} />
				</div>
				<div>
					<img src={img3} />
				</div>
			</Carousel>
		</Box>
	)
}

export default Slider