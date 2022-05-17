import UserContext from '../context/UserContext';

const Header = () => {
  return (
    <UserContext.Consumer>
      {(user) => <h2>Hello {user.name} 👋</h2>}
    </UserContext.Consumer>
  );
};

export default Header;
