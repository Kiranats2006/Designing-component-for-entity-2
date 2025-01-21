// write product card here
import ViewProdButton from "./button";
const productCard=()=>{
    const productImage = "https://via.placeholder.com"
    const productName = "Sample Product";
    const price = "$49.99";
    return(
        <div className="product-card">
            <img src={productImage} alt="product-image" />
            <h2>{productName}</h2>
            <h2>{price}</h2>
            <ViewProdButton/>
        </div>
    )
}
export default productCard;
