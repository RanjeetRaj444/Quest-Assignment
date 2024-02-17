import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDisclosure } from "@chakra-ui/react";
import "../styles/Badges.css";
import { useParams } from "react-router-dom";
import Modalq from "./Modal";

const Badges = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [data, setData] = useState([]);

	function onLoad() {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
				userid: "u-a2399489-9cd0-4c94-ad12-568379202b08",
				token:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
			},
		};

		fetch(
			"https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/badges",
			options,
		)
			.then((response) => response.json())
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => console.error(err));
	}
	function handleClick() {}
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		// useCss: true,
	};

	useEffect(() => {
		onLoad();
	}, []);

	return (
		<div className="slider-container">
			{data && data.length < 1 ? (
				<p>Loading...</p>
			) : (
				<Slider {...settings} className="slider">
					{data.map((ele) => (
						<div key={ele.imageUrl} className="badges-container">
							<Modalq ele={ele} />
						</div>
					))}
				</Slider>
			)}
		</div>
	);
};

export default Badges;
