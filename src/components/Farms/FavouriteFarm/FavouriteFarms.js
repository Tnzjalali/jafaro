import React, { Component } from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import FavouriteFarm from "./FavouriteFarm";
import styled from "./FavouriteFarms.css";
import images1 from "../../../assets/images/seedfarm1.jpg";
import images2 from "../../../assets/images/seedfarm2.jpg";
class FavouriteFarms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          iamge: images1,
          title: "مزرعه دانه",
          productions: "گندم ، چای",
          description:
            "مزرعه دانه به سرپرستی امید خدایار اداره میشود و در شمال کشور می باشد",
        },
        {
          id: 2,
          iamge: images2,
          title: "مزرعه گندم",
          productions: "گندم ، چای",
          description:
            "مزرعه گندم به سرپرستی علی احمدی اداره میشود و در شمال کشور می باشد",
        },
      ],
    };
  }
  render() {
    return (
      <Aux>
        <div className={styled.favouriteFarmsTitleContainer}>
          <p className={styled.favouriteFarmsTitle}>مزرعه های پر طرف دار</p>
        </div>
        <div className={styled.FavouriteFarms}>
          {this.state.items.map((item) => (
            <FavouriteFarm
              key={item.id}
              id={item.id}
              image={item.iamge}
              title={item.title}
              productions={item.productions}
              description={item.description}
            />
          ))}
        </div>
        <div className={styled.productFiltersBox}></div>
      </Aux>
    );
  }
}

export default FavouriteFarms;