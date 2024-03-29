// src/pages/Blogs/firstblog.jsx (or your actual path)
import React, { useEffect } from "react";
import Header from "../../components/global/header";
import Header2 from '../../components/global/header2'
import Footer from "../../components/global/footer";  
import date_icon_white from '../../assets/img/line_img/date_icon_white.svg'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  XIcon
} from "react-share";

const PostDetails = ({ title, content, featureImage, featureImage1 , category, publishDate }) => {

  useEffect (() => {

    function handleAnimation(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1; // Set opacity to 1 when in viewport
          animateText(entry.target);
          observer.unobserve(entry.target); // No need to disconnect the observer
        }
      });
    }

    function animateText(target) {
      let split = new SplitType(target, {
          split: 'lines'
      });
  
      let tl = gsap.timeline();
      tl.from(split.lines, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          stagger: 0.2
      });
    }

    document.querySelectorAll('.js-split-text').forEach(element => {
      let observer = new IntersectionObserver(handleAnimation, { threshold: 0.5 });
      observer.observe(element);
    });       
    
    AOS.init();

    
})

  const altText = featureImage.split('/').pop().replace(/\.[^/.]+$/, '');
  // const imagePath = "../src/assets/img/home_img/";
  const pg_url = document.URL;

  return (
    <>
      <Header2 />
      <div className="blogInside-spotlgtSec section-padd-LR overflow" >
            <div className="main-container width-1250 ">
                    <h5 className="white">{category}</h5>
                    <h1 className="white">{title}</h1>
                    <div className="date-bx">
                      <img src={date_icon_white} alt="date_icon_white"/>
                      <p className="white">{publishDate}</p>                          
                    </div>                                            
            </div>
      </div>
      <div className="blogInside-contntSec section-padd-LR" >
            <div className="main-container width-1100 flex">
            <img src={featureImage} alt={altText} className="featureImg-inside"/> 
              <div className="width-10">
                <div className="share-icn">
                  <FacebookShareButton FacebookShareButton url={pg_url} quote={'Hello'}>
                    <FacebookIcon size={30} round={true}></FacebookIcon>
                  </FacebookShareButton>

                  <LinkedinShareButton url={pg_url} >
                    <LinkedinIcon size={30} round={true}></LinkedinIcon>
                  </LinkedinShareButton>

                  <TwitterShareButton url={pg_url} >
                    <XIcon size={30} round={true}></XIcon>
                  </TwitterShareButton>       
                </div>           
              </div>

              <div className="width-90 blg-cntnt">                  
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                  <a href="/blogs" class="blg_back_btn">&lt; Back to blog page </a> 
              </div>              
                                                     
            </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetails;
