import {Link} from 'react-router-dom'

function BestSeller() {
    return (
        <div className="container">
            <h1 style={{margin: '50px', textAlign: 'center'}}>Best Sellers</h1>
            <div className="row" style={{justifyContent: 'space-between'}}>
            <Link className="card" to="/productpage" style={{width: '300px', border:'none', cursor: 'pointer', textDecoration: 'none' , color: 'black'}}>
                <img src="https://machaand.com/wp-content/uploads/2021/01/Shreya-Blue-Sorted-Edited-02-1.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    Sale
                </span>
                    <h5 className="card-title" >Grey T-shirt for women</h5>
                    <p>&#8377; 299</p>
                </div>
            </Link>
            <div className="card" style={{width: '300px', border:'none'}}>
                <img src="https://machaand.com/wp-content/uploads/2021/01/Plain-t-shirt-Mockup-with-model-600x600-Red.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    Sale
                </span>
                    <h5 className="card-title">Black T-shirt for men</h5>
                    <p>&#8377; 299</p>
                </div>
            </div>
            <div className="card" style={{width: '300px', border:'none'}}>
                <img src="https://machaand.com/wp-content/uploads/2021/01/Plain-t-shirt-Mockup-with-model-600x600-Blue.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    Sale
                </span>
                    <h5 className="card-title">Black T-shirt for men</h5>
                    <p>&#8377; 299</p>
                </div>
            </div>
            </div>
            <div className="row" style={{justifyContent: 'space-between', marginTop: '30px'}}>
            <div className="card" style={{width: '300px', border:'none'}}>
                <img src="https://machaand.com/wp-content/uploads/2021/01/Shrey-Black-Sorted-Edited-02.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    Sale
                </span>
                    <h5 className="card-title">Grey T-shirt for women</h5>
                    <p>&#8377; 299</p>
                </div>
            </div>
            <div className="card" style={{width: '300px', border:'none'}}>
                <img src="https://machaand.com/wp-content/uploads/2021/01/Shreya-Red-Sorted-Edited-05.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    Sale
                </span>
                    <h5 className="card-title">Grey T-shirt for women</h5>
                    <p>&#8377; 299</p>
                </div>
            </div>
            <div className="card" style={{width: '300px', border:'none'}}>
                <img src="https://machaand.com/wp-content/uploads/2021/06/Plain-t-shirt-Mockup-with-model-600x600-Black-400x400.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    Sale
                </span>
                    <h5 className="card-title">Black T-shirt for men</h5>
                    <p>&#8377; 299</p>
                </div>
            </div>
            </div>
            <Link to="/feedback">
            <img 
                src="https://machaand.com/wp-content/uploads/2021/01/01-Click-to-share-your-feedback.png"
                className="d-block w-100"
                style={{ height: "300px", marginBottom: "30px", cursor: 'pointer'}}
                alt="..."
            />
            </Link>
        </div>
    )
}

export default BestSeller
