import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import Catalog from "../Components/catalog/Catalog";

const CatalogPage = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        <Catalog />
        <Footer />
      </div>
    </div>
  );
};

export default CatalogPage;
