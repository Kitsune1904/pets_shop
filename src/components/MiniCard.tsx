import {ReactNode} from "react";
import * as classes from "./App.scss"
import {IMiniCardProps} from "../types";



const MiniCard = (props:IMiniCardProps):ReactNode => {
    return (
        <div className={classes.miniCard} onClick={props.showInfo}>
            <img src={props.product.img} alt={`${props.product.category}'s food photo`}/>
            <h3>
                {props.product.title}
            </h3>
        </div>
    )
}

export default MiniCard