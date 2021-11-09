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
            I provide service to Adelaide, the Adelaide Hills and even through
            to Murray Bridge!
          </p>
        </div>
      </div>
      <div className="anchor" id="about" />
      <div className="lg:flex mt-0">
        <div className="lg:w-6/12 bg-primary-600 text-white p-8">
          <h3 className="mt-2 lg:mt-4">About me</h3>
          <p>
            My business lending experience is based on an extended period of
            lending with major banks financing everything from hot-air-balloons,
            commercial property, pawn trawlers to trucks and cars, etc.
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
