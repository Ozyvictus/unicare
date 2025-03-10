import React from "react";
import '../style.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReportIcon from '@mui/icons-material/Report';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PsychologyIcon from '@mui/icons-material/Psychology';
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
		link: "/home",
	},
	{
		title: "Appointment",
		icon: <MedicalServicesIcon color="auction" />,
		link: "/home",
	},
	{
		title: "Mental Health",
		icon: <PsychologyIcon color="auction" />,
		link: "/home",
	},
];

function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="logo">
				<div className="logo-circle">
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
