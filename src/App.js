import React, { useState } from 'react';

import Header from './Components/Header/Header';
import CafeIntroduction from './Components/Menu/CafeIntroduction';
import CafeItem from './Components/Menu/CafeItem';
import CartModal from './Components/UI/CartModal';
import CartProvider from './store/CartProvider';

const App = () => {

    const [valid, setValid] = useState(false);

    const cartOpenHandler = () => {
        setValid(true);
    }

    const cartCloseHandler = (validState) => {
        setValid(validState);
    }

    return (
        <CartProvider>
            {valid && <CartModal value={valid} onClosingCart={cartCloseHandler} />}
            <Header onClosing={cartOpenHandler} />
            <main>
                <CafeIntroduction />
                <CafeItem />
            </main>
        </CartProvider>
    );
};

export default App;
