import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DetailFrame from "../detailFrame/detailFrame";

function SimpleSlider (props){
    const {data} = props;

    const elements = data.map(item=>{
        return(
            <div key={item.moonrise_ts}>
                <DetailFrame  data={item}/>
            </div>
        )
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }


    return (
        <div>
            <Slider {...settings}>
                {elements}
            </Slider>
        </div>
    );

}

export default  SimpleSlider