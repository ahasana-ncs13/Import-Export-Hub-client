import React from "react";
import Slider from "../../Component/Header/Slider";
import LatestProducts from "../../Component/LatestProducts/LatestProducts";
import FAQ from "../../Component/FAQ/FAQ";
import UserFeedback from "../../Component/UserFeedback/UserFeedback";
import { Helmet } from "react-helmet";
import IndustriesWeServe from "../../Component/IndustriesWeServe";
import Stats from "../../Component/stats";
import Blogs from "../../Component/Blogs";
import Awards from "../../Component/Awards";
import CTA from "../../Component/CTA";
import AuthorityPartners from "../../Component/AuthorityPartners";
import WhyThisPlatformMatters from "../../Component/WhyThisPlatformMatters";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Import Export Hub</title>
      </Helmet>
      <Slider></Slider>
      <Stats></Stats>
      <IndustriesWeServe></IndustriesWeServe>
      <WhyThisPlatformMatters></WhyThisPlatformMatters>
      <LatestProducts></LatestProducts>
      <Awards></Awards>
      <Blogs></Blogs>
      <AuthorityPartners></AuthorityPartners>
      <CTA></CTA>
      <FAQ></FAQ>
      <UserFeedback></UserFeedback>
    </div>
  );
};

export default Home;
