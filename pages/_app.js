import { useRouter } from 'next/router'
import { createContext } from 'react'
import { Button } from 'react-bootstrap'
import '../styles/globals.css'
import { PAGE_NAMES } from '../utils/pageNames'

const UserContext = createContext()

const hideBackButtonPages = [PAGE_NAMES.index, PAGE_NAMES.auth]
const showLogoutButtonPages = [PAGE_NAMES.index]
function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return (
        <>
            {!hideBackButtonPages.includes(router.pathname) && (
                <Button href={PAGE_NAMES.index} variant="link" className="mt-3">
                    &#8592; Back
                </Button>
            )}

            {showLogoutButtonPages.includes(router.pathname) && (
                <Button variant="link" className="mt-3" href={PAGE_NAMES.auth}>
                    Log out
                </Button>
            )}
            <UserContext.Provider user={undefined}>
                <Component {...pageProps} />
            </UserContext.Provider>
        </>
    )
}

export default MyApp
