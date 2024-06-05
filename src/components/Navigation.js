import { Link, NavLink } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faAddressCard,
	faDoorOpen,
	faEnvelopeCircleCheck,
	faFolderOpen,
	faLaptopCode,
} from "@fortawesome/free-solid-svg-icons"

import {
	faLinkedin,
	faInstagram,
	faGithub,
} from "@fortawesome/free-brands-svg-icons"

import logo from './logo.png'
const Navigation = () => {
	return (
		<div className="nav-bar w-14 h-[100vh] bg-grey fixed top-0 left-0 p-3 flex flex-col justify-center">
			<Link
				className="logo mb-auto"
				to="/"
			>
				<div className="text-3xl text-main hover:text-mainlighter">
					<img src={logo} alt='logo image'/>
				</div>
			</Link>

			<nav className="mb-auto">
				<NavLink
					exact="true"
					activeclassname="active"
					to="/"
				>
					<FontAwesomeIcon
						icon={faDoorOpen}
						className="text-main text-3xl hover:text-mainlighter my-4"
					/>
				</NavLink>

				<NavLink
					exact="true"
					activeclassname="active"
					to="/about"
				>
					<FontAwesomeIcon
						icon={faAddressCard}
						className="text-main text-3xl hover:text-mainlighter my-4"
					/>
				</NavLink>

				<NavLink
					exact="true"
					activeclassname="active"
					to="/portfolio"
				>
					<FontAwesomeIcon
						icon={faFolderOpen}
						className="text-main text-3xl hover:text-mainlighter my-4"
					/>
				</NavLink>

				<NavLink
					exact="true"
					activeclassname="active"
					to="/contact"
				>
					<FontAwesomeIcon
						icon={faEnvelopeCircleCheck}
						className="text-main text-3xl hover:text-mainlighter my-4"
					/>
				</NavLink>
			</nav>

			<ul className="text-base text-center">
				<li>
					<a href='https://www.instagram.com/' target="blank"><FontAwesomeIcon
						icon={faInstagram}
						className="text-main hover:text-mainlighter my-2 "
					/></a>
				</li>
				<li>
					<a href='https://www.linkedin.com' target="blank"><FontAwesomeIcon
						icon={faLinkedin}
						className="text-main hover:text-mainlighter my-2 "
					/></a>
				</li>
				<li>
					<a href='https://www.github.com' target="blank">
					<FontAwesomeIcon
						icon={faGithub}
						className="text-main hover:text-mainlighter my-2 "
					/>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Navigation
