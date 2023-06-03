import CategoryProduct from "../component/CategoryProduct/CategoryProduct";
import ProductImage from "../component/ProductImage/ProductImage";
import Review from "../component/Review/Review";
import Service from "../component/Service/Service";
import StyleEstProduct from "../component/StyleEstProduct/StyleEstProduct";
import Title from "../component/Title/Title";



const Home = () => {
    return (
        <div>

            <Title></Title>
            
            <ProductImage></ProductImage>
            <Service></Service>
            <CategoryProduct></CategoryProduct>
            <StyleEstProduct></StyleEstProduct>
            <Review></Review>

        </div>
    );
};

export default Home;