import { MergeArray } from "../src/mergeArray";

describe("MergeArray", () => {
    it("should merge two sorted arrays", () => {
        const mergeArray = new MergeArray();
        const result = mergeArray.merge([-2, 2, 3, 5], [-1, 0, 4, 6]);
        expect(result).toEqual([-2, -1, 0, 2, 3, 4, 5, 6]);
    });
}
);