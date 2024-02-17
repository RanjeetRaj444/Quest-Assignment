import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Section = ({ ele, disabled }) => {
	return (
		<NavLink
			className={({ isActive }) => (isActive ? "active" : "links")}
			to={ele.url}
		>
			{ele.title}
		</NavLink>
	);
};

export default Section;
