import Avatar from "./Avatar";

export default function Testimonial({ name, text }) {
  return (
    <div className="p-4">
      <div className="flex justify-center">
        <Avatar />
      </div>
      <div className="text-center mt-4 font-bold">{name}</div>
      <div className="text-center mt-4">"{text}"</div>
    </div>
  );
}
