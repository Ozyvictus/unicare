import React from "react";
import '../style.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReportIcon from '@mui/icons-material/Report';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealingIcon from '@mui/icons-material/Healing';
import logo from "../assets/logo.png";

const Sidebar_Data = [
	{
		title: "Home",
		icon: <HomeIcon color="auction" />,
		link: "/home",
	},
	{
		title: "Accident Report ",
		icon: <ReportIcon color="auction" />,
		link: "/home",
	},
	{
		title: "Profile",
		icon: <AccountCircleIcon color="auction" />,
		link: "/profile",
	},
	{
		title: "Appointment",
		icon: <MedicalServicesIcon color="auction" />,
		link: "/home",
	},
	{
		title: "Medicine Request",
		icon: <HealingIcon color="auction" />,
		link: "/home",
	},
];

function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="logo">
				<div className="logo-circle">
				<img src={logo} alt="Unicare" className="logo-icon" />
				</div>
				</div>
				<div className="sidebar-nav">
					<ul>
						{Sidebar_Data.map((val, key) => {
							return (
								<li
									key={key}
									className="item"
									onCLick{...() => {
										window.location.pathname = val.link
									}}
								>
									<div>{val.icon}</div> </li>
							);
						})
						}
					</ul>

			</div>
		</aside>
	);
};


export default Sidebar;
