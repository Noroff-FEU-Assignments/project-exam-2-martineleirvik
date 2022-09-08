const IfPopular = ({ popular }) => {
  if (popular === true) {
    return (
      <div className="popular">
        <p>Popular</p>
      </div>
    );
  }
};
export default IfPopular;
