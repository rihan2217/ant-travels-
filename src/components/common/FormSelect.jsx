import Select from "react-select"

export default function FormSelect({
  label,
  options,
  name,
  setValue,
}) {
  const formattedOptions = options.map(
    (item) => ({
      value: item,
      label: item,
    })
  )

  return (
    <div className="flex flex-col gap-2">
      
      <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </label>

      <Select
        options={formattedOptions}
        placeholder={` ${label}`}
        
        onChange={(selected) =>
          setValue(name, selected.value)
        }

        styles={{
          control: (base, state) => ({
            ...base,
            minHeight: "54px",
            borderRadius: "18px",
            borderColor: state.isFocused
              ? "#7A9B32"
              : "#e5e7eb",

            boxShadow: state.isFocused
              ? "0 0 0 4px rgba(122,155,50,0.10)"
              : "none",

            "&:hover": {
              borderColor: "#7A9B32",
            },
          }),

          menu: (base) => ({
            ...base,
            borderRadius: "18px",
            overflow: "hidden",
            padding: "8px",
          }),

          option: (
            base,
            state
          ) => ({
            ...base,
            borderRadius: "12px",
            marginBottom: "6px",
            backgroundColor:
              state.isFocused
                ? "#eef5db"
                : "white",

            color: "#111827",
            padding: "12px",
            cursor: "pointer",
          }),
        }}
      />
    </div>
  )
}