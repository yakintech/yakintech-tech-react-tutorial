
function Navbar() {

    return (<>
        <div className="w3-top">
            <div
                className="w3-bar w3-white w3-padding w3-card"
                style={{ letterSpacing: 4 }}
            >
                <a href="#home" className="w3-bar-item w3-button">
                    Gourmet au Catering
                </a>
                <div className="w3-right w3-hide-small">
                    <a href="#about" className="w3-bar-item w3-button">
                        About
                    </a>
                    <a href="#menu" className="w3-bar-item w3-button">
                        Menu
                    </a>
                    <a href="#contact" className="w3-bar-item w3-button">
                        Contact
                    </a>
                </div>
            </div>
        </div>

    </>)

}


export default Navbar