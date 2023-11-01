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
          src="/img/f1.jpg"
          title="Chicken"
          description="Tasty dishes from Category 1."
          price={299}
        />
        <FoodDetails
          src="/img/f1.jpg"
          title="Chicken"
          description="Tasty dishes from Category 2."
          price={299}
        />
        <FoodDetails
          src="/img/f1.jpg"
          title="Chicken"
          description="Tasty dishes from Category 2."
          price={299}
        />
        <FoodDetails
          src="/img/f1.jpg"
          title="Chicken"
          description="Tasty dishes from Category 2."
          price={299}
        />
        <FoodDetails
          src="/img/f1.jpg"
          title="Chicken"
          description="Tasty dishes from Category 2."
          price={299}
        />
    </div>
        <div id="foodDetails1">
        <FoodDetails
         category="Beef Burgers"
          src="/img/f1.jpg"
          title="Beef"
          description="Tasty dishes from Category 3."
          price={299}
          
        />
        <FoodDetails
          src="/img/f1.jpg"
          title="Beef"
          description="Tasty dishes from Category 4."
          price={299}
          
        />
        </div>
        <div id="foodDetails2">
        <FoodDetails
         category="Combo Burgers"
          src="/img/f1.jpg"
          title="Combo"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        <FoodDetails

          src="/img/f1.jpg"
          title="Combo"
          description="Tasty dishes from Category 5."
          price={299}
        />
        </div>
        <div id="foodDetails3">
        <FoodDetails
          category="Special Burgers"
          src="/img/f1.jpg"
          title="Special"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        <FoodDetails
          src="/img/f1.jpg"
          title="Special"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        </div>
        <div id="foodDetails4">
        <FoodDetails
          category="New Arrivals"
          src="/img/f1.jpg"
          title="New arrival"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        <FoodDetails
          src="/img/f1.jpg"
          title="New arrival"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        </div>
        <div id="foodDetails5">
        <FoodDetails
          category="Hot Deals"
          src="/img/f1.jpg"
          title="Hot deals"
          description="Tasty dishes from Category 5."
          price={299}
          
        />
        <FoodDetails
          src="/img/f1.jpg"
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


// const [foodItems, setFoodItems] = useState([
    
//   {
//     category:'Chicken Burgers',
//     id: 1,
//     src: "/img/f1.jpg",
    
//     title: 'Chicken',
//     description: 'Tasty dishes from Category 1.',
//     price: 299,
//   },
//   {
//     id: 2,
//     src: "/img/f1.jpg",
//     title: 'Chicken',
//     description: 'Tasty dishes from Category 1.',
//     price: 299,
//   },
//   {
//     id: 3,
//     src: "/img/f1.jpg",
//     title: 'Chicken',
//     description: 'Tasty dishes from Category 1.',
//     price: 299,
//   },
//   {
//     id: 4,
//     src: '/img/f1.jpg',
//     title: 'Chicken',
//     description: 'Tasty dishes from Category 1.',
//     price: 299,
//   },
//   {
//     category:'Beef Burgers',
//     id: 5,
//     src: "/img/f1.jpg",
//     title: 'Chicken',
//     description: 'Tasty dishes from Category 1.',
//     price: 299,
//   },
//   {
//     id: 6,
//     src: "/img/f1.jpg",
//     title: 'Chicken',
//     description: 'Tasty dishes from Category 1.',
//     price: 299,
//   },
//   {
//     id: 7,
//     src: '/img/f1.jpg',
//     title: 'Chicken',
//     description: 'Tasty dishes from Category 1.',
//     price: 299,
//   },
//   {
//     id: 8,
//     src: "/img/f1.jpg",
//     title: 'Chicken',
//     description: 'Tasty dishes from Category 1.',
//     price: 299,
//   },
//   {
//     category:'Combo Burgers',
//     id: 9,
//     src: '/img/f1.jpg',
//     title: 'Chicken',
//     description: 'Tasty dishes from Category 1.',
//     price: 299,
//   },
//   {
//     id: 10,
//     src: "/img/f1.jpg",
//     title: 'Chicken',
//     description: 'Tasty dishes from Category 1.',
//     price: 299,
//   },
//   {
//     id: 11,
//     src: '/img/f1.jpg',
//     title: 'Chicken',
//     description: 'Tasty dishes from Category 1.',
//     price: 299,
//   },
// ]);
// const handleDelete = (itemId) => {
//   // Filter out the item to be deleted based on its ID
//   const updatedFoodItems = foodItems.filter((item) => item.id !== itemId);
//   // Update the state with the new list of items
//   setFoodItems(updatedFoodItems);
// };
// return (
//   <>
//   <Foodnavigation />
//     <div className=''>
//       {foodItems.map((foodItem) => (
//         <div id={`foodDetails${foodItem.id}`} key={foodItem.id}>
//           <FoodDetails
//            category={foodItem.category}
//             src={foodItem.src}
//             title={foodItem.title}
//             description={foodItem.description}
//             price={foodItem.price}
//             onDelete={() => handleDelete(foodItem.id)} // Pass the handleDelete function
//           />
//         </div>
//       ))}
//     </div>