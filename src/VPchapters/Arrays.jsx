import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const Arrays = () => {

    const questionArray = [
        {
            "question": "What will be the output of the following code snippet if `arr` is an integer array initialized as `int[] arr = {1, 2, 3};`? `Console.WriteLine(arr[3]);`",
            "options": [
              "1",
              "2",
              "3",
              "Error: Index out of range"
            ],
            "correct": "Error: Index out of range",
            "explain": "Arrays in C# are zero-indexed, so accessing `arr[3]` is out of bounds for an array with only 3 elements."
          },
          {
            "question": "How can you declare a two-dimensional array in C# and initialize it with a 3x3 grid of numbers from 1 to 9?",
            "options": [
              "int[,] arr = new int[3, 3] { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };",
              "int[,] arr = new int[3, 3]; arr[0, 0] = 1; arr[0, 1] = 2; arr[0, 2] = 3; arr[1, 0] = 4; arr[1, 1] = 5; arr[1, 2] = 6; arr[2, 0] = 7; arr[2, 1] = 8; arr[2, 2] = 9;",
              "int[] arr = new int[9] {1, 2, 3, 4, 5, 6, 7, 8, 9};",
              "int[,] arr = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };"
            ],
            "correct": "int[,] arr = new int[3, 3] { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };",
            "explain": "This syntax correctly declares and initializes a two-dimensional array in C#."
          },
          {
            "question": "What is the primary difference between a jagged array and a multi-dimensional array in C#?",
            "options": [
              "A jagged array can have rows of varying lengths, while a multi-dimensional array requires all rows to be of the same length.",
              "A multi-dimensional array can have rows of varying lengths, while a jagged array cannot.",
              "Jagged arrays are always faster than multi-dimensional arrays.",
              "Multi-dimensional arrays are more flexible than jagged arrays."
            ],
            "correct": "A jagged array can have rows of varying lengths, while a multi-dimensional array requires all rows to be of the same length.",
            "explain": "Jagged arrays are arrays of arrays, which allows for different lengths for each row, whereas multi-dimensional arrays have a fixed size in each dimension."
          },
          {
            "question": "Which method from the `Array` class can be used to sort an array of integers in ascending order?",
            "options": [
              "Array.Sort()",
              "Array.Reverse()",
              "Array.Fill()",
              "Array.Clear()"
            ],
            "correct": "Array.Sort()",
            "explain": "The `Array.Sort()` method sorts the elements of an array in ascending order."
          },
          {
            "question": "How do you declare a parameter array in C# that allows a method to accept a variable number of arguments?",
            "options": [
              "public void MyMethod(params int[] numbers) {}",
              "public void MyMethod(int[]... numbers) {}",
              "public void MyMethod(int numbers) {}",
              "public void MyMethod(int numbers[]) {}"
            ],
            "correct": "public void MyMethod(params int[] numbers) {}",
            "explain": "The `params` keyword allows a method to accept a variable number of arguments as an array."
          },
          {
            "question": "What will the following code snippet print if `jaggedArr` is declared as `int[][] jaggedArr = new int[2][]; jaggedArr[0] = new int[] {1, 2}; jaggedArr[1] = new int[] {3, 4, 5};` and the statement is `Console.WriteLine(jaggedArr[1][1]);`?",
            "options": [
              "1",
              "2",
              "4",
              "5"
            ],
            "correct": "4",
            "explain": "In a jagged array, `jaggedArr[1][1]` accesses the second element of the second array, which is `4`."
          },
          {
            "question": "Which of the following statements correctly initializes a three-dimensional array of integers with a size of 2x3x4?",
            "options": [
              "int[,,] arr = new int[2, 3, 4];",
              "int[,,] arr = new int[2][3][4];",
              "int[][][] arr = new int[2][3][4];",
              "int[,,] arr = new int[2, 3];"
            ],
            "correct": "int[,,] arr = new int[2, 3, 4];",
            "explain": "The correct syntax for a three-dimensional array is `int[,,] arr = new int[2, 3, 4];`."
          },
          {
            "question": "In C#, which method can you use to find the length of the second dimension of a two-dimensional array named `matrix`?",
            "options": [
              "matrix.Length",
              "matrix.GetLength(0)",
              "matrix.GetLength(1)",
              "matrix[0].Length"
            ],
            "correct": "matrix.GetLength(1)",
            "explain": "The `GetLength()` method with an argument of `1` returns the size of the second dimension of the array."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "Write a C# program to find the matrix addition of user-given order and elements. Ensure to check if the matrices have the same dimensions before adding.",
            "answer": "using System;<br><br>class Program<br>{<br>    static void Main()<br>    {<br>        Console.Write(\"Enter the number of rows for Matrix 1: \");<br>        int rows1 = Convert.ToInt32(Console.ReadLine());<br>        Console.Write(\"Enter the number of columns for Matrix 1: \");<br>        int cols1 = Convert.ToInt32(Console.ReadLine());<br><br>        Console.Write(\"Enter the number of rows for Matrix 2: \");<br>        int rows2 = Convert.ToInt32(Console.ReadLine());<br>        Console.Write(\"Enter the number of columns for Matrix 2: \");<br>        int cols2 = Convert.ToInt32(Console.ReadLine());<br><br>        if (rows1 != rows2 || cols1 != cols2)<br>        {<br>            Console.WriteLine(\"Matrix addition is not possible. The dimensions must be the same.\");<br>            return;<br>        }<br><br>        int[,] matrix1 = new int[rows1, cols1];<br>        int[,] matrix2 = new int[rows2, cols2];<br>        int[,] result = new int[rows1, cols1];<br><br>        Console.WriteLine(\"Enter elements for Matrix 1:\");<br>        for (int i = 0; i &lt; rows1; i++)<br>        {<br>            for (int j = 0; j &lt; cols1; j++)<br>            {<br>                Console.Write(\"Element [{0},{1}]: \", i, j);<br>                matrix1[i, j] = Convert.ToInt32(Console.ReadLine());<br>            }<br>        }<br><br>        Console.WriteLine(\"Enter elements for Matrix 2:\");<br>        for (int i = 0; i &lt; rows2; i++)<br>        {<br>            for (int j = 0; j &lt; cols2; j++)<br>            {<br>                Console.Write(\"Element [{0},{1}]: \", i, j);<br>                matrix2[i, j] = Convert.ToInt32(Console.ReadLine());<br>            }<br>        }<br><br>        for (int i = 0; i &lt; rows1; i++)<br>        {<br>            for (int j = 0; j &lt; cols1; j++)<br>            {<br>                result[i, j] = matrix1[i, j] + matrix2[i, j];<br>            }<br>        }<br><br>        Console.WriteLine(\"Resultant Matrix:\");<br>        for (int i = 0; i &lt; rows1; i++)<br>        {<br>            for (int j = 0; j &lt; cols1; j++)<br>            {<br>                Console.Write(result[i, j] + \" \");<br>            }<br>            Console.WriteLine();<br>        }<br>    }<br>}"
          },
          {
            "no": "2",
            "question": "Write a C# program to find the matrix multiplication of user-given order and elements. Ensure to check if the matrices can be multiplied.",
            "answer": "using System;<br><br>class Program<br>{<br>    static void Main()<br>    {<br>        Console.Write(\"Enter the number of rows for Matrix 1: \");<br>        int rows1 = Convert.ToInt32(Console.ReadLine());<br>        Console.Write(\"Enter the number of columns for Matrix 1: \");<br>        int cols1 = Convert.ToInt32(Console.ReadLine());<br><br>        Console.Write(\"Enter the number of rows for Matrix 2: \");<br>        int rows2 = Convert.ToInt32(Console.ReadLine());<br>        Console.Write(\"Enter the number of columns for Matrix 2: \");<br>        int cols2 = Convert.ToInt32(Console.ReadLine());<br><br>        if (cols1 != rows2)<br>        {<br>            Console.WriteLine(\"Matrix multiplication is not possible. The number of columns of Matrix 1 must be equal to the number of rows of Matrix 2.\");<br>            return;<br>        }<br><br>        int[,] matrix1 = new int[rows1, cols1];<br>        int[,] matrix2 = new int[rows2, cols2];<br>        int[,] result = new int[rows1, cols2];<br><br>        Console.WriteLine(\"Enter elements for Matrix 1:\");<br>        for (int i = 0; i &lt; rows1; i++)<br>        {<br>            for (int j = 0; j &lt; cols1; j++)<br>            {<br>                Console.Write(\"Element [{0},{1}]: \", i, j);<br>                matrix1[i, j] = Convert.ToInt32(Console.ReadLine());<br>            }<br>        }<br><br>        Console.WriteLine(\"Enter elements for Matrix 2:\");<br>        for (int i = 0; i &lt; rows2; i++)<br>        {<br>            for (int j = 0; j &lt; cols2; j++)<br>            {<br>                Console.Write(\"Element [{0},{1}]: \", i, j);<br>                matrix2[i, j] = Convert.ToInt32(Console.ReadLine());<br>            }<br>        }<br><br>        for (int i = 0; i &lt; rows1; i++)<br>        {<br>            for (int j = 0; j &lt; cols2; j++)<br>            {<br>                result[i, j] = 0;<br>                for (int k = 0; k &lt; cols1; k++)<br>                {<br>                    result[i, j] += matrix1[i, k] * matrix2[k, j];<br>                }<br>            }<br>        }<br><br>        Console.WriteLine(\"Resultant Matrix:\");<br>        for (int i = 0; i &lt; rows1; i++)<br>        {<br>            for (int j = 0; j &lt; cols2; j++)<br>            {<br>                Console.Write(result[i, j] + \" \");<br>            }<br>            Console.WriteLine();<br>        }<br>    }<br>}"
          },
          {
            "no": "3",
            "question": "Create a C# program to demonstrate a simple example of a jagged array.",
            "answer": "using System;<br><br>class Program<br>{<br>    static void Main()<br>    {<br>        int[][] jaggedArray = new int[3][];<br><br>        jaggedArray[0] = new int[] { 1, 2, 3 };<br>        jaggedArray[1] = new int[] { 4, 5 };<br>        jaggedArray[2] = new int[] { 6, 7, 8, 9 };<br><br>        for (int i = 0; i &lt; jaggedArray.Length; i++)<br>        {<br>            Console.Write(\"Row \" + i + \": \");<br>            for (int j = 0; j &lt; jaggedArray[i].Length; j++)<br>            {<br>                Console.Write(jaggedArray[i][j] + \" \");<br>            }<br>            Console.WriteLine();<br>        }<br>    }<br>}"
        }
    ];

  return (
    <div>
      <QuestDisplay title="Visual Programming - Arrays" question={questionArray} subjective={subjective} sub="VP" />
    </div>
  )
}

export default Arrays
