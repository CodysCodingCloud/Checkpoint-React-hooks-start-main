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
    console.log('posted');
    setToggleAdd(!toggleAdd);
  };

  return (
    <form onSubmit={onSubmit} id="register">
      <h1>Register Me!</h1>
      <div>
        <label>
          Name<br></br>
          <input type="text" name="name" required></input>
        </label>
      </div>
      <div>
        <label>
          Species
          <select required name="species">
            <option value="" defaultValue hidden>
              select One
            </option>
            <option value="cat">cat</option>
            <option value="dog">dog</option>
            <option value="bird">bird</option>
            <option value="hamster">hamster</option>
            <option value="bunny">bunny</option>
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
