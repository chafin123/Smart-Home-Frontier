import styles from '../../styles/Header.module.css'

const HamburgerMenu = ({onClick, isOpen}) => {
   return (
    <a onClick={onClick}>
        <div className={isOpen ? styles.xBars : styles.hamburgerBars}></div>
    </a>
   )
}
export default HamburgerMenu