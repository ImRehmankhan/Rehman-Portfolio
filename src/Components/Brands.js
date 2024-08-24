import React from 'react'

function Brands() {
  return (
    <section className="brand_area section_gap_bottom">
    <div className="container">
        <div className="row">
            <div className="col-12 d-flex align-item-center justify-content-center p-5">
            <h1><span className="Text-align">MY SKILLS</span></h1>

            </div>
        </div>
        <div className="row justify-content-center">

            <div className="col-lg-6">
                <div className="row d-flex align-item-center justify-content-center">

                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-brand-item d-table">
                            <div className="d-table-cell text-center">
                                <img src="img/brands/html.png" alt=""/><br />
                                <span className="">HTML-5</span>
                            </div> 
                        </div>  
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-brand-item d-table">
                            <div className="d-table-cell text-center">
                                <img src="img/brands/css.png" alt=""/>
                                <br />
                                <span className="">CSS-3</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-brand-item d-table">
                            <div className="d-table-cell text-center">
                                <img src="img/brands/javascript.png" alt=""/>
                                <br />
                                <span className="">JavaScript</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-brand-item d-table">
                            <div className="d-table-cell text-center">
                                <img src="img/brands/nodejs.png" alt=""/>
                                <br />
                                <span className="">Node.js</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-brand-item d-table">
                            <div className="d-table-cell text-center">
                                <img src="img/brands/react.png" alt=""/>
                                <br />
                                <span className="">React.js</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-brand-item d-table">
                            <div className="d-table-cell text-center">
                                <img src="img/brands/mongodb.png" alt=""/>
                                <br />
                                <span className="">MongoDb</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-brand-item d-table">
                            <div className="d-table-cell text-center">
                                <img src="img/brands/bootstrap.png" alt=""/>
                                <br />
                                <span className="">Bootstrap</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-brand-item d-table">
                            <div className="d-table-cell text-center">
                                <img src="img/brands/tailwindcss.png" alt=""/>
                                <br />
                                <span className="">TailwindCss</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-brand-item d-table">
                            <div className="d-table-cell text-center">
                                <img src="img/brands/redux.png" alt=""/>
                                <br />
                                <span className="">Redux</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offset-lg-2 col-lg-4 col-md-6">
                <div className="client-info">
                    <div className="d-flex mb-50">
                        <span className="lage">2</span>
                        <span className="smll">Years Working Experience</span>
                    </div>
                    <div className="call-now d-flex">
                        <div>
                            <span className="fa fa-phone"></span>
                        </div>
                        <div className="ml-15">
								<p>call Me Now</p>
								<h3>+92-3425221720</h3>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Brands