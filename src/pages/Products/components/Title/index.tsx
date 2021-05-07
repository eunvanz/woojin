interface ProductsTitleProps {
  id: string;
  title: string;
}

const ProductsTitle = ({ id, title }: ProductsTitleProps) => (
  <div id={id} className="History__title">
    <h3 className="Mixin__title Mixin__title--left">
      <i>{title}</i>
    </h3>
  </div>
);

export default ProductsTitle;
