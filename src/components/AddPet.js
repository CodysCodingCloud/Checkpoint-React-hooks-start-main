import React from 'react';
import axios from 'axios';

const AddPet = ({ toggleAdd, setToggleAdd }) => {
  const onSubmit = async function (event) {
    event.preventDefault();
    let targetObj = event.target.elements;
    let newMember = {
      name: targetObj.name.value,
      species: targetObj.species.value,
      description: targetObj.description.value,
    };
    await axios.post('./api/pets', newMember);
    event.target.reset();
    setToggleAdd(!toggleAdd);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Name
          <input type="text" name="name" required></input>
        </label>
      </div>
      <div>
        <label>
          Species
          <select required name="species">
            <option value="" disabled selected hidden>
              select One
            </option>
            <option value="cat">cat</option>
            <option value="dog">dog</option>
            <option value="bird">bird</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Describe me
          <input name="description" type="text" required></input>
        </label>
      </div>
      <button>Add Me!</button>
    </form>
  );
};

export default AddPet;
