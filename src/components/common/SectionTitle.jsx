export default function SectionTitle({ number, title }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dce8bc] text-sm font-bold text-[#7A9B32]">
        {number}
      </div>

      <h2 className="text-lg font-semibold text-gray-800">
        {title}
      </h2>
    </div>
  )
}