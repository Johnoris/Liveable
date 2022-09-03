import Footer from "../components/footer"
import Testimony from "../components/testimony"
import TopSection from "../components/top-section"

const LearnMore = () => {
    return(
        <div className="entry learn-more">
            <TopSection/>
            <div className="section-2">
                <div className="section-3">
                    <div>
                        <h3 className="text-left">Lack of organized data is a major reason for high costs of living in Lagos</h3>
                        <p>Living in Lagos has become super expensive, mainly because poeple don’t know where to buy they are interested in at best rates. We do!! The data you provide helps us make sure you know too.</p>
                    </div>
                    <div><img src={require('../assets/avatars.png')} alt=""/></div>
                </div>
                <div className="image">
                    <img src={require('../assets/Open Peeps - Sitting.png')} alt=""/>
                    <img src={require('../assets/bars.png')} alt=""/>
                </div>
                <div className="d-flex text">
                    <div className="d-flex d-flex_column d-flex_column_align-center">
                        <h3>Most Lagosians spend about 92% of thier annual income on living costs</h3>
                        <h6>With so much spent on on living costs it is  very difficult to invest in your future</h6>
                        <button>Start saving on living costs</button>
                    </div>
                    <img src={require('../assets/woman.png')} alt="" />
                </div>
            </div>
            <div className="section-4">
                <img src={require('../assets/naira-woman.png')} alt=""/>
                <div className="early-access">
                    <h4>Get early access to the best prices on products you want</h4>
                    <p>No need to search the entire city looking for the best prices on anything you are interested in. Get notified directly on your phone every time.<em>No app download needed</em> </p>
                </div>
            </div>
            <Testimony/>
            <Footer/>
        </div>
    )
}
export default LearnMore