import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/feature/heroImg.png';

const HeroHome = () => {
  return (
    <header
      className="flex flex-col justify-center h-screen  bg-center  bg-no-repeat pl-40  dark:bg-gray-900"
      // style={{
      //   backgroundImage: `url(${heroImg})`,
      //   backgroundSize: ' auto 55%',
      //   backgroundPosition: '80% 30%  ',
      // }}
    >
      <img
        src={heroImg}
        alt="Online learning"
        className="absolute h-[50%] w-auto object-contain rounded-3xl"
        style={{
          right: '15%',
        }}
      />

      <h1 className="ml-24 text-primary-500  text-5xl tracking-tight leading-none font-bold">
        Card<span className="text-primary-500">ly</span>
      </h1>
      <p className="mt-4 mx-24 text-xl text-gray-800 dark:text-gray-400 text-opacity-75">
        Create Flashcards
        <br />
        and study easily from any part of the world.
      </p>
      <p className="mx-24 mt-8">
        <Link
          to="/login"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Get started
        </Link>{' '}
      </p>
    </header>
  );
};

export default HeroHome;
