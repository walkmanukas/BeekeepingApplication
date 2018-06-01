﻿import { Pipe } from "@angular/core";

@Pipe({
    name: "arraySort"
})
export class ArraySortPipe {

    transform(array: Array<any>, args: string): Array<any> {
        if (typeof args[0] === "undefined") {
            return array;
        }
        let direction = args[0][0];
        let column = args.replace('-', '');
        array.sort((a: any, b: any) => {
            let left = Number(new Date(a[column]));
            let right = Number(new Date(b[column]));
            return (direction === "-") ? left - right : right - left;
        });

        console.log(array);

        return array;
    }
}