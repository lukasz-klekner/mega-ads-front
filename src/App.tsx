import './App.css'
import { Button } from './components/Button/Button';

export const App = () => {

  return (
    <>
      <header>
        <h1>
          <span>Mega</span> Ogłoszenia
        </h1>
        <Button content='Dodaj ogłoszenie' />
        <div className="search">
          <input type="text" />
          <Button content='Szukaj' />
        </div>
      </header>

      <div className="map"></div>
    </>
  );
}
