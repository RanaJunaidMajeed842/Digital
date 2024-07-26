import React from "react"

function Info(){
    return (
        
        <div className="InfoSection">
            <img src="src\assets\2149022627.jpg" className="profileimg"/>
            <h1>Junaid Majeed</h1>
            <h3>Front End developer</h3>
            <a href="#">junaidmajeed.website</a>
            <div className="infoLinks">

                <a href="#" className="email">
                    <i class="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </a>
                <a href="" className="linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>    
                </a>
            </div>
        </div>
    )
}
export default Info