import { useEffect, useState } from "react";
<<<<<<< HEAD
import SliderImage from "react-zoom-slider";
=======
>>>>>>> origin/main

const ProductInfo = ({ product }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (!product) return;

    setImages([
      {
        image: product?.thumbnail,
        text: "",
      },
    ]);

    product?.gallery?.length > 0 &&
      product?.gallery.map((gImage) => {
        setImages((prev) => [...prev, { image: gImage, text: "" }]);
      });
  }, [product]);
  return (
    <div className="col-md-9 col-sm-12">
      <div className="row background_white">
        <div className="col-md-6 col-sm-12 product_image">
          <div className="row">
            <h1>Product Info</h1>
<<<<<<< HEAD
            {images?.length > 0 && (
              <SliderImage
                data={images}
                width="500px"
                showDescription={true}
                direction="right"
              />
            )}
=======
>>>>>>> origin/main
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
