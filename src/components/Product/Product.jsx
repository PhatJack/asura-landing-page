import React from 'react'

const Product = ({ product }) => {
	return (
		<div className="w-full">
			<div className="w-full flex flex-col font-montreal-neue">
				<img src={product.img} alt="product alt" className='w-full h-3/4' />
				<div className="w-full flex justify-between mt-3">
					<span className="uppercase text-sm tracking-wider">{product.name}</span>
					<span className=' text-sm'>${product.price}</span>
				</div>
			</div>
		</div>
	)
}

export default Product