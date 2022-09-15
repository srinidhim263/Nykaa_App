// import React, { useState } from "react";
// import nykaaAppApi from "../../api/nykaaApp";

// const CategoryComponent = () => {
//   const [category, setCategory] = useState({
//     categoryName: "",
//   });

//   const addCategoryAPI = (event) => {
//     event.preventDefault();

//     nykaaAppApi
//       .post(`/category`, {
//         categoryName: category.categoryName,
//       })
//       .then((res) => {
//         if (res.data.data) {
//           alert("success");
//         } else if (res.data.error) {
//           console.log(res.data.error.message);
//         } else {
//           console.log("Something went wrong");
//         }
//       })
//       .catch((error) => {
//         console.log(`Error -> ${error}`);
//       });
//   };
//   return (
//     <>
//       <div>
//         <form>
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="category name"
//               onChange={(event) => {
//                 setCategory({ ...category, categoryName: event.target.value });
//               }}
//             />
//           </div>

//           <button
//             className="btn btn-lg mt-3 loginBtn "
//             onClick={(event) => {
//               addCategoryAPI(event);
//             }}
//           >
//             Add category
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CategoryComponent;
