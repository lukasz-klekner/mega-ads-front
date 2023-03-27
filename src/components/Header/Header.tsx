import "./Header.css"

import { Button } from "../Button/Button";

export const Header = () => (
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
)