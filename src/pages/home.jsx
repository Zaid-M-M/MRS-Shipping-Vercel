import React, { useEffect } from "react";
import Header from "../components/global/header";
import HomeAbout from "../components/sections/Home/homeAbout"
// import Homeadvantage from "../components/sections/Home/homeAdvantage"
import HomeSpotlight from "../components/sections/Home/homeSpotlight"
import Homesolution from "../components/sections/Home/homeSolution"
import HomeSolutionSticky from "../components/sections/Home/homeSolutionSticky"
import HomeSector from "../components/sections/Home/homeSector"
import HomeClients from "../components/sections/Home/homeClients"
import HomeSuccStory from "../components/sections/Home/homeSuccStory"
import HomeTestimonial from "../components/sections/Home/homeTestimonial"
import HomeBlog from "../components/sections/Home/homeBlog"
import Footer from "../components/global/footer"
import Advantage from "../components/sections/Home/homeAdvantage"
import Header2 from '../components/global/header2'
import HomeSolution2 from "../components/sections/Home/homeSolution2";


export default function Homepage() {

   useEffect (() => {

          // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

          //   const smoother = ScrollSmoother.create({
          //       content: ".viewport",
          //       smooth: 3,
          //       effects: true
          //   });

          //   // Apply smooth scroll effects to elements with class ".img-anim"
          //   smoother.effects(".img-anim", { speed: "auto" });

          //   // Use ScrollTrigger to exclude specific sections from smooth scrolling
          //   ScrollTrigger.create({
          //       trigger: ".factsContainer_sm", // Replace with the appropriate selector for your section
          //       start: "top top",
          //       end: "bottom bottom",
          //       onEnter: () => {
          //           smoother.disable(); // Disable smooth scrolling when entering the excluded section
          //       },
          //       onLeaveBack: () => {
          //           smoother.enable(); // Enable smooth scrolling when leaving the excluded section
          //       }
          //   });


          // const options = {
          //   root: null,
          //   rootMargin: "0px",
          //   threshold: 0.9
          // };
          
          // let revealCallback = (entries, self) => {
          //   entries.forEach((entry) => {
          //     let container = entry.target;
          //     let img = entry.target.querySelector(".img");
          //     const easeInOut = "power3.out";
          //     const revealAnim = gsap.timeline({ ease: easeInOut });
          
          //     if (entry.isIntersecting) {
          //       revealAnim.set(container, {
          //         visibility: "visible"
          //       });
          //       revealAnim.fromTo(
          //         container,
          //         {
          //           clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          //           webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
          //         },
          //         {
          //           clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          //           webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          //           duration: 1,
          //           ease: easeInOut
          //         }
          //       );
          //       revealAnim.from(img, 4, {
          //         scale: 1,
          //         ease: easeInOut,
          //         delay: -1
          //       });
          //       self.unobserve(entry.target);
          //     }
          //   });
          // };
          
          // let revealObserver = new IntersectionObserver(revealCallback, options);
          
          // document.querySelectorAll(".reveal").forEach((reveal) => {
          //   revealObserver.observe(reveal);
          // });


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
              <HomeSpotlight />
              <HomeAbout />
              {/* <Homeadvantage />  */}
              <Advantage />  
              <HomeSolution2 />      
              {/* <Homesolution />
              <HomeSolutionSticky /> */}
              <HomeSector />
              <HomeClients />
              <HomeSuccStory />
              <HomeTestimonial />
              <HomeBlog />
              <Footer />
          </div> 
        </div>  
        </>
    )
    }   