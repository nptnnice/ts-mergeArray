"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeArray_1 = require("../src/mergeArray");
describe("MergeArray", () => {
    it("should merge two sorted arrays", () => {
        const mergeArray = new mergeArray_1.MergeArray();
        const result = mergeArray.merge([-2, 2, 3, 5], [-1, 0, 4, 6]);
        expect(result).toEqual([-2, -1, 0, 2, 3, 4, 5, 6]);
    });
});
