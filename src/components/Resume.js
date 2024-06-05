import pdfCV from "./resume.pdf"
import { Document, Page } from "react-pdf"

const Resume = () => {
	return (
		<a
			href={pdfCV}
			target="_blank"
			rel="noreferrer"
			className="btn-md text-xs mb-5 sm:mb-0 text-white bg-gradient-to-r from-accentlighter via-accent to-accentdarker hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-accent dark:focus:ring-accentdarker shadow-lg shadow-accentlighter dark:shadow-lg dark:shadow-accentdarker font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
		>
			Get My Resume
		</a>
	)
}

export default Resume
