import EnquiryPage from "./pages/EnquiryPage"
import ServicesSection from "./components/home/ServicesSection"
import WhyChooseUs from "./components/home/WhyChooseUs"
import ContactCTA from "./components/home/ContactCTA"
import DestinationsTestimonials from "./components/home/DestinationsTestimonials"
import RelatedBusSection from "./components/home/RelatedBusSection"
import Footer from "./components/parts/Footer"

export default function App() {
  return (
    <>
      <EnquiryPage />
      <ServicesSection />
      <WhyChooseUs />
      <ContactCTA />
      <DestinationsTestimonials/>
      <RelatedBusSection/>
      <Footer/>
    </>
  )
}