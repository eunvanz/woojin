import "./style.scss";

interface ProductsItemProps {
  data: {
    imgUrl: string;
    label: string;
    description?: React.ReactNode;
  }[];
}

const ProductsItem = ({ data }: ProductsItemProps) => (
  <div className="ProductsItemsList">
    {data.map((item, index) => (
      <div className="ProductsItemsList__item" key={index}>
        <span>
          <img src={item.imgUrl} alt="이쑤시개 이미지" />
        </span>
        <strong>{item.label}</strong>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);

export default ProductsItem;
