import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import Cart from "../Components/cart/Cart";

const CartPage = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        <Cart />
        <Footer />
      </div>
    </div>
  );
};

export default CartPage;
