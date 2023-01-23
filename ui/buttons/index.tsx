export const MainButton = ({ children, onClick }: any) => {
	return (
		<button
			onClick={onClick}
			className=' w-full bg-blue-300 flex items-center justify-center text-white font-montserrat font-bold text-base py-4 px-2 rounded-lg cursor-pointer'
		>
			{children}
		</button>
	)
}

export const CancelButton = ({ children, onClick }: any) => {
	return (
		<button
			onClick={onClick}
			className=' w-full bg-slate-500 flex items-center justify-center text-white font-montserrat font-bold text-base py-4 px-2 rounded-lg cursor-pointer'
		>
			{children}
		</button>
	)
}

export const DeleteButton = ({ children, onClick }: any) => {
	return (
		<button
			onClick={onClick}
			className=' w-full bg-red-600 flex items-center justify-center text-white font-montserrat font-bold text-base py-4 px-2 rounded-lg cursor-pointer'
		>
			{children}
		</button>
	)
}