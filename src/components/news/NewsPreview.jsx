export default function NewsPreview({ title, text }) {
  return (
    <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-600 to-gray-500 shadow-lg backdrop-blur-md">
      {/* Top Half - Image Placeholder */}
      <div className="h-1/2 bg-blue-300"></div>

      {/* Bottom Half - Text */}
      <div className="flex h-1/2 flex-col p-4">
        <h1 className="mb-2 line-clamp-1 text-[32px] font-bold text-white">
          {title}
        </h1>
        <p className="line-clamp-3 text-sm text-gray-200">
          {text}{" "}
          <span className="cursor-pointer text-blue-400"> read more</span>
        </p>
      </div>
    </div>
  );
}
