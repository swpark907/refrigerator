import React from 'react';
import styles from './Loading.module.css'

const Loading = () => {
    

    const style = (i) => (
        {'--i': i}
    )
    // const style = {'--i': 1};

    return (
        <div className={styles.loader}>
            <span style={style(1)}></span>
            <span style={style(2)}></span>
            <span style={style(3)}></span>
            <span style={style(4)}></span>
            <span style={style(5)}></span>
            <span style={style(6)}></span>
            <span style={style(7)}></span>
            <span style={style(8)}></span>    
            <span style={style(9)}></span>
            <span style={style(10)}></span>
            <span style={style(11)}></span>
            <span style={style(12)}></span>
            <span style={style(13)}></span>
            <span style={style(14)}></span>
            <span style={style(15)}></span>
        </div>
    );
};

export default Loading;