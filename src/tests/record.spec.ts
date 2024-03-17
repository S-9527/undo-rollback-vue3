import { it,expect,describe, beforeEach } from "vitest";
import {
    addRecord,
    getRollbackStack,
    getUndoStack,
    undoRecord,
    clearRecord,
    rollbackRecord
} from "../record.ts";

describe("record", () => {
    beforeEach(() => {
        clearRecord();
    })

    it("should add record", () => {
        addRecord(createCommand("a"));

        expect(getUndoStack().size()).toBe(1);
        expect(getUndoStack().peek().name).toBe("a");
    });

    it("should undo record", () => {
        addRecord(createCommand("a"));
        undoRecord();

        expect(getUndoStack().size()).toBe(0);
        expect(getRollbackStack().size()).toBe(1);
        expect(getRollbackStack().peek().name).toBe("a");
    })

    it('should not undo record when stack is empty', () => {
        addRecord(createCommand("a"));
        undoRecord();
        undoRecord();

        expect(getUndoStack().size()).toBe(0);
        expect(getRollbackStack().size()).toBe(1);
        expect(getRollbackStack().peek().name).toBe("a");
    });

    it('should rollback record', () => {
        addRecord(createCommand("a"));
        addRecord(createCommand("b"));
        undoRecord();

        rollbackRecord();

        expect(getUndoStack().size()).toBe(2);
        expect(getRollbackStack().size()).toBe(0);
    });

    it('should not rollback record when stack is empty', () => {
        addRecord(createCommand("a"));
        addRecord(createCommand("b"));
        undoRecord();

        rollbackRecord();
        rollbackRecord();

        expect(getUndoStack().size()).toBe(2);
        expect(getRollbackStack().size()).toBe(0);
    });
});

function createCommand(name: string) {
    return { name };
}