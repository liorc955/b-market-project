import classes from './ProductLoading.module.css';

const ProductLoading = () => {
  return (
    <div className={classes['animated-background']}>
      <div className={classes['background-masker btn-divide-left']}></div>
    </div>
  );
};

export default ProductLoading;
