import React from 'react';

import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = props => {
    return (
        <header className={styles.navbar}>
            <div className={styles.navbar__content}>
                <h1 className={styles.heading}>React Cafe</h1>
                <HeaderCartButton onClosingCart={props.onClosing} />
            </div>
        </header>
    );
};

export default Header;