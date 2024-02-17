import React from "react";
import "../styles/Footer.css";
import { BsPersonFill } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { RiHome6Fill } from "react-icons/ri";
export default function Sidebar() {
	return (
		<div className="sidebar">
			<div>
				<button disabled>
					<RiHome6Fill className="logo " />
				</button>
			</div>
			<div>
				<button disabled>
					<FiSearch className="logo " />
				</button>
			</div>
			<div>
				<button disabled>
					<GiShoppingBag className="logo" />
				</button>
			</div>
			<div>
				<button className="button">
					<BsPersonFill className="logo " />
				</button>
			</div>
		</div>
	);
}
