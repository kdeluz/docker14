import React from 'react';
import profileImage from '../images/1657209383723.jpg';

const BasicInformation = () => (
  <section className="p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md text-center mb-6">
    <h1 className="text-2xl font-bold mb-4">Basic Information</h1>
    <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 hover:scale-105 transform transition duration-300" />
    <p className="text-lg">Name: Kyle Jordan Deluz</p>
    <p className="mt-2">Currently attending as a Full Stack Web Development student at Red River College. Passionate about web development and collaborating with others within the IT field. Seeking a position to contribute within a team environment and provide insights based on personal experience.</p>
  </section>
);

export default BasicInformation;
