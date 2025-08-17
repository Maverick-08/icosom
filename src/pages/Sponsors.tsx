import FooterSection from "@/components/FooterSection"
import Navbar from "@/components/Navbar"
import OurSponsorSection from "@/components/OurSponsorSection"
import SponsorSection from "@/components/SponsorSection"


const Sponsors = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-36">
        <SponsorSection />
      </div>
      <FooterSection />
    </div>
  )
}

export default Sponsors
