import React from 'react'
import { SampleImg } from '../../assets'

const SectionOne = () => {
	return (
		<div className='w-full h-screen relative'>
			<img src={SampleImg} alt="" className='w-full h-full object-center' />
			<div className="absolute w-full h-full top-0 left-0 bg-black/20 flex flex-col justify-center gap-16 items-center">
				<p className='text-8xl text-center text-white font-reckless-neue px-[28rem]'> Seamless <span className='font-reckless-neue-italic'>furniture </span>
					with natural fabrics</p>
				<button className='px-12 py-1 bg-linen w-fit rounded-lg hover:bg-opal transition-all hover:text-white'>SHOP ALL</button>
			</div>
		</div>
	)
}

export default SectionOne