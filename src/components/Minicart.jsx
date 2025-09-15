export default function Minicart({ likes, cartItems }) {
    return (
        <div>
            <button className='icon-btn'>
                <span>&#129293;</span>
                {likes > 0 ? <span className='badge'>{likes}</span> : null}
            </button>
            <button className='icon-btn'>
                <span>&#128722;</span>
                {cartItems > 0 && <span className='badge'>{cartItems}</span>}
            </button>
        </div>
    );
}
