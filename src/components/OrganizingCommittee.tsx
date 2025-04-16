import { title } from "process";

const OrganizingCommittee = () => {
  const mainHeads = [
    {
      title: "Chief Patron",
      fullName: "Prof. (Dr.) Karunesh Kumar Shukla",
      designation: "Director, MANIT Bhopal",
    },
    {
      title: "Patron",
      fullName: "Prof. (Dr.) S. P. S. Rajput",
      designation: "Dean ID & IR",
    },
    {
      title: "Chair Person",
      fullName: "Prof. (Dr.) Namita Srivastava",
      designation: "MANIT Bhopal, India",
    },
  ];

  const genralChairMembers = [
    {
      fullName: "Prof. (Dr.)  Sanjay Sharma",
      college: "MANIT Bhopal, India",
    },
    {
      fullName: "Prof. (Dr.) Debasis Kundu",
      college: "IIT Kanpur, India",
    },
  ];

  const generalCoChairMembers = [
    {
      fullName: "Prof. (Dr.)  Sujoy Das",
      college: "MANIT Bhopal, India",
    },
    {
      fullName: "Prof. (Dr.) Debjani Chakraborty",
      college: " IIT Kharagpur, India",
    },
    {
      fullName: "Prof. (Dr.)  Madhvi Shakya",
      college: "MANIT Bhopal, India",
    },
  ];

  const programChairMembers = [
    {
      fullName: "Dr. Usha Chouhan",
      college: "MANIT Bhopal, India",
    },
    {
      fullName: "Dr. Chandan Kumar Verma",
      college: "MANIT Bhopal, India",
    },
    {
      fullName: "Dr. Amit Bhagat",
      college: "MANIT Bhopal, India",
    },
  ];

  const programCoChairMembers = [
    {
      fullName: "Dr. G. S. Thakur",
      college: "MANIT Bhopal, India",
    },
    {
      fullName: "Dr. Manoj Jha",
      college: "MANIT Bhopal, India",
    },
    {
      fullName: "Dr. Dheerendra Mishra",
      college: "MANIT Bhopal, India",
    },
  ];

  const publicityChairMembers = [
    {
      fullName: "Dr. Pushpendra Kumar",
      college: "MANIT Bhopal, India",
    },
    {
      fullName: "Dr. Jitendra Kumar",
      college: "MANIT Bhopal, India",
    },
    {
      fullName: "Dr. S. Devidas",
      college: "MANIT Bhopal, India",
    },
    {
      fullName: "Dr. Kuldeep Singh Yadav",
      college: "MANIT Bhopal, India",
    },
  ];

  const organizingSecretaryMembers = [
    {
      fullName: "Dr. Jay Kumar Jain",
      college: "MANIT Bhopal, India",
    },
    {
      fullName: "Dr. Suman Das",
      college: "MANIT Bhopal, India",
    },
    {
      fullName: "Dr. Subhankar Dutta",
      college: "MANIT Bhopal, India",
    },
  ];

  return (
    <section id="organizingCommittee" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center font-bold mb-16">
          <h2 className="text-4xl mb-4">
            <span className="text-black">Committee</span>
            <span className="text-black ml-4">Members</span>
          </h2>
          <div className="w-36 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* For Chief Patron, Patron & Chair Person */}
          {mainHeads.map((data, index) => {
            return (
              <div
                key={index}
                className="mt-12 pt-8 pb-12 border bg-slate-50 rounded-lg shadow hover:shadow-md "
              >
                <div className="flex flex-col gap-8">
                  <div className="h-36 w-36 rounded-full bg-slate-300 mx-auto"></div>
                  <div className="text-center">
                    <p>{data.title}</p>
                    <p>{data.fullName}</p>
                    <p>{data.designation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* For General Chair */}
          <div>
            <p className="mt-4 mb-8 text-center text-xl font-semibold">General Chair</p>
            {genralChairMembers.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mb-8 px-4 py-2 bg-slate-50 shadow border-l-4 border-red-600 rounded-lg"
                >
                  <div className="flex items-center gap-8">
                    <div className="h-20 w-20 rounded-full bg-slate-400"></div>
                    <div>
                      <p>{data.fullName}</p>
                      <p>{data.college}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* For General Co Chair */}
          <div>
            <p className="mt-4 mb-8 text-center text-xl font-semibold">
              General Co-Chair
            </p>
            {generalCoChairMembers.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mb-8 px-4 py-2 bg-slate-50 shadow border-l-4 border-red-600 rounded-lg"
                >
                  <div className="flex items-center gap-8">
                    <div className="h-20 w-20 rounded-full bg-slate-400"></div>
                    <div>
                      <p>{data.fullName}</p>
                      <p>{data.college}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* For Program Chair */}
          <div>
            <p className="mt-4 mb-8 text-center text-xl font-semibold">Program Chair</p>
            {programChairMembers.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mb-8 px-4 py-2 bg-slate-50 shadow border-l-4 border-red-600 rounded-lg"
                >
                  <div className="flex items-center gap-8">
                    <div className="h-20 w-20 rounded-full bg-slate-400"></div>
                    <div>
                      <p>{data.fullName}</p>
                      <p>{data.college}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* For Program Co Chair */}
          <div>
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
                    <div className="h-20 w-20 rounded-full bg-slate-400"></div>
                    <div>
                      <p>{data.fullName}</p>
                      <p>{data.college}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* For Publicity Chair */}
          <div>
            <p className="mt-4 mb-8 text-center text-xl font-semibold">Publicity Chair</p>
            {publicityChairMembers.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mb-8 px-4 py-2 bg-slate-50 shadow border-l-4 border-icosom-500 rounded-lg"
                >
                  <div className="flex items-center gap-8">
                    <div className="h-20 w-20 rounded-full bg-slate-400"></div>
                    <div>
                      <p>{data.fullName}</p>
                      <p>{data.college}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* For Organizing Secretary */}
          <div>
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
                    <div className="h-20 w-20 rounded-full bg-slate-400"></div>
                    <div>
                      <p>{data.fullName}</p>
                      <p>{data.college}</p>
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
