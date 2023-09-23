import React from 'react'
import styles from './Search.module.css'
import { ReactComponent as  SearchIcon } from '../../assets/SearchIcon.svg'
const Search = () => {
  return (
    <div>
        <form className={styles.wrapper}>
            <input className={styles.Search}/>
            <div>
                <button className={styles.SearchButton} type='submit'>
                <SearchIcon/>
                 
                </button>

                
            </div>

        </form>
    </div>
  )
}

export default Search
