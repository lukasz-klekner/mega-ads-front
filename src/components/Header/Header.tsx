import "./Header.css"

import { Button } from "../Button/Button";
import { useSearchContext } from "../../context/searchContext";
import { SyntheticEvent } from "react";

export const Header = () => {
  const search = useSearchContext()

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  return (
    (
      <header>
      <h1>
        <span>Mega</span> Ogłoszenia
      </h1>
      <Button content='Dodaj ogłoszenie' />
      <form onSubmit={handleSubmit} className="search">
        <input type="text" value={search?.search} onChange={(event) => search?.setSearch(event.target.value)}/>
        <Button content='Szukaj' />
      </form>
    </header>
  )
  )
} 