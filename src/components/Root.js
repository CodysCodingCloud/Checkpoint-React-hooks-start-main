import React, { useState } from 'react';
import axios from 'axios';
import PetList from './PetList';
import AddPet from './AddPet';
// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
// import samplePets from '../petdata';

const Root = () => {
  const [pets, setPets] = React.useState([]);
  const [err, setErr] = React.useState('');
  const [toggleAdd, setToggleAdd] = React.useState(false);
  const [deletion, setDelete] = React.useState(0);

  React.useEffect(() => {
    async function getList() {
      try {
        let petList = await axios.get('./api/pets');
        setPets(petList.data);
      } catch (error) {
        // console.log(error.message);
        setErr(`Error: ${error.message}`);
      }
    }
    getList();
  }, [toggleAdd, deletion]);
  const toggleAddBtn = () => {
    setToggleAdd(!toggleAdd);
    console.log('changed');
  };
  // console.log('current pets', pets);
  return (
    <>
      <h1>Adoption Center</h1>
      <p>
        {pets.length === 0 ? (
          err === '' ? (
            <>Loading furries</>
          ) : (
            <>{err}</>
          )
        ) : (
          <>This is our family</>
        )}
      </p>
      <div>
        <button onClick={toggleAddBtn} className="btn">
          but we can add more
        </button>
        {toggleAdd ? (
          <AddPet toggleAdd={toggleAdd} setToggleAdd={setToggleAdd} />
        ) : null}
      </div>
      <PetList pets={pets} deletion={deletion} setDelete={setDelete} />
    </>
  );
};

export default Root;
