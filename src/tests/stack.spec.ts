import { describe, it, expect } from "vitest";
import { Stack } from "../stack.ts";

describe("stack", () => {
    it('should push', () => {
       const stack = new Stack();

       stack.push("a");

       expect(stack.size()).toBe(1);
       expect(stack.peek()).toBe("a");
    });

    it('should pop', () => {
        const stack = new Stack();

        stack.push("a");

        const val = stack.pop();

        expect(val).toBe("a");
        expect(stack.isEmpty()).toBe(true);
    });

    it('map', () => {
        const stack = new Stack();

        stack.push("a");
        stack.push("b");

        const result = stack.map((val) => {
            return val;
        });

        expect(result).toEqual(["a", "b"]);
    });

    it('clear', () => {
        const stack = new Stack();

        stack.push("a");
        stack.push("b");

        stack.clear();

        expect(stack.isEmpty()).toBe(true);
    });

})