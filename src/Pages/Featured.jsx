import CategoryTitle from "../Components/CategoryTitle";
import featuredImg from '../assets/home/featured.jpg';
import img from '../assets/home/featured.jpg';
const Featured = () => {
     const style = {
       backgroundImage: ` url(${img})`,
       backgroundSize: "cover",
       backgroundPosition: "center",

       height: "590px",
       color: "white",
       padding: "20px",
     };
    return (
      <section style={style} className="pt-8 my-20 bg-fixed">
        <CategoryTitle
          heading={`check it out`}
          subHeading={`Featured item`}
        ></CategoryTitle>
        <div className="md:flex justify-center items-center py-8 px-16 bg-slate-500 bg-opacity-50">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, necessitatibus. Atque numquam sequi animi laborum
              omnis rem, nesciunt tempora dolorem eaque excepturi eveniet, quod
              molestias repellat esse! Optio aliquid molestiae libero
              dignissimos, quod esse cumque eum aspernatur quia laboriosam odit
              eius quaerat cum hic iste, voluptates quasi accusamus
              consequuntur. Impedit!
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
          </div>
        </div>
      </section>
    );
};

export default Featured;