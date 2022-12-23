import { IArrayMerge } from "./IArrayMerge";

export class MergeArray implements IArrayMerge {
    merge(collection_1: number[], collection_2: number[]): number[] {
        const result: number[] = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while(leftIndex < collection_1.length && rightIndex < collection_2.length) {
            if(collection_1[leftIndex] < collection_2[rightIndex]) {
                result.push(collection_1[leftIndex]);
                leftIndex++;
            } else {
                result.push(collection_2[rightIndex]);
                rightIndex++;
            }
        }
        return [...result, ...collection_1.slice(leftIndex), ...collection_2.slice(rightIndex)]
    }
}