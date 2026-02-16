import { useState } from "react";
import { ChevronDown, Search } from 'lucide-react';
import styles from './SearchRow.module.css';

function SearchRow() {

    const [yearOpen, setYearOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    const[selectedYear, setSelectedYear] = useState('');
    const[selectedCategory, setSelectedCategory] = useState('');

    const years = ['2022', '2021', '2000', '1999'];
    const categories = ['Comedy', 'Horror', 'Action', 'Drama'];

    return (
        <div className={styles.container}>
            <div className={styles.searchBox}>
                <Search size={20} className={styles.searchIcon} />
                <input className={styles.input} type="text" placeholder='Search' />
            </div>
            
            <div className={styles.dropdownContainer}>
                <div className={styles.dropdown} onClick={() => {
                    setYearOpen(!yearOpen);
                    setCategoryOpen(false);

                }} >
                    <span style={{ color: selectedYear ? '#fff' : '#7b7b7b' }}>
                        {selectedYear ? selectedYear : 'Year'}
                    </span>
                    <ChevronDown size={16} className={styles.arrowIcon} />
                </div>
                
                {yearOpen && (
                    <div className={styles.dropdownMenu}>
                        {years.map(year => (
                            <div key={year} className={styles.dropdownItem} onClick={() => {setSelectedYear(year); setYearOpen(false)}}>
                                {year}
                            </div>
                        ))}
                    </div>
                )}

            </div>

            <div className={styles.dropdownContainer}>
                <div
          className={styles.dropdown}
          onClick={() => {
            setCategoryOpen(!categoryOpen);
            setYearOpen(false);
          }}
        >
          <span style={{ color: selectedCategory ? '#fff' : '#7b7b7b' }}>
          {selectedCategory ? selectedCategory : 'Category'}

          </span>
          <ChevronDown size={16} className={styles.arrowIcon} />
        </div>

        {categoryOpen && (
          <div className={styles.dropdownMenu}>
            {categories.map((cat) => (
              <div
                key={cat}
                className={styles.dropdownItem}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCategoryOpen(false);
                }}
              >
                {cat}
              </div>
            ))}
          </div>
        )}
      </div>
        </div>


    )
}
export default SearchRow