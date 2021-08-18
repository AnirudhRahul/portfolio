import React from 'react'
import {Image, Label, Segment, Popup, Icon, IconGroup, LabelGroup, Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './project.css'

function Project(props) {
    return (
        <Segment raised className="project-card">
            {
                props.img &&
                <div className="left-card">
                    <Image src={props.img} className="card-image" ></Image>
                </div>
            }
            <div className="right-card">
                <Header size="large" className="card-title">{props.title||''}</Header>

                <LabelGroup color="black" className="card-labels">
                    {
                        (props.skills||[]).map((skill)=>
                            <Label className={skill} onClick={()=>console.log("Clicked")}>{skill}</Label>
                        )
                    }
                </LabelGroup>

                        
            <p>{props.desc||''}</p>


            
            <div className="card-icons">
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
                            trigger={<a className="extra-pad" href={props.ethLink}><Icon name='ethereum'/></a>} 
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

export default Project

