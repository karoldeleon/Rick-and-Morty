const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req , res) => {
  try {
    const { id } = req.params;
    const response = await axios(`${URL}/${id}`);
    const data = response.data;

    if(data.name) {
      const character = {
          id: id,
          name: data.name,
          gender: data.gender,
          species: data.species,
          origin: data.origin,
          image: data.image,
          status: data.status
        };
         return res.status(200).json(character)
   }
   res.status(404).json({ message: 'Not found' });
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getCharById;