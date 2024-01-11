import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLoaderData, useParams } from 'react-router-dom'



function JobSingleCard() {
  const { job } = useParams()
  const loader = useLoaderData()
  

  return (
    <div>

    </div>
  )
}

export const jobLoader = async({params}) => {

   

}

export default JobSingleCard