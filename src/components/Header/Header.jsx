import React from 'react'
import { HeaderLogo } from '../../assets'

const Header = () => {
	return (
		<div className='fixed top-0 z-[1] w-full'>
			<div className="px-20 py-5">
				<div className="w-full flex justify-between items-center text-white">
					<button className='flex items-center gap-2'>
						<div className="burger flex flex-col gap-1">
							<span className='w-7 h-px bg-white'></span>
							<span className='w-7 h-px bg-white'></span>
							<span className='w-7 h-px bg-white'></span>
						</div>
						<span>SHOP</span>
					</button>
					<img src={HeaderLogo} alt="" />
					<button className='text-base flex items-center'>
						<span className='mr-2'>BAG</span>
						<span className='w-6 h-6 p-2 rounded-full bg-opal flex justify-center items-center'>0</span>
					</button>
				</div>
			</div>
		</div>
	)
}
export default Header