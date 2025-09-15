export default function Navigation() {
    return (
        <div>
            <nav>
                <button>Home</button>
                <button>Catalog</button>
                <button>Favorites</button>
                <button>About</button>
                <button>Help me</button>
            </nav>
            <form>
                <input
                    type='search'
                    placeholder='Type here...'
                />
                <button type='button'>Go!</button>
            </form>
        </div>
    );
}
