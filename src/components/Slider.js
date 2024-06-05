import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "swiper/css"

const Slider = ({ apps }) => {
	const swiperRef = React.useRef(null)

	const goNext = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext()
		}
	}

	const goPrev = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev()
		}
	}

	return (
		<div className="relative">
			<Swiper
				ref={swiperRef}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				rewind={true}
				navigation={true}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{apps.map((app, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="flex justify-center items-center">
								{/* Left Button */}
								<div
									className="swiper-button-prev cursor-pointer"
									onClick={goPrev}
								>
									<FontAwesomeIcon
										icon={faArrowLeft}
										className="text-white hover:text-red-400 my-4 text-2xl w-full"
									/>
								</div>

								{/* Card */}
								<div className="card w-full md:w-1/2 px-5 mb-5 p-8">
									<div className="bg-grey h-full flex flex-col p-5 ">
										<img
											src={app.img}
											alt={`Slide ${index + 1}`}
											className="w-full h-80 object-cover"
										/>
										<h1 className="text-mainlighter text-2xl font-bold my-2">
											{app.title}
										</h1>
										<p className="text-mainlighter mb-4">{app.description}</p>
										<button
											onClick={() => window.open(app.link)}
											className="bg-transparent hover:bg-accent text-mainlighter font-semibold hover:text-mainlighter p-2 mt-auto border border-accent hover:border-transparent rounded"
										>
											View More
										</button>
									</div>
								</div>

								{/* Right Button */}
								<div
									className="swiper-button-next cursor-pointer"
									onClick={goNext}
								>
									<FontAwesomeIcon
										icon={faArrowRight}
										className="text-white hover:text-red-400 my-4 text-2xl w-full"
									/>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default Slider
