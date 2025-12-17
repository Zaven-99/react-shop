import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
import Navigation from "../Components/navigation/Navigation";
import ProductDetails from "../Components/productDetails/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        <Navigation />
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
