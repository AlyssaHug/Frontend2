import Product from "./components/Product";
import AppHeader from "./components/appHeader";
import Footer from "./components/footer";
import Main from "./components/Main";

const products = [
    {
        name: "Hair Sample",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Edith_Howard_Cook_Hair_Samples.jpg",
        price: 10.99,
    },
    {
        name: "Shoe",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Pair_of_shoes%2C_silver_leather_wedges%2C_Prada%2C_Italy%2C_2005.jpg",
        price: 80.99,
    },
    {
        name: "Shirt",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/T-shirt_%28drawing%29.jpg",
        price: 50.99,
    },
    {
        name: "Old Computer",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Compaq_Concerto_001.jpg",
        price: 100.99,
    },
];

function App() {
    function showProduct(product) {
        return <Product product={product} />;
    }
    return (
        <div className='app'>
            <section id='content'>
                <AppHeader />
                <Main>{products.map(showProduct)}</Main>
            </section>
            <Footer />
        </div>
    );
}

export default App;
