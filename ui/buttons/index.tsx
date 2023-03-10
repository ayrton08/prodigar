import { MouseEventHandler, ReactNode } from 'react'

interface IButtons {
	onClick?: MouseEventHandler<HTMLButtonElement>
	children: ReactNode
	type?: 'button' | 'submit' | 'reset' | undefined
	disabled?: boolean
	className?: string
}

export const MainButton = ({
	children,
	onClick,
	type,
	className,
}: IButtons) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={`${className} w-full max-h-14 bg-blue-300 hover:bg-blue-200 flex items-center justify-center text-white font-montserrat font-bold text-sm md:text-base py-2 md:py-4 md:px-2 rounded-lg cursor-pointer`}
		>
			{children}
		</button>
	)
}

export const SuccessButton = ({
	children,
	onClick,
	type,
	disabled = false,
	className,
}: IButtons) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${className} w-full max-h-14 bg-green-500 hover:bg-green-400 flex items-center justify-center text-white font-montserrat font-bold text-sm md:text-base py-2 md:py-4 md:px-2 rounded-lg cursor-pointer`}
		>
			{children}
		</button>
	)
}

export const CancelButton = ({ children, onClick, type }: IButtons) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className=' w-full bg-slate-500 hover:bg-slate-400 flex items-center justify-center text-white font-montserrat font-bold text-sm md:text-base py-2 md:py-4 md:px-2 rounded-lg cursor-pointer'
		>
			{children}
		</button>
	)
}

export const DeleteButton = ({ children, onClick }: IButtons) => {
	return (
		<button
			onClick={onClick}
			className=' w-full bg-red-600 hover:bg-red-400 flex items-center justify-center text-white font-montserrat font-bold text-sm md:text-base py-2 md:py-4 md:px-2 rounded-lg cursor-pointer'
		>
			{children}
		</button>
	)
}

type BurguerProps = {
	open: boolean
	handleClick: () => void
}

export const BurguerButton = (props: BurguerProps) => {
	return (
		<div
			className={`icon nav-icon-5 ${props.open ? 'open' : ''}`}
			onClick={props.handleClick}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}
