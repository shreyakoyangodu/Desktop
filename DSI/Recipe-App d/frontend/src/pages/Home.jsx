import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Home.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slider1 from './slider1.jpg'
const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };
  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: 'Product 1', price: 19.99, image: 'https://assets.ajio.com/medias/sys_master/root/20230620/BVTA/6491ea0fd55b7d0c637ce770/-288Wx360H-463086147-blue-MODEL.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'https://www.kleinfeldbridal.com/wp-content/uploads/2023/08/Theia_WREN_Front.jpg' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'https://www.sophiatolli.com/uploads/filemanager/spring_2022_thumbnails/Y12248_black_f_d.jpg' },
  ]);
  const carouselImages = [
    slider1,
    'https://www.kleinfeldbridal.com/wp-content/uploads/2023/08/Theia_WREN_Front.jpg' ,
    'https://t4.ftcdn.net/jpg/01/78/65/63/360_F_178656385_pAmNLIeVwo5y0IC3yy2njuTm1DRMgSsM.jpg'
];
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

  return (
    <>
     <div>
      <header>
        <h1> <img src="data:image/jpeg;base64,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 alt=" width= "150px" height="100px" /><i>Panda Shop</i></h1>
      </header>

      <nav>
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="#">Categories</a>
                <a href="#">Account</a>
                <div className="search-bar">
                    <input type="text" placeholder="Search products..." />
                    <button type="submit">Search</button>
                </div>
                <a href="/Services">Services</a>
                <a href="/AboutUs">About Us</a>
                <a href="#">Chatbot</a>
            </nav>

            <Slider {...carouselSettings}>
                {carouselImages.map((image, index) => (
                    <div key={index} className="carousel-image">
                      <center>
                        <img src={image} alt={`Carousel Image ${index + 1}`} />
                        </center>
                    </div>
                    
                ))}
            </Slider>

      <div className="hero">
        <h2>Discover the Latest Trends</h2>
        <p>Shop our collection of premium products.</p>
        <a className="cta-button" href="#products">
                Shop Now
            </a>
      </div>

      <div id="products" className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name}  width="287px" height="360"/>
              <h3>{product.name}</h3>
              <p>Description of the product.</p>
              <p>${product.price}</p>
              <button className="button-add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <p>Contact us at support@example.com</p>
        <p>&copy; 2023 Your E-Commerce App</p>
      </footer>
    </div>
      
    </>
  );
};
export default Home;