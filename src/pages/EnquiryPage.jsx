import { useForm } from "react-hook-form";

import TripSection from "../components/enquiry/TripSection";
import StopsSection from "../components/enquiry/StopsSection";
import CustomerSection from "../components/enquiry/CustomerSection";
import Sidebar from "../components/enquiry/Sidebar";
import PrimaryButton from "../components/common/PrimaryButton";

export default function EnquiryPage() {
  const { register, handleSubmit, watch, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-4 md:px-16 py-10">
      <div className="mx-auto max-w-8xl">
        <div className="mb-6 w-full">
          <button
            className="
              flex
              w-full
              items-center
              gap-2
              rounded-full
              bg-white
              px-5
              py-3
              text-lg
              font-medium
              text-gray-700
              shadow-sm
            "
          >
            ↩ Back
          </button>
        </div>

        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Send Enquiry</h1>

          <p className="mt-3 text-gray-500">Book Bus, Tempo Traveller & Cab</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
            grid
            gap-6
            lg:grid-cols-[1.7fr_0.9fr]
          "
        >
          <div className="rounded-3xl max-w-312.5 p-4 bg-white">
            <TripSection
              register={register}
              watch={watch}
              setValue={setValue}
            />

            <StopsSection register={register} />

            <CustomerSection register={register} />
          </div>

          <Sidebar />
          <div className="col-span-full mt-2">
            <PrimaryButton text="Send Enquiry" />
          </div>
        </form>
      </div>
    </div>
  );
}
