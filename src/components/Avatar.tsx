export default function Avatar() {
  return (
    <div className="w-24 h-25 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gray-900">
      <img
        src="/assets/bilge.png"
        alt="myprofile"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
