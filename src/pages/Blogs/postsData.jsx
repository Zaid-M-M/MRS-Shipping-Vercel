const postsData = [
    {   id: 1,
        title: '1.MRS presents new data hub',
        short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        content: `
                <h3>Overview</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                `,
        category: 'Blog',
        featureImage: 'Blog_img/About_MRS.jpg',
        metaTitle: 'React Introduction - Learn the Basics',
        metaDescription: 'Explore the fundamentals of React and start building dynamic web applications.',
        ogImage: 'path/to/og-image.jpg',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Introduction to React',
          description: 'Getting started with React.',
          image: 'path/to/schema-image.jpg',
        },
        publishDate: '2022-03-01',
    },
    
    { 
        id: 2,
        title: '2.New dimension reached in mobile invoicing',
        short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        content: `
                <h3>Overview</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                `,
        category: 'News',
        featureImage: 'Blog_img/About_MRS.jpg',
        metaTitle: 'React Introduction - Learn the Basics',
        metaDescription: 'Explore the fundamentals of React and start building dynamic web applications.',
        ogImage: 'path/to/og-image.jpg',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Introduction to React',
          description: 'Getting started with React.',
          image: 'path/to/schema-image.jpg',
        },
        publishDate: '2022-03-02',
    },

    { 
        id: 3,
        title: '3.MetaSource Adds European Partner inovoo',
        short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        content: `
                <h3>Overview</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                `,
        category: 'News',
        featureImage: 'Blog_img/About_MRS.jpg',
        metaTitle: 'React Introduction - Learn the Basics',
        metaDescription: 'Explore the fundamentals of React and start building dynamic web applications.',
        ogImage: 'path/to/og-image.jpg',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Introduction to React',
          description: 'Getting started with React.',
          image: 'path/to/schema-image.jpg',
        },
        publishDate: '2022-03-03',
    },

    { 
        id: 4,
        title: '4.Inovoo invests in growth–  management expanded',
        short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        content: `
                <h3>Overview</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                `,
        category: 'News',
        featureImage: 'Blog_img/About_MRS.jpg',
        metaTitle: 'React Introduction - Learn the Basics',
        metaDescription: 'Explore the fundamentals of React and start building dynamic web applications.',
        ogImage: 'path/to/og-image.jpg',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Introduction to React',
          description: 'Getting started with React.',
          image: 'path/to/schema-image.jpg',
        },
        publishDate: '2022-03-04',
    },

    { 
      id: 5,
      title: '4.Inovoo invests in growth–  management expanded',
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      content: `
              <h3>Overview</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              `,
      category: 'News',
      featureImage: 'Blog_img/About_MRS.jpg',
      metaTitle: 'React Introduction - Learn the Basics',
      metaDescription: 'Explore the fundamentals of React and start building dynamic web applications.',
      ogImage: 'path/to/og-image.jpg',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Introduction to React',
        description: 'Getting started with React.',
        image: 'path/to/schema-image.jpg',
      },
      publishDate: '2022-03-05',
  },
    
  ];

  export default postsData;