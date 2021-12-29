import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "../../sass/pages/_jobs.scss";
export default function Jobs() {
  let location = useLocation();

  console.log(location.state);
  const { names, ids } = location.state;
  const [jobSource, setJobSource] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/job_sources/${ids}`)
      .then((resp) => resp.json())
      .then((data) => setJobSource(data));
  }, [names, ids]);

  if (jobSource.error) {
    return (
      <div className="">
        <h1>{jobSource.error}</h1>
      </div>
    );
  } else {
    return (
      <section className="sobSourceSection">
        {console.log(jobSource)}
        <div className="source">
          <div className="source_title">
            <h1 className="source_heading">Job Source: {names}</h1>
          </div>
          <div className="source">
            <table>
              <tr id="trHeader">
                <th>ID</th>
                <th>Company Name</th>
                <th>Job Title</th>
                <th>Job URL</th>
              </tr>

              {jobSource.map((job) => (
                <tr className="rows">
                  <td className="rows_id">{job.id}</td>
                  <td class="rows_company_name">{job.company_name}</td>
                  <td>{job.job_title}</td>
                  <td
                    className="rows
                    _job_url"
                  >
                    <a href={job.job_url} className="url">
                      {job.job_url}
                    </a>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </section>
    );
  }
}
