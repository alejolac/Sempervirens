export default function ProductCard({ img, title, text, price }) {
    function truncate(str, max) {
        return str.length > max ? str.slice(0, max) + '...' : str;
    }

    return (
        <div className="pc-card">
            <div className="pc-img-wrap">
                <img src={img} alt={title} />
            </div>
            <div className="pc-body">
                <h3 className="pc-title">{truncate(title, 40)}</h3>
                <p className="pc-desc">{truncate(text, 80)}</p>
                <span className="pc-price">$ {price}</span>
            </div>
        </div>
    );
}
