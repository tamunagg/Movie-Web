import { ChevronDown, Menu, X } from 'lucide-react';
import styles from './Header.module.css'
import profilePic from '../../../public/assets/ProfilePicture.png'
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    return (
        <div className={styles.container} >
            <div className={styles.burger} onClick={toggleMenu}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            <div className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>                
                <a href="#">Movies</a>
                <a href="#">Series</a>
                <a href="#">TV Series</a> 
            </div>

            <h1>Film<span className={styles.highlight}>Box</span></h1>

            <div className={styles.profile}>
                <ChevronDown className={styles.arrowIcon} />
                
                <p className={styles.profileName}>Arlene McCoy</p>

                <img className={styles.profileImage} src={profilePic} alt="profile picture"/>
            </div>
        </div>
    )
}

export default Header