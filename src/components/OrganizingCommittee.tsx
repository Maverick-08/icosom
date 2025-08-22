import chiefPatron from "../assets/director.jpg";
import patron from "../assets/dean.jpeg";
import charPerson from "../assets/chairPerson.jpg";
import generalChairMember1 from "../assets/generalChairMember1.jpg";
import generalChairMember2 from "../assets/generalChairMember2.jpg";
import generalChairMember3 from "../assets/keynoteSpeaker3.png";
import generalCoChairPerson1 from "../assets/generalCoChairPerson1.jpg";
import generalCoChairPerson2 from "../assets/generalCoChairPerson2.jpg";
import generalCoChairPerson3 from "../assets/generalCoChairPerson3.jpg";
import programChairPerson1 from "../assets/programChairMember1.png";
import programChairPerson2 from "../assets/programChairMember2.png";
import programChairPerson3 from "../assets/programChairMember3.jpg";
import programCoChairPerson1 from "../assets/programCoChairMember1.jpg";
import programCoChairPerson2 from "../assets/programCoChairMember2.jpg";
import programCoChairPerson3 from "../assets/programCoChairMember3.jpg";
import programCoChairPerson4 from "../assets/programCoChairMember4.png";
import publicityChairPerson1 from "../assets/publicityChairMember1.jpg";
import publicityChairPerson2 from "../assets/publicityChairMember2.jpg";
import publicityChairPerson3 from "../assets/publicityChairMember3.jpg";
import publicityChairPerson4 from "../assets/publicityChairMember4.png";
import organizingSecretaryPerson1 from "../assets/organizingSecretaryMember1.png";
import organizingSecretaryPerson2 from "../assets/organizingSecretaryMember2.png";
import organizingSecretaryPerson3 from "../assets/organizingSecretaryMember3.png";

