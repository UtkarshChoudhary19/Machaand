function Filter() {
    return (
        <div className="container dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{float: 'right'}}>
    Filters
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <div className="container" style={{justifyContent: 'space-evenly', }}>
        <h3>Sizes</h3>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                XS
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
                S
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
                M
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
                L
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
                XL
            </label>
        </div>
        <h3>Color</h3>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Black
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Blue
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Grey
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Red
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
                White
            </label>
        </div>
        <button className="btn btn-primary" type="button">
                Apply
            </button>
        </div>
  </div>
</div>
       
    )
}

export default Filter
