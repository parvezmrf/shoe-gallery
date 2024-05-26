const Faq = () => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Want to know about us?
        </div>
        <div className="collapse-content">
          <p>We are the best seller.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Why choose us ?
        </div>
        <div className="collapse-content">
          <p>Follow our customer reviews</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Know about our payment methode.
        </div>
        <div className="collapse-content">
          <p>We supports all types of payments</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
