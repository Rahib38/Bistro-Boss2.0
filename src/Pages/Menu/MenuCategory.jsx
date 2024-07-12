import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({items, title, coverImg}) => {
    return (
      <div className="p-10">
        {title&&<Cover menuImg={coverImg} title={title}></Cover>}
        <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    // eslint-disable-next-line react/prop-types
                    items.map((item) => <MenuItem key={item._id}
                    item={item}
                    ></MenuItem>)
        }
        </div>
      </div>
    );
};

export default MenuCategory;