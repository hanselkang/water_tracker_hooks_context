import MainPage from './pages/MainPage';
import { DarkMode } from './hooks/darkLightToggle';

function App() {

  const switchDarkMode = DarkMode()

  return (
    <div className={switchDarkMode.isDarkMode ? "dark" : "light"}>
      <button onClick={switchDarkMode.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
