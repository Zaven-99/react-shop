import CheckOut from "../Components/checkOut/CheckOut";
import Footer from "../Components/home/footer/Footer";
import Header from "../Components/home/header/Header";

const CheckOutPage = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        <CheckOut />
      </div>
      <Footer />
    </div>
  );
};

export default CheckOutPage;
