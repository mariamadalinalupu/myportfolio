import { useForm, ValidationError } from "@formspree/react"
const ContactForm = ({ onSubmitF }) => {
	const [state, handleSubmit] = useForm("xknaknly")

	const handleFormSubmission = async (event) => {
		event.preventDefault()
		await handleSubmit(event)
		if (state.succeeded) {
			// Call the onSubmit function passed from the parent component
			onSubmitF()
		}
	}

	if (state.succeeded) {
		return <p>Thanks for your message!</p>
	}
	return (
		<form onSubmit={handleFormSubmission}>
			<div className="p-10 bg-accentlighter flex flex-col relative overflow-hidden rounded-2xl text-grey">
				<div className="flex flex-col">
					<label
						className="flex items-center justify-between select-none py-2 px-1"
						htmlFor="name"
					>
						{" "}
						Your Name
					</label>
					<input
						className="shrink h-12 leading-8 px-4 border rounded-lg shadow appearance-none border"
						id="name"
						type="text"
						name="name"
					/>
				</div>
				<div className="flex flex-col">
					<label
						className="flex items-center justify-between select-none py-2 px-1"
						htmlFor="email"
					>
						{" "}
						Your Email Address
					</label>
					<input
						className="shrink h-12 leading-8 px-4 border rounded-lg"
						id="email"
						type="email"
						name="email"
					/>
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
					/>
				</div>
				<div className="flex flex-col">
					<label
						className="flex items-center justify-between select-none py-2 px-1"
						htmlFor="message"
					>
						{" "}
						Your Message
					</label>
					<textarea
						className="shrink h-24 leading-8 px-4 border rounded-lg"
						id="message"
						name="message"
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
				</div>
				<button
					className="btn w-max mt-10 mx-auto btn-md sm:mb-0 text-white bg-gradient-to-r from-accentlighter via-accent to-accentdarker hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-accent dark:focus:ring-accentdarker shadow-lg shadow-accentlighter dark:shadow-lg dark:shadow-accentdarker font-medium rounded-lg text-sm px-5 py-2.5"
					type="submit"
					disabled={state.submitting}
				>
					Send message
				</button>
			</div>
		</form>
	)
}

export default ContactForm
