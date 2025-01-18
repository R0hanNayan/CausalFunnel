import React from 'react';
import './wrapper.css';

const Wrapper = ({child}) => {
    return (
        <div className='container-wrap'>
            {child}
        </div>
    )
}

export default Wrapper;