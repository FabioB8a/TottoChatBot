import { FC } from "react";
import Image from 'next/image';

const UtilitiesBar: FC = () => {
  return (
      <div className="utilites flex flex-row justify-between px-20 border-b">
          <div className="flex flex-row items-center">
            <label>
              <Image
              src="/images/icons/search.svg"  
              alt="Search"
              width={25}  
              height={50} 
              />
            </label>
            <input className="border-t-0 border-l-0 border-r-0 border-b-0 w-20" />
          </div>
          <div>
          <Image
            src="/images/logo/TOTTO.png"  
            alt="User"
            width={180}  
            height={50}
            className="my-8" 
          />
          </div>
          <div className="flex flex-row">
          <Image
            src="/images/icons/user.svg"  
            alt="User"
            width={25}  
            height={50} 
            className="m-5"
          />
          <Image
            src="/images/icons/backpack.svg"  
            alt="BackPack"
            width={35}  
            height={50} 
            className="mx-5"
          />
          </div>
      </div>
     
  );
};

export default UtilitiesBar;