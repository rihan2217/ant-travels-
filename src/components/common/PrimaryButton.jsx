export default function PrimaryButton({ text }) {
  return (
    <button
      className="w-full rounded-xl bg-[#7A9B32] py-4 font-semibold text-white transition-all hover:opacity-90"
    >
      {text}
    </button>
  )
}