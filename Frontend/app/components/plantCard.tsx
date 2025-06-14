import React from 'react'
import { Card, CardContent } from './ui/card'
import { Link } from 'react-router'
import { Button } from './ui/button'
import { baseUrl } from '~/lib/constants'

const PlantCard = ({plant, setPlants, plants}: {plant: any, setPlants: Function, plants: any}) => {
  return (
    <Card key={plant.id} style={{background: 'linear-gradient(135deg, #e8f5e9 60%, #a5d6a7 100%)', border: '1px solid #66bb6a', borderRadius: '1.5rem', boxShadow: '0 4px 16px rgba(46,125,50,0.10)'}}>
        <CardContent className="p-4" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <h2 className="text-lg font-semibold" style={{color: '#2e7d32', marginBottom: '0.5rem'}}>{plant.plantName}</h2>
        <p style={{color: '#388e3c'}}>Fréquence d'arrosage : {plant.wateringFrequencyInDays} jours</p>
        <p style={{color: '#388e3c'}}>Dernier arrosage : {plant.lastWatered ? formatDate(plant.lastWatered) : 'Jamais'}</p>
        <div className="mt-2 flex gap-2" style={{marginTop: '1rem'}}>
            <Link to={`/edit/${plant.id}`}><Button className='cursor-pointer' style={{background: '#66bb6a', color: 'white'}}>Modifier</Button></Link>
            <Button variant='destructive' className='cursor-pointer' style={{background: '#e57373', color: 'white'}} onClick={() => deletePlant(plant.id)}>Supprimer</Button>
        </div>
        </CardContent>
    </Card>
  )

  function deletePlant(id: any) {
    fetch(`${baseUrl}/${id}`, { method: "DELETE" })
      .then(() => setPlants(plants.filter(p => p.id !== id)));
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }) +
    ' à ' + date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

export default PlantCard