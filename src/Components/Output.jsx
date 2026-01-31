const Output = ({ formData }) => {
  return (
    <div className="bg-white w-full md:w-1/2 p-8 rounded-2xl shadow-xl font-serif">
      <h1 className="text-2xl font-bold text-center">{formData.name}</h1>
      <p className="text-center text-sm">
        {formData.email} | {formData.phone} | {formData.location}
      </p>

      <hr className="my-4" />

      <h2 className="font-bold">Objective</h2>
      <p>{formData.objective}</p>

      <h2 className="font-bold mt-3">Education</h2>
      {formData.education.map((e, i) => (
        <p key={i}>
          <b>{e.degree}</b> — {e.institute} ({e.year})
        </p>
      ))}

      <h2 className="font-bold mt-3">Projects</h2>
      <ul className="list-disc ml-5">
        {formData.projects.map((p, i) => (
          <li key={i}>
            <b>{p.title}</b>: {p.desc}
          </li>
        ))}
      </ul>

      <h2 className="font-bold mt-3">Skills</h2>
      <p>{formData.skills}</p>
    </div>
  );
};

export default Output;
