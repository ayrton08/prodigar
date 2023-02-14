import { useRouter } from 'next/router'
import { MainButton } from '../ui/buttons'
import Image from 'next/image'
import { Title, Large } from '../ui/typography'

export const MapPreview = () => {
	const router = useRouter()

	const handleClick = () => {
		router.push('/objects-near-me')
	}

	return (
		<section
			className=' w-full p-4 flex flex-col items-center md:flex-row text-[#2C3E50] justify-evenly bg-[#FEF5E7] md:mb-10'
			id='location'
		>
			<div className='max-w-[600px] lg:w-[800px] md:w-1/2 md:px-20 py-8 flex flex-col justify-between gap-10'>
				<Title>Da a conocer la ubicación de tus pertenencias</Title>
				<Large>
					En esta sección podrás publicar en el mapa la ubicación de tus
					pertenencias para que sepan donde retirarlas, o buscar donde están
					ubicadas las pertenencias de otras personas.
				</Large>
				<MainButton onClick={handleClick}>BUSCAR PERTENENCIAS CERCA</MainButton>
			</div>
			<div className='card__map'>
				<Image
					src='https://res.cloudinary.com/deooec1tp/image/upload/v1674504897/Prodigar/Screenshot_from_2023-01-23_15-53-56_afaeih.png'
					alt='mapa'
					className='map-img zoom'
					width={400}
					height={400}
				/>
			</div>
		</section>
	)
}
