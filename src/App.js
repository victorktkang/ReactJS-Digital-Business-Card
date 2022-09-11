import React from "react"
import "./style.css"
import MainTitle from"./MainTitle"
import Image from "./image"
import Buttons from "./Buttons"
import Info from "./Info"

export default function App () {
    return (
        <div>
            <Image/>
            <MainTitle/>
            <Buttons/>
            <Info/>
        </div>
    )
}