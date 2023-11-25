import React from 'react'
import { menu } from './data'
import Menu from './Menu/Menu'
import { FooterLogo } from '../../assets/index'
const Footer = () => {
	return (
		<footer className='w-full relative bg-opal'>
			<div className="flex ">
				{
					menu.map((item, _) => (
						<Menu title={item.title} menu={item.items} />
					))
				}
			</div>
			<div className="w-full h-full flex place-content-center py-20 border-t border-linen">
				<img src={FooterLogo} alt="" className='object-center w-full px-12' />
			</div>
			<p className='py-5 border-y border-linen text-center text-claudy font-montreal-neue text-sm tracking-[0.2em]'>© ARUSA 2023 | AGATHA SAKOWICZ | JACK PHAT</p>
		</footer>
	)
}

export default Footer