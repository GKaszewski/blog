---
title: "Python - Variables"
description: ""
pubDate: "Apr 25 2021"
category: "Tutorial"
---

# Variables

## Set up

As I mentioned in the previous tutorial, we have to put our text that we want to print out in double-quotes otherwise, Python won't know what we mean.
In any programming language, there is something called a variable. A variable is something that holds some data.

## Writing code

For example, let's define a variable that will store a number of our fingers.

```python
fingers = 20
```

Now we have defined a new variable which we've called fingers and it stores number 20.
So in other words this is a variable of Integer type because it stores a number.
There are a lot of different types that a variable can store.

| Type    | Data                                                                                                                        |
| ------- | --------------------------------------------------------------------------------------------------------------------------- |
| int     | Integer numbers e.g 1, 2, 3, 10, 200                                                                                        |
| float   | Real numbers e.g 1.5, 0.49, 3.14                                                                                            |
| complex | Complex numbers                                                                                                             |
| str     | Text type e.g 'Hello', "Gabriel", "I love programming"                                                                      |
| bool    | Boolean type (in other words) True or False e.g True, False                                                                 |
| dict    | Dictionary type, can store key and its value e.g fruits_price = {'Orange': 100, 'Apple' : 50}                               |
| list    | With this type we can store multiple elements of the same type e.g names=['Anna', 'Sofie', 'Mike', 'Kate', 'Pedro', 'Juan'] |

We can also modify the values of variables. For example,
let's write a program that will ask the user how are they.

Create a file and rename it to _greetings.py_

```python
answer = ''
print('Hello, how are you?)
answer = input()
print('Good to hear that you are' + answer)
```

As you can see, we can assign value to a variable whenever we want.
Also, we can concatenate two texts with each other.
If we had two numbers, we could easily add, subtract, divide, and multiply them.

Let's write a simple calculator then. Actually it is going to be an adder because of simplicity.

Create a file and rename it to _adder.py_

```python
firstNumber, secondNumber, output = 0,0,0
print('Welcome to Adder!\nYour first number:')
firstNumber = input()
print('Second number:')
secondNumber = input()
output = firstNumber + secondNumber
print('The answer is: ', output)
```

## Running code

To run the first snippet run `python greetings.py`, for the second run `python adder.py`

## Explanation

It is time for an explanation. First of all, what does **input()** do?
The answer is that the **input()** command reads what user types or sends into the standard input device.
Because of it we can read and interpret data from outside.

What is **string concatenation**?
Concatenation is basically adding things with each other and **string concatenation** is adding multiple strings into one.

Why we can add something like that `print('Good to hear that you are' + answer)` but this `print('The answer is: ', output)` we do in a different way?
This is a great question!
As I said before python has types and it uses them to recognize what is what.
Okay, firstly I encourage you to try and experiment with those snippets and see the outcome yourself.
But if you are not interested in that, I'll tell you what would happen.

If we changed this line `print('Good to hear that you are' + answer)` into `print('Good to hear that you are', answer)`,
nothing would change. But if we changed `print('The answer is: ', output)` into `print('The answer is: ' + output)`,
the program would display something completely different.
For example if the first number was 11 and the second was 20 then
the displayed message would display **The answer is: 1120**. Interesting, huh?
But why is that?

As you can see **1120** is the same as **'11'**+**'20'** and not **11** + **20**.
Because we add to the string **'The answer is: '** a number,
what python actually does is that it converts **output** into a string and concatenate it.
But when we pass **output** after the comma, Python doesn't convert it into a string,
it just passes the data and **print()** displays that.
In the first scenario `print('Good to hear that you are', answer)` nothing changes
because **answer** is also a string so concatenation works the way we expect it.

## Homework

No homework for today 😊
