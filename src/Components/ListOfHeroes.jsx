import { useHeroesContext } from '../Context/Context';

export function ListOfHeroes() {
  const { heroesList } = useHeroesContext();
  return (
    <>
      <div className='listOfHeroes'>
        <table className='listOfHeroesTable'>
          <thead>
            <tr className='listOfHeroes-Table--Header listOfHeroes-Table--Row'>
              <th>Name</th>
              <th>SuperPower</th>
              <th>Humility score</th>
            </tr>
          </thead>
          <tbody>
            {heroesList &&
              heroesList.map(({ name, superPower, humilityScore }) => (
                <tr className='listOfHeroes-Table--Row' key={name}>
                  <td className='listOfHeroes-Table--Cell'>{name}</td>
                  <td className='listOfHeroes-Table--Cell'>{superPower}</td>
                  <td className='listOfHeroes-Table--Cell'>{humilityScore}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
