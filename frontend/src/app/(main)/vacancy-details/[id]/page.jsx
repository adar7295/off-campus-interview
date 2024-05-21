'use client'
import { useParams } from 'next/navigation';
import React from 'react'

const VacancyDetails = () => {

    const { id } = useParams();

  return (
    <div>VacancyDetails</div>
  )
}

export default VacancyDetails;