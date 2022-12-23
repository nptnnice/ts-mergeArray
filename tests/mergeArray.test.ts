import { MergeArray } from "../src/mergeArray";

describe("MergeArray", () => {
    it("can merge two arrays in ascending order when the two inputs are sorted arrays", () => {
        const mergeArray = new MergeArray();
        const result = mergeArray.merge([-2, 2, 3, 5], [-1, 0, 4, 6]);
        expect(result).toEqual([-2, -1, 0, 2, 3, 4, 5, 6]);
    });

    it("should have the same number for each two consecutive numbers when the two inputs are the same", () => {
        const mergeArray = new MergeArray();
        const result = mergeArray.merge([1, 2, 3, 4], [1, 2, 3, 4]);
        expect(result).toEqual([1, 1, 2, 2, 3, 3, 4, 4]);
    });

    it("should remain the array that is not empty when one of the inputs is an empty array", () => {
        const mergeArray = new MergeArray();
        const result = mergeArray.merge([1, 2, 3, 4], []);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it("should remain empty when the two inputs are empty arrays", () => {
        const mergeArray = new MergeArray();
        const result = mergeArray.merge([], []);
        expect(result).toEqual([]);
    });
}
);