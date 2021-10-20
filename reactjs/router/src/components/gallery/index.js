import React from "react";
import img_1 from "./images/1.jpg"
import img_2 from "./images/2.jpg"
import img_3 from "./images/3.jpg"
import img_4 from "./images/4.jpg"
import "./index.css"
// import "./index.scss"


export default function gallery(){
    return(
        <div>
            <h1> Our gallery </h1>
            <div className="img">
                <div className="div-1 divs">
                    <img src={img_1} alt="Nature Image"></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti voluptates harum, placeat, tempore libero minima, sunt quia eum explicabo autem reiciendis enim in optio sint minus ab quidem iusto. Ex et eum accusantium praesentium! Et harum, excepturi aliquid maxime asperiores debitis, eveniet ex nesciunt optio aperiam magnam dolorum reprehenderit.</p>
                </div>
                <div className="div-2 divs">
                    <img src={img_2} alt="Nature Image"></img> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti voluptates harum, placeat, tempore libero minima, sunt quia eum explicabo autem reiciendis enim in optio sint minus ab quidem iusto. Ex et eum accusantium praesentium! Et harum, excepturi aliquid maxime asperiores debitis, eveniet ex nesciunt optio aperiam magnam dolorum reprehenderit.</p>
                </div>
                <div className="div-3 divs">
                    <img src={img_3} alt="Nature Image"></img> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti voluptates harum, placeat, tempore libero minima, sunt quia eum explicabo autem reiciendis enim in optio sint minus ab quidem iusto. Ex et eum accusantium praesentium! Et harum, excepturi aliquid maxime asperiores debitis, eveniet ex nesciunt optio aperiam magnam dolorum reprehenderit.</p>
                </div>
                <div className="div-4 divs">
                    <img src={img_4} alt="Nature Image"></img> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti voluptates harum, placeat, tempore libero minima, sunt quia eum explicabo autem reiciendis enim in optio sint minus ab quidem iusto. Ex et eum accusantium praesentium! Et harum, excepturi aliquid maxime asperiores debitis, eveniet ex nesciunt optio aperiam magnam dolorum reprehenderit.</p>
                </div>
            </div>
        </div>
    )
}