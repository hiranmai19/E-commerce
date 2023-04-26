import React from 'react'
import Header from "../components/Layout/Header";
import Categories from "../components/Route/Categories/Categories";
import Events from "../components/Events/Events";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Categories />
        <Events />
    </div>
  )
}

export default HomePage