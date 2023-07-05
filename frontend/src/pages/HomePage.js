import Head from "../components/Head";
import SummarySection from "../components/SummarySection";
import ProductList from "../components/product/ProductList";

const HomePage = () => {
  return (
    <>
      <Head title="B-Market" description="Home page" />
      <SummarySection />
      <ProductList />
    </>
  );
};

export default HomePage;
