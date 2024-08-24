import React from 'react'

function PageBanner({value}) {
  return (
    <section className="banner_area servicepage-margin d-flex align-item-center justify-content-center ">
          <div className="banner_inner d-flex align-items-center">
              <div className="container">
                  <div className="banner_content text-center">
                      <h2 className='banner-heading'>{value}</h2>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default PageBanner