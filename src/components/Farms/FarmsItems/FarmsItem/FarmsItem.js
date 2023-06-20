import React from "react";
import styled from "./FarmsItem.css";
import Aux from "../../../../hoc/Auxilary/Auxilary";
import FarmsItemSmall from "./FarmsItemSmall/FarmsItemSmall";
import FarmsitemImage from "./FarmsItemImage/FarmsItemImage";
import FarmsItemDecribe from "./FarmsItemDecribe/FarmsItemDecribe";
import FarmsItemReturn from "./FarmsItemReturn/FarmsItemReturn";

const FarmsItem = ({ data }) => {
  const exploreLink = `/farms/${data.id}`;
  return (
    <Aux>
      <div className={styled.farmsItemCard}>
        <div className={styled.cardInfo}>
          <FarmsitemImage image={data.image} id={data.id} />
        </div>
        <div className={styled.cardInfo}>
          <FarmsItemDecribe
            title={data.title}
            rate={data.rate}
            exploreLink={exploreLink}
            agent={data.title}
            description={data.description}
          />
        </div>
        <div className={styled.cardInfo}>
          <FarmsItemReturn
            averageAnnualInterest={data.averageAnnualInterest}
            customersCount={data.customersCount}
          />
        </div>
      </div>

      <FarmsItemSmall
        image={data.image}
        title={data.title}
        rate={data.rate}
        agent={data.title}
        location={data.location}
        averageAnnualInterest={data.averageAnnualInterest}
        description={data.description}
        exploreLink={exploreLink}
      />
    </Aux>
  );
};

export default FarmsItem;
