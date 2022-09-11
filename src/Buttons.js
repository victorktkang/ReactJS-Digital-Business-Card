import React from 'react'

export default function Buttons () {
    return (
        <div className="emailbutton--background">
            <button className="emailbutton" onClick={() => window.location = 'mailto:victorktkang@gmail.com'}> 
            <img src="Email.png" className="Email--icon"/>
            Email
            </button>
        </div>
    )
}