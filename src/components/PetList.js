import React from 'react';
import SinglePet from './SinglePet';

function PetList({ pets }) {
  const [species, setSpecies] = React.useState('all');
  // console.log(pets);
  let currentPetList = pets.filter((pet) => {
    if (pet.species === species || species === 'all') {
      return pet;
    }
  });
  React.useEffect(() => {
    return;
  }, [species]);
  const onChange = () => {
    let selectSpecies = document.getElementById('selectSpecies').value;
    // console.log(selectSpecies);
    setSpecies(selectSpecies);
  };
  return (
    <>
      <select onChange={onChange} id="selectSpecies">
        <option defaultValue="all">all</option>
        <option value="cat">cat</option>
        <option value="dog">dog</option>
      </select>
      <div className="pet-list">
        {currentPetList.map((pet) => (
          <SinglePet
            pet={pet}
            key={pet.id}
            // deletion={deletion}
            // setDelete={setDelete}
          />
        ))}
      </div>
    </>
  );
}

export default PetList;
