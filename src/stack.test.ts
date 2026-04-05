import { describe, expect, test } from "bun:test";
import Stack from "./stack";

describe("Стек", () => {
  test("новий стек має бути порожнім", () => {
    const stack = new Stack<number>();
    expect(stack.isEmpty()).toBe(true);
  });

  test("стек не має бути порожнім після додавання елемента", () => {
    const stack = new Stack<number>();
    stack.push(10);

    expect(stack.isEmpty()).toBe(false);
  });

  test("стек має бути порожнім після додавання та видалення одного елемента", () => {
    const stack = new Stack<number>();
    stack.push(10);
    stack.pop();

    expect(stack.isEmpty()).toBe(true);
  });

  test("pop має повертати доданий елемент", () => {
    const stack = new Stack<number>();
    stack.push(42);

    expect(stack.pop()).toBe(42);
  });

  test("pop має повертати елементи у порядку LIFO", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  test("pop на порожньому стеку має повертати undefined", () => {
    const stack = new Stack<number>();

    expect(stack.pop()).toBeUndefined();
  });

  test("top має повертати останній доданий елемент", () => {
    const stack = new Stack<number>();
    stack.push(99);

    expect(stack.top()).toBe(99);
  });

  test("top не має видаляти елемент зі стека", () => {
    const stack = new Stack<number>();
    stack.push(99);

    expect(stack.top()).toBe(99);
    expect(stack.isEmpty()).toBe(false);
  });

  test("top має повертати останній доданий елемент, коли в стеку кілька елементів", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top()).toBe(3);
  });

  test("декілька викликів top мають повертати те саме значення і не змінювати стек", () => {
    const stack = new Stack<number>();
    stack.push(7);

    expect(stack.top()).toBe(7);
    expect(stack.top()).toBe(7);
    expect(stack.top()).toBe(7);
    expect(stack.isEmpty()).toBe(false);
  });

  test("top на порожньому стеку має повертати undefined", () => {
    const stack = new Stack<number>();

    expect(stack.top()).toBeUndefined();
  });

  test("стек має підтримувати значення null: push(null) робить стек не порожнім", () => {
    const stack = new Stack<null>();
    stack.push(null);

    expect(stack.isEmpty()).toBe(false);
  });

  test("стек має підтримувати значення null: pop повертає null", () => {
    const stack = new Stack<null>();
    stack.push(null);

    expect(stack.pop()).toBeNull();
  });

  test("стек має підтримувати значення null: top повертає null", () => {
    const stack = new Stack<null>();
    stack.push(null);

    expect(stack.top()).toBeNull();
  });

  test("top не має видаляти елемент, pop після top має повертати той самий елемент", () => {
    const stack = new Stack<string>();
    stack.push("hello");

    expect(stack.top()).toBe("hello");
    expect(stack.pop()).toBe("hello");
    expect(stack.isEmpty()).toBe(true);
  });

  test("стек має підтримувати об'єкти", () => {
    const stack = new Stack<{ id: number; name: string }>();
    const item = { id: 1, name: "test" };

    stack.push(item);

    expect(stack.top()).toEqual(item);
    expect(stack.pop()).toEqual(item);
  });
});
