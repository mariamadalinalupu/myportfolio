import { Routes, Route } from "react-router-dom"

import "./App.css"
import Home from "./components/Home"
import Layout from "./components/Layout"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact/ContactSection"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<Home />}
					/>

					<Route
						path="/about"
						element={<About />}
					/>

					<Route
						path="/portfolio"
						element={<Portfolio />}
					/>

					<Route
						path="/contact"
						element={<Contact />}
					/>
				</Route>
			</Routes>
		</div>
	)
}

export default App
