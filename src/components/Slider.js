function Slider() {
    return (
        <>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://machaand.com/wp-content/uploads/2021/07/Save-on-Combo-Plain-T-Shirts-Web.jpg" className="d-block w-100" style={{height: '500px'}}alt="..."/>
    </div>
  </div>  
    {/* <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-ZBaHvgE3rXYfxGSnMuNrbMBljpILuKGOw&usqp=CAU" className="d-block w-100"  style={{height: '500px'}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-ZBaHvgE3rXYfxGSnMuNrbMBljpILuKGOw&usqp=CAU" className="d-block w-100"  style={{height: '500px'}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-ZBaHvgE3rXYfxGSnMuNrbMBljpILuKGOw&usqp=CAU" className="d-block w-100"  style={{height: '500px'}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>*/}
  </div>
  <div>
    <img src="https://machaand.com/wp-content/uploads/2021/01/Machaand-Banner-Design-1920x179-Updated-1536x143.png" className="d-block w-100"  style={{marginTop: '30px', height: '100px'}} alt="..."/>
  </div>

        </>
    )
}

export default Slider
