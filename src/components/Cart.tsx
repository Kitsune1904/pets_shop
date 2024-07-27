import {ReactNode} from "react";
import * as classes from "./App.scss"
import { ICartProps} from "../types";



const Cart = (props:ICartProps):ReactNode => {
    return (
        <div className={classes.cart}>
            <div>
                <h3>{props.item.name}</h3>
                <p>Number of product in cart - <span>{props.item.number}</span></p>
                <p>Cost - <span>{props.item.cost} $</span></p>
                {props.needShow &&
                    <>
                        <p>Order date - <span>{props.item.date}</span></p>
                        <p>{props.item.description}</p>
                    </>
                }
            </div>
            <div>
                <span className={classes.showInfoBtn} data-index={props.id} onClick={props.showInfo}>Show details</span>
                <span className={classes.deleteBtn} data-index={props.id} onClick={props.delete}>Delete item</span>
            </div>
        </div>
    )
}

export default Cart