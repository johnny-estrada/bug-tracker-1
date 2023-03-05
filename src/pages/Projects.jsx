import Table from "../components/ui/Table";
import Breadcrumb from "../components/ui/Breadcrumb";
import PrimaryButton from "../components/ui/PrimaryButton";
import "../assets/styles/Projects.css";

function Projects() {
  return (
    <>
      <section className="project">
        <div className="project__top">
          <Breadcrumb />
        </div>

        <PrimaryButton />
      </section>
      
      <section className="project__bottom">
        <Table />
      </section>
    </>
  );
}

export default Projects;
