import CategoryTitle from "../Components/CategoryTitle";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    },[])
    return (
      <section>
        <CategoryTitle
          subHeading={`what our client say`}
          heading={`testimonials`}
        />

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((reviews) => (
            <SwiperSlide key={reviews._id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={reviews.rating}
                  readOnly
                />
                <p>{reviews.details}</p>
                <h3 className="text-2xl text-orange-400">{reviews.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
};

export default Testimonials;