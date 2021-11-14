export default function Header() {
  return (
    <div className="container">
      <div
        className="h-32 text-4xl bg-center bg-no-repeat bg-cover flex items-center justify-center mb-28"
        style={{ backgroundImage: `url('images/vineyards.jpg')` }}
      >
        <div
          className="rounded-full p-20 bg-no-repeat bg-cover bg-center relative"
          style={{
            backgroundImage: `url('images/StuWilliams.jpg')`,
            bottom: "-50%",
          }}
        ></div>
      </div>
    </div>
  );
}
