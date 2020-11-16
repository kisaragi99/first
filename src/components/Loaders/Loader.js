import React from 'react';
import s from './Loader.module.css';


let Loader = (props) => {
    return (<div>
            <div className={s.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
export default Loader;