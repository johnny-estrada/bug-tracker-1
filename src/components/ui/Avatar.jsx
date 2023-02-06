import "../../assets/styles/components/ui/Avatar.css";

function Avatar() {
  return (
    <div className="avatar">
      <img className="avatar__img" src="../../avatar.jpg" width='45px' height='45px' />
      <div className="chevron-down"></div>
    </div>
  );
}

export default Avatar;
