const Footer = () => {
    return(
        <footer>
            <div className="footer-wrapper d-flex">
                <div>
                    <h2 className="logo">liveable</h2>
                    <h5>Making everyday liveable</h5>
                </div>
                <div>
                    <h4>Services</h4>
                    <h4>Livable Stories</h4>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <div className="socials d-flex">
                        <div><img src={require('../assets/facebook-icon.png')} alt=""/></div>
                        <div><img src={require('../assets/twitter-icon.png')} alt=""/></div>
                        <div><img src={require('../assets/instagram-icon.png')} alt=""/></div>
                    </div>
                </div>
            </div>
            <h6>Copyright © 2021. liveable.ng.<br/> All rights reserved.</h6>
        </footer>
    )
}
export default Footer;