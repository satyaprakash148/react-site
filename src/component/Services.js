import React from 'react'

export default function Services() {
  return (
    <div>
      <section className="services">
      <div className="container text-center py-5">
        <h1>About our services</h1>

        <div className="row">
          <div className="col-md-4">
             
            <div className="card">
              <div className="card-body">
                <i className="fa fa-bar-chart myicon" style={{"fontSize":"100px"}}></i>
                <h1>Front end development</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit in molestias similique et, perferendis, officiis
                  labore harum sequi deleniti itaque rem ea? Labore repellat
                  doloribus, beatae perferendis placeat recusandae nam!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <i className="fa fa-bell-o myicon" style={{"fontSize":"100px"}}></i>
                <h1>Backend development</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit in molestias similique et, perferendis, officiis
                  labore harum sequi deleniti itaque rem ea? Labore repellat
                  doloribus, beatae perferendis placeat recusandae nam!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <i className="fa fa-braille myicon" style={{"fontSize":"100px"}}></i>
                <h1></h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit in molestias similique et, perferendis, officiis
                  labore harum sequi deleniti itaque rem ea? Labore repellat
                  doloribus, beatae perferendis placeat recusandae nam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
