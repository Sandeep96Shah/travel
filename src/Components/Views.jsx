import React, { useState } from "react";
import { data } from '../data/data';

const Food = () => {
    const [ foods, setFoods ] = useState(data);
    const filterFoodTypes = (category) => {
        const filteredFoods = data.filter((food) => food.category === category);
        setFoods(filteredFoods);
    }
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="font-bold text-4xl text-orange-500 text-center">
        Best Views
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={() => setFoods(data)} className="m-1 border-orange-600 text-orange hover:bg-orange-600 hover:text-white">All</button>
            <button onClick={() => filterFoodTypes("mountain")} className="m-1 border-orange-600 text-orange hover:bg-orange-600 hover:text-white">Mountain</button>
            <button onClick={() => filterFoodTypes("beaches")} className="m-1 border-orange-600 text-orange hover:bg-orange-600 hover:text-white">Beaches</button>
            <button onClick={() => filterFoodTypes("forest")} className="m-1 border-orange-600 text-orange hover:bg-orange-600 hover:text-white">Forest</button>
            <button onClick={() => filterFoodTypes("village")} className="m-1 border-orange-600 text-orange hover:bg-orange-600 hover:text-white">Village</button>
            <button onClick={() => filterFoodTypes("city")} className="m-1 border-orange-600 text-orange hover:bg-orange-600 hover:text-white">City</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {foods.map((item, index) => (
            <div key={index} className="shadow-2xl hover:scale-105 duration-300 rounded-t-lg">
                <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
