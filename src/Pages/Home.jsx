import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials";



const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Food Dokan | Home</title>
       
        </Helmet>
        <Banner />
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonials></Testimonials>
      </div>
    );
};

export default Home;