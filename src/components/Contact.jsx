export default function Services() {
  return (
    <div className="container">
      <div className="anchor" id="contact" />
      <h2 className="text-center">Contact</h2>
      <div className="anchor" id="area" />
      <div className="flex flex-col-reverse lg:flex-row mt-8 lg:mt-12">
        <div
          className="lg:w-6/12 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url('images/regions.jpg')`,
            minHeight: "300px",
          }}
        ></div>
        <div className="lg:w-6/12 bg-primary-600 text-white p-8">
          <h3 className="mt-4">Area of Service</h3>
          <p>
            I provide services to Adelaide, the greater Adelaide region through
            to the Victorian border and to your friends, family and colleagues
            interstate.
          </p>
        </div>
      </div>
      <div className="anchor" id="about" />
      <div className="lg:flex mt-0">
        <div className="lg:w-6/12 bg-primary-600 text-white p-8">
          <h3 className="mt-2 lg:mt-4">About me</h3>
          <p>
            I have over 8 years’ experience working in banking and as a broker
            financing homes, commercial properties, equipment, prawn trawlers
            and many more. I have operated my own business’ for more than 12
            years and managed national and international companies at senior
            levels. I am continuously training in the finance industry to stay
            ahead of future changes.
          </p>
        </div>
        <div
          className="lg:flex lg:flex-col lg:w-6/12 bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: `url('/images/businessCard.jpg')`,
            minHeight: "300px",
          }}
        >
          <div className="anchor" id="details" />
        </div>
      </div>
    </div>
  );
}
