// src/App.jsx
import './App.css'
import React from 'react';
import Homepage from './pages/home';
import Aboutpage from './pages/about';
// import Blogpage from './pages/blogs';
import Contact from './pages/contact';
import MultiuserWarehousing from './pages/Services/multiuserWarehousing';
import RoadRailTransport from './pages/Services/roadRailTransport';
import PioneeringWarehousing from './pages/Services/pioneeringWarehousing';
import InplantWarehouse from './pages/Services/inPlantWarehousing';
import CustomsBrokerageCompliance from './pages/Services/customsBrokerageCompliance';
import TechDrivenService from './pages/Services/TechDrivenLastMileDeliveryServices';
import PostDetails from './pages/Blogs/postDetails';
import postsData from './pages/Blogs/postsData';
import BlogArchive from './pages/Blogs/BlogArchive';
import CareersPage from './pages/careers';
import ArtsPage from './pages/Sectors/arts';
import RenewableEnergyPage from './pages/Sectors/renewableEnergy'
import IndustrialSectorPage from './pages/Sectors/industrialSector'
import ChemicalsPage from './pages/Sectors/chemicals'
import EcommercePage from './pages/Sectors/e-commerce'
import ManufacturingPage from './pages/Sectors/manufacturing'


const App = () => {
  const getCurrentPath = () => (typeof window !== 'undefined' ? window.location.pathname : '/');

  const renderPostDetails = () => {
    const currentPath = getCurrentPath();
    const postId = parseInt(currentPath.split('/').pop());

    const selectedPost = postsData.find(post => post.id === postId);

    if (selectedPost) {
      return <PostDetails
        title={selectedPost.title}
        content={selectedPost.content}
        featureImage={selectedPost.featureImage}
        category={selectedPost.category}
        metaTitle={selectedPost.metaTitle}
        metaDescription={selectedPost.metaDescription}
        ogImage={selectedPost.ogImage}
        schema={selectedPost.schema}
        publishDate={selectedPost.publishDate}
      />;
    } else {
      return <div>Post not found</div>;
    }
  };

  const routes = {
    '/': <Homepage />,
    '/about': <Aboutpage />,
    '/blogs': <BlogArchive />,
    '/careers': <CareersPage />,
    '/contact-us': <Contact />,
    // Services
    '/services/multiuser-warehousing': <MultiuserWarehousing />,
    '/services/road-and-rail-transport': <RoadRailTransport />,
    '/services/pioneering-duty-free-warehousing-solutions': <PioneeringWarehousing />,
    '/services/in-plant-warehouse-management': <InplantWarehouse />,
    '/services/customs-brokerage-and-regulatory-compliance': <CustomsBrokerageCompliance />,
    '/services/tech-driven-last-mile-delivery-services':<TechDrivenService />,
    // Sectors
    '/sector/arts-exhibitions-and-luxury-Goods':<ArtsPage />,
    '/sector/renewable-energy-and-infrastructure-projects':<RenewableEnergyPage />,
    '/sector/industrial-sector':<IndustrialSectorPage />,
    '/sector/chemicals-construction-energy-and-agriculture':<ChemicalsPage />,
    '/sector/e-commerce-and-retail':<EcommercePage />,
    '/sector/manufacturing-automotive-technology-and-consumer-goods':<ManufacturingPage />,
    // Blogs
    [`/post/${postsData[0].id}`]: renderPostDetails(),
    [`/post/${postsData[1].id}`]: renderPostDetails(),
    [`/post/${postsData[2].id}`]: renderPostDetails(),
    [`/post/${postsData[3].id}`]: renderPostDetails(),
    // Add more entries for additional posts if needed
  };

  return <>{routes[getCurrentPath()]}</>;
};

export default App;
