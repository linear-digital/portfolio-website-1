import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";
import {
  TestimonialAnimation,
  TestimonialTextAnimation,
} from "../../../Animations/Animations";
import { useInView } from "react-intersection-observer";
import ReactStars from "react-rating-stars-component";
import { clientReviews } from '../../util/data';
const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    setTestimonial(clientReviews);

  }, [clientReviews]);
  // console.log(testimonial)
  const settings_1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [viewDiv, setViewDiv] = useState(false);

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    }
    if (!inView) {
      setViewDiv(false);
    }
  }, [inView, animation]);

  return (
    <section className="container px-6 mx-auto pb-20" ref={ref}>
      <motion.h2
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={TestimonialTextAnimation}
        className="my-12 text-5xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none"
      >
        Client
        <span className="text-indigo-600 dark:text-indigo-500"> Review</span>
      </motion.h2>

      <motion.div
        className="px-6 "
        initial={"hidden"}
        animate={viewDiv && "visible"}
        variants={TestimonialAnimation}
      >
        <Slider {...settings_1}>
          {testimonial?.map((review) => (
            <div key={review.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block mx-auto border-2 border-gray-200 bg-gray-100" src={review.user.avatar || "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"} />
                <p className="leading-relaxed">
                  {review.text}
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                <h2 className="text-white font-medium title-font tracking-wider text-xl">{review.user.name}</h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>

          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default Testimonial;
