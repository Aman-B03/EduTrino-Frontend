import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const WorkingDatabase = () => {

    const questionArray = [
        {
            "question": "Which C# class is commonly used to connect to a SQL database?",
            "options": [
              "SqlConnection",
              "SqlCommand",
              "SqlDataAdapter",
              "SqlDataReader"
            ],
            "correct": "SqlConnection",
            "explain": "The `SqlConnection` class is used to establish a connection to a SQL database in C#. It allows for interaction with the database through various operations."
          },
          {
            "question": "What must you do to safely execute a SQL command from a C# application?",
            "options": [
              "Use parameterized queries or stored procedures",
              "Directly concatenate user inputs into the SQL query",
              "Use simple string operations for SQL commands",
              "Manually escape special characters in SQL queries"
            ],
            "correct": "Use parameterized queries or stored procedures",
            "explain": "Using parameterized queries or stored procedures helps to prevent SQL injection attacks and ensures that user inputs are handled safely when executing SQL commands."
          },
          {
            "question": "How can you retrieve data from a database in a C# application?",
            "options": [
              "Using `SqlDataReader` to read data from a `SqlCommand` execution",
              "Directly using `SqlCommand` without a data reader",
              "By calling a stored procedure without data access",
              "Using `SqlConnection` to access raw data files"
            ],
            "correct": "Using `SqlDataReader` to read data from a `SqlCommand` execution",
            "explain": "The `SqlDataReader` class is used to retrieve data from a database after executing a `SqlCommand`. It provides a forward-only, read-only stream of data."
          },
          {
            "question": "Which of the following best describes a `DataSet` in C#?",
            "options": [
              "An in-memory representation of data retrieved from a database",
              "A class for executing SQL commands directly",
              "A tool for managing database connections",
              "A component for rendering user interface elements"
            ],
            "correct": "An in-memory representation of data retrieved from a database",
            "explain": "A `DataSet` in C# is an in-memory representation of data that can hold multiple tables and relationships, allowing for complex data manipulation and querying within the application."
          },
          {
            "question": "When writing data to a database in C#, which class is used to execute commands?",
            "options": [
              "SqlCommand",
              "SqlConnection",
              "SqlDataAdapter",
              "SqlDataReader"
            ],
            "correct": "SqlCommand",
            "explain": "The `SqlCommand` class is used to execute SQL queries or commands against a database. It allows for operations like inserting, updating, and deleting data."
          },
          {
            "question": "What is a recommended practice to handle database connection errors in C#?",
            "options": [
              "Use try-catch blocks to handle exceptions and ensure connections are properly closed",
              "Ignore exceptions and let the application fail",
              "Use global error handlers without specific connection error handling",
              "Retry the connection indefinitely without logging errors"
            ],
            "correct": "Use try-catch blocks to handle exceptions and ensure connections are properly closed",
            "explain": "Using try-catch blocks helps to handle database connection errors gracefully and ensures that resources like database connections are properly released."
          },
          {
            "question": "What is the primary advantage of using Entity Framework over traditional ADO.NET for database operations in C#?",
            "options": [
              "Entity Framework provides an abstraction layer that allows developers to work with objects instead of raw SQL queries.",
              "Entity Framework requires less memory and processing power.",
              "Entity Framework is directly compatible with all types of databases without additional configuration.",
              "Entity Framework does not require any setup or installation."
            ],
            "correct": "Entity Framework provides an abstraction layer that allows developers to work with objects instead of raw SQL queries.",
            "explain": "Entity Framework offers an Object-Relational Mapping (ORM) layer that abstracts the database interactions and allows developers to work with objects rather than raw SQL, which simplifies data manipulation and improves productivity."
          },
          {
            "question": "Which design pattern is commonly used in C# to manage database operations and maintain separation of concerns?",
            "options": [
              "Repository Pattern",
              "Singleton Pattern",
              "Decorator Pattern",
              "Factory Pattern"
            ],
            "correct": "Repository Pattern",
            "explain": "The Repository Pattern is used to manage database operations in a way that separates the data access logic from the business logic, making the code more maintainable and testable."
          }
    ];
    const subjective = [

    ];

  return (
    <div>
      <QuestDisplay title="Visual Programming - Working with Database" question={questionArray} subjective={subjective} sub="VP" />
    </div>
  )
}

export default WorkingDatabase
