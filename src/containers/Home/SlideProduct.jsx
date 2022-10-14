import { formatCurrency } from "@src/utils/formatCurrency";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../product/ProductCard";

const SlideProduct = (props) => {
  return (
    <Swiper
      slidesPerView={1}
      freeMode={true}
      spaceBetween={20}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
          pagination: true,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      navigation={true}
      modules={[Navigation]}
      className="topsell-swiper"
    >
      {props.products.map((item, index) => (
        <SwiperSlide key={`product-${index}`}>
          <ProductCard
            id={item.id}
            image={item.image[0]}
            name={item.name}
            price={formatCurrency(item.price)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideProduct;
