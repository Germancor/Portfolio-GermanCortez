
import '../css/mainproyect.css'; 

const MainProject = ({ title, description, image, link, live }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="buttons">
        <a href={link} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default MainProject;
