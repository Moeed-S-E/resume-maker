const FinalResume = () => {
  const data = JSON.parse(localStorage.getItem("resumeData"));
  const handlePrint = () => {
    const printWindow = window.open(
      `${window.location.origin}/resume`,
      "_blank",
    );

    printWindow.document.write(document.documentElement.outerHTML);
    printWindow.print();
    printWindow.close();
  };
  return (
    <div className="max-w-3xl mx-auto p-10 font-serif relative print:bg-white print:p-0 print:shadow-none print:mx-0">
      <button
        onClick={handlePrint}
        className="absolute right-1 mb-6 border bg-indigo-600 text-white rounded-2xl px-4 py-2 print:hidden"
      >
        Print / Save PDF
      </button>

      <h1 className="text-3xl font-bold text-center">{data.name}</h1>
      <p className="text-center text-sm">
        {data.email} | {data.phone} | {data.location}
      </p>

      <hr className="my-4" />

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
