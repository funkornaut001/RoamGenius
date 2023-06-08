import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <a href="/" className={styles.logo}>RoamGenius</a>
      </div>
      {/* <div className={styles.image}>
        <img src="/raomballon.png"/>
      </div> */}
      <ul className={styles.navLinks}>
        <li>
          <a href="/blog">Destinations</a>
        </li>
        <li>
          <a href="./components/Chat/Chat">Chat</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/sign-up-page" className={styles.signupBtn}>Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
