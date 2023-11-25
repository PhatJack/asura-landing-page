import React from 'react'
import { ReadStories } from '../../assets'

const SectionFour = () => {
	return (
		<div className='w-full relative mt-10'>
			<div className="flex">
				<div className="w-full bg-opal flex flex-col justify-center px-[12rem]">
					<span className='text-white text-5xl font-reckless-neue inline-block mb-10'>Native light chair</span>
					<p className='text-oyster font-montreal-neue mb-5'>Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of great resistance, Kiln dried, 
						made with a spike system and painted with P.U. (Polyurethane) With its entire structure painted in wood, 
						it offers a lot of elegance to your environment and when cleaning is very easy, as it is washable and light 
						for movement. Enough of receiving visitors and not having a place to accommodate them. With the chair, 
						your days as a host will be marked by a lot of elegance and sophistication.</p>
						<button className='w-fit text-white uppercase py-3 rounded-md font-montreal-neue'>view product</button>
				</div>
				<img src={ReadStories} alt="" className='w-1/2 h-[75vh]' />
			</div>
		</div>
	)
}

export default SectionFour