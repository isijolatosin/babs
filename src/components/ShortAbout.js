import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './shared/Button'

function ShortAbout() {
	const logo = require('../images/ArtKolawoleJohnson Logo-01.jpg')
	const navigate = useNavigate()
	const handleFunc = () => {
		navigate('/about-artkolawolejohnson')
	}
	return (
		<div className="relative flex flex-col md:flex-row items-center justify-between w-[70%] h-[550px] md:h-[300px] mx-auto">
			<div className="bg-yellow-600 h-[200px] rounded-l-2xl w-[30px] absolute top-[20px] left-[-5px]"></div>
			<p className="scalePosition rounded-2xl bg-blur2 h-[350px] md:h-[200px] px-2 mb-20  w-full md:w-[70%] text-white font-light text-center text-md pt-10 md:pt-10 md:border-r-[1px] md:border-[rgba(255,255,255,0.2)] md:pr-10">
				One team to handle all of your needs in on place. We are expert to
				finding artistic creative solutions and delivering the perfect results.
				<br />
				We entertain, inform, and inspire, through unique storytelling that
				leverage on creativity and technological innovation to build a better
				Africa
			</p>
			<div className="h-[50%]">
				<div className="md:ml-20">
					<img
						className="scaleInfinite border-[1px] border-white w-[120px] h-[120px] object-cover rounded-full object-center "
						src={logo}
						alt=""
					/>
				</div>
				<div className="hover:opacity-[0.5] absolute bottom-[60px] md:bottom-[120px] right-[170px] md:right-[100px] w-[80px] h-[30px] bg-cyan-900 opacity-[0.7] rounded-bl-xl"></div>
				<div className="absolute bottom-[30px] md:bottom-[90px] right-[150px] md:right-[80px] mb-10">
					<Button handleFunc={handleFunc} type="medium">
						Meet Babs
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ShortAbout
