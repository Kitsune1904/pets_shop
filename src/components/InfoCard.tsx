import * as classes from "./App.scss"
import {ReactNode} from "react";
import {IInfoCardProps} from '../types'


const InfoCard = (props:IInfoCardProps):ReactNode => {
    return (
        <div className={classes.infoCard}>
            <img src={props.item.img} alt={`${props.item.category}'s food photo`}/>
            <h2>{props.item.title}</h2>
            <span>{`Cost: ${props.item.cost} $`}</span>
            <p>{props.item.description}</p>
            <span className={classes.buyBtn} onClick={props.addItemInCart}>Buy</span>
        </div>
    )
}

export default InfoCard