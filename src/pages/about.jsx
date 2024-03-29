import React, { useEffect } from "react";
import Header from "../components/global/header";
import AboutSpotlight from "../components/sections/About/aboutSpotlight"
import AboutAboutus from "../components/sections/About/aboutAboutUs"
import AboutMission from "../components/sections/About/aboutMission"
import AboutHistory from "../components/sections/About/aboutHistory"
import AboutTeam from "../components/sections/About/aboutTeam"
import AboutWhyMRS from "../components/sections/About/aboutWhyMRS"
import Awards from '../components/sections/About/aboutAwards'
import Cta from "../components/sections/About/aboutCTA"
import Footer from "../components/global/footer"
import InnerCTA from "../components/sections/About/7.innerCTA"
import Header2 from '../components/global/header2'


export default function Aboutpage () {
  

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
    
    return (
        <>
        <div className="pg-body viewport">     
            <div id="scroll-container" className="scroll-container">      
                {/* <Header /> */}
                <Header2 />
                <AboutSpotlight />
                <AboutAboutus />
                <AboutMission />
                {/* <AboutHistory /> */}
                <AboutTeam />
                <AboutWhyMRS />
                {/* <Awards /> */}
                <InnerCTA />
                <Footer />
            </div> 
        </div>
        </>
    )
}