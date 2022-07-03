/* TAILWIND CLASSNAMES */

/* HOME PAGE */
export const home = {
  filterDiv:
    "flex flex-col sm:justify-around items-center lg:flex-row lg:justify-between mb-8 w-4/5 lg:flex-row",
  addNewProductIcon: "fixed right-16 bottom-8 text-6xl cursor-pointer",
  productList:
    "w-4/5 lg:w-5/5 overflow-y-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-auto px-0 py-6",
  productCard: {
    containerDiv: "flex flex-col m-4 ml-12 h-72 w-40 relative  ",
    upperDiv:
      "bg-white min-h-68 px-3 min-w-68 rounded-lg hover:shadow-sm hover:shadow-cyan-600 cursor-pointer flex justify-center items-center overflow-hidden",
    deleteIcon: "absolute top-2 right-0 cursor-pointer fill-red-500 text-xl z-10",
    image: "inline object-cover h-40 w-40 ",
    lowerDiv: "flex flex-col items-center mt-3 text-center",
    name: "font-bold",
    price: "font-semibold",
  },
  categorySelect: {
    div: "relative",
    select:
      "cursor-pointer form-select form-select-sm appearance-none block w-40 px-2 py-2 text-sm font-normal text-gray-700 bg-white focus:outline-none",
    icon: "absolute right-2 top-2 text-xl",
  },
  productSearchInput:
    "form-input w-80 px-3 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 shadow-2xl rounded placeholder-opacity-50 tracking-wide",
};

/* DETAIL PAGE */

export const detail = {
  detailHeader: {
    mainDiv:
      " flex flex-col sm:flex-row items-center text-center sm:text-left  border-b-4 border-gray-400 pb-3 w-screen sm:w-4/5 mt-8",
    imageDiv: "bg-white p-3 rounded-lg shadow-lg w-48 h-60 flex justify-center items-center px-5",
    contentDiv: "pl-6 flex flex-col justify-evenly  h:40 sm:h-60",
    name: "text-2xl sm:text-4xl font-bold tracking-wide",
    price: "text-xl sm:text-2xl font-semibold",
    image: "",
  },
  description: "flex flex-col w-4/5",
  descriptionTitle: " font-semibold text-xl ",
};

/* CREATE PAGE */

export const create = {
  formTitle: "text-2xl font-bold text-center",
  form: "container w-3/5 h-4/5 p-5 flex flex-col justify-evenly items-center ",
  input:
    "form-input w-full px-3 py-2 text-sm text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 shadow-2xl rounded placeholder-opacity-50 tracking-wide overflow-hidden resize-none",
  select:
    "form-select form-select-sm appearance-none block w-full px-2 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 shadow-2xl rounded transition ease-in-out cursor-pointer focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none",
  option: "cursor-pointer",
  button:
    "font-bold w-2/6 p-3 text-sm text-white rounded tracking-wide bg-cyan-700 hover:bg-cyan-900",
};
