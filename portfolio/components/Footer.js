

import React, {useState} from 'react'
import {Icon} from 'semantic-ui-react'
import styles from './footer.module.css'

export default function Footer(props) {
    const [email, setEmail] = useState('');
    return (
        <div centered="true" className={styles.divider}>

        <div className={styles.row}>
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
          <p className={styles.email}>{email}</p>
        }
        
        </div>
    );
}

