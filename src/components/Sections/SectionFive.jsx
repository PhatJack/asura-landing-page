import React from 'react'
import { ReadStories2, ShopProduct, ShopProductFour } from '../../assets'
import { floatProduct } from './data'
import Product from '../Product/Product'

const SectionFive = () => {
	return (
		<div className='w-full h-screen relative'>
			<img src={ReadStories2} alt="" className='w-full h-full' />
			<div className="flex w-full z-10 justify-between">
				<div className="absolute top-1/4 left-[8%] w-[12vw] flex flex-col font-montreal-neue p-4 bg-white">
					<img src={ShopProduct} alt="product alt" className='w-full h-3/4' />
					<div className="w-full flex justify-between mt-3">
						<span className="uppercase text-sm tracking-wider">IGLENIX VASE</span>
						<span className=' text-sm'>$ 1,990</span>
					</div>
				</div>
				<div className="absolute top-2/4 right-[8%] w-[12vw] flex flex-col font-montreal-neue p-4 bg-white">
					<img src={ShopProductFour} alt="product alt" className='w-full h-3/4' />
					<div className="w-full flex justify-between mt-3">
						<span className="uppercase text-sm tracking-wider">IGLENIX LAMP</span>
						<span className=' text-sm'>$ 3,900</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionFive