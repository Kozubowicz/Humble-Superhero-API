import express from 'express';
import cors from 'cors';

const heroes = [
  { name: 'Iron Man', superPower: 'Genius', humilityScore: 2 },
  { name: 'Spider-Man', superPower: 'Agility', humilityScore: 9 },
  {
    name: 'Captain America',
    superPower: 'Super Strength',
    humilityScore: 8,
  },
  { name: 'Thor', superPower: 'Thunder Control', humilityScore: 4 },
  { name: 'Hulk', superPower: 'Immense Strength', humilityScore: 1 },
  {
    name: 'Black Widow',
    superPower: 'Expert Combat Skills',
    humilityScore: 7,
  },
  { name: 'Doctor Strange', superPower: 'Magic', humilityScore: 5 },
  {
    name: 'Black Panther',
    superPower: 'Enhanced Senses',
    humilityScore: 6,
  },
  { name: 'Ant-Man', superPower: 'Size Manipulation', humilityScore: 8 },
  { name: 'Hawkeye', superPower: 'Archery Skills', humilityScore: 7 },
];

const app = express();
const port = 3000;

app.use(cors()); //allows on communication between front-end and api in local network
app.use(express.json());

app.get('/superheroes', async (req, res) => {
  try {
    const data = [...heroes].sort(
      (el, el2) => el2.humilityScore - el.humilityScore
    );
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching superheroes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/superheroes', (req, res) => {
  //durring adding new object to database there should be also included id property,
  // which might by manualy created by adding timestamp as id, or automatily by database system like MongoDB
  // there should be also collection schema wchich define what properiets should by in object and default values for them
  const { name, superPower, humilityScore } = req.body;

  if (!name || !superPower || !humilityScore) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid data provided' });
  }
  heroes.push({ name, superPower, humilityScore });

  return res.status(201).json({ sucess: true, message: 'added hero' });
});

app.listen(port, () => {
  console.log(`Server is at port ${port}`);
});
