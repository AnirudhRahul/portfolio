

import React, {Component} from 'react'
import {Icon} from 'semantic-ui-react'
import { getGPUTier } from 'detect-gpu'
import styles from "./background.module.css" 

class Background extends Component {
    
    constructor(){
        super();
        this.state = {
            gpuScore: 0
        }
    }

    async componentDidMount() {
        const gpuTier = await getGPUTier();
        this.setState({gpuScore: gpuTier.fps})
        console.log("Called set state", gpuTier)
    }

    
    render(){
        return (
            <div>
                <canvas id="sakura" className={styles.bg}></canvas>
                    <div className={styles.button} id="bg-button" score={this.state.gpuScore}>
                        <Icon name="play" size="big" color="brown" ></Icon>
                    </div>     
            </div>
        );
    }
}

export default Background

