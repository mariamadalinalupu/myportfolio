import AnimatedLetters from "./AnimatedLetters"
import Logo from "./blacklogo.png"
import Resume from "./Resume"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faCss3,
	faHtml5,
	faJsSquare,
	faReact,
} from "@fortawesome/free-brands-svg-icons"

const About = () => {
	return (
		<div className="about-page">
			<section id="section-about">
				<div className="text-secondary">
					<h2 className="text-5xl font-bold font-poppins text-center w-max mx-auto p-2 pt-20">
						About me
					</h2>
				</div>
				<div className="mt-32 flex gap-6 max-w-5xl mx-auto text-grey px-2 flex-wrap md:flex-nowrap">
					<div className="mx-auto">
						<div>
							<img
								src={Logo}
								className="max-w-xs"
								alt="logo"
							/>
						</div>
						<div className="w-3/5 mx-auto mt-14 flex justify-center">
							<Resume />
						</div>
					</div>
					<div className="font-semibold">
						<h3 className="text-2xl font-bold mb-5">Hi! I'm Maria 👩‍💻</h3>
						<div className="text-secondary mb-5">
							Originally from Romania, I made the decision to move to the UK
							five years ago, embarking on a journey that allowed me to explore
							new cultures, embrace diversity, and grow both personally and
							professionally.
						</div>
						<div className="text-secondary mb-5">
							Beyond my technical skills as a front-end web developer, I bring a
							unique perspective to the table with my humanistic academic
							background. Having studied Literary Media, I've developed a deep
							appreciation for the human experience and the art of storytelling.
							This background fuels my creativity and enables me to create
							user-centric web solutions that resonate with people on a
							meaningful level.
						</div>
						<div className="text-secondary mb-5">
							Technology should enhance and enrich the lives of users, and I
							strive to imbue every project with a sense of empathy and purpose.
							Understanding the needs and desires of users is paramount, and I
							approach each project with meticulous attention to detail,
							ensuring that the end product is both aesthetically pleasing and
							highly functional.
						</div>
						<div className="text-secondary mb-5">
							My portfolio showcases a diverse range of projects, each
							reflecting my dedication to crafting clean, responsive, and
							intuitive interfaces. Whether it's a stunning website for a small
							business, an engaging e-commerce platform, or an interactive web
							application, I take pride in delivering seamless and delightful
							user experiences.
						</div>
						<div className="text-secondary mb-5">
							When I'm not immersed in code, you can find me exploring the
							vibrant beaches of Dorset, discovering hidden coffee shops, or
							indulging in my love for cooking. These passions outside of
							development enrich my work, allowing me to draw inspiration from
							the world around me.
						</div>
						<div className="text-secondary mb-5">
							Thank you for taking the time to visit my portfolio. I'm excited
							about the opportunity to collaborate on new and exciting projects,
							and I look forward to making a positive impact in the digital
							realm. Let's create something amazing together!
						</div>
						<h4 className="text-xl font-bold mt-5 mb-3">My Tech Stack</h4>
						<p className="text-secondary mb-5">
							I'm proficient with the following:
						</p>
						<div className="grid grid-cols-4 gap-4">
							<div className="flex flex-col items-center">
								<FontAwesomeIcon
									icon={faHtml5}
									className="h-8 w-8 inline mb-1 mr-1"
								/>
								<span className="text-center text-xs">HTML5</span>
							</div>

							<div className="flex flex-col items-center">
								<FontAwesomeIcon
									icon={faCss3}
									className="h-8 w-8 inline mb-1 mr-1"
								/>
								<span className="text-center text-xs">CSS</span>
							</div>

							<div className="flex flex-col items-center">
								<FontAwesomeIcon
									icon={faJsSquare}
									className="h-8 w-8 inline mb-1 mr-1"
								/>
								<span className="text-center text-xs">JavaScript</span>
							</div>

							<div className="flex flex-col items-center">
								<FontAwesomeIcon
									icon={faReact}
									className="h-8 w-8 inline mb-1 mr-1"
								/>
								<span className="text-center text-xs">React.js</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
