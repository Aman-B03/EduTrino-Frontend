import React from 'react'
import Review from '../components/Review'

const VPReview = () => {
    const chapters = [
        "Introduction to C sharp dot NET",
        "Control Statements",
        "Arrays",
        "Strings",
        "Structures",
        "Pointers",
        "Working with Database"
    ]
  return (
    <div>
        <Review subject = "VP" chapters = {chapters}/>
     
    </div>
  )
}

export default VPReview
