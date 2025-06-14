import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { baseUrl } from '~/lib/constants';

const PlantForm = ({ isEdit = false, id }: {isEdit?: boolean, id?: any}) => {
    const [plant, setPlant] = useState({ plantName: "", wateringFrequencyInDays: "", lastWatered: "" });
    const navigate = useNavigate();
  
    useEffect(() => {
      if (isEdit && id) {
        fetch(`${baseUrl}/${id}`)
          .then(res => res.json())
          .then(data => setPlant(data));
      }
    }, [id, isEdit]);
  
    function handleSubmit(e: any) {
      e.preventDefault();
      const method = isEdit ? "PUT" : "POST";
      const url = isEdit ? `${baseUrl}/${id}` : baseUrl;
  
      fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plant),
      })
        .then(() => navigate("/home"));
        
    }
  
    return (
      <div className="p-4 max-w-xl mx-auto">
        <h1 className="text-xl font-bold mb-4">{isEdit ? "Modifier" : "Ajouter"} une plante</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Nom</Label>
            <Input value={plant.plantName} onChange={e => setPlant({ ...plant, plantName: e.target.value })} required />
          </div>
          <div>
            <Label>Fréquence d'arrosage (jours)</Label>
            <Input type="number" value={plant.wateringFrequencyInDays} onChange={e => setPlant({ ...plant, wateringFrequencyInDays: e.target.value })} required />
          </div>
          <div>
            <Label>Dernier arrosage (yyyy-mm-ddThh:mm)</Label>
            <Input type="datetime-local" value={plant.lastWatered} onChange={e => setPlant({ ...plant, lastWatered: e.target.value })} />
          </div>
          <Button type="submit" className='cursor-pointer'>{isEdit ? "Modifier" : "Ajouter"}</Button>
        </form>
      </div>
    );
}

export default PlantForm