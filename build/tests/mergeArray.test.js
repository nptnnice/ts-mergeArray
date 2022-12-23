"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeArray_1 = require("../src/mergeArray");
describe("MergeTwoDistinctSortedArray", () => {
    it("should merge two arrays in ascending order", () => {
        const mergeArray = new mergeArray_1.MergeArray();
        const result = mergeArray.merge([-2, 2, 3, 5], [-1, 0, 4, 6]);
        expect(result).toEqual([-2, -1, 0, 2, 3, 4, 5, 6]);
    });
});
describe("MergeDuplicatedArray", () => {
    it("should have the same number for each two consecutive numbers", () => {
        const mergeArray = new mergeArray_1.MergeArray();
        const result = mergeArray.merge([1, 2, 3, 4], [1, 2, 3, 4]);
        expect(result).toEqual([1, 1, 2, 2, 3, 3, 4, 4]);
    });
});
describe("MergeOneArrayWithEmptyArray", () => {
    it("should remain the array that is not empty", () => {
        const mergeArray = new mergeArray_1.MergeArray();
        const result = mergeArray.merge([1, 2, 3, 4], []);
        expect(result).toEqual([1, 2, 3, 4]);
    });
});
describe("MergeTwoEmptyArray", () => {
    it("should remain empty", () => {
        const mergeArray = new mergeArray_1.MergeArray();
        const result = mergeArray.merge([], []);
        expect(result).toEqual([]);
    });
});
