import React, {MouseEventHandler} from "react";

export type Item = {
    title: string;
    category: string;
    description: string;
    cost: number;
    img: string;
}

export interface ICartItem {
    name: string,
    cost: number,
    date: string,
    description?: string;
    number?: number
}

export interface IMiniCardProps {
    product: Item;
    showInfo: () => void;
}

export interface IInfoCardProps {
    item: Item;
    addItemInCart: () => void;
}

export interface ICartProps {
    item: ICartItem,
    id: number,
    delete: (event) => void,
    needShow: boolean,
    showInfo: (event) => void
}