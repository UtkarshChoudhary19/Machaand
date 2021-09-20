
function ProductPage() {
  return (
    <div style={{ display: "flex", margin: "50px" }} className="container">
      <a
        className="card"
        style={{
          width: "300px",
          border: "none",
          cursor: "pointer",
          display: "flex",
        }}
      >
        <img
          src="https://machaand.com/wp-content/uploads/2021/01/Shreya-Blue-Sorted-Edited-02-1.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            Sale
          </span>
        </div>
      </a>
      <div>
        <h1
          style={{ display: "flex", marginLeft: "200px", marginBottom: "30px" }}
        >
          Grey T-Shirt for Women
        </h1>
        <h4
          style={{ display: "flex", marginLeft: "200px", marginBottom: "30px" }}
        >
          &#8377; 299
        </h4>
        <a data-bs-toggle="modal" data-bs-target="#exampleModal" style={{color: 'blue', cursor: 'pointer', marginLeft: '200px', marginBottom:'30px'}}>
            Size Chart
            </a>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Size Chart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">TO FIT CHEST SIZE</th>
      <th scope="col">INCHES</th>
      <th scope="col">CM</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>S</td>
      <td>38</td>
      <td>97</td>
    </tr>
    <tr>
      <td>M</td>
      <td>40</td>
      <td>102</td>
    </tr>
    <tr>
      <td>L</td>
      <td>42</td>
      <td>107</td>
    </tr>
    <tr>
      <td>XL</td>
      <td>44</td>
      <td>112</td>
    </tr>
    <tr>
      <td>XXL</td>
      <td>46</td>
      <td>117</td>
    </tr>
    <tr>
      <td>XXXL</td>
      <td>48</td>
      <td>122</td>
    </tr>
  </tbody>
</table>
                </div>
                </div>
            </div>
            </div>
        <div
          className="container"
          style={{
            display: "flex",
            marginLeft: "200px",
            justifyContent: "space-between",
            marginTop: '30px',
            marginBottom: '20px'
          }}
        >
          <h3>Sizes</h3>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              XS
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              S
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              M
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              L
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              XL
            </label>
          </div>
        </div>
        <h4
          style={{ color: "green", marginLeft: "200px", marginBottom: "30px" }}
        >
          Availibility: - In Stocks
        </h4>
        <button
          style={{ marginLeft: "200px" }}
          type="button"
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
   
   
    
  );
}

export default ProductPage;
