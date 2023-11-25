import React from 'react'

const Menu = ({ title, menu }) => {
	return (
		<div className='w-full h-full text-claudy py-6 px-12 font-montreal-neue border-r border-linen'>
			<span className='uppercase inline-block pb-3'>{title}</span>
			<ul className='flex flex-col justify-between gap-3'>
				{menu.map((item, _) => (
					<li className='first-letter:uppercase text-sm'>{item.name}</li>
				))}
			</ul>
		</div>
	)
}

export default Menu