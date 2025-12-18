import Header from "../Components/home/header/Header";
import Footer from "../Components/home/footer/Footer";
import Favorite from "../Components/favorite/Favorite";

const FavoritePage = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "100px" }}></div>
      <Favorite />
      <Footer />
    </div>
  );
};

export default FavoritePage;
