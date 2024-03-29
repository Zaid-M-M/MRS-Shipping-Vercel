import React, { useEffect } from "react";
import '../../../assets/css/home.css';
import '../../../assets/css/blog.css'
import blog1 from '../../../assets/img/home_img/blog1.png'
import blog2 from '../../../assets/img/home_img/blog2.png'
import blog3 from '../../../assets/img/home_img/blog3.png'
import blog4 from '../../../assets/img/home_img/blog4.png'
import Blog_close_icon from '../../../assets/img/home_img/Blog_close_icon.svg'
import $ from 'jquery';

export default function AllBlog () {

    useEffect (() =>  {
        
              
    })

    return (
        <>
        <div className="blog-archive-sec section-padd-LR">
                <div className="main-container"> 
                    {/* <div className="blg-ttl-bx">
                        <h2 className="blog-hdng js-split-text">News & Blog</h2>
                    </div> */}

                    <div className="blog-bx-continer">

                        <div className="blog-bx">
                            <div className="blg-content-dv">
                                <div className="date-box">
                                    <p>News  ·  22/07/2021 </p>
                                </div>
                                <h2 className="post-ttl">MRS presents new data hub</h2>                                    
                                <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                <a className="btn grey" href="#">Read more</a>                                    
                                <img className="featur-img" src={blog3} alt="blog1" /> 
                            </div>                                                                       
                        </div> 

                        <div className="blog-bx">
                            <div className="blg-content-dv">
                                <div className="date-box">
                                    <p>Blog  ·  22/07/2021 </p>
                                </div>
                                <h2 className="post-ttl">MRS presents new data hub</h2>                                    
                                <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                <a className="btn grey" href="#">Read more</a>                                    
                                <img className="featur-img" src={blog2} alt="blog1" /> 
                            </div>                                                                       
                        </div> 

                        <div className="blog-bx">
                            <div className="blg-content-dv">
                                <div className="date-box">
                                    <p>News  ·  22/07/2021 </p>
                                </div>
                                <h2 className="post-ttl">MRS presents new data hub</h2>                                    
                                <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                <a className="btn grey" href="#">Read more</a>                                    
                                <img className="featur-img" src={blog3} alt="blog1" /> 
                            </div>                                                                       
                        </div>

                        <div className="blog-bx">
                            <div className="blg-content-dv">
                                <div className="date-box">
                                    <p>Blog  ·  22/07/2021 </p>
                                </div>
                                <h2 className="post-ttl">MRS presents new data hub</h2>                                    
                                <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                <a className="btn grey" href="#">Read more</a>                                    
                                <img className="featur-img" src={blog2} alt="blog1" /> 
                            </div>                                                                       
                        </div> 

                        <div className="blog-bx">
                            <div className="blg-content-dv">
                                <div className="date-box">
                                    <p>News  ·  22/07/2021 </p>
                                </div>
                                <h2 className="post-ttl">MRS presents new data hub</h2>                                    
                                <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                <a className="btn grey" href="#">Read more</a>                                    
                                <img className="featur-img" src={blog3} alt="blog1" /> 
                            </div>                                                                       
                        </div> 

                        <div className="blog-bx">
                            <div className="blg-content-dv">
                                <div className="date-box">
                                    <p>Blog  ·  22/07/2021 </p>
                                </div>
                                <h2 className="post-ttl">MRS presents new data hub</h2>                                    
                                <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                <a className="btn grey" href="#">Read more</a>                                    
                                <img className="featur-img" src={blog2} alt="blog1" /> 
                            </div>                                                                       
                        </div> 

                    </div>                   
                        
                </div>
        </div>
        </>
    )
}