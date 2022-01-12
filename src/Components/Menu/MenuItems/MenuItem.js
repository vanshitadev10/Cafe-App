import React from 'react';

import styles from './MenuItem.module.css';

const MenuItem = props => {
    return (
        <div className={styles['menu-list']}>
            <div className={styles['menu-list__item']}>
                <div className={styles.list__name}>{props.name}</div>
                <div className={styles.list__description}>{props.description}</div>
                <div className={styles.list__value}>{props.value}/-</div>
            </div>
        </div>
    );
};

export default MenuItem;