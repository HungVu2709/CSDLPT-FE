import productData from "@src/assets/fake-data/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Helmet from "../../components/common/Helmet";
import Section, { SectionBody, SectionTitle } from "../home/Section";
import SlideProduct from "../home/SlideProduct";
import ProductView from "./ProductView";

const ProductDetail = (props) => {
  const { id } = useParams();
  const relatedProducts = productData.getProducts(6);
  const productDetail = productData.getProductById(`${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productDetail]);

  if (!productDetail) {
    return <div>Loading</div>;
  }

  return (
    <Helmet title={productDetail.name}>
      <Section>
        <SectionBody>
          <ProductView product={productDetail} />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Related Products </SectionTitle>
        <SectionBody>
          <SlideProduct products={relatedProducts} />
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default ProductDetail;
