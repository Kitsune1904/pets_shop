import {ReactNode} from "react";
import * as classes from "./App.scss"
import { ICartProps} from "../types";



const Cart = (props:ICartProps):ReactNode => {
    return (
        <div className={classes.cart}>
            <div>
                <h3>{props.item.name}</h3>
                <p>Number of product in cart - <span>{props.item.number}</span></p>
                <p>Order sum - <span>{props.item.sum} $</span></p>
                {props.needShow &&
                    <>
                        <p>One piece cost - <span>{props.item.cost} $</span></p>
                        <p>Order date - <span>{props.item.date}</span></p>
                        <p>{props.item.description}</p>
                    </>
                }
            </div>
            <div>
                <span className={classes.showInfoBtn} data-index={props.id} onClick={props.showInfo}>{
                    props.needShow ? "Hide details" : "Show details"
                }</span>

                <span className={classes.deleteBtn} data-index={props.id} onClick={props.delete}>Delete item</span>
            </div>
        </div>
    )
}

export default Cart