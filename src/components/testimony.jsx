const Testimony = () => {
    return(
    <div className="testimony">
        <img src={require('../assets/orange-circle.png')} className="orange-circle" alt=""/>
        <div className="d-flex testimony-container">
            <div>
                <img src={require('../assets/previous-testimony.png')} alt=""/>
            </div>
            <div className="d-flex d-flex_justify-center">
                <h5 className="start-quote">"</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <h5 className="close-quote">"</h5>
            </div>
            <div>
                <img src={require('../assets/next-testimony.png')} alt=""/>
            </div>
        </div>
        <h3>Victor Asemota</h3>
        <h4>@victor_asemota</h4>
    </div>
    )
}
export default Testimony;