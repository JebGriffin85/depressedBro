import React, { useState } from "react";
import styles from './phase2.module.css'

const Phase2 = () => {

    return (
        <div className={styles.mainContainer}>
            <br/>
            <h4 className={styles.text}>So you passed the first test...you either cheated or wasted a lot of time.
            Would you like to continue your journey? <a>yes</a><a>no</a>
            
            </h4>

        </div>
    )
}

export default Phase2;