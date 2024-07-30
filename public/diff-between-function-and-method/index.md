---
title: "What is the difference between Function and Method?"
date: '2024-07-30'
spoiler: "The difference you shouldn't know"
---
I am pretty sure that most engineers, especially freshers or those at intermediate levels, do not know the difference between a function and a method.

Back in my college days, we had a subject called "OOP,"and the main objective of this subject was to learn Object-Oriented Programming in C++. Before learning C++, I had some background in C, which is basically a Procedural Oriented Programming language.

I remember my professor who taught me OOP. He used to conduct viva sessions while checking the papers. My professor knew that I was well-versed in OOP concepts, so at first, he asked me basic questions, which I answered very well. But then he asked me, **"What is the difference between a function and a method?"** I was caught off guard by this question.

A function can have **no return type** and **no parameters**, and so can a method. A function can have **no return type** but can have **parameters**, and so can a method. A function can have a **return type** but **no parameters**, and so can a method. A function can have a **return type** as well as **parameters**, and so can a method.

For me, functions and methods seemed the same because all the properties a function has, a method also has. I couldn't answer the question and said there was no difference, believing both were the same. The professor then pointed out that there's a difference, which is why we have two distinct terms used interchangeably in programming. He deducted two marks because I couldn't answer the question correctly.

After the viva, I approached the professor and asked him the same question: *"What's the difference between a function and a method?"*

He answered:

> The difference is that a function is a standalone block of code that performs a specific task and can be called independently. A method is also a function, but it is associated with an object or class and can access and modify the object's attributes.

Simple, isn't it? Let's try to understand the differences more deeply using Python programming because it will help us to see the distinctions clearly.

### Function

* **Definition:** A function is a block of reusable code that performs a specific task
* **Usage:** Functions can be called independently, without being associated with any object
* **Scope:** Functions typically operate on their input parameters and can return a result

#### Example

```python
def add(a, b):
    return a + b

result = add(2, 3)  # result is 5
```

### Method

* **Definition:** A method is a function that is associated with an object or a class
* **Usage:** Methods are called on objects or instances of classes, and they can access and modify the object's attribute.
* **Scope:** Methods have an implicit first parameter, often called self in Python, which refers to the object calling the method.

#### Example

```python
class Calculator:
    def __init__(self):
        self.total = 0

    def add(self, a, b):
        self.total = a + b
        return self.total

calc = Calculator()
result = calc.add(2, 3)  # result is 5, and calc.total is now 5
```

### Key differences

* **Association:** Functions are not associated with any object, whereas methods are associated with an object (in the case of instance methods) or a class (in the case of class methods).
* **Context:** Methods have access to the object's state (attributes) and can modify it, while functions operate only on their input parameters and cannot directly modify an object's state.
* **Calling:** Functions are called independently, while methods are called on an object using dot notation (e.g., `object.method()`).

I'm glad that my professor asked me this question and deducted marks. Because of him, I now understand the exact difference between functions and methods, which has helped me to better understand other people's code.

### Summary

Understanding the difference between functions and methods is essential for writing efficient and maintainable code. Functions are independent and can be used anywhere, while methods are tied to objects or classes and can access and modify the object's state. By distinguishing these concepts, one can better structure their code and take full advantage of object-oriented programming principles.

### Related articles

* [Mastering SOLID Principles in Flutter](https://levelup.gitconnected.com/mastering-solid-principles-in-flutter-30cdaaa5475b)

Happy Coding 😄
