import React from 'react';
import axios from 'axios';
import DeletePet from './DeletePet';
function SinglePet({ pet, deletion, setDelete }) {
  const [available, setAvailable] = React.useState(true);
  const toggleAvailability = async () => {
    pet.available == undefined
      ? (pet.available = false)
      : (pet.available = !pet.available);
    // await axios.put(`./api/pets/${pet.id}`, pet);
    setAvailable(!available);
  };
  const deletePet = (pet) => {
    //causes rerendering
    //pet.deleted = true
    const removePet = async function (pet) {
      await axios.delete(`api/pets/${pet.id}`);
    };
    removePet(pet);
    setDelete(deletion + 1);
    console.log('deleted');
  };
  return (
    <>
      {pet.deleted === undefined ? (
        <div
          className={`single-pet ${
            pet.available == undefined || pet.available == true ? '' : 'adopted'
          }`}
        >
          <div id={pet.id}>
            <h1>{pet.name}</h1>
            <button onClick={() => deletePet(pet)} className="btn btnDelete">
              X
            </button>

            <p>Hi! I&apos;m a {pet.species}</p>
          </div>
          <p>
            <strong>Description: </strong>
            {pet.description}
          </p>
          <p>
            {available ? (
              <>I am currently Available</>
            ) : (
              <>I Have been Adopted!</>
            )}
          </p>
          <button onClick={toggleAvailability}>Toggle Status</button>
        </div>
      ) : (
        <DeletePet />
      )}
    </>
  );
}

export default SinglePet;
