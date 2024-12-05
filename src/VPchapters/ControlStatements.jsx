import React from 'react'
import QuestDisplay from '../components/QuestDisplay';

const ControlStatements = () => {
    const questionArray = [
        {
            "question": "Which control statement in C# is best suited for executing a block of code a specific number of times?",
            "options": [
              "if",
              "switch",
              "for loop",
              "while loop"
            ],
            "correct": "for loop",
            "explain": "The `for loop` is designed for scenarios where the number of iterations is known before the loop starts."
          },
          {
            "question": "What is the output of the following code snippet if `x = 5` and `y = 3`? `if (x > y) Console.WriteLine('x is greater'); else Console.WriteLine('y is greater');`",
            "options": [
              "x is greater",
              "y is greater",
              "Error",
              "No output"
            ],
            "correct": "x is greater",
            "explain": "The `if` statement evaluates the condition `x > y`, which is true, so 'x is greater' is printed."
          },
          {
            "question": "Which loop is guaranteed to execute its body at least once, regardless of the condition?",
            "options": [
              "for loop",
              "while loop",
              "do-while loop",
              "foreach loop"
            ],
            "correct": "do-while loop",
            "explain": "The `do-while` loop executes its body at least once before checking the condition."
          },
          {
            "question": "What will be the output of the following code if `n = 10`? `switch(n) { case 10: Console.WriteLine('Ten'); break; default: Console.WriteLine('Not Ten'); }`",
            "options": [
              "Ten",
              "Not Ten",
              "Error",
              "No output"
            ],
            "correct": "Ten",
            "explain": "The `switch` statement matches the value `10` with `case 10`, thus 'Ten' is printed."
          },
          {
            "question": "Which control statement will cause the program to exit the innermost loop and continue execution with the next statement after the loop?",
            "options": [
              "break",
              "continue",
              "return",
              "goto"
            ],
            "correct": "break",
            "explain": "The `break` statement exits the innermost loop and continues execution after the loop."
          },
          {
            "question": "What is the result of the following code snippet when `i` is initialized to 0 and incremented inside the `for loop`? `for (int i = 0; i < 5; i++) { if (i == 3) continue; Console.Write(i + ' '); }`",
            "options": [
              "0 1 2 3 4",
              "0 1 2 4",
              "0 1 2",
              "1 2 3 4"
            ],
            "correct": "0 1 2 4",
            "explain": "The `continue` statement skips the current iteration when `i == 3`, so `3` is not printed."
          },
          {
            "question": "What is the key difference between an `if-else` ladder and a `switch` statement in terms of performance and readability?",
            "options": [
              "`if-else` ladders are faster than `switch` statements.",
              "`switch` statements are generally easier to read and can be faster with many cases.",
              "`if-else` ladders can handle complex conditions better than `switch` statements.",
              "`switch` statements require fewer lines of code than `if-else` ladders."
            ],
            "correct": "`switch` statements are generally easier to read and can be faster with many cases.",
            "explain": "`switch` statements are often preferred for multiple discrete values due to readability and potential performance advantages over `if-else` ladders."
          },
          {
            "question": "Which loop control statement can be used to skip the current iteration and proceed to the next iteration of a loop?",
            "options": [
              "break",
              "continue",
              "return",
              "exit"
            ],
            "correct": "continue",
            "explain": "The `continue` statement skips the current iteration of the loop and proceeds to the next iteration."
          }
    ];

    const subjective = [
      {
        "no": "1",
        "question": "Write a C# program to find the largest number among three numbers provided by the user using if-else ladder.",
        "answer": "using System;<br><br>class Program<br>{<br>    static void Main()<br>    {<br>        Console.Write(\"Enter the first number: \");<br>        int num1 = Convert.ToInt32(Console.ReadLine());<br>        Console.Write(\"Enter the second number: \");<br>        int num2 = Convert.ToInt32(Console.ReadLine());<br>        Console.Write(\"Enter the third number: \");<br>        int num3 = Convert.ToInt32(Console.ReadLine());<br><br>        if (num1 &gt; num2 && num1 &gt; num3)<br>        {<br>            Console.WriteLine(\"The largest number is \" + num1);<br>        }<br>        else if (num2 &gt; num1 && num2 &gt; num3)<br>        {<br>            Console.WriteLine(\"The largest number is \" + num2);<br>        }<br>        else<br>        {<br>            Console.WriteLine(\"The largest number is \" + num3);<br>        }<br>    }<br>}"
      },
      {
        "no": "2",
        "question": "Write a C# program to print the multiplication table from 5 to 10 using a for loop.",
        "answer": "using System;<br><br>class Program<br>{<br>    static void Main()<br>    {<br>        for (int i = 5; i &lt;= 10; i++)<br>        {<br>            Console.WriteLine(\"Multiplication table for \" + i);<br>            for (int j = 1; j &lt;= 10; j++)<br>            {<br>                Console.WriteLine(i + \" x \" + j + \" = \" + (i * j));<br>            }<br>            Console.WriteLine();<br>        }<br>    }<br>}"
      },
      {
        "no": "3",
        "question": "Write a C# program to find the sum of the first 'n' natural numbers given by the user.",
        "answer": "using System;<br><br>class Program<br>{<br>    static void Main()<br>    {<br>        Console.Write(\"Enter the number of natural numbers to sum: \");<br>        int n = Convert.ToInt32(Console.ReadLine());<br>        int sum = 0;<br><br>        for (int i = 1; i &lt;= n; i++)<br>        {<br>            sum += i;<br>        }<br><br>        Console.WriteLine(\"The sum of the first \" + n + \" natural numbers is \" + sum);<br>    }<br>}"
      }
    ];

  return (
    <div>
      <QuestDisplay title="Visual Programming - Control Statements" question={questionArray} subjective={subjective} sub="VP" />
    </div>
  )
}

export default ControlStatements
