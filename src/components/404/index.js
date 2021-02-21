import React from 'react'
import logo from './page404.gif'
import './index.css'

export default function () {
	return (
		<div component="main" maxwidth="sm" align="center" className="div">
			<div className="head">Страница не найдена...</div>
			<div>
				<img src={logo} className="div" alt={404} />
			</div>
		</div>
	)
}
