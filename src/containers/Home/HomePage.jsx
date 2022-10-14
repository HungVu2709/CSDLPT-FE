import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import policy from "../../assets/fake-data/policy";
import productData from "@src/assets/fake-data/products";

import Grid from "../../components/common/Grid";
import Helmet from "../../components/common/Helmet";
import PolicyCard from "./PolicyCard";
import Section, { SectionBody, SectionTitle } from "./Section";
import ProductCard from "../Product/ProductCard";
import SlideProduct from "./SlideProduct";

const HomePage = () => {
  // const [products, setProducts] = useState([]);
  const products = productData.getAllProducts();
  console.log(products);
  return (
    <>
      <Helmet title="Trang chủ">
        <Section>
          <SectionBody>
            <Grid col={3} mdCol={2} smCol={1} gap={20}>
              {products.map((item) => (
                <ProductCard
                  key={`catalog-${item.id}`}
                  image={item.image[1]}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>

        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {policy.map((item, index) => (
                <Link key={`policy-${index}`} to="#">
                  <PolicyCard name={item.name} icon={item.icon} />
                </Link>
              ))}
            </Grid>
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>Related Products</SectionTitle>
          <SectionBody>
            <SlideProduct products={products} />
          </SectionBody>
        </Section>
      </Helmet>
    </>
  );
};

export default HomePage;
