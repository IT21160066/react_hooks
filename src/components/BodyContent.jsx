import "../index.css";

const BodyContent = (props) => {
  return (
    <div className="body-content">
      <h3>BodyContent</h3>
      {props.children}
    </div>
  );
};

export default BodyContent;
