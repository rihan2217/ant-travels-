export default function FormInput({
  label,
  type = "text",
  placeholder,
  register,
  name,
}) {
  return (
    <div className="flex flex-col gap-2">
      
      <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="
          w-full
          rounded-2xl
          border
          border-gray-200
          bg-white
          px-4
          py-3
          text-sm
          outline-none
          transition-all
          focus:border-[#7A9B32]
          focus:ring-4
          focus:ring-[#7A9B32]/10
        "
      />
    </div>
  )
}