import PieChart from './PieChart';
import UserContext from '../context/UserContext';
import GlassesContext from '../context/GlassesContext';

const TrackerDisplay = () => {
  return (
    <>
      <UserContext.Consumer>
        {(user) => {
          return (
            <>
              <p>
                {user.name}'s daily goal: {user.goal}
              </p>
              <GlassesContext.Consumer>
                {({ glasses }) => {
                  return (
                    <>
                      <p>Glasses drunk: {glasses}</p>
                      <PieChart glasses={glasses} goal={user.goal} />
                      {glasses >= user.goal ? 'Goal reached! 🥳' : null}
                      <br></br>
                    </>
                  );
                }}
              </GlassesContext.Consumer>
            </>
          );
        }}
      </UserContext.Consumer>
    </>
  );
};

export default TrackerDisplay;
