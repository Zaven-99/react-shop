import { useCatalog } from "../../bll/useCatalog";

const Catalog = () => {
  const { allProducts } = useCatalog();

  return (
    <section>
      {allProducts.map((item) => (
        <div key={item.id}>
          <img src={item.thumbnail} alt="" />
          <h2>{item.title}</h2>
          <p>{item.brand}</p>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </section>
  );
};

export default Catalog;
