import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [content, setContent] = useState('');

  const routes = {
    "": "index.html",
    "/": "index.html",
    "#/loki": "loki.html",
    "#/huskys": "huskys.html",
    "#/about": "about.html",
  };

  useEffect(() => {
    async function loadPage(page) {
      const res = await fetch(page);
      const text = await res.text();
      const element = document.getElementById("info");
      if (element) {
        // Check if element exists
        element.innerHTML = text;
      } else {
        console.error("Element with id 'info' not found.");
      }
    }
    function router() {
      const link = window.location.hash;
      const route = routes[link];
      if (route) loadPage(route);
    }

    window.addEventListener('hashchange', router);
    router();

    // Cleanup to prevent memory leaks
    return () => {
      window.removeEventListener('hashchange', router);
    };
  }, []);

  //only using dangerouslySetInnerHTML for proof of concept
  return (
    <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
  );
};


export default MyComponent;