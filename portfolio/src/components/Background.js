

import React, {Component} from 'react'
import {Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './background.css'
import { getGPUTier } from 'detect-gpu';

class Background extends Component {
    
    constructor(){
        super();
        this.state = {
            useWebgl: false,
            fps: 0
        }
    }

    async componentDidMount() {
        const gpuTier = await getGPUTier();
        let useWebgl = gpuTier.fps >= 60
        if(location.href.endsWith("force")){
            useWebgl=true;
        }
        this.setState({useWebgl})
        console.log(gpuTier)
    }

    
    render(){
        return (
            <div>
                <canvas id="sakura"></canvas>
                    <div id="bg-button">
                        {this.state.useWebgl && <Icon name="play" size="big" color="brown" ></Icon>}
                    </div>     
            </div>
        );
    }
}

export default Background

