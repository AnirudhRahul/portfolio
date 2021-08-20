

import React, {useState} from 'react'
import {Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './background.css'
import { getGPUTier } from 'detect-gpu';


function Background(props) {
    const gpuTier = await getGPUTier();
    return (
        <div>
            <canvas></canvas>
            <p>JSON.stringify(gpuTier)</p>
        </div>
        
    );
}

export default Background

