import Image from 'next/image'
import { InputText } from '@/ui/text-field'
import { MainButton, CancelButton, DeleteButton } from '@/ui/buttons'
import { Body } from '@/ui/typography'
import { MapBox } from './Map'

export const AdminForm = () => {
	return (
		<form className=' grid gap-4 justify-items-center items-center m-0 py-5 px-3 max-w-sm'>
			<InputText label='Tu nombre'></InputText>
			<InputText label='Título (Objeto que querés donar)'></InputText>
			<InputText label='Breve descripción'></InputText>
			<Image
				src='https://res.cloudinary.com/deooec1tp/image/upload/v1674505066/Prodigar/silla_lt0vzm.jpg'
				alt='img'
				width={350}
				height={350}
			/>
			<MainButton>Agregar imagen</MainButton>
			<MapBox />
			<Body color='text-gray-500'>
				COLOCÁ UN PUNTO DE REFERENCIA PARA SABER TU UBICACIÓN APROXIMADA. PUEDE
				SER UNA DIRECCIÓN, UN BARRIO O UNA CIUDAD.
			</Body>
			<MainButton>Editar</MainButton>
			<DeleteButton>Eliminar Publicación</DeleteButton>
			<CancelButton>Cancelar</CancelButton>
		</form>
	)
}
