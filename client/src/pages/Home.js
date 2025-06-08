import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (

        <div className="min-h-screen flex justify-center items-center bg-cover" style={{
<<<<<<< HEAD
            backgroundImage: url('${process.env.PUBLIC_URL}/assets/man.jpg'),
=======
<<<<<<< HEAD
            backgroundImage: url('${process.env.PUBLIC_URL}/assets/man.jpg'),
=======
            backgroundImage: `url('${process.env.PUBLIC_URL}/assets/man.jpg')`,
>>>>>>> 407a253 (Flask server)
>>>>>>> eae2401 (Flask server)
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
            <div className='min-h-screen flex flex-col justify-center items-center' >
                <h1 className="text-5xl text-center text-orange-400 font-bold py-8">Object Detection for Visually Impaired People</h1>
<<<<<<< HEAD
                <p className="text-xl font-bold text-white text-center w-3/4">Empowering independence through cutting-edge object detection technology.</p>
                <p>Click the button below to begin your journey with us!</p>
=======
<<<<<<< HEAD
                <p className="text-xl font-bold text-white text-center w-3/4">Empowering independence through cutting-edge object detection technology.</p>
                <p>Click the button below to begin your journey with us!</p>
=======
                <p className="text-xl font-bold text-white text-center w-3/4">Empowering independence through cutting-edge object detection technology. Click the button below to begin your journey with us!</p>
>>>>>>> 407a253 (Flask server)
>>>>>>> eae2401 (Flask server)
                <Link to="/main" ><button className="start-button bg-orange-300 text-white font-bold py-2 px-4 rounded mt-4">Start</button></Link>
            </div>
        </div>
    )
}

export default Home
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 407a253 (Flask server)
>>>>>>> eae2401 (Flask server)
