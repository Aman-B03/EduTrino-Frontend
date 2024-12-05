import React from 'react'
import Navbar from './Navbar'
import syllabus from '../assets/syllabus.pdf'

const Syllabus = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-24 mt-10 pl-20'>
        <div className="twelve flex flex-col gap-5">
          <h1 className='cardHeading font-semibold text-center underline decoration-[#5ED9E1] decoration-[6px] underline-offset-8'> Syllabus</h1>
          <iframe src={syllabus} frameborder="0" className='h-[90vh] mb-4 '></iframe>
          {/* <div className="content flex flex-col gap-4">
            <div className="physics">
              <h1 className='font-bold cardHeading underline decoration-[#5ED9E1] decoration-[4px] underline-offset-8'> Physics </h1>
              <h1 className='font-semibold cardHeading'>Mechanics : </h1>
              <span className='font-semibold cardContent'>1. Rotational Dynamics</span>
              <li>1.1 Equation of angular motion, Relation between linear and angular kinematics</li>
              <li>1.2 Kinetic energy of rotation of rigid body</li>
              <li>1.3 Moment of inertia; Radius of gyration</li>
              <li>1.4 Moment of inertia of a uniform rod</li>
              <li>1.5 Torque and angular acceleration for a rigid body</li>
              <li>1.6 Work and power in rotational motion</li>
              <li>1.7 Angular momentum, conservation of angular momentum</li>
            </div>
            <div className="chemistry">

            </div>
          </div>
        </div> */}
        {/* <div className="eleven flex flex-col gap-5">
        <h1 className='cardHeading font-semibold underline decoration-[#5ED9E1] decoration-[6px] underline-offset-8'>Class 12 Syllabus</h1>
        <div className="content"> Here comes the syllabus </div>
      </div> */}
      </div>
      </div>
    </>
  )
}

export default Syllabus
