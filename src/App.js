import MainPage from './pages/MainPage';
import { useToggle } from './hooks/useModeToggle';

function App() {
  const toggle = useToggle();

  return (
    <div className={toggle.isDarkMode ? 'dark' : 'light'}>
      <button onClick={toggle.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
