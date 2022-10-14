import { formatCurrency } from "@src/utils/formatCurrency";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonDunk from "../../components/common/ButtonDunk";

const ProductView = (props) => {
  const [activeThumb, setActiveThumb] = useState();
  const [capacity, setCapacity] = useState("");
  const [cartAmount, setCartAmount] = useState(1);

  const product = props.product;

  const handleAddToCart = () => {
    console.log("Add to Cart");
  };

  if (!product) {
    return <div>Loading</div>;
  }

  return (
    <div className="product-detail">
      <div className="row">
        <div className="col-lg-6 col-12">
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{
              swiper:
                activeThumb && !activeThumb.destroyed ? activeThumb : null,
            }}
            className="product-swiper"
          >
            {product.image.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt="product images" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setActiveThumb}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className="thumb-swiper"
          >
            {product.image.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt="product images" />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="product__info__desc">
            <h3>Description</h3>
            <p>{product.full_description}</p>
            <p>{product.short_description}</p>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <div className="product__info">
            <h1 className="product__info__title">{product.name}</h1>
            <div className="product__info__item">
              <span className="product__info__item__price">
                {formatCurrency(product.price)}
              </span>
            </div>

            <div className="product__info__item">
              <div className="product__info__item__title">Color</div>
              <div className="product__info__item__list">
                <div className="product__info__item__list__item">
                  <div className={`circle bg-${product.color}`} />
                </div>
              </div>
            </div>

            <div className="product__info__item">
              <div className="product__info__item__title">Capacity</div>
              <div className="product__info__item__list">
                {product.capacity.map((item, index) => (
                  <div
                    key={index}
                    className={`product__info__capacity ${
                      capacity === item ? "active" : ""
                    }`}
                    onClick={() => setCapacity(item)}
                  >
                    <span className="product__info__giga">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product__info__item">
              <div className="product__info__item__title">Amount</div>
              <div className="product__info__item__quantity">
                <div className="d-flex justify-content-center align-items-center select-quantity">
                  <div
                    className="product__info__item__quantity__btn"
                    onClick={() => handleAddToCart()}
                  >
                    <i className="bx bx-minus" />
                  </div>
                  <div className="product__info__item__quantity__input">
                    {cartAmount}
                  </div>
                  <div
                    className="product__info__item__quantity__btn"
                    onClick={() => handleAddToCart()}
                  >
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
            </div>

            <div className="product__info__item">
              <ButtonDunk
                type="button"
                text="Add to cart"
                onClick={() => handleAddToCart()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
