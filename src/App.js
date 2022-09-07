import React from 'react';
import Button from './components/Button';
import Tooltip from './components/Tooltip';

const App = () => {

    return (
        <div className='app'>
            <Tooltip text="Hello World!" position="right">
            <Button />
            </Tooltip>
        </div>
    )
}

export default App;