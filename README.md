# Phase-2-project-Professor-Junipers-Lab

A React single-page application inspired by the Pokémon games that allows trainers to search Pokémon, explore their stats and evolution lines, and build a personal team of up to six Pokémon. It is highly encouraged to generate as many random Pokémon as possible to really determine which ones you like!

---

## Features

### Home Page
- Displays a randomly generated Pokémon on page load
- Generates a new random Pokémon with the click of a button
- Includes a Professor Juniper introduction and trainer instructions

### Explore Page
- Search Pokémon by name or Pokédex number
- View:
  - Official sprite
  - Typing
  - Height and weight
  - Base stats
  - Base stat total
  - Level-up moves
  - TM/HM moves
  - Pokédex entries
  - Evolution lines
- Save Pokémon to your personal team

### My Team Page
- Save up to six Pokémon
- Give each Pokémon a nickname
- Include a reason for adding them to your team
- Remove Pokémon from your team
- Team counter displays current team size
- Can generate a whole team upon the press of a button

---

## Technologies Used

- React
- React Router
- JavaScript
- CSS
- JSON Server
- PokéAPI

---

## Setup & Installation

Fork & clone the repository with SSH key:

```bash
git clone git@github.com:Brick5g/Phase-2-project-Professor-Junipers-Lab.git
```

Navigate into the project:

```bash
cd Phase-2-project-Professor-Junipers-Lab
```

Install dependencies:

```bash
npm install
```

---

## Running the Frontend

Start the React application:

```bash
npm start
```

The application will open at:

```
http://localhost:3000
```

---

## Running the Backend

Open a second terminal window.

Navigate into the backend folder:

```bash
cd backend
```

Start JSON Server:

```bash
json-server --watch db.json --port 3001
```

The backend will run at:

```
http://localhost:3001/team
```
---

## API Sources

This project uses the public PokéAPI:

- https://pokeapi.co/api/v2/pokemon
- https://pokeapi.co/api/v2/pokemon-species
- https://pokeapi.co/api/v2/evolution-chain