import Footer from "../components/footer";
import Testimony from "../components/testimony";
import TopSection from "../components/top-section";

const Home = () => {
    return(
        <div className="home entry">
            <TopSection/>
            <div className="section-2">
                <div className="image">
                    <img src={require('../assets/Open Peeps - Sitting.png')} alt=""/>
                    <img src={require('../assets/bars.png')} alt=""/>
                </div>
                <div className="d-flex text">
                    <div className="d-flex d-flex_column d-flex_column_align-center">
                        <h3>Most Lagosians spend about 92% of thier annual income on living costs</h3>
                        <button>Start saving on living costs</button>
                    </div>
                    <img src={require('../assets/woman.png')} alt="" />
                </div>
                <div className="section-3">
                    <h3>We organise supply and demand data to make living expenses cheaper</h3>
                    <img src={require('../assets/avatars.png')} alt=""/>
                </div>
            </div>
            <div className="section-4">
                <img src={require('../assets/naira-woman.png')} alt=""/>
                <h4>Get notified about the best prices on products you want</h4>
            </div>
            <Testimony/>
            <Footer/>
        </div>
    )
}
export default Home;