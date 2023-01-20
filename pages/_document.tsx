import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='es'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
