import Banner from "../Components/banner/Banner";
import BannerSecond from "../Components/banner/bannerSecond/BannerSecond";
import Categories from "../Components/categories/Categories";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
import ProductGallery from "../Components/productGallery/ProductGallery";
import DiscountSmartphone from "../Components/smartphones/discountSmartphone/DiscountSmartphone";
import MoreSmartphone from "../Components/smartphones/moreSmartphone/MoreSmartphone";
import Smartphone from "../Components/smartphones/Smartphone";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ProductGallery />
      <Categories />
      <Smartphone />
      <MoreSmartphone />
      <DiscountSmartphone />
      <BannerSecond />
      <Footer />
    </div>
  );
};

export default HomePage;
