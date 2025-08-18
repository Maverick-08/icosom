import FooterSection from "@/components/FooterSection"
import Navbar from "@/components/Navbar"
import OrganizingCommittee from "@/components/OrganizingCommittee"


export const Committee= ()=>{
    return(
        <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <OrganizingCommittee/>
      </div>
      <FooterSection />
    </div>
    )
}