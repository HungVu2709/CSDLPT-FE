import product_01_image_01 from "./../images/Ip13-green.jpg";
import product_02_image_02 from "./../images/iphone12-rmbg.png";
import product_03_image_03 from "./../images/Ip13-pink.webp";
import product_04_image_04 from "./../images/Ip13-promax-gold.png";

const products = [
  {
    id: "1",
    name: "Iphone 13 Pro",
    price: "39999999",
    short_description: "Iphone 13 doi moi nhat",
    image: [
      product_01_image_01,
      product_02_image_02,
      product_03_image_03,
      product_04_image_04,
    ],
    full_description: "Iphone 13 doi moi nhat vang den trang full des",
    quantity: "10",
    color: "red",
    product_type: {
      id: "1",
      name: "iPhone",
    },
    capacity: ["64 GB", "128 GB"],
    status: true,
  },
  {
    id: "2",
    name: "Iphone 13 Pro Max",
    price: "44999999",
    short_description: "Iphone 13 doi moi nhat",
    image: [
      product_01_image_01,
      product_02_image_02,
      product_03_image_03,
      product_04_image_04,
    ],
    full_description: "Iphone 13 doi moi nhat vang den trang full des",
    quantity: "10",
    color: "white",
    product_type: {
      id: "1",
      name: "iPhone",
    },
    capacity: ["64 GB", "128 GB", "256 GB"],
    status: true,
  },
  {
    id: "3",
    name: "Iphone 14",
    price: "49999999",
    short_description: "Iphone 13 doi moi nhat",
    image: [
      product_01_image_01,
      product_02_image_02,
      product_03_image_03,
      product_04_image_04,
    ],
    full_description: "Iphone 13 doi moi nhat vang den trang full des",
    quantity: "10",
    color: "white",
    product_type: {
      id: "1",
      name: "iPhone",
    },
    capacity: ["64 GB"],
    status: true,
  },
  {
    id: "4",
    name: "Iphone 15",
    price: "49999999",
    short_description: "Iphone 13 doi moi nhat",
    image: [
      product_01_image_01,
      product_02_image_02,
      product_03_image_03,
      product_04_image_04,
    ],
    full_description: "Iphone 13 doi moi nhat vang den trang full des",
    quantity: "10",
    color: "white",
    product_type: {
      id: "1",
      name: "iPhone",
    },
    capacity: ["64 GB"],
    status: true,
  },
  {
    id: "5",
    name: "Iphone 16",
    price: "49999999",
    short_description: "Iphone 13 doi moi nhat",
    image: [
      product_01_image_01,
      product_02_image_02,
      product_03_image_03,
      product_04_image_04,
    ],
    full_description: "Iphone 13 doi moi nhat vang den trang full des",
    quantity: "10",
    color: "white",
    product_type: {
      id: "1",
      name: "iPhone",
    },
    capacity: ["64 GB"],
    status: true,
  },
  {
    id: "6",
    name: "Iphone 17",
    price: "49999999",
    short_description: "Iphone 13 doi moi nhat",
    image: [
      product_01_image_01,
      product_02_image_02,
      product_03_image_03,
      product_04_image_04,
    ],
    full_description: "Iphone 13 doi moi nhat vang den trang full des",
    quantity: "10",
    color: "white",
    product_type: {
      id: "1",
      name: "iPhone",
    },
    capacity: ["64 GB"],
    status: true,
  },
];

const getAllProducts = () => products;
const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};
const getProductById = (id) => products.find((e) => e.id === id);

const getCartItemsInfo = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      let product = getProductBySlug(e.id);
      res.push({
        ...e,
        product: product,
      });
    });
  }
  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};

const productData = {
  getAllProducts,
  getProducts,
  getProductById,
  getCartItemsInfo,
};

export default productData;
