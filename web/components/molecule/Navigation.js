import styles from '../../styles/Navigation.module.css'
import  Link  from 'next/link';

const Navigation = ({isOpen}) => {
   return (
       <div className={isOpen ? styles.navContainerShow : styles.navContainerHide}>
            <div className={styles.navItemContainer}>
                <Link href="/">
                    <h2 className={styles.navItem}>Home</h2>
                </Link>
            </div>
            <div className={styles.navItemContainer}>
                <Link href="/category/product">
                    <h2 className={styles.navItem}>Products</h2>
                </Link>
            </div>
            <div className={styles.navItemContainer}>
                <Link href="/category/ecosystem">
                    <h2 className={styles.navItem}>Ecosystems</h2>
                </Link>
            </div>
            <div className={styles.navItemContainer}>
                <Link href="/category/technology">
                    <h2 className={styles.navItem}>Technologies</h2>
                </Link>
            </div>
            <div className={styles.navItemContainer}>
                <Link href="/category/automation">
                    <h2 className={styles.navItem}>Automations</h2>
                </Link>
            </div>
            <div className={styles.navItemContainer}>
                <Link href="/category/blog">
                    <h2 className={styles.navItem}>Blog</h2>
                </Link>
            </div>
            <div className={styles.navItemContainer}>
                <Link href="/contact">
                    <h2 className={styles.navItem}>Contact</h2>
                </Link>
            </div>
       </div>
   )
}
export default Navigation