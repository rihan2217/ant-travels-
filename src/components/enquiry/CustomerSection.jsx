import FormInput from "../common/FormInput"
import SectionTitle from "../common/SectionTitle"

export default function CustomerSection({
  register,
}) {
  return (
    <div className="mt-2 rounded-3xl bg-white p-6 shadow-sm">
      <SectionTitle
        number="2"
        title="Customer Information"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <FormInput
          label="Full Name"
          placeholder="Enter full name"
          name="fullName"
          register={register}
        />

        <FormInput
          label="Phone Number"
          placeholder="Enter phone number"
          name="phone"
          register={register}
        />

        <div className="md:col-span-2">
          <FormInput
            label="Email"
            placeholder="Enter email"
            name="email"
            register={register}
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Notes
          </label>

          <textarea
            rows={5}
            placeholder="Type here..."
            {...register("notes")}
            className="w-full rounded-2xl border border-gray-300 p-4 outline-none focus:border-[#7A9B32]"
          />
        </div>
      </div>
    </div>
  )
}