const OrganizingCommittee = () => {
  const mainHeads = [
    {
      title: "Chief Patron",
      fullName: "Prof. Karunesh Kumar Shukla",
      designation: "Director, MANIT Bhopal",
      image: chiefPatron,
    },
    {
      title: "Patron",
      fullName: "Prof. S. P. S. Rajput",
      designation: "Dean ID & IR",
      image: patron,
    },
    {
      title: "Chair Person",
      fullName: "Prof. Namita Srivastava",
      designation: "MANIT Bhopal, India",
      image: charPerson,
    },
  ];

  const genralChairMembers = [
    {
      fullName: "Prof. Sanjay Sharma",
      college: "MANIT Bhopal, India",
      image: generalChairMember1,
    },
    {
      fullName: "Prof. Debasis Kundu",
      college: "IIT Kanpur, India",
      image: generalChairMember2,
    },
    {
      fullName: "Prof. Hon Keung Tony Ng",
      college: "Bentley University, USA",
      image: generalChairMember3,
    },
  ];

  const generalCoChairMembers = [
    {
      fullName: "Prof. Sujoy Das",
      college: "MANIT Bhopal, India",
      image: generalCoChairPerson1,
    },
    {
      fullName: "Prof. D Chakraborty",
      college: " IIT Kharagpur, India",
      image: generalCoChairPerson2,
    },
    {
      fullName: "Prof. M. Shakya",
      college: "MANIT Bhopal, India",
      image: generalCoChairPerson3,
    },
  ];

  const programChairMembers = [
    {
      fullName: "Prof. Usha Chouhan",
      college: "MANIT Bhopal, India",
      image: programChairPerson1,
    },
    {
      fullName: "Prof. Chandan Verma",
      college: "MANIT Bhopal, India",
      image: programChairPerson2,
    },
    {
      fullName: "Dr. Suchandan Kayal",
      college: "NIT Rourkela, India",
      image: programChairPerson3,
    },
  ];

  const programCoChairMembers = [
    {
      fullName: "Dr. G. S. Thakur",
      college: "MANIT Bhopal, India",
      image: programCoChairPerson1,
    },
    {
      fullName: "Dr. Manoj Jha",
      college: "MANIT Bhopal, India",
      image: programCoChairPerson2,
    },
    {
      fullName: "Dr. Amit Bhagat",
      college: "MANIT Bhopal, India",
      image: programCoChairPerson4,
    },
    {
      fullName: "Dr. D. Mishra",
      college: "MANIT Bhopal, India",
      image: programCoChairPerson3,
    },
  ];

  const publicityChairMembers = [
    {
      fullName: "Dr. P. Kumar",
      college: "MANIT Bhopal, India",
      image: publicityChairPerson1,
    },
    {
      fullName: "Dr. Jitendra Kumar",
      college: "MANIT Bhopal, India",
      image: publicityChairPerson2,
    },
    {
      fullName: "Dr. K. Singh Yadav",
      college: "MANIT Bhopal, India",
      image: publicityChairPerson4,
    },
    {
      fullName: "Dr. S. Devidas",
      college: "MANIT Bhopal, India",
      image: publicityChairPerson3,
    },
  ];

  const organizingSecretaryMembers = [
    {
      fullName: "Dr. Jay Kumar Jain",
      college: "MANIT Bhopal, India",
      image: organizingSecretaryPerson1,
    },
    {
      fullName: "Dr. Suman Das",
      college: "MANIT Bhopal, India",
      image: organizingSecretaryPerson2,
    },
    {
      fullName: "Dr. Subhankar Dutta",
      college: "MANIT Bhopal, India",
      image: organizingSecretaryPerson3,
    },
  ];

  const technicalProgramChair = [
    {
      fullName:"Dr. Neeraj Joshi",
      department:"Department of Mathematics",
      college:" IIT Delhi",
    },
    {
      fullName:"Dr. Tanujit Chakraborty",
      department:"Department of Statistics & Data Science",
      college:" Sorbonne University, Abu Dhabi",
    },
    {
      fullName:"Dr. Abhijit Barman",
      department:"Department of Operations & Qty Tech",
      college:" IIM Ranchi",
    },
    {
      fullName:"Dr. Deepak Prajapati",
      department:"Department of Decision Sciences",
      college:" IIM Lucknow",
    },
    {
      fullName:"Dr. Roberto Vila Gabriel",
      department:"Department of Statistics",
      college:" University of Brasilia, Brazil",
    },
    {
      fullName:"Dr. Ashok Das",
      department:"Department of Mathematics & Computing",
      college:" IIT, Dhanbad",
    },
    {
      fullName:"Dr. Niraj Kumar",
      department:"Department of Computer Science & Engineering",
      college:" IIT, Goa",
    },
    {
      fullName:"Dr. Tanmay Kayal",
      department:"Department of Mathematics & Statistical Science",
      college:" IIT, Mandi",
    },
    {
      fullName:"Dr. Michael Yuhas",
      department:"Department of Computing & Data Science",
      college:" Nanyang Technological University",
    },
    {
      fullName:"Prof. Koczy T. Laszlo",
      department:"Department of Telecommunications and Media Informatics",
      college:" Budapest University of Technology and Economics",
    },
    {
      fullName:"Dr. Tulika Rudra Gupta",
      department:"Department of Biostatistics",
      college:" Harvard T.H. Chan School of Public Health",
    },
    {
      fullName:"Dr. Pedro Luiz Ramos",
      department:"Department of Mathematics",
      college:" Pontificia Universidad Catolica de Chile, Chili",
    },
    {
      fullName:"Dr. Pushpinder Singh Patheja",
<<<<<<< HEAD
      department:"Dean - School of Computing Science and Engineering",
=======
      department:"Department of Computing Science and Engineering",
>>>>>>> b2137dce0ea88ec3971f520e3e43e85b38dd1ca8
      college:" VIT Bhopal University, Bhopal",
    },
  ]

  return (
    <section id="organizingCommittee" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Tagline  */}
        <div className="text-center font-bold mb-16">
          <h2 className="text-4xl flex flex-wrap justify-center mb-4">
            <span className="text-black">Committee</span>
            <span className="text-black ml-4">Members</span>
          </h2>
          <div className="w-36 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
        </div>

        {/* Chief Patron  */}
        <div className="flex flex-col gap-12 justify-center items-center">
          <h1 className="text-4xl font-semibold">Chief Patron</h1>
          <div className="border px-12 py-8 bg-slate-50 rounded-lg shadow hover:shadow-md ">
            <div className="flex flex-col gap-8">
              <img
                src={mainHeads[0].image}
                alt={mainHeads[0].fullName}
                className="h-36 w-36 rounded-full mx-auto"
              />
              <div className="text-center">
                <p className="text-lg font-medium">
                  {mainHeads[0].fullName}
                </p>
                <p className="text-slate-700">
                  {mainHeads[0].designation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Patrons  */}
        <div className="mt-24 flex flex-col justify-center items-center gap-12">
          <h1 className="text-4xl font-semibold">Patron</h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-16">
            {/* Patron 1 */}
            <div className="border px-12 py-8 bg-slate-50 rounded-lg shadow hover:shadow-md ">
              <div className="flex flex-col gap-8">
                <img
                  src={mainHeads[1].image}
                  alt={mainHeads[1].fullName}
                  className="h-36 w-36 rounded-full mx-auto"
                />
                <div className="text-center">
                  <p className="text-lg font-medium">
                    {mainHeads[1].fullName}
                  </p>
                  <p className="text-slate-700">
                    {mainHeads[1].designation}
                  </p>
                </div>
              </div>
            </div>

            {/* Patron 2 */}
            <div className="border px-12 py-8 bg-slate-50 rounded-lg shadow hover:shadow-md ">
              <div className="h-full flex flex-col gap-8">
                <img
                  src={mainHeads[2].image}
                  alt={mainHeads[2].fullName}
                  className="h-36 w-36 rounded-full mx-auto"
                />
                <div className="text-center">
                  <p className="text-lg font-medium">
                    {mainHeads[2].fullName}
                  </p>
                  <p className=" text-slate-700">
                    {mainHeads[2].designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* General Chair  */}
        <div className="mt-24 flex flex-col justify-center items-center gap-12">
          <h1 className="text-4xl font-semibold">General Chair</h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-16">
            {/* General Chair 1 */}
            <div className="border px-12 py-8 bg-slate-50 rounded-lg shadow hover:shadow-md ">
              <div className="h-full flex flex-col gap-8">
                <img
                  src={genralChairMembers[0].image}
                  alt={genralChairMembers[0].fullName}
                  className="h-36 w-36 rounded-full mx-auto"
                />
                <div className="text-center">
                  <p className="text-lg font-medium">
                    {genralChairMembers[0].fullName}
                  </p>
                  <p className=" text-slate-700">
                    {genralChairMembers[0].college}
                  </p>
                </div>
              </div>
            </div>

            {/* General Chair 2 */}
            <div className="border px-12 py-8 bg-slate-50 rounded-lg shadow hover:shadow-md ">
              <div className="flex flex-col gap-8">
                <img
                  src={genralChairMembers[1].image}
                  alt={genralChairMembers[1].fullName}
                  className="h-36 w-36 rounded-full mx-auto"
                />
                <div className="text-center">
                  <p className="text-lg font-medium">
                    {genralChairMembers[1].fullName}
                  </p>
                  <p className="text-slate-700">
                    {genralChairMembers[1].college}
                  </p>
                </div>
              </div>
            </div>

             {/* General Chair 3 */}
            <div className="border px-12 py-8 bg-slate-50 rounded-lg shadow hover:shadow-md ">
              <div className="flex flex-col gap-8">
                <img
                  src={genralChairMembers[2].image}
                  alt={genralChairMembers[2].fullName}
                  className="h-36 w-36 rounded-full mx-auto"
                />
                <div className="text-center">
                  <p className="text-lg font-medium">
                    {genralChairMembers[2].fullName}
                  </p>
                  <p className=" text-slate-700">
                    {genralChairMembers[2].college}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* General Co Chair  */}
        <div className="mt-24 flex flex-col justify-center items-center gap-12">
          <h1 className="text-4xl font-semibold">General Co-Chair</h1>
          <div className="flex justify-center items-center gap-16">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-16">
              {generalCoChairMembers.map((data, idx) => {
                return (
                  <div className="border px-12 py-8 bg-slate-50 rounded-lg shadow hover:shadow-md">
                    <div className="flex flex-col gap-8">
                      <img
                        src={data.image}
                        alt={data.fullName}
                        className="h-36 w-36 rounded-full mx-auto"
                      />
                      <div className="text-center">
                        <p className="text-lg font-medium">
                          {data.fullName}
                        </p>
                        <p className=" text-slate-700">
                          {data.college}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Program Chair  */}
        <div className="mt-24 flex flex-col justify-center items-center gap-12">
          <h1 className="text-4xl font-semibold">Program Chair</h1>
          <div className="flex justify-center items-center gap-16">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-16">
              {programChairMembers.map((data, idx) => {
                return (
                  <div className="border px-12 py-8 bg-slate-50 rounded-lg shadow hover:shadow-md">
                    <div className="flex flex-col gap-8">
                      <img
                        src={data.image}
                        alt={data.fullName}
                        className="h-36 w-36 rounded-full mx-auto"
                      />
                      <div className="text-center">
                        <p className="text-lg font-medium">
                          {data.fullName}
                        </p>
                        <p className=" text-slate-700">
                          {data.college}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technical Program Chair  */}
        <div className="mt-24 flex flex-col justify-center items-center gap-12">
          <h1 className="text-4xl text-center font-semibold">Technical Program Chair</h1>
          <div className="px-2 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {
              technicalProgramChair.map((data,idx)=>{
                return(
                  <div key={idx} className="p-4 bg-slate-50 shadow border-l-4 border-icosom-500 rounded-lg">
                    <h1 className="text-lg font-medium">{data.fullName}</h1>
                    <div className="flex flex-col">

                    <h3 className="text-slate-700">{data.department}</h3>
                    {/* <span className="hidden lg:block">,&nbsp;</span> */}
                    <h3 className="text-slate-700">{data.college}</h3>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* For Program Co Chair */}
          <div className="px-2">
            <p className="mt-4 mb-8 text-center text-xl font-semibold">
              Program Co-Chair
            </p>
            {programCoChairMembers.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mb-8 px-4 py-2 bg-slate-50 shadow border-l-4 border-icosom-500 rounded-lg"
                >
                  <div className="flex items-center gap-8">
                    <img
                      src={data.image}
                      alt={data.fullName}
                      className="h-20 w-20 rounded-full mx-auto"
                    />
                    <div>
                      <p className="text-lg font-medium">{data.fullName}</p>
                      <p className="text-sm text-slate-700">{data.college}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* For Publicity Chair */}
          <div className="px-2">
            <p className="mt-4 mb-8 text-center text-xl font-semibold">
              Publicity Chair
            </p>
            {publicityChairMembers.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mb-8 px-4 py-2 bg-slate-50 shadow border-l-4 border-icosom-500 rounded-lg"
                >
                  <div className="flex items-center gap-8">
                    <img
                      src={data.image}
                      alt={data.fullName}
                      className="h-20 w-20 rounded-full mx-auto"
                    />
                    <div>
                      <p className="text-lg font-medium">{data.fullName}</p>
                      <p className="text-slate-700">{data.college}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* For Organizing Secretary */}
          <div className="px-2">
            <p className="mt-4 mb-8 text-center text-xl font-semibold">
              Organizing Secretaries
            </p>
            {organizingSecretaryMembers.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mb-8 px-4 py-2 bg-slate-50 shadow border-l-4 border-icosom-500 rounded-lg"
                >
                  <div className="flex items-center gap-8">
                    <img
                      src={data.image}
                      alt={data.fullName}
                      className="h-20 w-20 rounded-full mx-auto"
                    />
                    <div>
                      <p className="text-lg font-medium">{data.fullName}</p>
                      <p className="text-slate-700">{data.college}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommittee;
