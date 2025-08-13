const SponsorSection = () => {
  const data = [
    [
      "Exhibition booth size",
      "4m x 3m",
      "3m x 2m",
      "2m x 2m",
      "1.5m x 1.5m",
      "1m x 1m",
      "-",
    ],
    ["Max No. of Complimentary Registration", "6", "5", "4", "3", "2", "1"],
    ["Workshop Slot (1 Hour)", "✓", "✓", "✓", "", "", ""],
    [
      "Endorsement as a Prime Sponsor (as per the category)",
      "✓",
      "✓",
      "✓",
      "✓",
      "✓",
      "✓",
    ],
    ["Acknowledgement on the sponsor panel", "✓", "✓", "✓", "✓", "✓", "✓"],
    ["Acknowledgement on the conference backdrop", "✓", "✓", "✓", "✓", "", ""],
    [
      "Acknowledgement on Conference website",
      "✓ (Hyperlinked to company website)",
      "✓ (Hyperlinked to company website)",
      "✓ (Hyperlinked to company website)",
      "✓ (Hyperlinked to company website)",
      "✓",
      "",
    ],
    [
      "Complimentary insertion in Delegate kit.",
      "✓",
      "✓",
      "✓",
      "✓",
      "✓",
      "✓",
    ],
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-4xl">Exclusive Sponsorship Levels and Benefits</h1>
      <div className="mt-4 h-1px border"></div>
      <div className="overflow-x-auto">
        <table className="border border-blue-900 text-sm text-center w-full">
          <thead>
            <tr className="">
              <th className="bg-blue-900 text-white px-4 py-2">Categories</th>
              <th className="border border-blue-900 px-4 py-2">Signature</th>
              <th className="border border-blue-900 px-4 py-2">Diamond</th>
              <th className="border border-blue-900 px-4 py-2">Platinum</th>
              <th className="border border-blue-900 px-4 py-2">Gold</th>
              <th className="border border-blue-900 px-4 py-2">Silver</th>
              <th className="border border-blue-900 px-4 py-2">Bronze</th>
            </tr>
            <tr className="bg-blue-100 font-bold">
              <th className="bg-blue-900 text-white px-4 py-2">
                Benefits/Amounts
              </th>
              <th className="border border-blue-900 px-4 py-2">
                (INR 3,00,000 / USD 3,500)
              </th>
              <th className="border border-blue-900 px-4 py-2">
                (INR 2,50,000 / USD 3,000)
              </th>
              <th className="border border-blue-900 px-4 py-2">
                (INR 2,00,000 / USD 2,500)
              </th>
              <th className="border border-blue-900 px-4 py-2">
                (INR 1,50,000 / USD 2,000)
              </th>
              <th className="border border-blue-900 px-4 py-2">
                (INR 1,00,000 / USD 1,500)
              </th>
              <th className="border border-blue-900 px-4 py-2">
                (INR 50,000 / USD 1,000)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="even:bg-blue-50">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="border border-blue-900 px-4 py-2 align-top"
                  >
                    {cell || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SponsorSection;
