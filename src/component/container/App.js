import React from 'react';
import Header from './header';
import Home from './home';
import Form from './form';
import '../../sass/main.scss';

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Form />
        </>
    )
}

export default App;