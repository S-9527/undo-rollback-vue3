import { describe, it, expect } from "vitest";
import { Stack } from "../core/stack.ts";

describe("stack", () => {
    it('should push', () => {
       const stack = new Stack();

       stack.push("a");

       expect(stack.size()).toBe(1);
       expect(stack.peek()).toBe("a");
    });

    it('should stack size is max', () => {
        const stack = new Stack();
        for (let i = 0; i < 6; i++) stack.push(i);

        stack.push("b");
        stack.push("c");

        expect(stack.size()).toBe(6);
        expect(stack.peek()).toBe("c");
        expect(stack.shift()).toBe(2);
    });

    it('should pop', () => {
        const stack = new Stack();

        stack.push("a");

        const val = stack.pop();

        expect(val).toBe("a");
        expect(stack.isEmpty()).toBe(true);
    });

    it('should shift', () => {
        const stack = new Stack();

        stack.push("a");

        const val = stack.shift();

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