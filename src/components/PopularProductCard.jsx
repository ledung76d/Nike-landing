import { star } from "../assets/icons";

const PopularProductCard = ({ product }) => {
  const { imgURL, name, price } = product
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px] cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin ">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  )
}

export default PopularProductCard