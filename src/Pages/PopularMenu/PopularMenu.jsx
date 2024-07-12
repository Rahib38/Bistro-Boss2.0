import CategoryTitle from "../../Components/CategoryTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item=>item.category==='popular')
    return (
      <section className="mb-12">
        <CategoryTitle
          heading={`From our menu`}
          subHeading={`Popular Items`}
        ></CategoryTitle>
        <div className="grid md:grid-cols-2 gap-10">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </section>
    );
};

export default PopularMenu;