import Link from 'next/link'
import { useState } from 'react'
import styles from '../../styles/Header.module.css'
import HamburgerMenu from '../atoms/HamburgerMenu'
import Navigation from '../molecule/Navigation'
const Header = ({home}) => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.titleContainer}>
                    <Link href="/" >
                        <h1 className={styles.title}>Smart Home Frontier</h1>
                    </Link>
                </div>
                <div className={styles.hamburgerContainer}>
                    <HamburgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
                </div>
                <Navigation isOpen={isOpen}/>
            </div>
            {home && (
            <div className='text-sf-dark-gray pt-4 w-8/12 text-lg '>
                <p>The home for all things smart home.</p>
            </div>
            )}
        </div>    
    )
}

export default Header