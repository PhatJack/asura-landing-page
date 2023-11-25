import React from 'react'
import { FloatImg, FloatImgFive, FloatImgFour, FloatImgSix, FloatImgThree, FloatImgTwo } from '../../assets'

const SectionTwo = () => {
	return (
		<div className='w-full h-screen relative mt-5 mb-20'>
			<div className="w-[32vw] h-full flex flex-col justify-center items-center gap-10 m-auto">
				<p className='text-7xl font-reckless-neue text-center'>Creating <span className='font-reckless-neue-italic'>perfect</span> lines and imposing presence</p>
				<p className='text-center px-4'>Developed the concept of exclusivity, a Arusa features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.</p>
				<button className='px-12 py-1 border border-oyster rounded-lg hover:bg-opal transition-all hover:text-white'>READ ABOUT US</button>
			</div>
			<img src={FloatImg} alt="" className='absolute bottom-0 right-[10.5%]' />
			<img src={FloatImgTwo} alt="" className='absolute bottom-[35%] right-0' />
			<img src={FloatImgThree} alt="" className='absolute bottom-[65%] right-[10.5%]' />
			<img src={FloatImgFour} alt="" className='absolute bottom-[20%] left-0' />
			<img src={FloatImgFive} alt="" className='absolute bottom-[55%] left-[2%]' />
			<img src={FloatImgSix} alt=""  className='absolute top-0 left-1/3'/>

		</div>
	)
}

export default SectionTwo