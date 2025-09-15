import Navigation from "./Navigation";
import Minicart from "./Minicart";
export default function AppHeader() {
    return (
        <header>
            <div>
                <h1>Buy my Products pls 🥲</h1>
                <Minicart
                    likes={5}
                    cartItems={0}
                />
            </div>
            <Navigation />
        </header>
    );
}
