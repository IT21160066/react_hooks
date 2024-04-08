import "../index.css";

const Navlinks = (props) => {
  return (
    <div className="navlinks">
      <a href={props.url}>{props.linkname}</a>
    </div>
  );
};

export default Navlinks;
