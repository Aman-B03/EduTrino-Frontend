import React from 'react'
import Review from '../components/Review'

const SEReview = () => {

   const chapters = [
    "Introduction to Software Engineering",
    "Project Management Techniques",
    "Software Development Life Cycle",
    "Software Development Model",
    "Software Analysis and Design Tools",
    "Project Work"
      ];

  return (
    <div>
       <Review subject = "SE" chapters = {chapters}/>
    </div>
  )
}

export default SEReview
