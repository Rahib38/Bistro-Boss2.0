import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import CategoryTitle from "../../Components/CategoryTitle";
import MenuCategory from "./MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Food Dokan | Menu</title>
      </Helmet>
      <Cover menuImg={menuImg} title={" our menu"} />
      <CategoryTitle
        subHeading="don't miss"
        heading="today's offer"
      ></CategoryTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title={"Dessert"}
        coverImg={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"Pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"Soup"}
        coverImg={soupImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"Salad"}
        coverImg={saladImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
