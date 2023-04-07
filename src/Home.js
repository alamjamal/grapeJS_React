import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPage } from "./redux/actions/pageAction";

const Home = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("")
  const [webSiteName, setWebSiteName] = useState("")
  const [location, setLocation] = useState("")
  const [industry, setIndustry] = useState("")
  const [type, setType] = useState("")
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  const { pageStore } = useSelector((state) => state);
  const { pages } = pageStore;

  const handleSubmit = async () => {
    if (!name) {
      setIsValid(false);
      return;
    }
    const payload={
      "name":name,
"userName":userName,
"location":location,
"industry":industry,
"type":type,
    }
    createPage(payload)(dispatch);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <form id="create-page">
            <div className="modal-header" style={{justifyContent:"center"}}>
              <h5 className="modal-title" id="addPageModalLabel">
                Create Your Website
              </h5>
            </div>
            <div className="modal-body">

              <div className="row">
                <div className="col-6 mt-2">
                  <label htmlFor="name" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${isValid ? "" : "is-invalid"
                      }`}
                    id="userName"
                    name="userName"
                    placeholder="Enter Website Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  {!isValid && (
                    <div className="invalid-feedback">
                      Please provide a valid name.
                    </div>
                  )}
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor="name" className="form-label">
                    WebSite Name
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${isValid ? "" : "is-invalid"
                      }`}
                    id="webSiteName"
                    name="webSiteName"
                    placeholder="Enter Website Name"
                    value={webSiteName}
                    onChange={(e) => setWebSiteName(e.target.value)}
                  />
                  {!isValid && (
                    <div className="invalid-feedback">
                      Please provide a valid name.
                    </div>
                  )}
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor="name" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${isValid ? "" : "is-invalid"
                      }`}
                    id="location"
                    name="location"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  {!isValid && (
                    <div className="invalid-feedback">
                      Please provide a valid name.
                    </div>
                  )}
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor="name" className="form-label">
                    Industry
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${isValid ? "" : "is-invalid"
                      }`}
                    id="industry"
                    name="industry"
                    placeholder="Enter Industry Name"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  />
                  {!isValid && (
                    <div className="invalid-feedback">
                      Please provide a valid name.
                    </div>
                  )}
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor="name" className="form-label">
                    Type
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${isValid ? "" : "is-invalid"
                      }`}
                    id="setType"
                    name="setType"
                    placeholder="Enter Website type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                  {!isValid && (
                    <div className="invalid-feedback">
                      Please provide a valid name.
                    </div>
                  )}
                </div>

                <div className="col-6 mt-2">
                <label htmlFor="name" className="form-label">
                 Page Name
                </label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${isValid ? "" : "is-invalid"
                    }`}
                  id="name"
                  name="name"
                  placeholder="Name of Page"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isValid && (
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                )}
                </div>
              </div>



              {/* <div className="col-auto">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${isValid ? "" : "is-invalid"
                    }`}
                  id="name"
                  name="name"
                  placeholder="Name of Page"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isValid && (
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                )}
              </div> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 my-2">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Slug</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {pages
                ? pages.map((page) => (
                  <tr key={page._id}>
                    <td>{page._id}</td>
                    <td>{page.name}</td>
                    <td>{page.slug}</td>
                    <td>
                      <Link to={`/editor/${page._id}`}>Edit</Link>
                    </td>
                  </tr>
                ))
                : "No Page"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
