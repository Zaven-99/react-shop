import Banner from "../Components/home/banner/Banner";
import BannerSecond from "../Components/home/banner/bannerSecond/BannerSecond";
import Categories from "../Components/home/categories/Categories";
import Footer from "../Components/home/footer/Footer";
import Header from "../Components/home/header/Header";
import ProductGallery from "../Components/home/productGallery/ProductGallery";
import DiscountSmartphone from "../Components/home/smartphones/discountSmartphone/DiscountSmartphone";
import MoreSmartphone from "../Components/home/smartphones/moreSmartphone/MoreSmartphone";
import Smartphone from "../Components/home/smartphones/Smartphone";
import Message from "../Components/ui/message/Message";
import styles from "./homePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <Header />
      <Message />
      <div className={styles["home-page__inner"]}>
        <Banner />
        <ProductGallery />
        <Categories />
        <Smartphone />
        <MoreSmartphone />
        <DiscountSmartphone />
        <BannerSecond />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
