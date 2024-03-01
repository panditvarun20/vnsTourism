import React from 'react'

const FooterFour = () => {
  return (
    <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
    <div
      className="section-title section-title-sm position-relative pb-3 mb-4"
    >
      <h3 className="text-light mb-0">Popular Links</h3>
    </div>
    <div
      className="link-animated d-flex flex-column justify-content-start"
    >
      <a className="text-light mb-2" href="index.html"
        ><i className="bi bi-arrow-right text-primary me-2"></i>Home</a
      >
      <a className="text-light mb-2" href="about_us.html"
        ><i className="bi bi-arrow-right text-primary me-2"></i>About
        Us</a
      >
      <a className="text-light mb-2" href="tourist-places.html"
        ><i className="bi bi-arrow-right text-primary me-2"></i
        >Tourism</a
      >
      <a className="text-light mb-2" href="history.html"
        ><i className="bi bi-arrow-right text-primary me-2"></i
        >History</a
      >
      <a className="text-light" href="photo_gallery.html"
        ><i className="bi bi-arrow-right text-primary me-2"></i
        >Gallery</a
      >
      <a className="text-light mb-2 mt-2" href="contact.html"
        ><i className="bi bi-arrow-right text-primary me-2"></i>Contact
        Us</a
      >
    </div>
  </div>
  )
}

export default FooterFour
