import React from 'react'
import type { Route } from './+types/Edit';
import PlantForm from '~/components/plantForm';

const Edit = ({ params }: Route.LoaderArgs) => {
  return (
    <PlantForm isEdit={true} id={params.id}/>
  )
}

export default Edit