import { useState } from "react";
import CategoryTitle from "../../Components/CategoryTitle";
import { useEffect } from "react";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
        })
    },[])
    return (
        <section className="mb-12">
            <CategoryTitle heading={`From our menu`}
            subHeading={`Popular Items`}></CategoryTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;