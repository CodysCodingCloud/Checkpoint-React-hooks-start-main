import React from 'react';
import axios from 'axios';
import DeletePet from './DeletePet';
function SinglePet({ pet }) {
  const [available, setAvailable] = React.useState(true);
  const [deletion, setDelete] = React.useState(false);
  React.useEffect(() => {
    return;
  }, [available, deletion]);
  const toggleAvailability = async () => {
    pet.available == undefined
      ? (pet.available = false)
      : (pet.available = !pet.available);
    console.log('updated', pet);
    await axios.put(`./api/pets/${pet.id}`, pet);
    setAvailable(!available);
  };
  const deletePet = (pet) => {
    const removePet = async function (pet) {
      await axios.delete(`api/pets/${pet.id}`);
    };
    console.log(pet);
    removePet(pet);
    setDelete(true);
    console.log('deleted');
  };
  return (
    <>
      {!deletion ? (
        <div
          className={`single-pet ${
            pet.available == undefined || pet.available == true ? '' : 'adopted'
          }`}
        >
          <div id={pet.id}>
            <h1>{pet.name}</h1>
            <button onClick={() => deletePet(pet)}>X</button>

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
