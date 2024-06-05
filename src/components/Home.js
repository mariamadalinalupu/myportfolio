import blackLogo from "./blacklogo.png"
import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import Resume from "./Resume"

const Home = () => {
	return (
		<div className="home-page flex items-start text-left justify-center z-0 max-w-7xl p-4 gap-4">
			<div>
			<img
				src={blackLogo}
				alt="black logo"
				className="w-48 mx-auto mt-10 lg:block lg:max-w-xs xl:max-w-m"
			></img>
			</div>
			<div className="max-w-2xl">
				<p className="mb-5">
					<span>
						<FontAwesomeIcon icon={faLocationDot} />
					</span>{" "}
					Bournemouth, UK
				</p>{" "}

				
				<h1 className="linear-wipe text-xl mb-5 font-bold font-poppins inline-block">
					<span className="text-3xl md:text-4xl lg:text-5xl block ">
						Maria Lupu
					</span>
					
					<span className="text-6xl md:text-8xl lg:text-9xl block">
						web
					</span>
					
					<span className="text-6xl md:text-8xl lg:text-9xl block ">
						developer
					</span>
				</h1>
				



				<p className="my-8 md:my-16 text-neutral xl:leading-loose">
					I’m a Web Developer based in Bournemouth, UK. I have wholeheartedly
					embraced web development as my professional pursuit. My enthusiasm
					lies in crafting dynamic applications for the web.
				</p>

				<Resume />
				
				<NavLink to="/portfolio">
					<a
						href="/Portfolio.js"
						target="_blank"
						className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-medium text-grey rounded-lg group bg-gradient-to-br from-accent to-accentlighter group-hover:from-accent group-hover:to-accentlighter hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-accebt dark:focus:ring-accentdarker"
					>
						<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-grey rounded-md group-hover:bg-opacity-0">
							Explore My Work
						</span>
					</a>
				</NavLink>
			</div>
		</div>
	)
}

export default Home
