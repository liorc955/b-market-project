import { createPortal } from 'react-dom';

const HeaderBody = (props) => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={props.description} />
      <title>{props.title}</title>
    </>
  );
};

const Head = (props) => {
  return (
    <>
      {createPortal(
        <HeaderBody title={props.title} description={props.description} />,
        document.querySelector("#header")
      )}
    </>
  );
};

export default Head;
