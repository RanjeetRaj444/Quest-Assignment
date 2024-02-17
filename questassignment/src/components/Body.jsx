import React, { useEffect, useState } from "react";
import "../styles/Body.css";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error.jsx";
import Badges from "./Badges";
import Section from "./Buttons/Section.jsx";
import { Heading, Text, Spinner } from "@chakra-ui/react";
const Body = () => {
	const [points, setPoints] = useState(0);
	const [rank, setRank] = useState(0);
	const [level, setLevel] = useState(0);
	const [profilePic, setProfilePic] = useState("");

	const section = [
		{
			url: "/membersip",
			title: "Membership",
		},
		{
			url: "/badges/Badges",
			title: "Badges",
		},
		{
			url: "/pointsHistory/Points Histor",
			title: "Points History",
		},
	];
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
	function onLoad() {
		fetch(
			"https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp",
			options,
		)
			.then((response) => response.json())
			.then((response) => {
				setPoints(response.data);
				setLevel(response.tier);
			})
			.catch((err) => console.error(err));

		fetch(
			"https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-leaderboard-rank",
			options,
		)
			.then((response) => response.json())
			.then((response) => {
				setRank(response.data.position);
			})
			.catch((err) => console.error(err));

		fetch(
			"https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08",
			options,
		)
			.then((response) => response.json())
			.then((response) => setProfilePic(response.data.imageUrl))
			.catch((err) => console.error(err));
	}

	useEffect(() => {
		onLoad();
	}, []);
	return (
		<div>
			{profilePic === "" ? (
				<div className="loader">
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				</div>
			) : (
				<div id="body">
					<div className="profile-pic-container">
						<div className="profile-pic">
							<div className="pic-container">
								<img className="profile-image" src={profilePic} alt="img" />
							</div>
						</div>
						<Heading className="name">Rich Explorer</Heading>
					</div>
					<div className="body-main">
						<div className="result-container">
							<div>
								<h2>{points}</h2>
								<p>Points</p>
							</div>
							<div>
								<h2>{`#${rank}`}</h2>
								<p>Rank</p>
							</div>
							<div>
								<h2>{level}</h2>
								<p>Level</p>
							</div>
						</div>
						<div>
							<nav className="section-container">
								{section.map((ele) => {
									return ele.num === "" ? (
										<Text>Loading</Text>
									) : (
										<Section key={ele.url} ele={ele} />
									);
								})}
							</nav>
							<div className="section-body">
								<Routes>
									<Route path="/members" element={"Not found"} />
									<Route path="/badges/:params" element={<Badges />} />
									<Route path="/pointsHistor/:params" element={""} />
									<Route path="*" element={<Error />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Body;
