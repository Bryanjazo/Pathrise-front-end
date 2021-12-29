import React from "react";
import "../../sass/pages/_home.scss";
import "../../sass/layout/_grid.scss";
import { Link } from "react-router-dom";

export default function Home({ job_board_list }) {
  return (
    <section className="Home_section">
      <div class="u-margin-bottom-big Home_section_heading">
        <h1 class="heading-primary">Job Sources</h1>
      </div>
      <div className="row">
        {job_board_list.map((job_board, key) => (
          <div className="col-1-of-3">
            {console.log(job_board.name)}
            <Link
              className="Link"
              to={{
                pathname: `/${job_board.name}/jobs`,
                state: { names: job_board.name, ids: job_board.id },
              }}
            >
              <div className="card" key={key}>
                <div className="great_text">
                  <p>Great</p>
                </div>
                <div class="aligned">
                  <img
                    src={job_board.logo_file}
                    className="card_image"
                    alt=""
                  />

                  <span className="card_description">
                    {job_board.description}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
