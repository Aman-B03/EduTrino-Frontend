import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const Structures = () => {

    const questionArray = [
        {
            "question": "What is the primary difference between a class and a structure in C#?",
            "options": [
              "Classes are reference types, while structures are value types",
              "Structures support inheritance, while classes do not",
              "Classes cannot have constructors, while structures can",
              "Structures can implement interfaces, but classes cannot"
            ],
            "correct": "Classes are reference types, while structures are value types",
            "explain": "In C#, classes are reference types, meaning they are stored on the heap and passed by reference. Structures are value types, meaning they are stored on the stack and passed by value."
          },
          {
            "question": "What happens if you try to use a default constructor in a structure in C#?",
            "options": [
              "The compiler automatically provides a default constructor",
              "You must define your own constructor explicitly",
              "Structures cannot have constructors",
              "The structure will not compile"
            ],
            "correct": "The compiler automatically provides a default constructor",
            "explain": "C# structures have a parameterless default constructor provided by the compiler, which initializes all fields to their default values."
          },
          {
            "question": "Which of the following features is NOT supported by C# structures?",
            "options": [
              "Inheritance",
              "Default constructor",
              "Method overloading",
              "Field initialization"
            ],
            "correct": "Inheritance",
            "explain": "Structures in C# do not support inheritance, meaning they cannot inherit from other structures or classes."
          },
          {
            "question": "What is the correct way to define a structure in C#?",
            "options": [
              "struct MyStruct { public int x; public void MyMethod() { } }",
              "class MyStruct { public int x; public void MyMethod() { } }",
              "interface MyStruct { public int x; public void MyMethod(); }",
              "enum MyStruct { x, y, z }"
            ],
            "correct": "struct MyStruct { public int x; public void MyMethod() { } }",
            "explain": "Structures in C# are defined using the `struct` keyword, followed by the structure name and body."
          },
          {
            "question": "Can a structure in C# have a destructor?",
            "options": [
              "Yes, but it is rarely used",
              "No, structures cannot have destructors",
              "Yes, but only if it is a static structure",
              "Yes, but it must be declared as `virtual`"
            ],
            "correct": "No, structures cannot have destructors",
            "explain": "Structures in C# do not support destructors. Only classes can have destructors to clean up unmanaged resources."
          },
          {
            "question": "How are structures in C# typically passed to methods?",
            "options": [
              "By reference",
              "By value",
              "By pointer",
              "By default, cannot be passed"
            ],
            "correct": "By value",
            "explain": "Structures are value types and are passed by value to methods. This means a copy of the structure is made when it is passed."
          },
          {
            "question": "Which statement is true about the memory allocation of structures compared to classes in C#?",
            "options": [
              "Structures are allocated on the stack, while classes are allocated on the heap",
              "Both structures and classes are allocated on the heap",
              "Structures and classes are allocated on the stack",
              "Structures are allocated on the heap, while classes are allocated on the stack"
            ],
            "correct": "Structures are allocated on the stack, while classes are allocated on the heap",
            "explain": "Structures, being value types, are typically allocated on the stack, whereas classes, being reference types, are allocated on the heap."
          },
          {
            "question": "What is the default value of a field in a C# structure?",
            "options": [
              "0 for numeric types, false for bool, and null for reference types",
              "null for all types",
              "Undefined for numeric types and false for bool",
              "The same as a default class field"
            ],
            "correct": "0 for numeric types, false for bool, and null for reference types",
            "explain": "Fields in a C# structure are automatically initialized to their default values: 0 for numeric types, false for bool, and null for reference types."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "Write a C# program to define a structure `Employee` that holds employee details such as ID, Name, and Salary. The program should include methods to display employee details and calculate annual salary. Demonstrate how to use this structure.",
            "answer": "using System;<br><br>struct Employee<br>{<br>    public int ID;<br>    public string Name;<br>    public decimal Salary;<br><br>    // Method to display employee details<br>    public void DisplayDetails()<br>    {<br>        Console.WriteLine(\"ID: \" + ID);<br>        Console.WriteLine(\"Name: \" + Name);<br>        Console.WriteLine(\"Salary: \" + Salary);<br>    }<br><br>    // Method to calculate annual salary<br>    public decimal CalculateAnnualSalary()<br>    {<br>        return Salary * 12;<br>    }<br>}<br><br>class Program<br>{<br>    static void Main()<br>    {<br>        Employee emp = new Employee();<br>        emp.ID = 101;<br>        emp.Name = \"John Doe\";<br>        emp.Salary = 5000.00m;<br><br>        // Display employee details<br>        emp.DisplayDetails();<br><br>        // Calculate and display annual salary<br>        Console.WriteLine(\"Annual Salary: \" + emp.CalculateAnnualSalary());<br>    }<br>}"
          },
          {
            "no": "2",
            "question": "What are the key differences between a class and a structure in C#? Provide a comparison in a tabular format.",
            "answer": "<table style='border-collapse: collapse; width: 100%;'><tr><th style='border: 1px solid black; padding: 2px;'>Aspect</th><th style='border: 1px solid black; padding: 2px;'>Class</th><th style='border: 1px solid black; padding: 2px;'>Structure</th></tr><tr><td style='border: 1px solid black; padding: 2px;'>Type</td><td style='border: 1px solid black; padding: 2px;'>Reference type</td><td style='border: 1px solid black; padding: 2px;'>Value type</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Memory Allocation</td><td style='border: 1px solid black; padding: 2px;'>Allocated on the heap</td><td style='border: 1px solid black; padding: 2px;'>Allocated on the stack or inline in objects</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Default Constructor</td><td style='border: 1px solid black; padding: 2px;'>Can have a parameterless constructor</td><td style='border: 1px solid black; padding: 2px;'>Cannot have a parameterless constructor; always has a default constructor</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Inheritance</td><td style='border: 1px solid black; padding: 2px;'>Supports inheritance (can inherit from other classes)</td><td style='border: 1px solid black; padding: 2px;'>Does not support inheritance (cannot inherit from other structures or classes)</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Nullability</td><td style='border: 1px solid black; padding: 2px;'>Can be assigned null</td><td style='border: 1px solid black; padding: 2px;'>Cannot be assigned null unless used as a nullable type (e.g., Nullable<T>)</td></tr></table>"
          }
    ];

  return (
    <div>
      <QuestDisplay title="Visual Programming - Structures" question={questionArray} subjective={subjective} sub="VP" />
    </div>
  )
}

export default Structures
