function TrackOrder() {
  return (
    <div className="container">
      <h1 style={{textAlign: "center", margin: '50px'}}>Track Your Order</h1>
      <p>
        To track your order please enter your Order ID in the box below and
        press the "Track" button. This was given to you on your receipt and in
        the confirmation email you should have received.
      </p>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Order ID
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Billing Email
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Track
        </button>
      </form>
    </div>
  );
}

export default TrackOrder;
