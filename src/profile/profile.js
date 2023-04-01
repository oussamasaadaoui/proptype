import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      {children}
      <button onClick={() => handleName(fullName)}>Show Name</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Profile.defaultProps = {
  bio: "oussama is a junior software engineer",
};

export default Profile;
