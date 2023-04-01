import Profile from "./profile/profile";

function App() {
  const handleName = (name) => {
    alert(`User's name is ${name}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="Saadaoui oussama"
        profession="Software Developer"
        handleName={handleName}
      >
        <img src="https://alexandremadeira.dev/resources/img/ProfileImage.webp" alt="Profile" />
      </Profile>
    </div>
  );
}

export default App;
