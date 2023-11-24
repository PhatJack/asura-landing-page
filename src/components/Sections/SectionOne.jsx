import React from 'react'
import { SampleImg } from '../../assets'

const SectionOne = () => {
	return (
		<div className='bg-img w-full h-screen relative'>
			<img src={SampleImg} alt="" className='w-full h-full object-center' />
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
				<p className='text-8xl font-'>Seamless <span>furniture</span>
					with natural fabrics</p>
			</div>
		</div>
	)
}

export default SectionOne