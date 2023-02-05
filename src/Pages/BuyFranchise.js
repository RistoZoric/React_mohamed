import React, { useEffect, useState } from "react";
import "./BuyFranchise.scss";
import SearchComponent from "../Component/BuyFranchise/SearchComponent";
// import { FaArrowLeft } from 'react-icons/fa';
import AppSelect from "../Component/AppSelect";
import {
  getBrands,
  getCategories,
  getSearchBrandsType,
  getSubCategories,
  getSearchedBrands,
  sortBrands,
} from "../api/services";
import { Brands, Categories, Subcategories } from "../Utils/constants";
import RequestFeeInfo from "../Component/RequestFreeInfo/RequestFeeInfo";
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-multi-carousel/lib/styles.css";
import Popup from "../Component/Popup";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Drawer from "react-modern-drawer";

export default function BuyFranchise() {
  const [currentPage, setCurrentPage] = useState(0);
  const [openedCategory, setOpenedCategory] = useState(null);
  const [franchiseHeader, setFranchiseHeader] = useState("Buy a ");
  const [selectedFranchise, setSelectedFranchise] = useState([]);
  const [selectedFranchiseCount, setSelectedFranchiseCount] = useState(0);
  const [selectedMoreInfoFranchise, setSelectedMoreInfoFranchise] =
    useState(null);
  const [moreInfoOption, setMoreInfoOption] = useState(0);
  const [categories, setCategories] = useState([]);
  const [allSubcategories, setAllSubCategories] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [brandsFilteredByCat, setBrandsFilteredByCat] = useState([]);
  const sortOptions = [
    {
      name: "Sort by Investment: low to high",
      sort: "investment",
      type: "asc",
    },
    {
      name: "Sort by Investment: high to low",
      sort: "investment",
      type: "dec",
    },
    { name: "Sort by Latest Franchise", sort: "latest", type: "asc" },
    { name: "Sort by Oldest Franchise", sort: "latest", type: "dec" },
  ];
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [openSearchComponent, setOpenSearchComponent] = useState(false);
  const [searchComponentType, setSearchComponentType] = useState("");
  // const [latestCategory, setLatestCategory] = useState(null);

  const selectedBrandIds = () => {
    let ids = [];
    selectedFranchise.forEach((item) => {
      ids.push(item.id);
    });
    return ids;
  };

  useEffect(() => {
    // setCategories(Categories)
    // setAllSubCategories(Subcategories)
    // setAllBrands(Brands)
    fetchCategories();
    fetchSubCategories();
    fetchBrands();
  }, []);

  const handleSearchComponentType = async (data) => {
    setSelectedSort(sortOptions[0]);
    setSearchComponentType(data);
    setFranchiseHeader(data);
    setCurrentPage(1);
    let featuredBrands = [];
    await getSearchBrandsType(data)
      .then((response) => {
        if (response.data.dataInfo.length > 0) {
          featuredBrands = response.data.dataInfo;
        }
      })
      .catch((err) => console.log(err));
    setBrandsFilteredByCat(featuredBrands);
    setOpenedCategory({ name: data });
  };
  const handleSearchComponentSubmit = async (data) => {
    setSelectedSort(sortOptions[0]);
    setFranchiseHeader("Searched");
    setCurrentPage(1);
    let searchedBrands = [];
    await getSearchedBrands(data)
      .then((response) => {
        if (response.data.dataInfo.length > 0) {
          searchedBrands = response.data.dataInfo;
        }
      })
      .catch((err) => console.log(err));
    setBrandsFilteredByCat(searchedBrands);
    setOpenedCategory({ name: "" });
  };

  const handleSort = async (item) => {
    setSelectedSort(item);
    setSelectedFranchise([]);
    setSelectedFranchiseCount(0);
    setSearchComponentType("");
    let sortedBrands = [];
    await sortBrands(item.sort, item.type)
      .then((response) => {
        if (response.data.dataInfo.length > 0) {
          sortedBrands = response.data.dataInfo;
        }
      })
      .catch((err) => console.log(err));
    setBrandsFilteredByCat(sortedBrands);
  };

  const fetchCategories = async () => {
    await getCategories()
      .then((response) => {
        if (response.data.dataInfo.length > 0) {
          setCategories([...response.data.dataInfo]);
        }
      })
      .catch((err) => console.log(err));
  };
  const fetchSubCategories = async () => {
    // category: 1
    // id: 1
    // label: "Fast Food"
    // logo: "http://127.0.0.1:8000/media/subcategory/icons8-cafe-64.png"
    // name: "Fast Food"
    await getSubCategories()
      .then((response) => {
        if (response.data.dataInfo.length > 0) {
          const result = response.data.dataInfo;
          setAllSubCategories([...result]);
        }
      })
      .catch((err) => console.log(err));
  };
  const fetchBrands = async () => {
    await getBrands()
      .then((response) => {
        if (response.data.dataInfo.length > 0) {
          const result = response.data.dataInfo;
          setAllBrands([...result]);
        }
      })
      .catch((err) => console.log(err));
  };

  const getBrandFilteredByCat = (category) => {
    const filteredSubCat = allSubcategories.filter(
      (i) => i.category === category.id
    );
    let subCatIds = [];
    filteredSubCat.forEach((item) => {
      subCatIds.push(item.id);
    });
    return allBrands.filter((i) => subCatIds.includes(i.sub_category));
  };
  const handleOpenCategory = (category) => {
    setFranchiseHeader(category.name);
    setCurrentPage(1);
    const filteredBrands = getBrandFilteredByCat(category);
    setBrandsFilteredByCat(filteredBrands);
    setOpenedCategory(category);
  };

  const goBackToCategories = () => {
    setCurrentPage(0);
    setOpenedCategory(null);
    setFranchiseHeader("Buy a ");
    setMoreInfoOption(0);
    setSelectedFranchise([]);
    setSelectedFranchiseCount(0);
    setSelectedMoreInfoFranchise(null);
    setSearchComponentType("");
  };

  const handleSelectFranchise = (franchise) => {
    let currentSelectedFranchise = selectedFranchise;
    if (currentSelectedFranchise.includes(franchise)) {
      let newSelectedFrachise = [];
      currentSelectedFranchise.forEach((item) => {
        if (franchise.id !== item.id) {
          newSelectedFrachise.push(item);
        }
      });
      setSelectedFranchise([...newSelectedFrachise]);
      setSelectedFranchiseCount(selectedFranchiseCount - 1);
    } else {
      currentSelectedFranchise.push(franchise);
      setSelectedFranchiseCount(selectedFranchiseCount + 1);
      setSelectedFranchise([...currentSelectedFranchise]);
    }
  };

  const handleOpenFranchise = (franchise) => {
    setCurrentPage(2);
    setSelectedMoreInfoFranchise(franchise);
  };
  const handleOpenLatestFranchise = (franchise) => {
    const category = findCategoryFromBrand(franchise.sub_category);
    setFranchiseHeader(category[0].name);
    setCurrentPage(2);
    setOpenedCategory(category[0]);
    setSelectedMoreInfoFranchise(franchise);
  };

  const goBackToFranchise = (franchise) => {
    const category = findCategoryFromBrand(franchise.sub_category);
    setSelectedSort(sortOptions[0]);
    handleOpenCategory(category[0]);
    setMoreInfoOption(0);
    setSelectedMoreInfoFranchise(null);
    setSearchComponentType("");
  };

  const findCategoryFromBrand = (subCatId) => {
    const subcat = allSubcategories.filter((i) => i.id === subCatId);
    const cat = categories.filter((i) => i.id === subcat[0].category);
    return cat;
  };

  const handleSubmitRequest = () => {
    setButtonPopup(true);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const latest_responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="buy-franchise">
      <div className="buy-franchise__banner">{franchiseHeader} Franchise</div>
      <div className="buy-franchise__body">
        <div
          className="buy-franchise__body-mobile-search"
          onClick={() => setOpenSearchComponent(true)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <Drawer
          open={openSearchComponent}
          onClose={() => setOpenSearchComponent(false)}
          direction="right"
          className="buy-franchise__body-mobile-search-drawer"
        >
          <SearchComponent
            onSearch={(searchData) => handleSearchComponentSubmit(searchData)}
            categories={categories}
            onSelectedType={searchComponentType}
            handleFranchiseType={(data) => handleSearchComponentType(data)}
          />
        </Drawer>
        {currentPage === 0 && (
          <div className="buy-franchise__body-category">
            <div className="buy-franchise__body-category-label">
              BUY A FRANCHISE
            </div>
            <div className="buy-franchise__body-category-title">
              Franchise Category
            </div>
            <div className="buy-franchise__body-categories">
              {categories?.length > 0 &&
                categories.map((category) => {
                  return (
                    <div
                      key={category.id}
                      className="buy-franchise__body-categories-card"
                      onClick={() => handleOpenCategory(category)}
                    >
                      <img
                        className="buy-franchise__body-categories-card-icon"
                        src={category.logo}
                        alt={category.name}
                      />
                      <div className="buy-franchise__body-categories-card-label">
                        {category.name.indexOf("Retail") > -1
                          ? "Retails"
                          : category.name.slice(0, category.name.length - 9)}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {currentPage === 1 && (
          <div className="buy-franchise__body-franchise">
            <div className="buy-franchise__body-franchise-header">
              <div className="buy-franchise__body-franchise-showing">
                Showing 1-{brandsFilteredByCat.length} of{" "}
                {brandsFilteredByCat.length} franchises
              </div>
              <div className="buy-franchise__body-franchise-showing-mobile">
                {" "}
                1 of {brandsFilteredByCat.length}
              </div>

              <div className="buy-franchise__body-franchise-sort">
                <AppSelect
                  className="buy-franchise__body-franchise-sort-element"
                  defaultValue={sortOptions[0].name}
                  options={sortOptions}
                  optionsName={"name"}
                  selectedOption={(item, optionName) => handleSort(item)}
                />
              </div>
              <div
                className="buy-franchise__body-franchise-header-back"
                onClick={() => goBackToCategories()}
              >
                <span>Back</span>
              </div>
            </div>
            <div className="buy-franchise__body-franchise-list">
              {brandsFilteredByCat.map((franchise, index) => {
                return (
                  <div
                    className={`buy-franchise__body-franchise-card ${
                      selectedFranchise.includes(franchise) &&
                      "buy-franchise__body-franchise-card-selected"
                    }`}
                    key={index}
                    onClick={() => handleSelectFranchise(franchise, index)}
                  >
                    <img
                      className="buy-franchise__body-franchise-card-icon"
                      src={franchise.logo}
                      alt={franchise.name}
                    />
                    <div className="buy-franchise__body-franchise-card-divider"></div>
                    <div
                      className="buy-franchise__body-franchise-card-label"
                      onClick={() => handleOpenFranchise(franchise)}
                    >
                      {franchise.name}
                    </div>
                    <div className="buy-franchise__body-franchise-card-sublabel">
                      {openedCategory.name}
                    </div>
                    <div className="buy-franchise__body-franchise-card-overlay">
                      <div
                        className="buy-franchise__body-franchise-card-info"
                        onClick={() => handleOpenFranchise(franchise)}
                      >
                        More Info
                      </div>
                      {selectedFranchise.includes(franchise) ? (
                        <div className="buy-franchise__body-franchise-card-request">
                          Remove from Request List -
                        </div>
                      ) : (
                        <div className="buy-franchise__body-franchise-card-request">
                          Add to Request List +
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className='buy-franchise__body-franchise-footer'>
                        <div className={`buy-franchise__body-franchise-footer-action ${selectedFranchiseCount === 0 && 'buy-franchise__body-franchise-footer-action-disabled'}`} onClick={handleSubmitRequest}>{`Submit Request List (${selectedFranchiseCount})`}</div>
                    </div> */}
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <div className="buy-franchise__popup-form">
                <RequestFeeInfo brandId={selectedBrandIds()} isPopup />
              </div>

              {/* 
                            <form>
                                <div className='buy-franchise__popup-row'>
                                    <input className='buy-franchise__popup-row-input' type='text' placeholder='Name' required></input>
                                    <input className='buy-franchise__popup-row-input' type='text' placeholder='Email' required></input>
                                </div>
                                <div className='buy-franchise__popup-row'>
                                    <input className='buy-franchise__popup-row-input' type='number' maxLength={10} placeholder='Phone No.' required></input>
                                    <input className='buy-franchise__popup-row-input' type='text' placeholder='Country/Region' required></input>
                                </div>
                                <div className='buy-franchise__popup-row'>
                                    <input className='buy-franchise__popup-row-message' type='text' placeholder='Message (Optional)'></input>
                                </div>
                                <div className='buy-franchise__popup-row'>
                                    <input className='buy-franchise__popup-action' type='submit' value='Submit Request' />
                                </div>
                            </form>
                        </div> */}
            </Popup>
          </div>
        )}
        {currentPage === 2 && (
          <div className="buy-franchise__body-detail">
            <div className="buy-franchise__body-detail-header">
              <div className="buy-franchise__body-detail-header-logo">
                <img
                  className="buy-franchise__body-detail-header-icon"
                  src={selectedMoreInfoFranchise.logo}
                  alt={selectedMoreInfoFranchise.name}
                />
              </div>
              <div className="buy-franchise__body-detail-header-title">
                <div className="buy-franchise__body-detail-header-title-name">
                  {selectedMoreInfoFranchise.name}
                </div>
                <div className="buy-franchise__body-detail-header-title-type">
                  {openedCategory.name}
                </div>
              </div>
              <div className="buy-franchise__body-detail-header-action">
                Request Info
              </div>
              <div
                className="buy-franchise__body-detail-header-back"
                onClick={() => goBackToFranchise(selectedMoreInfoFranchise)}
              >
                Back
              </div>
            </div>

            <h2>CONCEPT BRIEF</h2>
            <p className="buy-franchise__body-detail-body-description">
              {selectedMoreInfoFranchise.description}
            </p>

            <div className="row">
              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Establishment Year</h4>
                    <p>{selectedMoreInfoFranchise.est_year}</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Number of Units</h4>
                    <p> {selectedMoreInfoFranchise.units}</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Country of Orgin</h4>
                    <p>{selectedMoreInfoFranchise.country_origin}</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Franchise Expansion</h4>
                    <p>{selectedMoreInfoFranchise.expansion}</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Type of Oppurtunity</h4>
                    <p>{selectedMoreInfoFranchise.type}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="buy-franchise__body-detail-banner">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {selectedMoreInfoFranchise.banner.map((banner, index) => {
                  return (
                    <div>
                      <img
                        className="buy-franchise__body-detail-banner-img"
                        src={banner.image}
                        alt={selectedMoreInfoFranchise.name}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>

            <h2>FRANCHISE INFO</h2>

            <div className="row">
              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Investment Range</h4>
                    <p>{selectedMoreInfoFranchise.range}</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Franchise Fee</h4>
                    <p> {selectedMoreInfoFranchise.area_dev_fee}</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Area Development Franchise Fee</h4>
                    <p>{selectedMoreInfoFranchise.area_req}</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Area Required</h4>
                    <p>{selectedMoreInfoFranchise.area_req}</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Ongoing Royalty Fee</h4>
                    <p>{selectedMoreInfoFranchise.royalty_fee}</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Advertising Fee</h4>
                    <p>{selectedMoreInfoFranchise.ad_fee}</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Marketing Fund</h4>
                    <p>{selectedMoreInfoFranchise.marketing_fund}</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 text-center">
                <div className="buy-franchise__body-detail-body-info">
                  <div className="block text-white">
                    <h4>Training Program</h4>
                    <p>{selectedMoreInfoFranchise.training_program}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="buy-franchise__body-detail-option">
              <div
                className={`${
                  moreInfoOption === 0
                    ? "buy-franchise__body-detail-option-selected"
                    : "buy-franchise__body-detail-option-unselected"
                }`}
                onClick={() => setMoreInfoOption(0)}
              >
                CONCEPT BRIEF
              </div>
              <div
                className={`${
                  moreInfoOption === 1
                    ? "buy-franchise__body-detail-option-selected"
                    : "buy-franchise__body-detail-option-unselected"
                }`}
                onClick={() => setMoreInfoOption(1)}
              >
                FRANCHISE INFO
              </div>
            </div> */}
            {/* {moreInfoOption === 0 && (
              <div className="buy-franchise__body-detail-body">
                <div className="buy-franchise__body-detail-body-description">
                  {selectedMoreInfoFranchise.description}
                </div>
                <div className="buy-franchise__body-detail-body-info">
                  <div className="buy-franchise__body-detail-body-info-option">
                    <div className="buy-franchise__body-detail-body-info-option-label">
                      Establishment Year
                    </div>
                    <div className="buy-franchise__body-detail-body-info-option-value">
                      {selectedMoreInfoFranchise.est_year}
                    </div>
                  </div>
                  <div className="buy-franchise__body-detail-body-info-option">
                    <div className="buy-franchise__body-detail-body-info-option-label">
                      Number of Units
                    </div>
                    <div className="buy-franchise__body-detail-body-info-option-value">
                      {selectedMoreInfoFranchise.units}
                    </div>
                  </div>
                  <div className="buy-franchise__body-detail-body-info-option">
                    <div className="buy-franchise__body-detail-body-info-option-label">
                      Country of Orgin
                    </div>
                    <div className="buy-franchise__body-detail-body-info-option-value">
                      {selectedMoreInfoFranchise.country_origin}
                    </div>
                  </div>

                  <div className="buy-franchise__body-detail-body-info-option">
                    <div className="buy-franchise__body-detail-body-info-option-label">
                      Franchise Expansion
                    </div>
                    <div className="buy-franchise__body-detail-body-info-option-value">
                      {selectedMoreInfoFranchise.expansion}
                    </div>
                  </div>
                  <div className="buy-franchise__body-detail-body-info-option">
                    <div className="buy-franchise__body-detail-body-info-option-label">
                      Type of Oppurtunity
                    </div>
                    <div className="buy-franchise__body-detail-body-info-option-value">
                      {selectedMoreInfoFranchise.type}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {moreInfoOption === 1 && (
              <div className="buy-franchise__body-detail-body">
                <div className="buy-franchise__body-detail-body-option">
                  <div className="buy-franchise__body-detail-body-option-label">
                    Investment Range
                  </div>
                  <div className="buy-franchise__body-detail-body-option-value">
                    {selectedMoreInfoFranchise.range}
                  </div>
                </div>
                <div className="buy-franchise__body-detail-body-option">
                  <div className="buy-franchise__body-detail-body-option-label">
                    Franchise Fee
                  </div>
                  <div className="buy-franchise__body-detail-body-option-value">
                    {selectedMoreInfoFranchise.fee}
                  </div>
                </div>
                <div className="buy-franchise__body-detail-body-option">
                  <div className="buy-franchise__body-detail-body-option-label">
                    Area Development Franchise Fee
                  </div>
                  <div className="buy-franchise__body-detail-body-option-value">
                    {selectedMoreInfoFranchise.area_dev_fee}
                  </div>
                </div>
                <div className="buy-franchise__body-detail-body-option">
                  <div className="buy-franchise__body-detail-body-option-label">
                    Area Required
                  </div>
                  <div className="buy-franchise__body-detail-body-option-value">
                    {selectedMoreInfoFranchise.area_req}
                  </div>
                </div>
                <div className="buy-franchise__body-detail-body-option">
                  <div className="buy-franchise__body-detail-body-option-label">
                    Ongoing Royalty Fee
                  </div>
                  <div className="buy-franchise__body-detail-body-option-value">
                    {selectedMoreInfoFranchise.royalty_fee}
                  </div>
                </div>
                <div className="buy-franchise__body-detail-body-option">
                  <div className="buy-franchise__body-detail-body-option-label">
                    Advertising Fee
                  </div>
                  <div className="buy-franchise__body-detail-body-option-value">
                    {selectedMoreInfoFranchise.ad_fee}
                  </div>
                </div>
                <div className="buy-franchise__body-detail-body-option">
                  <div className="buy-franchise__body-detail-body-option-label">
                    Marketing Fund
                  </div>
                  <div className="buy-franchise__body-detail-body-option-value">
                    {selectedMoreInfoFranchise.marketing_fund}
                  </div>
                </div>
                <div className="buy-franchise__body-detail-body-option">
                  <div className="buy-franchise__body-detail-body-option-label">
                    Training Program
                  </div>
                  <div className="buy-franchise__body-detail-body-option-value">
                    {selectedMoreInfoFranchise.training_program}
                  </div>
                </div>
              </div>
            )} */}
            <RequestFeeInfo brandId={selectedMoreInfoFranchise.id} />
          </div>
        )}
        <div className="buy-franchise__body-search-component">
          <SearchComponent
            onSearch={(searchData) => handleSearchComponentSubmit(searchData)}
            categories={categories}
            onSelectedType={searchComponentType}
            handleFranchiseType={(data) => handleSearchComponentType(data)}
          />
        </div>
      </div>
      <div className="buy-franchise__latest">
        {currentPage === 0 && (
          <div className="buy-franchise__body-latest">
            <div className="buy-franchise__body-latest-label">
              FRANCHISE OPPORTUNITY
            </div>
            <div className="buy-franchise__body-latest-title">
              Latest Franchises
            </div>
            <div className="buy-franchise__body-latest-list">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={latest_responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={7000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {allBrands?.length > 0 &&
                  allBrands.map((franchise, index) => {
                    return (
                      <div
                        className={`buy-franchise__body-franchise-card ${
                          selectedFranchise.includes(franchise) &&
                          "buy-franchise__body-franchise-card-selected"
                        }`}
                        key={index}
                        onClick={() => handleSelectFranchise(franchise, index)}
                      >
                        <img
                          className="buy-franchise__body-franchise-card-icon"
                          src={franchise.logo}
                          alt={franchise.name}
                        />
                        <div className="buy-franchise__body-franchise-card-divider"></div>
                        <div className="buy-franchise__body-franchise-card-label">
                          {franchise.name}
                        </div>
                        <div className="buy-franchise__body-franchise-card-sublabel">
                          {categories.length > 0 && allSubcategories.length > 0
                            ? findCategoryFromBrand(franchise.sub_category)[0]
                                .name
                            : ""}
                        </div>
                        <div className="buy-franchise__body-franchise-card-overlay">
                          <div
                            className="buy-franchise__body-franchise-card-info"
                            onClick={() => {
                              handleOpenLatestFranchise(franchise);
                            }}
                          >
                            More Info
                          </div>
                          {console.log(
                            franchise,
                            "franchisefranchisefranchise"
                          )}
                          {selectedFranchise.includes(franchise) ? (
                            <div className="buy-franchise__body-franchise-card-request">
                              Remove from Request List -
                            </div>
                          ) : (
                            <div className="buy-franchise__body-franchise-card-request">
                              Add to Request List +
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </Carousel>
            </div>
          </div>
        )}
      </div>
      <div className="buy-franchise__ask">
        Didn't find any franchise, Ask the Experts
        <div className="buy-franchise__ask-action">Ask Now!</div>
      </div>
      {selectedFranchiseCount !== 0 && (
        <div className="buy-franchise__request_submit">
          <span>You have selected {selectedFranchiseCount} franchises</span>
          <button onClick={handleSubmitRequest}>Submit Request</button>
        </div>
      )}
    </div>
  );
}
