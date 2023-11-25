import React from 'react'
import HeroText from '../HeroText/HeroText'
import { products } from './data'
import Product from '../Product/Product'
const SectionThree = () => {
	return (
		<div className='w-full h-full relative'>
			<HeroText text={"Enjoy our feature products"} className={"text-4xl font-reckless-neue tracking-wide"} />
			<div className="flex px-5 py-8 gap-5">
				{
					products.map((item, _) => (
						<Product product={item} />
					))
				}
			</div>
			<HeroText text={"shop all"} className={"font-reckless-neue tracking-wide uppercase"} />

		</div>
	)
}

export default SectionThree