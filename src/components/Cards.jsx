import React,{useState} from 'react';
import{product} from "../data";
import ArrowImg from "../assets/img/product/cards/arrow.svg";
const Cards = () => {
  //index state
  const [index, setIndex] = useState(1);

    const {cards} = product;
    //render
    return (
      <div className="mx-[10%]">
        <div className="flex flex-col gap-y-[0px] lg:flex-row lg:gap-x-[30px]">
          {cards.map((card,cardIndex) => {
            return (
              <div key={cardIndex}>
                <div 
                onClick={() => setIndex(cardIndex)}
                className={`${index === cardIndex  && 'bg-white shadow-2xl'
                }w-[350px] flex flex-col justify-center items-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer  transition-all `}>
                  {/* card icon */}
                  <div className="mb-6">
                    <img src={card.icon} alt="" />
                  </div>
                  {/* card title */}
                  <div className="mb-3 text-[30px] font-medium">{card.title}</div>
                  {/* card subtitle */}
                  <p className='mb-6 text-light'>{card.subtitle}</p>
                
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  
};

export default Cards;
