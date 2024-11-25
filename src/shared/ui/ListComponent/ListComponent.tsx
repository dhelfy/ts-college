import { ReactNode } from "react";
import React from "react";

interface ListComponent<T> {
    items: T[];
    renderItem: (item: T) => ReactNode
}

export function ListComponent<T>(props: ListComponent<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}