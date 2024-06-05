import { useState } from "react"
import copy from "copy-to-clipboard"

const EmailOptions = () => {
	const [successMessage, setSuccessMessage] = useState("")

	const clickHandler = (e) => {
		copy("mariamadalina.lupu@yahoo.com")
		setSuccessMessage("tooltip tooltip-open tooltip-accent")
		setTimeout(() => {
			setSuccessMessage("")
		}, 2000)
	}

	return (
		<ul className="mt-3 p-2 shadow absolute z-50 bg-gradient-to-br from-accent to-accentlighter dark:text-white focus:ring-4 focus:outline-none focus:ring-accent dark:focus:ring-accentdarker lg:btn-md px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-grey rounded-md group-hover:bg-opacity-0 rounded-box ">
			<li className="group-hover:from-accent group-hover:to-accentlighter hover:text-white ">
				<a
					className="brn-sm text-sx lg:btn-md"
					href="mailto:mariamadalina.lupu@yahoo.com"
					target="_blank"
					rel="noreferrer"
				>
					Open in email client
				</a>
			</li>
			<li className="group-hover:from-accent group-hover:to-accentlighter hover:text-white ">
				<button
					className="brn-sm text-sx lg:btn-md"
					onClick={clickHandler}
				>
					<span
						data-tip="Copied to clipboard"
						class={successMessage}
					>
						Copy email address
					</span>
				</button>
			</li>
		</ul>
	)
}

export default EmailOptions
