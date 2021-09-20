import Filter from "./Filter"

function Men() {
    return (
       
        <div className="container">
            <Filter/>
            <h1 style={{margin: '50px'}}>Men Plain T-Shirts</h1>
            <div className="container">
            <div className="row" style={{justifyContent: 'space-between'}}>
            <div className="card" style={{width: '300px', border:'none'}}>
                <img src="https://machaand.com/wp-content/uploads/2021/01/Shreya-Blue-Sorted-Edited-02-1.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    Sale
                </span>
                    <h5 className="card-title">Grey T-shirt for women</h5>
                    <p>&#8377; 299</p>
                </div>
            </div>
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
        </div>
        </div>
    )
}

export default Men
