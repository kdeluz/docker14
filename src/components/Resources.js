import React from 'react';

const Resources = () => (
  <section className="p-6 bg-gray-100">
    <h1 className="text-2xl font-bold mb-4">Resources</h1>
    <div className="mb-6">
      <h2 className="text-xl font-semibold">GitHub Profile</h2>
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-12 h-12" />
      <p>Summary: Check out my GitHub profile for my projects and code samples.</p>
      <a href="https://github.com/kdeluz" className="text-blue-500">View GitHub Profile</a>
    </div>
    <div>
      <h2 className="text-xl font-semibold">LinkedIn Profile</h2>
      <img src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/01-dsk-e8-v2.png.original.png" alt="LinkedIn" className="w-12 h-12" />
      <p>Summary: Connect with me on LinkedIn to view my professional network and experiences.</p>
      <a href="https://www.linkedin.com/in/kdeluz/" className="text-blue-500">View LinkedIn Profile</a>
    </div>
  </section>
);

export default Resources;
