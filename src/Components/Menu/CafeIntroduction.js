import React from 'react';

import styles from './CafeIntroduction.module.css';
import Card from '../UI/Card';

const CafeIntroduction = () => {
    return (
        <Card className={styles.heading}>
            <h1>Hug of Love In Every Mug</h1>
            <h3>Welcome! We are currently serving a Hot, Cardamon Caraway, Chocolaty Aroma coffee with notes of Vanilla-like Swiss, and Dark Chocolate...</h3>
            <h2>Care to see our menu?</h2>
            <h3>(Because what goes best with a cup of coffee is: Another cup of coffee)</h3>
        </Card>
    );
};

export default CafeIntroduction;