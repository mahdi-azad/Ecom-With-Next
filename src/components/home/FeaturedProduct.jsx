import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import { Rate } from "antd";

const FeaturedProduct = () => {
  // the old way of fetching api CSR before using getserversideprops
  const [featuredProduct, setFeaturedProduct] = useState([]);
  useEffect(() => {
    const fetchFeaturedProduct = () => {
      axios
        .get("https://staging-be-ecom.techserve4u.com/api/product/getfeatured")
        .then((res) => {
          if (res.data?.success) {
            setFeaturedProduct(res.data?.products);
          }
        })
        .catch((err) => console.log(err));
    };

    fetchFeaturedProduct();
  }, []);

  console.log("featured product", featuredProduct);
  return (
    <div className="featured_product">
      <div className="section_content">
        <Swiper
          pagination={{
            // dynamicBullets: true,
            clickable: true,
          }}
          slidesPerView={5}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
          }}
          // slidesPerView={2}
        >
          {featuredProduct?.length > 0 &&
            featuredProduct.map((product) => (
              <SwiperSlide key={product?._id}>
                <div className="product_card">
                  <div className="product_card">
                    <div className="product_image">
                      <div>
                        <Image
                          width={300}
                          height={300}
                          objectFit="cover"
                          className="mx-auto w-100"
                          src={
                            product?.thumbnail
                              ? product?.thumbnail
                              : "https://via.placeholder.com/250"
                          }
                          alt="product"
                        ></Image>
                      </div>
                    </div>

                    <div>
                      <div className="product_info">
                        <div className="rating">
                          <Rate
                            style={{ fontSize: "16px" }}
                            disabled
                            defaultValue={product?.ratingCount}
                          />
                        </div>

                        <h5>{product?.name}</h5>

                        <div className="product-price">
                          {product?.discount?.value > 0 ? (
                            <>
                              <span className="old-price">
                                ${product.price}
                              </span>
                              {product?.discount.discountType === "flat" ? (
                                <span className="new-price">
                                  ${product?.price - product?.discount.value}
                                </span>
                              ) : (
                                <span className="new-price">
                                  $
                                  {product.price -
                                    Math.floor(
                                      product.price *
                                        (product.discount.value / 100)
                                    )}
                                </span>
                              )}
                            </>
                          ) : (
                            <span className="new-price">${product.price}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        {/* <Carousel
                swipeable={false}
                draggable={false}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {
                    featuredProduct?.length > 0 && featuredProduct.map(product => <div key={product?._id} className="product_card">
                        <div className="product_card">
                            <div className="product_image">
                                <div>
                                    <Image
                                    width={200}
                                    height={250}
                                    className="mx-auto w-100"
                                    src={product?.thumbnail ? product?.thumbnail : "https://via.placeholder.com/250"}
                                    alt="product"
                                    >

                                    </Image>
                                </div>

                            </div>

                        </div>

                    </div>)
                }
            </Carousel>; */}
      </div>
    </div>
  );
};

export default FeaturedProduct;
