import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const IntroCSharp = () => {

    const questionArray = [
        {
            "question": "Which feature of C#.NET allows for the creation of reusable code components?",
            "options": [
              "Inheritance",
              "Polymorphism",
              "Encapsulation",
              "All of the above"
            ],
            "correct": "All of the above",
            "explain": "C#.NET supports inheritance, polymorphism, and encapsulation, which together facilitate the creation of reusable and maintainable code components."
          },
          {
            "question": "What is the primary purpose of the `Main` method in a C# program?",
            "options": [
              "To declare global variables",
              "To define the entry point of the program",
              "To initialize the user interface",
              "To perform data type conversion"
            ],
            "correct": "To define the entry point of the program",
            "explain": "The `Main` method is the entry point of a C# application. It is where the program begins execution."
          },
          {
            "question": "Which of the following is a valid identifier in C#?",
            "options": [
              "3variable",
              "variable_3",
              "variable@3",
              "3variable@"
            ],
            "correct": "variable_3",
            "explain": "In C#, identifiers must start with a letter or underscore, followed by letters, digits, or underscores. 'variable_3' is a valid identifier."
          },
          {
            "question": "Which keyword in C# is used to define a constant value?",
            "options": [
              "const",
              "static",
              "readonly",
              "immutable"
            ],
            "correct": "const",
            "explain": "The `const` keyword is used to define constants whose values cannot be changed once assigned."
          },
          {
            "question": "What is the output of the following code snippet: `Console.WriteLine(10 / 4);`?",
            "options": [
              "2.5",
              "2",
              "2.0",
              "0"
            ],
            "correct": "2",
            "explain": "In C#, when both operands of division are integers, the result is also an integer. Thus, `10 / 4` results in `2`."
          },
          {
            "question": "Which of the following C# data types can store decimal values with precision?",
            "options": [
              "int",
              "float",
              "double",
              "decimal"
            ],
            "correct": "decimal",
            "explain": "The `decimal` data type is used for high-precision decimal values, such as financial calculations, where precision is crucial."
          },
          {
            "question": "In C#, what does the `var` keyword represent?",
            "options": [
              "A variable with a specific data type",
              "A variable with an automatically inferred data type",
              "A constant variable",
              "A variable with no data type"
            ],
            "correct": "A variable with an automatically inferred data type",
            "explain": "The `var` keyword allows the compiler to infer the type of the variable based on the assigned value."
          },
          {
            "question": "What is the result of the following operation: `10 % 3` in C#?",
            "options": [
              "1",
              "3",
              "10",
              "0"
            ],
            "correct": "1",
            "explain": "The `%` operator computes the remainder of the division. Thus, `10 % 3` results in `1`."
          },
          {
            "question": "Which C# operator is used for logical negation?",
            "options": [
              "!",
              "&&",
              "||",
              "=="
            ],
            "correct": "!",
            "explain": "The `!` operator is used for logical negation, flipping the Boolean value to its opposite."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "Provide an example of a simple C# program demonstrating the use of variables, data types, and operators.",
            "answer": "<div style='background-color: black; color: green; padding: 10px;'><pre><code>using System;<br><br>class Program<br>{<br>    static void Main()<br>    {<br>        int num1 = 10;<br>        int num2 = 5;<br>        int sum = num1 + num2;<br>        Console.WriteLine(\"The sum of \" + num1 + \" and \" + num2 + \" is \" + sum);<br>    }<br>}</code></pre></div>"
          },
          
          {
            "no": "2",
            "question": "Write a C# program that demonstrates type conversion between integers and floats.",
            "answer": "<div style='background-color: black; color: green; padding: 10px;'><pre><code>using System;<br><br>class Program<br>{<br>    static void Main()<br>    {<br>        int intValue = 10;<br>        float floatValue = (float)intValue; // Type conversion from int to float<br>        Console.WriteLine(\"Integer value: \" + intValue);<br>        Console.WriteLine(\"Converted float value: \" + floatValue);<br>    }<br>}</code></pre></div>"
          },
          
          {
            "no": "3",
            "question": "Create a C# program to calculate simple interest based on user input.",
            "answer": "<div style='background-color: black; color: green; padding: 10px;'><pre><code>using System;<br><br>class Program<br>{<br>    static void Main()<br>    {<br>        Console.Write(\"Enter the principal amount: \");<br>        double principal = Convert.ToDouble(Console.ReadLine());<br><br>        Console.Write(\"Enter the rate of interest (in %): \");<br>        double rate = Convert.ToDouble(Console.ReadLine());<br><br>        Console.Write(\"Enter the time period (in years): \");<br>        int time = Convert.ToInt32(Console.ReadLine());<br><br>        double simpleInterest = (principal * rate * time) / 100; // Simple Interest formula<br>        Console.WriteLine(\"The simple interest is: \" + simpleInterest);<br>    }<br>}</code></pre></div>"
          }
    ];

  return (
    <div>
      <QuestDisplay title="Visual Programming - Introduction to C Sharp dot NET" question={questionArray} subjective={subjective} sub="VP" />
    </div>
  )
}

export default IntroCSharp
