/* eslint-disable react/prop-types */
const Button = ({ title }) => {
  return (
    // <div className="py-3 px-6 bg-DARKBLUE05 text-white text-center rounded-2xl mt-2 text-sm">
    //   {title}
    // </div>

    //update button responsive
    <button className="w-50 pt-3 pr-40 pb-3 pl-40 bg-DARKBLUE05 text-white rounded-xl">
      {title}
    </button>
  );
};

export default Button;
