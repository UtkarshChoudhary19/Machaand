function Desc() {
    return (
        <div className="container" style={{margin: '50px'}}>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"> Additional information</button>
                </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">Get that classy and sassy look with this plain white t-shirt for men. Wear it on your favorite jeans, shorts, trousers it will give you a fresh and chic look. Layer it or let it show a white color t-shirt will still look stylish. A must-have minimal plain white t-shirt to your wardrobe.</div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Sizes :-  XS, S, M, L, XL</div>
        </div>
        </div>
    )
}

export default Desc
