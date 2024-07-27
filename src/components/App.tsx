import React, {ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import * as classes from "./App.scss"
import MiniCard from "./MiniCard";
import { storageDB} from "../storage_db";
import './App.scss'
import {ICartItem, Item} from "../types";
import logo from '../assets/zooplus.png'
import CartSvg from '../assets/cart.svg'
import Cross from '../assets/cross.svg'
import InfoCard from "./InfoCard";
import Cart from "./Cart";

const categories:string[] = storageDB.map((el: Item) => el.category);
const filteredCategories:string[] = categories.filter((category:string, index:number):boolean => categories.indexOf(category) === index);




const App = ():ReactNode => {
    const [category, setCategory] = useState<string>('cat');
    const [clickedItem, setClickedItem] = useState<Item | null>(null);
    const [cartItems, setCartItems] = useState<ICartItem[]>(JSON.parse(localStorage.getItem("items")) || []);
    const [isCartShown, setIsCartShown] = useState<boolean>(false);
    const [showDetailsId, setShowDetailsId] = useState<number | null>(null);

    const handleClick = useCallback((event): void => {
        const chosenCategory:string = event.target.innerText;
        setCategory(chosenCategory);
        setClickedItem(null)
    }, [])

    const filteredCatalog:Item[] = useMemo(() => storageDB.filter((item:Item):boolean => item.category === category), [category]);

    useEffect((): void => {
        localStorage.setItem("items", JSON.stringify(cartItems))
    }, [cartItems])

    const addItemInCart = useCallback((item:Item): void => {
        const existingCartItemIndex: number = cartItems.findIndex((cartItem: ICartItem): boolean => cartItem.name === item.title);
        if (existingCartItemIndex !== -1) {
            const updatedCartItems:ICartItem[] = cartItems.map((cartItem:ICartItem, index: number):ICartItem => {
                if (index === existingCartItemIndex) {
                    return {
                        ...cartItem,
                        sum: cartItem.sum + cartItem.cost,
                        number: cartItem.number + 1
                    };
                }
                return cartItem;
            });
            setCartItems(updatedCartItems);
        } else {
            const newCartItem: ICartItem = {
                name: item.title,
                cost: item.cost,
                date: new Date().toLocaleString(),
                description: item.description,
                number: 1,
                sum: item.cost,
            };
            setCartItems([...cartItems, newCartItem]);
        }
        alert(`Thank you!\nYou add to cart - ${item.title}, with price - ${item.cost}$\nGo in cart to check your order`)
    }, [cartItems])

    const deleteItemInCart = useCallback((event): void=> {
        const index:number = event.target.getAttribute('data-index') as number;
        if(cartItems[index].number > 1) {
            cartItems[index].number -= 1;
            cartItems[index].sum -= cartItems[index].cost;
        } else {
            cartItems.splice(index, 1)
        }
        setCartItems([...cartItems])
    }, [cartItems])


    const showCartDetails = useCallback((event): void => {
        const index: number = parseInt(event.currentTarget.getAttribute('data-index'));
        setShowDetailsId(prevId => (prevId === index ? null : index));
    }, [showDetailsId]);

    const showCart = (): void => {
        setIsCartShown(true)
    };

    const hideCart = (): void => {
        setIsCartShown(false)
    }

    return (
        <div className={classes.appHolder}>
            <div className={classes.chartHolder}>
                <img src={logo as string} alt={'shop logo'}/>
                <div className={classes.buyBtn} onClick={showCart}>
                    <CartSvg fill={'white'}  width={'24'} height={'24'}/>
                    <span>Shopping cart</span>
                </div>
            </div>
            <div className={classes.categoriesHolder}>
                {filteredCategories.map((cat:string, index:number) => <button key={index} id={`${cat}Btn`} onClick={handleClick}>{cat}</button>)}
            </div>
            <div className={classes.body}>
                <div className={classes.cardHolder}>
                    {filteredCatalog.map((el: Item, index: number) => <MiniCard key={index} product={el} showInfo={() => setClickedItem(el)}/>)}
                </div>
                {clickedItem && <InfoCard item={clickedItem} addItemInCart={()=> addItemInCart(clickedItem)}></InfoCard>}
            </div>
            {isCartShown &&
                <div className={classes.showCartHolder}>
                    <Cross width={'24'} height={'24'} className={classes.crossBtn} onClick={hideCart}/>
                    {
                        cartItems.length === 0 ?
                            <h2>Cart is empty</h2> :
                            (cartItems.map((item:ICartItem, index:number) => <Cart key={index} item={item} id={index} delete={(event) => deleteItemInCart(event)} showInfo={showCartDetails} needShow={showDetailsId === index}></Cart>))
                    }
                </div>
            }
        </div>
    )
}

export default App

