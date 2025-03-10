import React from "react";
import { useNavigate } from "react-router-dom";
import '../style.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReportIcon from '@mui/icons-material/Report';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealingIcon from '@mui/icons-material/Healing';
import logo from "../assets/logo.png";

const Sidebar_Data = [
	{ title: "Home", icon: <HomeIcon color='action' />, link: "/home" },
	{ title: "Accident Report", icon: <ReportIcon color='action' />, link: "/accident" },
	{ title: "Profile", icon: <AccountCircleIcon color='action' />, link: "/profile" },
	{ title: "Appointment", icon: <MedicalServicesIcon color="action" />, link: "/booking" },
	{ title: "Medicine Request", icon: <HealingIcon color="action" />, link: "/medicine-request" },
];

function Sidebar() {
	const navigate = useNavigate();

	return (
		<aside className="sidebar">
			<div className="logo">
				<div className="logo-circle">
					<img src={logo} alt="Unicare" className="logo-icon" />
				</div>
			</div>

			<nav className="sidebar-nav">
				<ul>
					{Sidebar_Data.map((item, index) => (
						<li key={index} className="sidebar-item" onClick={() => navigate(item.link)}>
							<div className="sidebar-icon">{item.icon}</div>
							<span className="sidebar-title">{item.title}</span>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
