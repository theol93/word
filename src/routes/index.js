import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Page404 from '../components/404/index'
import Loader from '../components/loader/index'
import Home from '../containers/home/index'

export default function App(props) {

	const {api, setWords} = props
	return (
		<Router>
			<nav>
				<Switch>
					<Route exact path="/">
						<Home
						api={api}
						setWords={setWords}
						/>
					</Route>
					<Route path="/loader">
						<Loader />
					</Route>
					<Route path="*">
						<Page404 />
					</Route>
				</Switch>
			</nav>
		</Router>
	)
}
