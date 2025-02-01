import { useState } from 'react';
import { useHeroesContext } from '../Context/Context';

export function NewHero() {
  const [error, setError] = useState(false);

  const { addNewHero } = useHeroesContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.name.value);

    const name = event.target.name.value;
    const superPower = event.target.superPower.value;
    const humilityScore = event.target.humilityScore.value;

    const response = await addNewHero(name, superPower, humilityScore);

    console.log(response);

    if (response) {
      //clean data in Form
      event.target.name.value = '';
      event.target.superPower.value = '';
      event.target.humilityScore.value = '';

      setError(false);
    } else {
      setError(true);
    }

    return null;
  };

  return (
    <>
      <div className='newHero'>
        <div className='newHeroTitle'>Create new humble Superhero</div>
        <form onSubmit={handleSubmit} className='newHeroForm'>
          <label className='newHeroForm-Field'>
            Name: <input name='name' placeholder='Hero Name' required />
          </label>
          <label className='newHeroForm-Field'>
            Superpower:
            <input name='superPower' placeholder='Superpower' required />
          </label>
          <label className='newHeroForm-Field'>
            Humble score:
            <input
              name='humilityScore'
              type='number'
              placeholder='Humble score (1-10)'
              min={1}
              max={10}
              step={1}
              required
            />
          </label>
          <button type='submit' className='newHeroForm-Button'>
            Send
          </button>
        </form>

        {error && <div className='newHero-Error'>Something went wrong</div>}
      </div>
    </>
  );
}
