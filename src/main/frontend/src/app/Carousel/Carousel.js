import React, {Component} from 'react';
import photo0 from "../../../public/static/images/bnr0.png";
import photo1 from "../../../public/static/images/bnr1.png";
import photo2 from "../../../public/static/images/bnr2.png";
import photo3 from "../../../public/static/images/bnr3.png";
import "../style.css";
import {Carousel} from "react-responsive-carousel";

export default class CarouselPage extends Component {
    render() {
        return (
            <Carousel
                showArrows={true}
                autoPlay={true}
                interval={5000}
                style={{width: 1128}}
                showThumbs={false}
                showStatus={false}
                className={"mainCarousel"}
                infiniteLoop={true}
            >
                <div>
                    <img alt="реклама" src={photo0}/>
                </div>
                <div>
                    <img alt="реклама" src={photo1}/>
                </div>
                <div>
                    <img alt="реклама" src={photo3}/>
                </div>
                <div>
                    <img alt="реклама" src={photo2}/>
                </div>
            </Carousel>
        );
    }
};
