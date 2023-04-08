import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_HOST } from "./api_utils";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import geditorConfig from "./api_utils/geditor_config";
import PageSection from "./components/PageSection";

const Editor = () => {
  const [editor, setEditor] = useState(null);
  const [assets, setAssets] = useState([]);
  const { pageId } = useParams();
console.log(pageId,"pageId")
  const { pageStore } = useSelector((state) => state);
  const { pages } = pageStore;

  useEffect(() => {
    async function getAllAssets() {
      try {
        const response = await axios.get(`${API_HOST}assets/${pageId}`);
        setAssets(response.data);
      } catch (error) {
        setAssets(error.message);
      }
    }

    getAllAssets();
  }, []);

  useEffect(() => {
    const editor = geditorConfig(assets, pageId);
    setEditor(editor);
  }, [pageId, assets]);
  return (
    <div className="App">
      <div
        id="navbar"
        className="sidenav d-flex flex-column overflow-scroll position-fixed"
      >
        <nav className="navbar navbar-light">
          <div className="container-fluid">
           <Link to="/"> <span className="navbar-brand mb-0 h3 logo">Team Teachanda</span></Link>
          </div>
        </nav>
        <PageSection pages={pages} />
        <Sidebar />
      </div>
      <div
        className="main-content position-relative w-85 start-15"
        id="main-content"
      >
        <TopNav />
        <div id="editor"></div>
      </div>
    </div>
  );
};

export default Editor;
