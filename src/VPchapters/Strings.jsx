import React from 'react'
import QuestDisplay from '../components/QuestDisplay'
const Strings = () => {

    const questionArray = [
        {
            "question": "What will be the output of the following code snippet: `string str = \"Hello World!\"; Console.WriteLine(str.Substring(6, 5));`?",
            "options": [
              "Hello",
              "World",
              "World!",
              "Error: Index out of range"
            ],
            "correct": "World",
            "explain": "The `Substring` method extracts a substring starting from index 6 with a length of 5 characters, which gives 'World'."
          },
          {
            "question": "Which method would you use to remove all leading and trailing whitespace from a string?",
            "options": [
              "Trim()",
              "Remove()",
              "Replace()",
              "Split()"
            ],
            "correct": "Trim()",
            "explain": "The `Trim()` method removes all leading and trailing whitespace from a string."
          },
          {
            "question": "If you have a string `str = \"CSharp\";`, what will `str.ToUpper()` return?",
            "options": [
              "csharp",
              "CSharp",
              "CSHARP",
              "Error: ToUpper() not available"
            ],
            "correct": "CSHARP",
            "explain": "The `ToUpper()` method converts all characters in the string to uppercase."
          },
          {
            "question": "Which of the following methods can be used to determine if a string `str` starts with a specific substring?",
            "options": [
              "StartsWith()",
              "Contains()",
              "IndexOf()",
              "EndsWith()"
            ],
            "correct": "StartsWith()",
            "explain": "The `StartsWith()` method checks if the string starts with a specified substring."
          },
          {
            "question": "What does the `string.Format()` method do in C#?",
            "options": [
              "Formats strings by inserting variables into placeholders",
              "Splits a string into an array",
              "Concatenates two strings",
              "Reverses a string"
            ],
            "correct": "Formats strings by inserting variables into placeholders",
            "explain": "The `string.Format()` method formats strings by inserting the values of variables into placeholders."
          },
          {
            "question": "How can you concatenate two strings `str1` and `str2` efficiently in C#?",
            "options": [
              "Using the `+` operator",
              "Using the `Concat()` method",
              "Using the `Append()` method",
              "Using the `Combine()` method"
            ],
            "correct": "Using the `Concat()` method",
            "explain": "The `Concat()` method is a more efficient way to concatenate strings than using the `+` operator, especially in loops."
          },
          {
            "question": "What will be the result of the following code snippet if `str = \"Hello\"; str.Replace('l', 'x');`?",
            "options": [
              "Hexxo",
              "Hexxo",
              "Hello",
              "Error: Replace() method does not return a result"
            ],
            "correct": "Hexxo",
            "explain": "The `Replace()` method creates a new string with all occurrences of 'l' replaced by 'x'. The original string remains unchanged."
          },
          {
            "question": "Given `string str = \"   example   \";`, what will `str.Trim().Length` return?",
            "options": [
              "7",
              "11",
              "4",
              "Error: Length method not available"
            ],
            "correct": "7",
            "explain": "The `Trim()` method removes leading and trailing spaces, leaving 'example' with a length of 7."
          },
          {
            "question": "How do you convert a string `str` to a character array in C#?",
            "options": [
              "str.ToCharArray()",
              "str.ToArray()",
              "str.AsArray()",
              "str.Split('')"
            ],
            "correct": "str.ToCharArray()",
            "explain": "The `ToCharArray()` method converts a string into a character array."
          }
    ];
    const subjective = [
        {
            "no": "7",
            "question": "Write a C# program demonstrating the use of important string functions: `Substring`, `ToUpper`, `ToLower`, `Replace`, and `Trim`. Provide examples of each function in use.",
            "answer": "using System;<br><br>class Program<br>{<br>    static void Main()<br>    {<br>        string str = \"   Hello, C# World!   \";<br><br>        // Substring<br>        string substr = str.Substring(7, 2);<br>        Console.WriteLine(\"Substring (starting at index 7, length 2): \" + substr);<br><br>        // ToUpper<br>        string upperStr = str.ToUpper();<br>        Console.WriteLine(\"ToUpper: \" + upperStr);<br><br>        // ToLower<br>        string lowerStr = str.ToLower();<br>        Console.WriteLine(\"ToLower: \" + lowerStr);<br><br>        // Replace<br>        string replacedStr = str.Replace(\"World\", \"Universe\");<br>        Console.WriteLine(\"Replace 'World' with 'Universe': \" + replacedStr);<br><br>        // Trim<br>        string trimmedStr = str.Trim();<br>        Console.WriteLine(\"Trimmed string: \" + trimmedStr);<br>    }<br>}"
          },
    ];

  return (
    <div>
      <QuestDisplay title="Visual Programming - Strings" question={questionArray} subjective={subjective} sub="VP" />
    </div>
  )
}

export default Strings
