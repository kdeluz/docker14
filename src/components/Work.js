import React from 'react';

const Work = () => (
  <section className="p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
    <h1 className="text-2xl font-bold mb-4">Work</h1>
    <div className="mb-6">
      <h2 className="text-xl font-semibold">LOLITEMSHOP</h2>
      <p>Created a Rails project using Riot Games’ API to fill a database with League of Legends Items and display it on a website using Bulma as its framework.</p>
      <p>Tech List: Ruby, Rails, Bulma</p>
    </div>
    <div>
      <h2 className="text-xl font-semibold">ONEANIME</h2>
      <p>Developed a solo project using data retrieval from a public API to store on a database for users to add and comment on. Developed CRUD operations using PHP.</p>
      <p>Tech List: Apache, PHP, HTML, CSS, SQL</p>
    </div>
  </section>
);

export default Work;
