import React from "react";
import styles from "./TeamMember.module.css"

const TeamMemberCard = (person) => {
    return (
        <div className="col-md-4 col-11 my-3 d-flex justify-content-center avatar-wrapper">
            <img src={person.data.photo} alt="name" className="avatar w-75 rounded-circle" />
            <div className="name-wrapper d-flex flex-column">
                <h1 className="name text-white text-center lora-regular font-weight-light">{person.data.name}</h1>
                <div className={`d-flex justify-content-center ${styles.links}`}>
                    {
                        person.data.social.instagram 
                        ? 
                        <a className="text-center mx-2" href={person.data.social.instagram} target="_blank" rel="noreferrer">
                            <i className="name lni lni-instagram-original"></i>
                        </a>
                        : ""
                    }
                    {
                        person.data.social.github
                        ?
                        <a className="text-center mx-2" href={person.data.social.github} target="_blank" rel="noreferrer">
                            <i className="name lni lni-github-original"></i>
                        </a>
                        :
                        ""
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard;