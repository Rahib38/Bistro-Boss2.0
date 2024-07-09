import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
        <Banner />
        <Category></Category>
        <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;