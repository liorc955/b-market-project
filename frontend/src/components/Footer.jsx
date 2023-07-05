import ReactDOM from "react-dom";

const FooterBody = () => {
  const year = new Date().getFullYear();
  return (
    <div className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <img
            className="mb-2"
            src="https://graphicpick.com/wp-content/uploads/edd/2016/11/b-logo.jpg"
            alt=""
            width="50"
            height="50"
          />
          <small className="d-block mb-3 text-muted">© {year}</small>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      {ReactDOM.createPortal(<FooterBody />, document.querySelector("#footer"))}
    </>
  );
};

export default Footer;