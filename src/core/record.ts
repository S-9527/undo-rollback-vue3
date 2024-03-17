import { Stack } from "./stack.ts";

interface Command {
    name: string
}

const undoStack = new Stack<Command>();
const rollbackStack = new Stack<Command>();

export const addRecord = (command: Command) => {
    undoStack.push(command);
}

export const getUndoStack = () => {
    return undoStack;
}

export const getRollbackStack = () => {
    return rollbackStack;
}

export const clearRecord = () => {
    undoStack.clear();
    rollbackStack.clear();
}

export const undoRecord = () => {
    if (undoStack.isEmpty()) return;
    const command = undoStack.pop();
    rollbackStack.push(command!);
}

export const rollbackRecord = () => {
    if (rollbackStack.isEmpty()) return;
    const command = rollbackStack.pop();
    undoStack.push(command!);
}