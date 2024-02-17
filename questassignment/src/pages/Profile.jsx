import React from "react";
import { GoChevronLeft } from "react-icons/go";
import "../styles/Profile.css";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";

const Profile = () => {

	return (
		<div className="main">
			<div className="header">
				<div className="navigation">
					<GoChevronLeft className="nav-icon" />
				</div>
				<div className="heading">
					<h2>Profile</h2>
				</div>
			</div>
			<div className="body">
				<Body />
			</div>
			<div className="footer">
				<Sidebar />
			</div>
		</div>
	);
};

export default Profile;
