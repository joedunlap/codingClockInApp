import  { useState, useEffect } from 'react';
function Header() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); //update every second

        return () => clearInterval(interval); //clean up function 

    }, []); //empty dependency array ensures effects run only once on mount
    return(
        <header>
            <h1>Coding Time Clock</h1>
            <nav className ="nav">
                <ul>
                    <li>Home</li>
                    <li>user</li>
                    <li>stats</li>
                    <li>about</li>
                    <li>Current Time: {currentTime.toLocaleString()}</li>

                </ul>
            </nav>
            <hr></hr>
        </header>
    )
}

export default Header

