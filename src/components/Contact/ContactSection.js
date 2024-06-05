import AnimatedLetters from "../AnimatedLetters"
import ContactForm from "./ContactForm"
import EmailOptions from "./EmailOptions"
import { useState } from "react"

const Contact = () => {
	const [emailOptions, setEmailOptions] = useState(false)
	const [showContactForm, setShowContactForm] = useState(true)

	const handleFormSubmit = () => {
		const submissionSuccessful = true

		setShowContactForm((prevShowContactForm) => {
			if (submissionSuccessful) {
				return false // Update the state based on the previous value
			}
			return prevShowContactForm // Return the previous value if submission was not successful
		})
	}

	return (
		<>
			<div>
				<AnimatedLetters strArray={"Contact".split("")} />
			</div>
			<div
				className="flex flex-col gap-10 max-w-2xl mx-auto px-2"
				onMouseLeave={() => setEmailOptions(false)}
			>
				<h3>Let's get in touch</h3>

				<div
					className="flex flex-wrap-reverse justify-around "
					onMouseOver={() => setEmailOptions(true)}
				>
					<div className="md:mb-1 mb-6">
						<a
							href="mailto:mariamadalina.lupu@yahoo.com"
							target="_blank"
							rel="noreferrer"
							className="mb-5 w-max z-1 relative overflow-hidden font-medium text-grey rounded-lg group bg-gradient-to-br from-accent to-accentlighter group-hover:from-accent group-hover:to-accentlighter hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-accebt dark:focus:ring-accentdarker lg:btn-md px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-grey rounded-md group-hover:bg-opacity-0"
						>
							mariamadalina.lupu@yahoo.com
						</a>
						{emailOptions && <EmailOptions />}
					</div>
					<div className="md:mb-1 mb-6">
						<a
							className="w-max btn-md sm:mb-0 mb-5 w-full z-1 relative font-medium text-grey rounded-lg group bg-gradient-to-br from-accent to-accentlighter group-hover:from-accent group-hover:to-accentlighter hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-accebt dark:focus:ring-accentdarker lg:btn-md px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-grey rounded-md group-hover:bg-opacity-0"
							href="https://uk.linkedin.com/in/maria-lupu"
							target="_blank"
							rel="noreferrer"
						>
							Message me on LinkedIn
						</a>
					</div>
				</div>

				{showContactForm ? (
					<p className="text-center">
						Email me, send me a message on LinkedIn, or, if you prefer, use the
						contact form below.
					</p>
				) : null}
				{showContactForm && <ContactForm onSubmitF={handleFormSubmit} />}
			</div>
		</>
	)
}

export default Contact
