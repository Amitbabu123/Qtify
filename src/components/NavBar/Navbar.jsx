import React from 'react'
import styles from './Navbar.module.css'
import Button from '../Button/Button';
import Logo  from '../Logo/Logo'
import Search from '../Search/Search';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
     <Logo/>
     <Search/> 
     <Button children='Give Feedback'/>
    </nav>
  )
}

export default Navbar;