import AnimatedLetters from "./AnimatedLetters"
import Slider from "./Slider"
import Quotes from "./quotesapp.png"
import ValidationForm from "./ValidationForm.png"
import BookmarksApp from "./BookmarksApp.png"
import Pong from "./pongapp.png"
const Portfolio = () => {
	const myApps = [
		{
			title: "Quotes Generator",
			description:
				"The quotes generator app allows users to generate inspiring quotes and sayings with just a few clicks. Built using JavaScript and a sleek user interface, the app randomly selects a quote from a vast library of quotes and displays it on the screen for the user to read and reflect upon.",
			link: "https://mariamadalinalupu.github.io/Quotes-generator/",
			img: Quotes,
		},
		{
			title: "Form Validator",
			description:
				"This app verifies user input data in web forms. The app  works by analyzing the input data based on a set of predefined rules and criteria, and providing feedback to the user if any of the data is incorrect or invalid. The feedback is provided in the form of error messages or visual indicators, such as highlighting the incorrect fields or displaying warning messages.",
			link: "https://mariamadalinalupu.github.io/validation-form/",
			img: ValidationForm,
		},
		{
			title: "Bookmarks App",
			description:
				"This is a user-friendly, lightweight, and intuitive JavaScript bookmarks app that allows the user to efficiently manage and organize favorite websites and online resources.",
			link: "https://mariamadalinalupu.github.io/bookmark-app/",
			img: BookmarksApp,
		},
		{
			title: "Pong",
			description:
				"This is a simple yet engaging project that demonstrates fundamental programming concepts such as animation, event handling, and real-time updates.",
			link: "https://mariamadalinalupu.github.io/pong/",
			img: Pong,
		},
	]

	return (
		<div className="portfolio-page md:w-screen">
			<AnimatedLetters strArray={"Portfolio".split("")} />
			<Slider apps={myApps} />
		</div>
	)
}

export default Portfolio
