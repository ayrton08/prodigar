import { useRouter } from 'next/router'
import { useGetToken } from '../hooks'
import { MainButton } from '../ui/buttons'
import { Title } from '../ui/typography/index'
import { Information } from './Information'
import { ReportForm } from './ReportForm'

export const PostPreview = () => {
	const router = useRouter()
	const { token } = useGetToken()

	const handleClick = () => {
		if (token) {
			router.push('/my-post')
		}
		router.push('/login')
	}

	return (
		<section
			className=' w-full p-4 flex flex-col items-center md:flex-row text-[#2C3E50] justify-evenly bg-[#FEF5E7]'
			id='post'
		>
			<div className='max-w-[600px] lg:w-[800px] md:w-1/2 md:px-10 py-8 flex flex-col justify-between gap-10'>
				<Title>Publica pertenencias que ya no usas</Title>
				<div className=' p-3 rounded-md bg-slate-500 bg-opacity-10 shadow-md'>
					<Information title='Informacion'>
						Podrás compartir información sobre lo que te gustaria donar como el
						nombre del objeto. También podras incluir una descripción, donde
						puedas brindar más infomacion, por ejemplo si es necesario algun
						medio de transporte para retirarlo.
					</Information>
					<Information title='Ubicacion'>
						Con un sistema de geolocalización podrás publicar tu ubicación
						exacta donde te gustaria que retiran la donación.
					</Information>
					<Information title='Imagen'>
						Un imagen dice más que muchas palabras, por lo que también podrás
						publicar una imagen del objeto.
					</Information>
				</div>
				<MainButton onClick={handleClick}>COMENZAR A PUBLICAR</MainButton>
			</div>
			<div className='card__admin glass-efect'>
				<ReportForm />
			</div>
		</section>
	)
}
