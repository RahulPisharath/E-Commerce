import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

const DetailView = () => {
  return (
    <div className="container">
    <div className="main-body">
    <marquee className="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> 
             
             <a href="#">Expert home and local services at your convenience! Download the Joboy app now! </a> <span className="dot"></span>
              
             <a href="#">Carpenter services now available in Trivandrum. Book now! </a> <span className="dot"></span>
              
             <a href="#">Refer your friends to Joboy and earn 750 reward coins when they use Joboy services </a> <span className="dot"></span>
              
             <a href="#">Get Rs. 75 OFF on Electrician and Plumbing Services. Limited Time Offer! Use Code REPAIR75 </a> <span className="dot"></span>
                       </marquee>
      <Tabs defaultTab="vertical-tab-one" vertical>
        <div className="row">
          <div className="col-sm-12 col-lg-12 ">
            <div className="card-body">
                <TabList className="tabs_order horizontal">
                <Tab tabFor="vertical-tab-one">Rates And Charges</Tab>
                <Tab tabFor="vertical-tab-two">Billings & Payments</Tab>
                <Tab tabFor="vertical-tab-three">Terms & Conditions</Tab>
                <Tab tabFor="vertical-tab-four">FAQ's</Tab>
                </TabList>

            </div>
           
          </div>
        
            <TabPanel tabId="vertical-tab-one">

              <div className="card p-3 shadow-none border-0">
                <div className="card-body">
                  <div>

                    <form>
                      <fieldset disabled>
                        <legend className="legend">My Profile
                          <i className="bi bi-pencil-square"></i>
                        </legend>
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div className="mb-3">
                              <label for="disabledTextInput" className="form-label">Name</label>
                              <input type="text" id="disabledTextInput" className="form-control"
                                placeholder="Kathy Wright" />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div className="mb-3">
                              <label for="disabledTextInput" className="form-label">Email</label>
                              <input type="email" id="disabledTextInput" className="form-control"
                                placeholder="loremipsum@mail.com" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div className="mb-3">
                              <label for="disabledPhoneNumber" className="form-label">Phone Number</label>
                              <input id="disabledPhoneNumber" type="tel" name="tel" value="333-444-5555"
                                className="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div className="mb-3">
                              <label for="disabledAddress" className="form-label">Address</label>
                              <input type="textarea" id="disabledAddress" className="form-control"
                                placeholder="loremipsum " />
                            </div>
                          </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                      </fieldset>
                    </form>
                  </div>

                </div>
              </div>

            </TabPanel>

            <TabPanel tabId="vertical-tab-two">
              <div className="card p-3 shadow-none border-0">
                <div className="card-body">

                  <form>
                    <fieldset>
                      <legend className="legend">Filter By

                      </legend>
                      <div className="row">
                        <div className="col-sm-12 col-md-3">
                          <div className="mb-3">
                            <label for="orderType" className="form-label">Order Type</label>
                            <select id="orderType" className="form-select">
                              <option>Services</option>
                              <option>Shopping</option>
                              <option>Deals</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                          <div className="mb-3">
                            <label for="status" className="form-label">Status</label>
                            <select id="status" className="form-select">
                              <option value="0" selected="">Open</option>
                              <option value="9">Confirmed</option>
                              <option value="4">Assigned</option>
                              <option value="7">Rescheduled</option>
                              <option value="1">In Progress</option>
                              <option value="2">Pending</option>
                              <option value="3">completed</option>
                              <option value="8">Invoiced</option>
                              <option value="6">Cancelled</option>
                              <option value="10">Quotation</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-3">
                          <label for="FromDate" className="form-label">From Date</label>
                          <div className="input-group">

                            <input type="text" className="form-control" value="12-02-2013" />
                            <span className="input-group-text">
                              <i className="bi bi-calendar3"></i></span>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                          <label for="ToDate" className="form-label">To Date</label>
                          <div className="input-group">

                            <input type="text" className="form-control" value="12-02-2013" />
                            <span className="input-group-text">
                              <i className="bi bi-calendar3"></i></span>
                          </div>
                        </div>

                      </div>
                      <div>
                        <button type="submit" className="btn btn-sm btn-primary">Reset</button>
                        <button type="submit" className="btn btn-sm btn-secondary mx-3">Submit</button>
                      </div>
                    </fieldset>
                  </form>

                </div>
              </div>

            </TabPanel>

            <TabPanel tabId="vertical-tab-three">

              <div className="card p-3 shadow-none border-0">
                <div className="card-body">
                  <legend className="legend">Last Order History</legend>

                  <ul className="timeline">
                    <li className="active">
                      <h6>PICKED</h6>
                      <p className="mb-0 text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque Lorem ipsum dolor
                      </p>
                      <p className="text-muted">21 March, 2014</p>
                    </li>
                    <li>
                      <h6>PICKED</h6>
                      <p className="mb-0 text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque
                      </p>
                      <p className="text-muted">21 March, 2014</p>
                    </li>
                    <li>
                      <h6>PICKED</h6>
                      <p className="mb-0 text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque
                      </p>
                      <p className="text-muted">21 March, 2014</p>
                    </li>
                    <li>
                      <h6>PICKED</h6>
                      <p className="mb-0 text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque
                      </p>
                      <p className="text-muted">21 March, 2014</p>
                    </li>
                    <li>
                      <h6>PICKED</h6>
                      <p className="mb-0 text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque
                      </p>
                      <p className="text-muted">21 March, 2014</p>
                    </li>
                  </ul>
                </div>
              </div>

            </TabPanel>
            <TabPanel tabId="vertical-tab-four">

              <div className="card p-3 shadow-none border-0">
                <div className="card-body">
                  <legend className="legend">Rewards</legend>

                </div>
              </div>

            </TabPanel>
        
        </div>
      </Tabs>

    </div>
  </div>
  )
}

export default DetailView