import shop from '../img/shop.jpg';

const SummarySection = () => {
  return (
    <header className="pt-2">
      <div className="container pt-4 pt-xl-5">
        <div className="row pt-5">
          <div className="col-md-8 text-center text-md-start mx-auto">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-5">
                B-Market: Unleash Your Shopping Potential!
              </h1>
              <p className="fs-5 text-muted mb-5">
                Discover, Shop, and Thrive: Your Ultimate Market Experience!
              </p>
              <form
                className="d-flex justify-content-center flex-wrap"
                method="post"
                data-bs-theme="light"
              >
                <div className="shadow-lg mb-3"></div>
                <div className="shadow-lg mb-3"></div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-10 mx-auto">
            <div className="text-center position-relative">
              <img
                className="img-fluid"
                src={shop}
                style={{ width: "800px" }}
                alt='B-market commerace site'
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SummarySection;
