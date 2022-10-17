import { addItem } from "@src/redux/slice/cartItems";
import { remove } from "@src/redux/slice/productSlice";
import { formatCurrency } from "@src/utils/formatCurrency";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonDunk from "../../components/common/ButtonDunk";
import { withRouter } from "./../../hook/withRouter";

const ProductView = (props) => {
  const dispatch = useDispatch();

  const [activeThumb, setActiveThumb] = useState();
  const [capacity, setCapacity] = useState("");
  const [quantity, setQuantity] = useState(1);

  const product = props.product;

  const check = () => {
    if (capacity === undefined) {
      alert("Please pick capacity!");
      return false;
    }
    return true;
  };

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else if (type === "minus") {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (check()) {
      const newItem = {
        id: product.id,
        color: product.color,
        capacity: capacity,
        quantity: quantity,
        price: product.price,
      };
      dispatch(addItem(newItem));
    }
  };

  const handleGoToCart = () => {
    console.log("Mua ngay");
  };

  useEffect(() => {
    setQuantity(1);
    setCapacity(undefined);
  }, [product]);

  if (!product) {
    product = {
      id: "",
      name: "",
      price: "",
      short_description: "",
      full_description: "",
      image: [],
      quantity: "",
      color: "",
      product_type: {
        id: "",
        name: "",
      },
      capacity: [],
      status: true,
    };
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
                    onClick={() => updateQuantity("minus")}
                  >
                    <i className="bx bx-minus" />
                  </div>
                  <div className="product__info__item__quantity__input">
                    {quantity}
                  </div>
                  <div
                    className="product__info__item__quantity__btn"
                    onClick={() => updateQuantity("plus")}
                  >
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
            </div>

            <div className="product__info__item">
              <div className="product__info__item__button">
                <ButtonDunk
                  type="button"
                  text="Add to cart"
                  onClick={() => handleAddToCart()}
                />
                <ButtonDunk
                  type="button"
                  text="Mua ngay"
                  onClick={() => handleGoToCart()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductView);
