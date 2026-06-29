# Web Concept: Professor Juniper's PokéDex Lab

### Professor Juniper's PokéDex Lab is a React single page application that lets users discover Pokémon, view important battle information, study level-up moves,evolution lines, and save your favorites to a personal team/collection

# Core Features

* Generate a random Pokémon on the Home page
* Search for a Pokémon by name or Pokédex number
* Display Pokémon details including sprite, type, height, weight, and Base Stat Total
* Display moves learned by level up
* Display the Pokémon's evolution line
* Save a Pokémon to My Team using a controlled form
* Display saved Pokémon from json-server
* Delete saved Pokémon from My Team

# Stories
## Feature 1 - Generate Random Pokémon

### User story: As a user, I want to click a button to generate a random Pokémon so that I can discover a new Pokémon each time.

### When the Home page loads, the app should fetch and display a random Pokémon from the PokéAPI. When the user clicks the "Generate New Random Pokémon" button, the app should fetch a different random Pokémon and update the displayed Pokémon on the page.

## Feature 2 - Search Pokémon

### User story: As a user, I want to search for a Pokémon by name or Pokédex number so that I can quickly find a specific Pokémon.

### The user should be able to type into a search bar and submit the search. The app should send a GET request to the PokéAPI and display the matching Pokémon if it exists.

## Feature 3 - Display Pokémon Details

### User story: As a user, I want to view a Pokémon's basic details so that I can learn more about that Pokémon.

### When a Pokémon is searched or randomly generated, the app should display the Pokémon's sprite, name, type, height, weight, and Base Stat Total.

## Feature 4 - Display Base Stat Total

### User story: As a user, I want to see a Pokémon's Base Stat Total so that I can understand its overall battle strength.

### The app should calculate the Base Stat Total by adding all six base stats: HP, Attack, Defense, Special Attack, Special Defense, and Speed. The total should display clearly on the Pokémon details page.

## Feature 5 - Display Level-Up Moves

### User story: As a user, I want to view the moves a Pokémon learns by leveling up so that I can understand its natural moveset progression.

### When a Pokémon is displayed, the app should filter the move data from the PokéAPI and show moves learned through the level-up method.

## Feature 6 - Display Evolution Line

### User story: As a user, I want to view a Pokémon's evolution line so that I can understand how that Pokémon evolves.

### When a Pokémon is displayed, the app should fetch its species data, then fetch the evolution chain, and display each Pokémon in the evolution line in order.

## Feature 7 - Save Pokémon to My Team

### User story: As a user, I want to save a Pokémon with a nickname and personal reason so that I can build my own team or collection.

### The user should be able to fill out a controlled form with a nickname and reason. When the form is submitted, the app should send a POST request to json-server and immediately update state so the saved Pokémon appears in My Team.

## Feature 8 - Display My Team

### User story: As a user, I want to view all of my saved Pokémon so that I can revisit my favorite Pokémon later.

### When the My Team page loads, the app should send a GET request to json-server and display each saved Pokémon as a card.

## Feature 9 - Delete Saved Pokémon

### User story: As a user, I want to delete a saved Pokémon from My Team so that I can remove Pokémon I no longer want in my collection.

### Each saved Pokémon card should have a delete button. When clicked, the app should send a DELETE request to json-server and remove that Pokémon from state so the page updates immediately.