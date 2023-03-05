import { useState, useEffect } from "react";
import Filters from "./Filters";
import TableSearchbar from "../ui/TableSearchbar";
import LineBreak from "../ui/LineBreak";
import Pagination from "./Pagination";
import Modal from "./Modal";

import axios from "axios";
import "../../assets/styles/Table.css";
import "../../assets/styles/TableSearchbar.css";

function ProjectTable() {
  const [listOfProjects, setListOfProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/project")
      .then((response) => {
        setListOfProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="table-controls">
        <Filters />
        <TableSearchbar />
      </section>

      <LineBreak />

      <table className="table">
        <thead className="table__header">
          <th className="table__header-text">Project name</th>
          <th className="table__header-text">Key</th>
          <th className="table__header-text">Brief</th>
          <th className="table__header-text">Team</th>
          <th className="table__header-text">Status</th>
        </thead>

        <tbody className="table__body">
          {listOfProjects.map((value, key) => {
            return (
              <tr key={key} className="table__row-item">
                <td className="table__data">{value.name}</td>
                <td className="table__data">{value.key}</td>
                <td className="table__data">{value.brief}</td>
                <td className="table__data">{value.startDate}</td>
                <td className="table__data">{value.launchDate}</td>
                <td className="table__data">{value.createdAt}</td>
                <td className="table__data">{value.updatedAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <footer className="footer">
        <Pagination />
      </footer>
    </>
  );
}

export default ProjectTable;
