import Navbar from "./(components)/Navbar";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Testimonials from "./(components)/Testimonials";
import Footer from "./(components)/Footer";
export default function Home() {
  return (

    <main className="main" id="top">
      <Navbar />
      <section style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-12 order-0 order-md-1 text-center"><img className=" pt-md-0 hero-img" src="https://ik.imagekit.io/aatmicfit/Website/Custom/Home/bg-main.webp" alt="hero-header" /></div>
          </div>
        </div>
      </section>
      <section className="pt-5 " id="service">
        <div className="container">
          <div className="position-absolute z-index--1 end-0 d-none d-lg-block"><img src="https://ik.imagekit.io/aatmicfit/Website/Core/category/shape.svg" style={{ maxWidth: 200 }} alt="service" /></div>
          <div className="mb-7 text-center">
            <h5 className="text-secondary">Services</h5>
            <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">We Offer Best Services</h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-6">
              <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div className="card-body p-xxl-5 p-4 m-3"> <img src="https://ik.imagekit.io/aatmicfit/Website/Custom/Home/ICO/brain.png" width={75} alt="Service" />
                  <h4 className="mb-3">Mind</h4>
                  <p className="mb-0 fw-medium">Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div className="card-body p-xxl-5 p-4 m-3"> <img src="https://ik.imagekit.io/aatmicfit/Website/Custom/Home/ICO/heart.png" width={75} alt="Service" />
                  <h4 className="mb-3">Body</h4>
                  <p className="mb-0 fw-medium">Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div className="card-body p-xxl-5 p-4 m-3"> <img src="https://ik.imagekit.io/aatmicfit/Website/Custom/Home/ICO/soul.png" width={75} alt="Service" />
                  <h4 className="mb-3">Soul</h4>
                  <p className="mb-0 fw-medium">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div className="card-body p-xxl-5 p-4 m-3"> <img src="https://ik.imagekit.io/aatmicfit/Website/Custom/Home/ICO/skill.png" width={75} alt="Service" />
                  <h4 className="mb-3">Skill</h4>
                  <p className="mb-0 fw-medium">We deliver outsourced aviation services for military customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5" id="destination">
        <div className="container">
          <div className="position-absolute start-100 bottom-0 translate-middle-x d-none d-xl-block ms-xl-n4"><img src="https://ik.imagekit.io/aatmicfit/Website/Core/dest/shape.svg" alt="destination" /></div>
          <div className="mb-7 text-center">
            <h5 className="text-secondary">Top Selling </h5>
            <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">Top Destinations</h3>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card overflow-hidden shadow"> <img className="card-img-top" src="https://ik.imagekit.io/aatmicfit/Website/Core/dest/dest1.jpg" alt="Rome, Italty" />
                <div className="card-body py-4 px-3">
                  <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                    <h4 className="text-secondary fw-medium"><a className="link-900 text-decoration-none stretched-link" href="#!">Rome, Italty</a></h4><span className="fs-1 fw-medium">$5,42k</span>
                  </div>
                  <div className="d-flex align-items-center"> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/dest/navigation.svg" style={{ marginRight: 14 }} width={20} alt="navigation" /><span className="fs-0 fw-medium">10 Days Trip</span></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card overflow-hidden shadow"> <img className="card-img-top" src="https://ik.imagekit.io/aatmicfit/Website/Core/dest/dest2.jpg" alt="London, UK" />
                <div className="card-body py-4 px-3">
                  <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                    <h4 className="text-secondary fw-medium"><a className="link-900 text-decoration-none stretched-link" href="#!">London, UK</a></h4><span className="fs-1 fw-medium">$4.2k</span>
                  </div>
                  <div className="d-flex align-items-center"> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/dest/navigation.svg" style={{ marginRight: 14 }} width={20} alt="navigation" /><span className="fs-0 fw-medium">12 Days Trip</span></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card overflow-hidden shadow"> <img className="card-img-top" src="https://ik.imagekit.io/aatmicfit/Website/Core/dest/dest3.jpg" alt="Full Europe" />
                <div className="card-body py-4 px-3">
                  <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                    <h4 className="text-secondary fw-medium"><a className="link-900 text-decoration-none stretched-link" href="#!">Full Europe</a></h4><span className="fs-1 fw-medium">$15k</span>
                  </div>
                  <div className="d-flex align-items-center"> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/dest/navigation.svg" style={{ marginRight: 14 }} width={20} alt="navigation" /><span className="fs-0 fw-medium">28 Days Trip</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="booking">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-4 text-start">
                <h5 className="text-secondary">Easy and Fast </h5>
                <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">Book your next trip in 3 easy steps</h3>
              </div>
              <div className="d-flex align-items-start mb-5">
                <div className="bg-primary me-sm-4 me-3 p-3" style={{ borderRadius: 13 }}> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/steps/selection.svg" width={22} alt="steps" /></div>
                <div className="flex-1">
                  <h5 className="text-secondary fw-bold fs-0">Choose Destination</h5>
                  <p>Choose your favourite place. No matter <br className="d-none d-sm-block" /> where you travel inside the World.</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-5">
                <div className="bg-danger me-sm-4 me-3 p-3" style={{ borderRadius: 13 }}> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/steps/water-sport.svg" width={22} alt="steps" /></div>
                <div className="flex-1">
                  <h5 className="text-secondary fw-bold fs-0">Make Payment</h5>
                  <p>After find your perfect spot, make your <br className="d-none d-sm-block" /> payment and get ready to travel.</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-5">
                <div className="bg-info me-sm-4 me-3 p-3" style={{ borderRadius: 13 }}> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/steps/taxi.svg" width={22} alt="steps" /></div>
                <div className="flex-1">
                  <h5 className="text-secondary fw-bold fs-0">Reach Airport on Selected Date</h5>
                  <p>Lastly, you have to arrive at the airport <br className="d-none d-sm-block" /> on time and enjoy the vacation.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-start">
              <div className="card position-relative shadow" style={{ maxWidth: 370 }}>
                <div className="position-absolute z-index--1 me-10 me-xxl-0" style={{ right: '-160px', top: '-210px' }}> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/steps/bg.png" style={{ maxWidth: 550 }} alt="shape" /></div>
                <div className="card-body p-3"> <img className="mb-4 mt-2 rounded-2 w-100" src="https://ik.imagekit.io/aatmicfit/Website/Core/steps/booking-img.jpg" alt="booking" />
                  <div>
                    <h5 className="fw-medium">Trip To Greece</h5>
                    <p className="fs--1 mb-3 fw-medium">14-29 June | by Robbin joseph</p>
                    <div className="icon-group mb-4"> <span className="btn icon-item"> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/steps/leaf.svg" alt="img" /></span><span className="btn icon-item"> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/steps/map.svg" alt="img" /></span><span className="btn icon-item"> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/steps/send.svg" alt="img" /></span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center mt-n1"><img className="me-3" src="https://ik.imagekit.io/aatmicfit/Website/Core/steps/building.svg" width={18} alt="building" /><span className="fs--1 fw-medium">24 people going</span></div>
                      <div className="show-onhover position-relative">
                        <div className="card hideEl shadow position-absolute end-0 start-xl-50 bottom-100 translate-xl-middle-x ms-3" style={{ width: 260, borderRadius: 18 }}>
                          <div className="card-body py-3">
                            <div className="d-flex">
                              <div style={{ marginRight: 10 }}> <img className="rounded-circle" src="https://ik.imagekit.io/aatmicfit/Website/Core/steps/favorite-placeholder.png" width={50} alt="favorite" /></div>
                              <div>
                                <p className="fs--1 mb-1 fw-medium">Ongoing </p>
                                <h5 className="fw-medium mb-3">Trip to rome</h5>
                                <h6 className="fs--1 fw-medium mb-2"><span>40%</span> completed</h6>
                                <div className="progress" style={{ height: 6 }}>
                                  <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn"> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/steps/heart.svg" width={20} alt="step" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="pt-6">
        <div className="container">
          <div className="py-8 px-5 position-relative text-center" style={{ backgroundColor: 'rgba(223, 215, 249, 0.199)', borderRadius: '129px 20px 20px 20px' }}>
            <div className="position-absolute start-100 top-0 translate-middle ms-md-n3 ms-n4 mt-3"> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/cta/send.png" style={{ maxWidth: 70 }} alt="send icon" /></div>
            <div className="position-absolute end-0 top-0 z-index--1"> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/cta/shape-bg2.png" width={264} alt="cta shape" /></div>
            <div className="position-absolute start-0 bottom-0 ms-3 z-index--1 d-none d-sm-block"> <img src="https://ik.imagekit.io/aatmicfit/Website/Core/cta/shape-bg1.png" style={{ maxWidth: 340 }} alt="cta shape" /></div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <h2 className="text-secondary lh-1-7 mb-7">Subscribe to get information, latest news and other interesting offers about Cobham</h2>
                <form className="row g-3 align-items-center w-lg-75 mx-auto">
                  <div className="col-sm">
                    <div className="input-group-icon">
                      <input className="form-control form-little-squirrel-control" type="email" placeholder="Enter email " aria-label="email" /><img className="input-box-icon" src="https://ik.imagekit.io/aatmicfit/Website/Core/cta/mail.svg" width={17} alt="mail" />
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <button className="btn btn-danger btn-hover color-3 fs--1">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>





  )
}
