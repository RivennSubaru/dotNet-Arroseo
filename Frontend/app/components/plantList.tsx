import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { Button } from './ui/button';
import PlantCard from './plantCard';
import { baseUrl } from '~/lib/constants';

const PlantList = () => {
    const [plants, setPlants] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
      const url = filter === 'needs-watering' ? `${baseUrl}/needs-watering` : baseUrl;
      fetch(url)
        .then(res => res.json())
        .then(data => setPlants(data));
    }, [filter]);
  
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Liste des plantes</h1>
        <div className="mb-4">
          <label htmlFor="filter" className="mr-2 font-semibold">Afficher :</label>
          <select
            id="filter"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="all">Toutes les plantes</option>
            <option value="needs-watering">Besoins d'arrosage</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plants.map(plant => (
            <PlantCard key={plant.id} plant={plant} setPlants={setPlants} plants={plants}/>
          ))}
        </div>
        <div className="mt-4">
          <Link to="/add"><Button className='cursor-pointer'>Ajouter une plante</Button></Link>
        </div>
      </div>
    );
}


export default PlantList