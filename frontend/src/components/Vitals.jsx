import React from 'react';
import '../style.css'

function Vitals({ title, value, unit, icon, color }){
		return (
			<div className="vital-card">
				<div className={`vital-icon ${color}`}>
					<span className={`icon ${icon}`}></span>
				</div>
				<div className="vital-info">
					<p className="vital-title">{title}</p>
					<p className="vital-value">{value}<span className="vital-unit">{unit}</span></p>
				</div>
			</div>
		);
};

export default Vitals;
