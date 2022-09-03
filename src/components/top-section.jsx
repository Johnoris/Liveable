import Nav from "./Nav";

const TopSection = () => {
    return(
        <div className="top-section">
            <Nav/>
            <div className="d-flex d-flex_column d-flex_column_flex-end">
                <div className="text">
                    <h1>Save upto 30% off your renting & living costs</h1>
                    <p>Join a community of over 1000 Lagosians already saving</p>
                    <form className="d-flex d-flex_align-center">
                        <input type="email" placeholder="Email Address"/>
                        <input type="text" placeholder="Phone Number"/>
                        <button type="submit">Get Started</button>
                    </form>
                </div>
            </div>
            <div className="d-flex d-flex_justify-center d-flex_align-center learn-more">
                <img src={require('../assets/scroll-icon.png')} alt=""/>
                <p>Learn more</p>
            </div>
        </div>
    )
}
export default TopSection;