import React from 'react';
import Foodnavigation from '../Components/Foodnavigation';
import FoodDetails from '../Components/FoodDetails';

const Food = () => {
  return (
    <>
    <Foodnavigation/>
   <div className=''>
    <div id="foodDetails0">
    <FoodDetails
          category="Chicken Burgers"
          src="/img/f1.jpeg"
          title="Chicken"
          description="Tasty dishes from Category 1."
          price={299}
        />
        <FoodDetails
          src="/img/f1.jpeg"
          title="Chicken"
          description="Tasty dishes from Category 2."
          price={299}
        />
    </div>
        <div id="foodDetails1">
        <FoodDetails
         category="Beef Burgers"
          src="/img/featured.jpeg"
          title="Beef"
          description="Tasty dishes from Category 3."
          price={299}
          
        />
        <FoodDetails
          src="/img/featured.jpeg"
          title="Beef"
          description="Tasty dishes from Category 4."
          price={299}
          
        />
        </div>
        <div id="foodDetails2">
        <FoodDetails
         category="Combo Burgers"
          src="/img/featured.jpeg"
          title="Combo"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        <FoodDetails

          src="/img/featured.jpeg"
          title="Combo"
          description="Tasty dishes from Category 5."
          price={299}
        />
        </div>
        <div id="foodDetails3">
        <FoodDetails
          category="Special Burgers"
          src="/img/featured.jpeg"
          title="Special"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        <FoodDetails
          src="/img/featured.jpeg"
          title="Special"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        </div>
        <div id="foodDetails4">
        <FoodDetails
          category="New Arrivals"
          src="/img/featured.jpeg"
          title="New arrival"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        <FoodDetails
          src="/img/featured.jpeg"
          title="New arrival"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        </div>
        <div id="foodDetails5">
        <FoodDetails
          category="Hot Deals"
          src="/img/featured.jpeg"
          title="Hot deals"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        <FoodDetails
          src="/img/featured.jpeg"
          title="Hot deals"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        </div>
      </div>
      </>
  );
};

export default Food;
