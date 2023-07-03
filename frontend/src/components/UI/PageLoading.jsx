import loadingGif from "../../img/loading.gif";
import classes from "./PageLoading.module.css";

const PageLoading = () => {
  return (
    <div className={classes.loading}>
      <img src={loadingGif} alt="loading gif" />
    </div>
  );
};

export default PageLoading;
