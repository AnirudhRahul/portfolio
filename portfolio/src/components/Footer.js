

import React, {useState} from 'react'
import {Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './footer.css'

function Footer(props) {
    const [email, setEmail] = useState('');
    return (
        <div centered="true" class="footer-divider">

        <div className="icon-row">
            <a href="https://github.com/AnirudhRahul">
              <Icon size="big" color="black" name="github"/>
            </a>
            <a href="#">
                <Icon size="big" color="black" name="mail" onClick={()=>setEmail("arahul (at) mit . edu")}/>
            </a>
            <a href="https://www.linkedin.com/in/anirudh-rahul-34a2bb195">
                <Icon size="big" color="black" name="linkedin"/>
            </a>
   
        </div>
         
        { email && email.length>0 &&
          <p className="email">{email}</p>
        }
        
        </div>
    );
}

export default Footer

