import Header from "../Components/home/header/Header";
import Footer from "../Components/home/footer/Footer";
import Cart from "../Components/cart/Cart";

const CartPage = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
