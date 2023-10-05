import img from "../../public/img1.jpg";
import "./styles/cards.css"


const ProductCard = ({ imageSrc, name, price }) => {
    return (
        <div className="product-card">
            <img src={img} alt="anturio" />
            <h3>Anturio</h3>
            <p>$123</p>
        </div>
    );
};

export default ProductCard;