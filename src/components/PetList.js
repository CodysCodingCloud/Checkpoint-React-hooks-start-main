import React from 'react';
import SinglePet from './SinglePet';

// const cody = {
//   id: 2,
//   name: 'Cody',
//   description: 'Adorable pug who loves to hug',
//   species: 'dog',
// };

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList({ pets, deletion, setDelete }) {
  const [species, setSpecies] = React.useState('all');
  // console.log(pets);
  let currentPetList = pets.filter((pet) => {
    if (pet.species === species || species === 'all') {
      return pet;
    }
  });
  const onChange = () => {
    let selectSpecies = document.getElementById('selectSpecies').value;
    // console.log(selectSpecies);
    setSpecies(selectSpecies);
  };
  return (
    <>
      <label>View</label>
      <select onChange={onChange} id="selectSpecies">
        <option defaultValue="all">all</option>
        <option value="cat">cat</option>
        <option value="dog">dog</option>
        <option value="bird">bird</option>
        <option value="hamster">hamster</option>
        <option value="bunny">bunny</option>
      </select>
      <div className="pet-list">
        {currentPetList.length === 0 ? (
          <h1>
            There are no {species === 'all' ? 'pets' : species + 's'} to display
          </h1>
        ) : (
          currentPetList.map((pet) => (
            <SinglePet
              pet={pet}
              key={pet.id}
              deletion={deletion}
              setDelete={setDelete}
            />
          ))
        )}
      </div>
    </>
  );
}

export default PetList;
