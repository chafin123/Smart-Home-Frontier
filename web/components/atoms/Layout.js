import Head from 'next/head'
import Header from '../organisms/Header'
import Link from 'next/link'
import styles from '../../styles/Layout.module.css'
import Footer from '../organisms/Footer'
export const siteTitle = 'Smart Home Frontier'

const Layout = ({children, home, post}) => {
   return (
    <div className={post ? styles.postContainer : styles.container}>
        <Head home>
            <meta 
                name='description'
                content='Learn all you need to know about smart homes'
            />
            <meta name='og:title' content={siteTitle}/>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
   )
}
export default Layout