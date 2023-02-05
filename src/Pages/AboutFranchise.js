import React from "react";
import "./AboutFranchise.scss";
import logo from "../images/Francorp-Logo-Blue.png";
import right_arrow from "../images/right-arrow-free-svg-file.png"

const AboutFranchise = () => {
  return (
    <div className="about-franchise">
      <div className="about-franchise__banner">About Francorp</div>

      <div className="about-franchise__body">
        <div className="about-franchise__body-banner">
          <img src={logo} alt={"logo"}></img>
        </div>

        <div className="about-franchise__body-title">
          Francorp, Leading The World in Franchising
        </div>
        <div className="about-franchise__body-text">
          Established in 1976, Francorp is one of the largest and oldest
          franchise-consulting firms globally, with presence in more than
          forty-five countries. Over the years, Francorp has assisted more than
          16,000 companies plans for expansion, and has developed more than 6000
          full franchise programs. The depth of Francorp's experience with
          successful franchising and the quality of our services has made us the
          industry leader. This is due, in part, to the Francorp Proven Method -
          a 20 step system for developing successful franchises. We love sharing
          the success stories of our clients who have developed a relationship
          with Francorp, used our services, and reaped the benefits of our
          knowledge and expertise. These include Mc Donald’s, AMPM, ACE
          Hardware, BP, Budget, Holiday Inn, Hershey Foods, Ryder Trucks,
          Popeye's Fried Chicken, Discovery Zone, KFC, Nestle, Fitness First,
          Kidzania, Under Armour, Inglot, Tony&Guy, Carrefour, Hallmark,
          Buffallo Wild Wings, Shell, Total, Texaco, Valvoline and many more.
        </div>
        <div className="about-franchise__body-title">
          The Industry Leader in the Middle East
        </div>
        <div className="about-franchise__body-text">
          Francorp Middle East provides a one-stop solution for all your
          franchising service requirements by employing highly dedicated
          professionals and in-house staff of franchise Attorneys, Marketing
          Executives, Strategic Planning Experts, Operations Manual Writers, and
          a very creative franchise sales training Staff. It is the only
          franchise consulting firm where your project is critically analyzed by
          specialists to carefully create & develop an unmatched franchise
          program. Francorp Middle East has its franchising Headquarters for the
          GCC countries in Dubai, UAE. Other Francorp Middle East offices are in
          KSA, Kuwait, Qatar, Jordan and Lebanon, the latter serving as the
          Headquarters for the Levant region. Our Middle East success stories
          include: Kcal, Emarat Fresh Plus, ENOC, 800 Pizza, Broccoli Pizza,
          Filli Cafe, Operation: Falafel, Maison De Joelle, FitnGlam, Crank,
          Kronfol, Chattles and More, House of Pops, Morelli’s Gelato, La Fonda
          , Zoom, Kababji Grill, Sedar, Danube Home, Jones the Grocer, Dipndip,
          Champion Cleaners, 1847, SASCO, Firststop-Bridgestone, BLACK TAP,
          Eggspectation, CRYO, Malabar Gold, Bedashing and many more. Interested
          in becoming a Francorp client and commencing the development of your
          franchise program? You can speak to a Francorp consultant, or book an
          appointment online to find out more about our processes and how
          franchising can benefit your business. We offer a choice of several
          pricing and payment options with our flexible franchise program
          development plans, in order to cater to your business requirements.
        </div>
        <div className="readmore">
            <a
              className=""
              href="https://francorpme.com/"
            >
              <div>Learn more about Francorp Middle East </div> <img  src={right_arrow} height="50" width="40"/>
            </a>
          </div>
      </div>
    </div>
  );
};

export default AboutFranchise;
