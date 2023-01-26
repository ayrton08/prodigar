import { Logo } from '@/ui/icons'
import { Title, Large, Body, Small } from '../ui/typography'
import { AnimatedText } from '@/ui/animated-text'

export const Main = () => {
	return (
		<section className='w-full p-5 flex flex-col items-center justify-evenly bg-[#FEF5E7]' id="aboutUs">
			<AnimatedText />
			<Small>Eduardo Galeano.</Small>
			<div className=' w-full py-20 flex flex-col items-center md:flex-row-reverse text-[#2C3E50] justify-center bg-[#FEF5E7]'>
				<div className='max-w-[600px] lg:max-w-[800px] md:w-1/2 md:px-9 py-8 flex flex-col justify-between gap-10'>
					<Title>Somos Prodigar</Title>
					<Large>
						Nuestra misión es ser un medio para conectar a las personas y
						contribuir con la solidaridad de la sociedad. El objetivo principal
						es brindarles la oportunidad de dar a conocer objetos o pertenencias
						de cualquier tipo que estén en condiciones de ser donadas a otra
						persona.
					</Large>
				</div>
				<div className='grid gap-5'>
					<Logo size='w-60 md:w-72 h-60 md:h-72' />
				</div>
			</div>
		</section>
	)
}
