import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css";

const Blog = () => {
  const settings = {
    dots: true,
    arrows: false,
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
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
  return (
    <>
      <Helmet>
        <title>Hazrat Ali - Blogs</title>
      </Helmet>

      {/* Blog Start From Here */}
      <section id="blog" className="container px-6 mx-auto pb-20">
        <h2 className="my-12 text-5xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
          Recent
          <span className="text-indigo-600 dark:text-indigo-500"> Blogs</span>
        </h2>
        <div className="">
          <Slider {...settings}>
            <div>
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <a
                  href="https://massivepixel.io/blog/b2b-website-design/"
                  target="_blank"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                      UX & UI Best Practices To Increase Sales with Your B2B Website Design
                    </h1>
                  </div>
                </a>
                <img
                  src="https://massivepixel.io/wp-content/uploads/2022/04/b2b-website-design-hero-header-1400x583.png"
                  alt="blog"
                  className="blog-image w-full h-72 hidden rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <a
                  href="https://massivepixel.io/blog/react-lifecycle-methods/"
                  target="_blank"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                      React Lifecycle Methods
                    </h1>
                  </div>
                </a>
                <img
                  src="https://massivepixel.io/wp-content/uploads/2022/02/react-lifecycle-methods-1400x583.png"
                  alt="blog"
                  className="blog-image w-full  h-72 hidden rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <a
                  href="https://massivepixel.io/blog/angular-best-practices/"
                  target="_blank"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">

                      24 Angular Best Practices You Shouldn’t Code Without
                    </h1>
                  </div>
                </a>
                <img
                  src="https://massivepixel.io/wp-content/uploads/2022/02/angular-best-practices-1400x583.png"
                  alt="blog"
                  className="blog-image w-full h-72 hidden rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <a
                  href="https://massivepixel.io/blog/node-js-rest-api/"
                  target="_blank"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                    How to Create Node JS REST API?
                    </h1>
                  </div>
                </a>
                <img
                  src="https://massivepixel.io/wp-content/uploads/2022/02/how-to-create-nodejs-rest-api-1400x583.png"
                  alt="blog"
                  className="blog-image w-full h-72 hidden rounded-lg"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Blog;
