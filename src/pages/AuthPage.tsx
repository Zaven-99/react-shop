import LoginForm from "../Components/auth/Auth";
import Footer from "../Components/home/footer/Footer";
import Header from "../Components/home/header/Header";

const AuthPage = () => {
  return (
    <div>
      <Header />

      <LoginForm />

      <Footer />
    </div>
  );
};

export default AuthPage;
