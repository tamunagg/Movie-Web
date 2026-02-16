import { Search } from 'lucide-react';
import styles from './SearchRow.module.css';

function SearchRow() {
    return (
        <div className={styles.row}>
            <div className={styles.searchBox}>
                <Search size={20} className={styles.searchIcon} />
                <input className={styles.input} type="text" placeholder='Search' />
            </div>
            
            <select className={styles.dropdown}>
                <option value="">Year</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
            </select>

            <select className={styles.dropdown}>
                <option value="">Category</option>
                <option value="comedy">Comedy</option>
                <option value="horror">Horror</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
            </select>
        </div>


    )
}
export default SearchRow