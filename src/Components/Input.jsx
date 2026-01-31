import { useState } from "react";
import Output from "./Output";

export default function Input() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    objective: "",
    skills: "",
    education: [{ degree: "", institute: "", year: "" }],
    projects: [{ title: "", desc: "" }],
    experience: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (section, index, e) => {
    const updated = [...formData[section]];
    updated[index][e.target.name] = e.target.value;
    setFormData({ ...formData, [section]: updated });
  };

  const addItem = (section, emptyObj) => {
    setFormData({
      ...formData,
      [section]: [...formData[section], emptyObj],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("resumeData", JSON.stringify(formData));
    window.open("/resume", "_blank");
  };

  return (
    <main className="bg-linear-to-br from-gray-100 to-gray-200 flex flex-col md:flex-row min-h-screen gap-4 p-4">
      <div className="bg-white w-full md:w-1/2 p-8 rounded-2xl shadow-xl ">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            className="input my-1"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            className="input my-1"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="input my-1"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />
          <input
            className="input my-1"
            name="location"
            placeholder="Location"
            onChange={handleChange}
          />

          <textarea
            className="input my-1"
            name="objective"
            placeholder="Objective"
            onChange={handleChange}
          />

          <h2 className="font-bold">Education</h2>
          {formData.education.map((edu, i) => (
            <div key={i}>
              <input
                className="input my-1"
                name="degree"
                placeholder="Degree"
                onChange={(e) => handleArrayChange("education", i, e)}
              />
              <input
                className="input"
                name="institute"
                placeholder="Institute"
                onChange={(e) => handleArrayChange("education", i, e)}
              />
              <input
                className="input my-1"
                name="year"
                placeholder="Year"
                onChange={(e) => handleArrayChange("education", i, e)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addItem("education", { degree: "", institute: "", year: "" })
            }
            className="bg-emerald-600 hover:bg-emerald-800 text-white px-3 py-2 rounded cursor-pointer"
          >
            + Add Education
          </button>

          <h2 className="font-bold">Projects</h2>
          {formData.projects.map((p, i) => (
            <div key={i}>
              <input
                className="input my-1"
                name="title"
                placeholder="Title"
                onChange={(e) => handleArrayChange("projects", i, e)}
              />
              <textarea
                className="input my-1"
                name="desc"
                placeholder="Description"
                onChange={(e) => handleArrayChange("projects", i, e)}
                rows={10}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addItem("projects", { title: "", desc: "" })}
            className="bg-emerald-600 hover:bg-emerald-800 text-white px-3 py-2 rounded cursor-pointer"
          >
            + Add Project
          </button>

          <input
            className="input"
            name="skills"
            placeholder="Skills..."
            onChange={handleChange}
          />

          <button className="cursor-pointer bg-linear-to-r from-blue-500 to-indigo-500 text-white w-full py-3 rounded-xl">
            Generate Resume
          </button>
        </form>
      </div>

      <Output formData={formData} />
    </main>
  );
}
