import Header from "../Components/home/header/Header";
import Footer from "../Components/home/footer/Footer";
import Catalog from "../Components/catalog/Catalog";

const CatalogPage = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        <Catalog />
      </div>
      <Footer />
    </div>
  );
};

export default CatalogPage;
