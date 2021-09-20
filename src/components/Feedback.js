function Feedback() {
  return (
    <div className="container">
      <h1>Feedback & Suggestions</h1>
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary">
        Send Feedback
      </button>
    </div>
  );
}

export default Feedback;
