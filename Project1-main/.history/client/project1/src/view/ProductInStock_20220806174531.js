import { Link } from "react-router-dom";

const Product = ({ imageUrl, name, productId, countInStock }) => {
  const handleDelete = (productId) =>{


  } 
  
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__count">Số lượng trong kho: {countInStock}</p>
        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
        <button onClick={handleDelete(productId)}>Delete</button>
      </div>
    </div>
  );
};

export default Product;
