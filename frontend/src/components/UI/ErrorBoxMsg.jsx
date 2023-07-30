const ErrorBoxMsg = (props) => {
  return (
    <div className="mt-3 alert alert-danger">
      <span>{props.errorMsg}</span>
    </div>
  );
};

export default ErrorBoxMsg;