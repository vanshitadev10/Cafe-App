import React from 'react';

import Card from '../UI/Card';
import styles from './CafeItem.module.css';
import AvailableItems from "./AvailableItems";

const CafeItem = props => {
    return (
        <Card className={styles['cafe-menu']}>
            <h1>Our Menu</h1>
            <AvailableItems />
        </Card>
    );
};

export default CafeItem;