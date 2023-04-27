import React from 'react'
import Header from "../components/Layout/Header";
import Categories from "../components/Route/Categories/Categories";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Categories />
    </div>
  )
}

export default HomePage