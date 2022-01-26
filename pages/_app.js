import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return (
        <>
            {router.pathname !== '/' && (
                <Button href="/" variant="link" className="mt-3">
                    &#8592; Back
                </Button>
            )}
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
