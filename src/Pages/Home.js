import React from "react";
import Login from "../component/Login";
import LoginPage from "../component/LoginPage";
import { Register } from "../component/Register";

const Home = () => {
  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{ width: "266px", overflow: "hidden" }}
                        >
                          <b className="is-hidden">Help'Em</b>
                          <b className="is-visible">Let You Be The Hero</b>
                          <b className="is-hidden">PREPARE.PLAN.</b>
                          <b className="is-visible">Let YOU be a hero.</b>
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Overview</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Disaster situations are threatening, highly dynamic, and
                        with uncertain developments. It is difficult to predict
                        human behaviour when hit by a Disaster as this depends
                        on unknown and irrational factors. National disaster
                        task forces such as NDRF have been experiencing such
                        situations while evacuating the areas under the
                        influence of disasters like earthquakes, floods,
                        cyclones, and other calamities. It is vital to evaluate
                        the disaster-struck areas, understand the requirements
                        at the ground level and use the resources present at the
                        moment optimally. There is a requirement to create a
                        system to manage and minimize the aftermaths of a
                        disaster. So, we present a solution to this by
                        developing a platform where various people grant their
                        homes, shops, etc., for shelter purposes. The platform
                        can be used by the family of the victim to find his
                        location or whether he is safe or not. The platform will
                        help in improving the facilities provided to the victims
                        by sheltering them and managing the crowd effectively.

                      In times of disaster, it is a difficult task to manage the humongous crowd filled with fear. Providing them with shelter and food gets tough. This is where our platform comes in handy.
It gives a chance to a commoner to step forward and voluntarily help those helpless people by providing shelter. Other than this, our platform will help the family members in locating their lost ones if they are in any of the shelters under us.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <h3>Frightened Crowd</h3>
                      <div className="underline1"></div>
                      <img src="assets\img\crowd.jpeg" alt="Help'Em" />
                      <div className="underline2"></div>
                      <p>
                        When a huge disaster strikes,people are usually in a
                        panic, and controlling crowd becomes a difficult task.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">
                      <h3>Availability of Shelter </h3>
                      <div className="underline1"></div>
                      <img src="assets\img\download.png" alt="Help'Em" />
                      <div className="underline2"></div>
                      <p>
                        During disasters, finding a shelter is very difficult
                        task.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">
                      <h3>Finding your loved ones</h3>
                      <img src="assets\img\lovedone.jpeg" alt="Help'Em" />
                      <div className="underline2"></div>
                      <p>
                        In such an adverse condition finding your relatives and
                        family members could be really tough.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <LoginPage />

            <div className="about-back"></div>
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Overview</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p className="wow fadeIn">
                        <li>
                          Making people aware of fore coming disasters to reduce
                          the impact using push notifications on the user’s app.
                        </li>
                        <li>
                          Provide guidance and personal safety measures through
                          the app to make disaster ready.
                        </li>
                        <li>
                          Evacuation of people to safety shelters by tracking
                          disaster-hit areas.
                        </li>
                        <li>
                          Provide a platform for users to volunteer in disaster
                          relief activities.
                        </li>
                        <li>
                          Provide a mechanism for locating a lost person using a
                          shelter database.
                        </li>
                        <li>
                          Provide a control dashboard (web portal) to monitor
                          disaster situations and ensure sufficient actions.
                        </li>{" "}
                        
                        
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-counter text-center">
              <div className="counter">
                <div className="container">
                  <div className="row wow fadeIn">
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        
                        <h3 className="Count">100</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Rescued</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        
                        <h3 className="Count">100</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Shelters</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <h3 className="Count">100</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Registered</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <h3 className="Count">100</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>success</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>Contact Us</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p></p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  {/* <div className="row contact-row">
                    <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 contact-col">
                      <h3>Write Your Message Here</h3>
                      <div className="contact-form">
                        <form
                          action="https://herokuapp.us6.list-manage.com/subscribe/post?u=870e1b447d1f93893227a9c52&amp;id=85d6c939a5"
                          method="post"
                          id="mc-embedded-subscribe-form contactForm"
                          name="mc-embedded-subscribe-form"
                          className="contact-form shake validate"
                          target="_blank" 
                          data-toggle="validator"
                          novalidate
                        >
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="text"
                                name="FLNAME"
                                id="mce-FLNAME"
                                className="required form-control"
                                placeholder="Your Name"
                                required
                                data-error="Please enter your name"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="email"
                                className="email required form-control"
                                name="EMAIL"
                                id="mce-EMAIL"
                                placeholder="Your Email"
                                required
                                data-error="Please enter your email"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="phone"
                                name="PHONE"
                                className="phone form-control"
                                id="phone mce-PHONE"
                                placeholder="Your Phone"
                                required
                                data-error="Please enter your phone"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <textarea
                                id="message mce-MESSAGE"
                                rows="7"
                                placeholder="Your Massage"
                                name="MESSAGE"
                                className="required form-control"
                                required
                                data-error="Please enter your message"
                              ></textarea>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div id="mce-responses" class="clear">
                            <div
                              class="response"
                              id="mce-error-response"
                              style={{ display: "none" }}
                            ></div>
                            <div
                              class="response"
                              id="mce-success-response"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                          <div
                            style={{ position: "absolute", left: "-5000px" }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_870e1b447d1f93893227a9c52_85d6c939a5"
                              tabindex="-1"
                              value=""
                            />
                          </div>
                          <button
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="submit mc-embedded-subscribe"
                            className="btn btn-success"
                          >
                            Send Message
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                          <div className="clearfix"></div>
                        </form>
                      </div>
                    </div>
                  </div> */}
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Address</h3>
                        <p>
                          Disaster Management Division, Ministry of Home
                          Affairs, Government of India 3rd Floor, NDCC-II
                          Building, Jai Singh Road, New Delhi-110001
                        </p>
                        <p>Kolkata, West Bengal, India</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Email</h3>
                        <a
                          href="mailto:contact.helpthem@gmail.com"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          contact.helpthem@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-mobile contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Control Rooms</h3>
                        <h3>Phone</h3>
                        <a
                          href="tel:8372876775"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          National Emergency Response Center, Disaster
                          Management Division, Ministry of Home Affairs : Phone
                          No. : 011-23438252,011-23438250 Helpline: 011 1070
                          National Disaster Management Authority: Phone No. :
                          011 26701728/730 Fax: 011 26701729 Helpline: 011 1078
                          +91 8372876775
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid map-col">
                  <div class="col-md-12 col-sm-12 map-col">
                    <div class="google-maps">
                      <div class="map-wrap">
                        <iframe
                          title="google-maps"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5630603985!2d88.0495328251319!3d22.675752087592436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1653845709428!5m2!1sen!2sin"
                          width="100%"
                          height="450"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
