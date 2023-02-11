import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function About() {
	return <div>
		<h1>About us</h1>
	</div>
}

function Contacts() {
	return <div>
		<h1>Contacts</h1>
	</div>
}

function Home() {
	return <div>
		<h1>Home</h1>
	</div>
}

const styles = {
	ul: {
		listStyleType:"none",
		display:"flex",
		gap:'2em'
	}
}

export default function (props) {
	return (
		<BrowserRouter>
			<nav>
				<ul style={styles.ul}>
					<li><Link to="/">Home page</Link></li>
					<li><Link to="/about">About page</Link></li>
					<li><Link to="/contacts">Contacts page</Link></li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/about" element={<About/>} />
				<Route path="/contacts" element={<Contacts/>} />
			</Routes>
		</BrowserRouter>
  )
}