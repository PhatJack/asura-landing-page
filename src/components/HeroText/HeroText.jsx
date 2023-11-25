import React from 'react'

const HeroText = ({ text, className }) => {
	return (
		<p className={`py-6 first-letter:uppercase border-y border-oyster text-center ${className}`}>
			{text}
		</p>
	)
}

export default HeroText