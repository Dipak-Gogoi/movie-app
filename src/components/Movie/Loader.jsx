import React from 'react';
import './Movie.css'
import AutorenewIcon from '@material-ui/icons/Autorenew';

const Loader = () => {
    return (
        <div className="loading">
        <AutorenewIcon id="loader"/>
        </div>
    )
};

export default Loader;

