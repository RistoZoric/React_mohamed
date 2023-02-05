import React from "react";
import "./AboutKhalifafund.scss";
import logo from "../images/kf_logo.svg";
import right_arrow from "../images/right-arrow-free-svg-file.png"
import { Link, useLocation } from "react-router-dom";

const AboutKhalifafund = () => {
  return (
    <div className="about-khalifafund">
      <div className="about-khalifafund__banner">
        About Khalifa Fund for Enterprise Development
      </div>
      <div className="about-khalifafund__body">
        <div className="about-khalifafund__body-banner">
          <img src={logo} alt={"logo"}></img>
        </div>
        <div className="about-khalifafund__body-content">
          <p>
            Khalifa Fund for Enterprise Development was established in 2007, by
            the virtue of the Law 14 of 2005 and its amendments, in the
            implementation of the vision of His Highness Sheikh Khalifa Bin
            Zayed Al Nahyan. The Khalifa Fund works as an independent,
            not-for-profit economic development agency of the Government of Abu
            Dhabi for the development and support of small-to-medium enterprises
            (SMEs).
            <br />
            <br />
            The Fund helps to develop local enterprises in Abu Dhabi through
            instilling and enriching an investment culture amongst UAE
            nationals. The Fund also seeks to support and develop SMEs in the
            Emirate.
            <br />
            <br />
            Khalifa Fund was founded in 2007 with a total capital of AED 300
            million, which gradually increased in 2008 to AED 1 billion, in
            order to meet the growing demand for the Fund’s services. In 2011,
            the Fund’s total capital was increase to AED 2 billion, and the Fund
            covered all of the UAE through a network of branches.
          </p>
        </div>
        <div className="about-khalifafund__body-serives">
          <h3>Khalifa Fund Services</h3>
          <p>
            Khalifa Fund for Enterprise Development provides a diverse range of
            support services for funded and non-funded entrepreneurs, during the
            many various phases of a project’s lifecycle.
            <br />
            <br />
            Entrepreneurs can expect to receive franchise development services
            across the setup, operational, and growth phases, as well as ongoing
            support and capacity-building training.
          </p>

          <h4>Setup Phase</h4>
          <ul>
            <li>
              Facilitation of securing location through agreements with selected
              strategic partners (shopping malls, Business Centres, and
              Industrial cities)
            </li>
            <li>
              Government fees waivers through agreements signed with major
              local, and federal government entities, as well as private
              entities.
            </li>
            <li>
              Facilitating contacts with different stakeholders to obtain the
              required approvals.
            </li>
          </ul>
          <h4>Operational Phase</h4>
          <ul>
            <li>
              Business counselling and a dedicated relationship manager to
              monitor the performance of the business for all funded applicants
            </li>
            <li>Provide mentoring and support to all members</li>
            <li>
              Facilitating priority in tendering opportunities, in both
              semi-government and private entities through signed agreements
            </li>
            <li>
              Facilitate access to a new market, through agreements signed with
              key market players in the public, semi-public and private sectors
            </li>
            <li>
              The participation of Khalifa Fund members to selected tradeshows
              and exhibitions, both locally and internationally, in order for
              them to gain exposure to worldwide best practices, technology
              development and potential clients.
            </li>
          </ul>
          <h4>Growth Phase</h4>
          <ul>
            <li>Introducing new investment opportunities to expand.</li>
          </ul>
          <h4>Training</h4>
          <ul>
            <li>
              All the Entrepreneurship training programs provided by the
              training section are tailor-made and designed to meet the
              development needs of the targeted audience, the potential
              entrepreneurs and SMEs
            </li>
            <li>
              Khalifa Fund also offers customized training programs on emerging
              topics such as information technology, e-commerce, digital
              marketing, etc., based on market needs and institutional
              partnership collaborations
            </li>
          </ul>
          <div className="readmore">
            <a
              className=""
              href="https://www.moec.gov.ae/en/khalifa-fund-for-enterprise-development"
            >
              <div>Learn More about Khalifa Fund </div> <img  src={right_arrow} height="50" width="40"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutKhalifafund;
