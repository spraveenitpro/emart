import React from 'react'

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img
                    src="./assets/bg.jpg"
                    className="card-img"
                    alt="..."
                    height="550px"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder">
                            New Season
                        </h5>
                        <p className="card-text lead fs-2">
                            Checkout the trends
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
