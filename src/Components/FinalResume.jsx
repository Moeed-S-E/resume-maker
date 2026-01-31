// const FinalResume = () => {
//   const data = JSON.parse(localStorage.getItem("resumeData"));
//   const handlePrint = () => {
//     const printWindow = window.open(
//       `${window.location.origin}/resume`,
//       "_blank",
//     );

//     printWindow.document.write(document.documentElement.outerHTML);
//     printWindow.print();
//     printWindow.close();
//   };
//   return (
//     <div className="max-w-3xl mx-auto p-10 font-serif relative print:bg-white print:p-0 print:shadow-none print:mx-0">
//       <button
//         onClick={handlePrint}
//         className="absolute right-1 mb-6 border bg-indigo-600 text-white rounded-2xl px-4 py-2 print:hidden"
//       >
//         Print / Save PDF
//       </button>

//       <h1 className="text-3xl font-bold text-center">{data.name}</h1>
//       <p className="text-center text-sm">
//         {data.email} | {data.phone} | {data.location}
//       </p>

//       <hr className="my-4" />

//       {data.objective && (
//         <>
//           <h2 className="font-bold">Objective</h2>
//           <p>{data.objective}</p>
//         </>
//       )}

//       {data.education.length > 0 && (
//         <>
//           <h2 className="font-bold mt-3">Education</h2>
//           {data.education.map((e, i) => (
//             <p key={i}>
//               <b>{e.degree}</b> — {e.institute} ({e.year})
//             </p>
//           ))}
//         </>
//       )}

//       {data.projects.length > 0 && (
//         <>
//           <h2 className="font-bold mt-3">Projects</h2>
//           <ul className="list-disc ml-5">
//             {data.projects.map((p, i) => (
//               <li key={i}>
//                 <b>{p.title}</b>: {p.desc}
//               </li>
//             ))}
//           </ul>
//         </>
//       )}

//       {data.skills && (
//         <>
//           <h2 className="font-bold mt-3">Skills</h2>
//           <p>{data.skills}</p>
//         </>
//       )}
//     </div>
//   );
// };

import { useEffect } from "react";

const FinalResume = () => {
  const data = JSON.parse(localStorage.getItem("resumeData"));
  const isPrintMode =
    new URLSearchParams(window.location.search).get("print") === "true";

  // Auto-print + close ONLY when ?print=true is present
  useEffect(() => {
    if (isPrintMode && data) {
      const afterPrint = () => window.close();
      window.addEventListener("afterprint", afterPrint);

      // Small delay ensures CSS/fonts fully load before print dialog
      const timer = setTimeout(() => window.print(), 300);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("afterprint", afterPrint);
      };
    }
  }, [isPrintMode, data]);

  // Only show button in normal view mode (not print mode)
  const handlePrint = () => {
    window.open(`${window.location.origin}/resume?print=true`, "_blank");
  };

  if (!data)
    return (
      <div className="p-10 text-center">No resume data. Generate first!</div>
    );

  return (
    <div className="max-w-3xl mx-auto p-10 font-serif relative print:bg-white print:p-0 print:shadow-none print:mx-0">
      {/* Hide button in print mode (both query param AND CSS media) */}
      {!isPrintMode && (
        <button
          onClick={handlePrint}
          className="absolute right-1 top-1 z-10 mb-6 border bg-indigo-600 text-white rounded-2xl px-4 py-2 print:hidden"
        >
          Print / Save PDF
        </button>
      )}
      <h1 className="text-3xl font-bold text-center">{data.name}</h1>
      {" "}
      <p className="text-center text-sm">
        {data.email} | {data.phone} | {data.location}{" "}
      </p>
      <hr className="my-4" />{" "}
      {data.objective && (
        <>
          <h2 className="font-bold">Objective</h2>
          <p>{data.objective}</p>
        </>
      )}
      {data.education.length > 0 && (
        <>
          <h2 className="font-bold mt-3">Education</h2>
          {data.education.map((e, i) => (
            <p key={i}>
              <b>{e.degree}</b> — {e.institute} ({e.year})
            </p>
          ))}
        </>
      )}
      {data.projects.length > 0 && (
        <>
          <h2 className="font-bold mt-3">Projects</h2>
          <ul className="list-disc ml-5">
            {data.projects.map((p, i) => (
              <li key={i}>
                <b>{p.title}</b>: {p.desc}
              </li>
            ))}
          </ul>
        </>
      )}
      {data.skills && (
        <>
          <h2 className="font-bold mt-3">Skills</h2>
          <p>{data.skills}</p>
        </>
      )}
    </div>
  );
};

export default FinalResume;
