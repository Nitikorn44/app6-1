import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="container p-3 bg-danger text-white text-center">
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4"><img src="./image/paris.jpg" class="img-thumbnail" alt="Cinque Terre" /></div>
                    <div className="col-sm-8 p-3 bg-warning text-white text-center"><h1>about me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    </div>
                </div>
                <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Column 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 4</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
