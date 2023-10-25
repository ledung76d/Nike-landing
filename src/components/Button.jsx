const Button = ({ label, iconURL }) => {
  return (
    <button
      className="flex justify-center item-center item-baseline gap-2 px-7 
      py-4 border font-montserrat text-lg leading-none bg-coral-red
      rounded-full text-white border-coral-red hover:bg-white hover:text-coral-red
      "
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow-right-icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}

    </button>
  );
};

export default Button;
