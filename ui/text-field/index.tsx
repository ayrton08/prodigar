import { Small } from '../typography'

export const InputText = ({ label, onChange, onKeyDown }: any) => {
	return (
		<label className='w-full'>
			<Small>{label}</Small>
			<input
				className=' w-full text-base p-2 rounded-lg border-black border-4 '
				type='text'
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
		</label>
	)
}
