import { useState } from "react"

export default function Navbar(){
    // const [bgColor , setBgColor] = useState("transparent");

    return (
        <div style={{ width: '100%', display: 'flex', backgroundColor: 'black', height: '3em', justifyContent: 'space-around'}}>
            <div style={{padding: '1em'}}>
                <a href="#" style={{color: 'white', textDecoration: 'none'}}>Home</a> 
            </div>
            <div style={{padding: '1em'}}>
                <a href="#" style={{color: 'white', textDecoration: 'none'}}>About</a> 
            </div>
            <div style={{padding: '1em'}}> 
                <a href="#" style={{color: 'white', textDecoration: 'none'}}>Project</a> 
            </div>
            <div style={{padding: '1em'}}> 
                <a href="#" style={{color: 'white', textDecoration: 'none'}}>Contact</a> 
            </div>
        </div>
    )
}