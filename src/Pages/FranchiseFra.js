import React, { useContext, useState } from 'react'
import './FranchiseFra.scss'
import Datetime from 'react-datetime';
import toast from 'react-hot-toast';
import { AuthContext } from '../App';
import { createQuizRecord, createDocSubmit, scheduleVisitApi } from '../api/services'

const FranchiseFra = () => {

    const {state, dispatch } = useContext(AuthContext);
    const [handleSubmit, setHandleSubmit] = useState(false);
    const [docsSubmit, setDocsSubmit] = useState(false);
    const [scheduleVisit, setScheduleVisit] = useState(false);
    const[isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState({
        site_visit_date:'',
        site_visit_time:'',
    });


    // const handleFileSubmit = async () => {
    //     const toastId = toast.loading('Submitting quiz......');

    //     let header = {
    //       'Authorization': "Token "+ state.token
    //     }
    
    //     setIsLoading(true)
    //     await createQuizRecord(header)
    //         .then(resp => {
    //             toast.dismiss(toastId)
    //             if (resp.data.isSuccess) {
    //                 setIsLoading(false);
    //                 toast.success('Quiz Submitted!')
    //             }
    //             else {
    //                 setIsLoading(false)
    //                 toast.error('Something went wrong!')
    //             }
    
    //         })
    //         .catch(err => {
    //             toast.dismiss(toastId)
    //             setIsLoading(false)
    //             console.log(err)
    //             toast.error('Something went wrong!')
    //         })
    
    // }


    var today = Datetime.moment().subtract( 0, 'day' );
    var valid = function( current ){
        return current.isAfter( today );
    };

    const handleDatePicker = (e) => {
        setValue(() => ({site_visit_date: e.toDate().toDateString(), site_visit_time: e.toDate().toTimeString()}))
    }

    const handleScheduleVisit = async(e) => {
        e.preventDefault();

        const toastId = toast.loading('Requesting site visit......'); 

        let header = {
            'Authorization': "Token "+ state.token,
        }

        setIsLoading(true)
        await scheduleVisitApi(header, value)
            .then(resp => {
                toast.dismiss(toastId)
                if (resp.data.isSuccess) {
                    setIsLoading(false);
                    toast.success('Requested site visit!')
                    setScheduleVisit(true);
                }
                else {
                    setIsLoading(false)
                    toast.error('Something went wrong!')
                }

            })
            .catch(err => {
                toast.dismiss(toastId)
                setIsLoading(false)
                console.log(err)
                toast.error('Something went wrong!')
            })

        
    }

    const handleDocsSubmission = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        var data = Object.fromEntries(formData.entries());
        const toastId = toast.loading('Submitting Documents......'); 

        let header = {
            'Authorization': "Token "+ state.token,
            'Content-Type': 'multipart/form-data',
        }

        setIsLoading(true)
        await createDocSubmit(header, data)
            .then(resp => {
                toast.dismiss(toastId)
                if (resp.data.isSuccess) {
                    setIsLoading(false);
                    toast.success('Documents Submitted!')
                    setDocsSubmit(true);
                }
                else {
                    setIsLoading(false)
                    toast.error('Something went wrong!')
                }

            })
            .catch(err => {
                toast.dismiss(toastId)
                setIsLoading(false)
                console.log(err)
                toast.error('Something went wrong!')
            })


        
    }

    const handleFormSubmission = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        var data = Object.fromEntries(formData.entries());
        const toastId = toast.loading('Submitting quiz......');

        const form_data = {
            'form': 'fra',
            'data': data
        }

        let header = {
            'Authorization': "Token "+ state.token
        }

        setIsLoading(true)
        await createQuizRecord(header, form_data)
            .then(resp => {
                toast.dismiss(toastId)
                if (resp.data.isSuccess) {
                    setIsLoading(false);
                    toast.success('Quiz Submitted!')
                    setHandleSubmit(true);
                }
                else {
                    setIsLoading(false)
                    toast.error('Something went wrong!')
                }

            })
            .catch(err => {
                toast.dismiss(toastId)
                setIsLoading(false)
                console.log(err)
                toast.error('Something went wrong!')
            })

    }
  return (
    <div className='franchise-fra'>
        <div className='franchise-fra__banner'>FRA QUESTIONNAIRE</div>
            {handleSubmit ? (
                <div className='franchise-fradocs__body'>
                    <div className='franchise-fradocs__body-about'>
                        <h2>Document Submission</h2>
                        <p className='franchise-fradocs__body-about-text'>Please submit your documents for validation such as License and registrations (trade license and trademark registration), certification (CR), financial statement of last year, other supporting documents)</p>
                        <p className='franchise-fradocs__body-about-req'>Minimum of three documents should be mandatory</p>
                    </div>
                    <div className='franchise-fradocs__body-file'>
                        <form onSubmit={handleDocsSubmission}>
                            <div className='franchise-fradocs__body-file-upload'>
                                <div className='franchise-fradocs__body-file-upload-label'>Trade Licence</div>
                                <div className='franchise-fradocs__body-file-upload-input'>
                                    <input type="file" id="myfile" name="trade_license" />
                                </div>
                            </div>
                            <div className='franchise-fradocs__body-file-upload'>
                                <div className='franchise-fradocs__body-file-upload-label'>Trademark Registration</div>
                                <div className='franchise-fradocs__body-file-upload-input'>
                                    <input type="file" id="myfile" name="trademark_reg" />
                                </div>
                            </div>
                            <div className='franchise-fradocs__body-file-upload'>
                                <div className='franchise-fradocs__body-file-upload-label'>Certification(CR)</div>
                                <div className='franchise-fradocs__body-file-upload-input'>
                                    <input type="file" id="myfile" name="certification" />
                                </div>
                            </div>
                            <div className='franchise-fradocs__body-file-upload'>
                                <div className='franchise-fradocs__body-file-upload-label'>Financial Statement</div>
                                <div className='franchise-fradocs__body-file-upload-input'>
                                    <input type="file" id="myfile" name="fin_statement" />
                                </div>
                            </div>
                            <div className='franchise-fradocs__body-file-upload'>
                                <div className='franchise-fradocs__body-file-upload-label'>Other Supporting Docs</div>
                                <div className='franchise-fradocs__body-file-upload-input'>
                                    <input type="file" id="myfile" name="other" />
                                </div>
                            </div>
                            <div className='franchise-fradocs__body-file-upload-button'><button type='submit'>Submit Documents</button></div>
                        </form>
                    </div>
                    {docsSubmit &&
                    <div className='franchise-fradocs__body-visit'>
                        <div className='franchise-fradocs__body-visit-heading'>
                            <h2>Schedule Site Visit</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className='franchise-fradocs__body-visit-selector'>
                            <form onSubmit={handleScheduleVisit}>
                                <div className='franchise-fradocs__body-visit-selector-datetime'>
                                    <div className='franchise-fradocs__body-visit-selector-datetime-label'>Select Date and Time</div>
                                    <div className='franchise-fradocs__body-visit-selector-datetime-input'>
                                    <Datetime onChange={handleDatePicker} isValidDate={valid} />
                                    </div>
                                </div>

                                <div className='franchise-fradocs__body-visit-selector-button'><button type='submit'>Schedule Visit</button></div>
                            </form>
                        </div>
                        {scheduleVisit &&
                            <div className='franchise-fradocs__body-visit-footer'>
                                Thank you! Our team will be contacting you upon request.
                            </div>
                        }
                    </div>
                    }
                </div>
            ) : (
            <div className='franchise-fra__body'>
                <div className='franchise-fra__body-about'>
                    <h2>FRA Questionnaire</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='franchise-fra__body-content'>
                    <form onSubmit={handleFormSubmission}>
                        <div className='franchise-fra__body-form-label'>1. Business specialty/brief</div>
                        <div className='franchise-fra__body-form-input'><textarea required rows='4' cols='60' name='business_brief'></textarea></div>

                        <div className='franchise-fra__body-form-label'>2. When did the business start?</div>
                        <div className='franchise-fra__body-form-input'>
                            <select required name='business_start_year'>
                                <option value="" disabled selected>Year</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>

                        <div className='franchise-fra__body-form-label'>3. How many locations and warehouses?</div>
                        <div className='franchise-fra__body-form-input'>
                        <input required type="number" min="0" placeholder='Locations' name='locations'></input>
                        <input required type="number" min="0" placeholder='Warehouses' name='warehouses'></input>
                            {/* <select>
                                <option value="" disabled selected>Locations</option>
                                <option value="India">India</option>
                                <option value="UAE">UAE</option>
                                <option value="Uk">United Kingdom</option>
                                <option value="usa">USA</option>
                            </select> */}
                            {/* <select>
                                <option value="" disabled selected>Warehouses</option>
                                <option value="india">India</option>
                                <option value="uae">UAE</option>
                                <option value="uk">United Kingdom</option>
                                <option value="usa">USA</option>
                            </select> */}
                        </div>

                        <div className='franchise-fra__body-form-label'>4. What is the ideal size for your stores or showroom?</div>
                        <div className='franchise-fra__body-form-input'>
                            <input required type="text" name='ideal_store_size'></input>
                        </div>

                        <div className='franchise-fra__body-form-label'>5. Initial investment</div>
                        <div className='franchise-fra__body-form-input'>
                            <input required type="number" name='initial_investment'></input>
                            <select required name='initial_investment_currency'>
                                <option value="" disabled selected>Currency</option>
                                <option value="aed">AED</option>
                                <option value="usd">USD</option>
                                <option value="sar">SAR</option>
                                <option value="eur">EUR</option>
                                <option value="gbp">GBP</option>
                            </select>
                        </div>

                        <div className='franchise-fra__body-form-label'>6. Expected payback period</div>
                        <div className='franchise-fra__body-form-input'>
                            <input required type="radio" id='six_yes' name='fra_paybak_period' value='yes' /> Yes
                            <input required type="radio" id='six_no' name='fra_paybak_period' value='no'/> No
                        </div>

                        <div className='franchise-fra__body-form-label'>7. Financial audit reports</div>
                        <div className='franchise-fra__body-form-input'>
                            <input required type="radio" name='fra_audit' value='yes'/> Yes
                            <input required type="radio" name='fra_audit' value='no'/> No
                        </div>

                        <div className='franchise-fra__body-form-label'>8. Internal or external TM registration</div>
                        <div className='franchise-fra__body-form-input'>
                            <input required type="radio" name='fra_registration' value='yes'/> Yes
                            <input required type="radio" name='fra_registration' value='no'/> No
                        </div>

                        <div className='franchise-fra__body-form-label'>9. Do you have a brand manual?</div>
                        <div className='franchise-fra__body-form-input'>
                            <input required type="radio" name='fra_band_manual' value='yes'/> Yes
                            <input required type="radio" name='fra_band_manual' value='no'/> No
                        </div>

                        <div className='franchise-fra__body-form-label'>10. Do you have a marketing guidelines?</div>
                        <div className='franchise-fra__body-form-input'>
                            <input required type="radio" name='fra_marketing' value='yes'/> Yes
                            <input required type="radio" name='fra_marketing' value='no'/> No
                        </div>

                        <div className='franchise-fra__body-form-label'>11. Is the domain registered? (.com or other)</div>
                        <div className='franchise-fra__body-form-input'>
                            <input required type="radio" name='fra_domain' value='yes'/> Yes
                            <input required type="radio" name='fra_domain' value='no'/> No
                        </div>

                        <div className='franchise-fra__body-form-label'>12. What POS system are you using?</div>
                        <div className='franchise-fra__body-form-input'>
                            <input required type="text" name='pos'></input>
                        </div>

                        <div className='franchise-fra__body-form-label'>13. Do you have a training manuals?</div>
                        <div className='franchise-fra__body-form-input'>
                            <input required type="radio" name='fra_training' value='yes' /> Yes
                            <input required type="radio" name='fra_training' value='no'/> No
                        </div>

                        <div className='franchise-fra__body-form-label'>14. Is the business profitable on an outlet level?</div>
                        <div className='franchise-fra__body-form-input'>
                            <input required type="radio" name='fra_level' value='yes'/> Yes
                            <input required type="radio" name='fra_level' value='no'/> No
                        </div>

                        <div className='franchise-fra__body-form-label'>15. What is the average profit percentage?</div>
                        <div className='franchise-fra__body-form-input'>
                            <select required name='profit_precentage'>
                                <option value="" disabled selected>Percentage</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                                <option value="35">35</option>
                                <option value="40">40</option>
                                <option value="45">45</option>
                                <option value="50">50</option>
                                <option value="55">55</option>
                                <option value="60">60</option>
                                <option value="65">65</option>
                                <option value="70">70</option>
                                <option value="75">75</option>
                                <option value="80">80</option>
                                <option value="85">85</option>
                                <option value="90">90</option>
                                <option value="95">95</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                        <div className='franchise-fra__body-form-submit'>
                            <input type="submit" value="Submit and Continue" />
                        </div>
                    </form>
                </div>
            </div>
            )}
        </div>
  )
}

export default FranchiseFra
