import React from 'react';
import Slider from '../../Component/Header/Slider';
import LatestProducts from '../../Component/LatestProducts/LatestProducts';
import FAQ from '../../Component/FAQ/FAQ';
import UserFeedback from '../../Component/UserFeedback/UserFeedback';
import Footer from '../../Component/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <LatestProducts></LatestProducts>
            <FAQ></FAQ>
            <UserFeedback></UserFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;