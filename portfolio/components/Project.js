import React from 'react'
import {Label, Segment, Popup, Icon, IconGroup, LabelGroup, Header, Image} from 'semantic-ui-react'
import styles from './project.module.css'
import NextImage from 'next/image'


export default function Project(props) {
    return (
        <Segment raised className={styles.card}>
            {
                props.img &&
                <div className={styles.left}>
                    <Image>
                        <NextImage className={styles.image} src={props.img}/>
                    </Image>
                </div>
            }
            <div className={styles.right}>
                <Header size="large" className={styles.title}>{props.title}</Header>

                <LabelGroup className={styles.labels}>
                    {
                        (props.skills||[]).map((skill)=>
                            <Label className={skill} key={skill}>{skill}</Label>
                        )
                    }
                </LabelGroup>

                        
            <p>{props.desc}</p>


            
            <div className={styles.icons}>
                <IconGroup size='big' color='black'>

                    {
                        props.playLink &&
                        <Popup 
                            content='Playstore' 
                            trigger={<a href={props.playLink}><Icon name='google play'/></a>} 
                            position='bottom left'
                        />

                    }

                    
                    {
                        props.ethLink &&
                        <Popup 
                            content='Etherscan' 
                            trigger={<a className={styles.extraPad} href={props.ethLink}><Icon name='ethereum'/></a>} 
                            position='bottom left'
                        />

                    }

                    {props.githubLink &&
                        <Popup 
                            content='Github Repo' 
                            trigger={<a href={props.githubLink}><Icon name='github'/></a>} 
                            position='bottom left'
                        />
                    }

                    {props.link &&
                        <Popup 
                            content='Demo' 
                            trigger={<a href={props.link}><Icon name='linkify'/></a>} 
                            position='bottom left'
                        />
                    }


                </IconGroup>
            </div>
       

            </div>
        </Segment>
    );
}
