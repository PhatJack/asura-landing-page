import React from 'react'
import { menu } from './data'
import Menu from './Menu/Menu'
import { FooterLogo } from '../../assets/index'
const Footer = () => {
	return (
		<div className='w-full relative bg-opal'>
			<div className="flex ">
				{
					menu.map((item, _) => (
						<Menu title={item.title} menu={item.items} />
					))
				}
			</div>
			<div className="w-full h-full flex place-content-center py-20 border-t border-linen">
				<img src={FooterLogo} alt="" className='object-center' />
			</div>
			<p className='py-5 border-y border-linen text-center text-claudy font-montreal-neue tracking-[0.2em]'>© ARUSA 2023 | AGATHA SAKOWICZ | JACK PHAT</p>
		</div>
	)
}

export default Footer