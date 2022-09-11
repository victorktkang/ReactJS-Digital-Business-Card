import React from "react"

export default function Info () {
    return (
        <div>
            <div className="info">
                <h1 className="info--about">
                    About
                </h1>
                <p className="info--aboutContent">
                    I am a computer science graduate with a particular interest in streamlining and automating daily tasks. 
                </p>
                <h1 className="info--interests">
                    Interests
                </h1>
                <p className="info--interestsContent">
                    3D Printing. Exercise Science. Home Improvement. Pro Amateur Cook. Minimalism and Tech Enthusiast.
                </p>
            </div>
            <div className="socialmedia">
                <img src="./Twitter.png" alt="Twitter" className="socialmedia--icon"/>
                <img src="./Facebook.png" alt="Facebook" className="socialmedia--icon"/>
                <img src="./Instagram.png" alt="Instagram" className="socialmedia--icon"/>
                <img src="./Linkedin.png" alt="Linkedin" className="socialmedia--icon"/>
                <img src="./Github.png" alt="Github" className="socialmedia--icon"/>
            </div>
        </div>
    )
}