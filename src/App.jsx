import products from './products';
import './App.css';

function App() {
    return (

        <div className='container'>

            <div className='parentdiv'>
                <nav>
                    <div class="container_1">
                        <h1> Nike</h1>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>

                    </div>
                </nav>
            </div>

            <h1 className='collection_type_heading' >   WATER PROOF <span>runing</span> SHOES.   </h1>

            <div className='card_container'>    
                {
                    products.map((product, index) => (
                        <div className="card">
                            <div className="img">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="card-title"> {product.title} </div>
                            <div className="card-description"> {product.desc} </div>
                            <div className="card-price"> {product.price} </div>
                            <button>Add To Cart</button>
                        </div>
                    ))
                }
        </div>
        </div>

    );
}

export default App;
