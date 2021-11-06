export default function Testimonial({ name, text }) {
  return (
    <div className="p-4">
      <div className="text-center mt-4 font-bold">{name}</div>
      <div className="text-center mt-4">"{text}"</div>
    </div>
  );
}
