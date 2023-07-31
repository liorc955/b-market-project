import Card from "./Card";
import Head from './../Head';

const PageContent = (props) => {
  return (
    <>
      <Head title={props.title} description={props.description} />
      <div className="row d-flex justify-content-center">
        <Card className={"col-md-6 col-xl-4 mt-5 mb-5"}>{props.children}</Card>
      </div>
    </>
  );
};

export default PageContent;
