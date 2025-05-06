const fs = require('fs');
const path = require('path');

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
  console.log('Created data directory');
}

// Users data
const users = [
  {
    "id": 1,
    "name": "Rakib Khan",
    "email": "rakib@example.com",
    "role": "student",
    "status": "active",
    "avatar": "/placeholder.svg?key=88b3y",
    "createdAt": "2023-05-04T10:30:00Z"
  },
  {
    "id": 2,
    "name": "Farida Ahmed",
    "email": "farida@example.com",
    "role": "student",
    "status": "active",
    "avatar": "/placeholder.svg?key=vmcfo",
    "createdAt": "2023-04-18T14:20:00Z"
  },
  {
    "id": 3,
    "name": "Mohammed Ali",
    "email": "mohammed@example.com",
    "role": "admin",
    "status": "active",
    "avatar": "/placeholder.svg?key=ohuce",
    "createdAt": "2023-03-15T09:45:00Z"
  },
  {
    "id": 4,
    "name": "Sabrina Rahman",
    "email": "sabrina@example.com",
    "role": "student",
    "status": "inactive",
    "avatar": "/placeholder.svg?key=r5g7r",
    "createdAt": "2023-02-22T11:10:00Z"
  },
  {
    "id": 5,
    "name": "Mahmud Hasan",
    "email": "mahmud@example.com",
    "role": "student",
    "status": "active",
    "avatar": "/placeholder.svg?key=v24o4",
    "createdAt": "2023-02-10T16:30:00Z"
  },
  {
    "id": 6,
    "name": "Tania Akter",
    "email": "tania@example.com",
    "role": "student",
    "status": "active",
    "avatar": "/placeholder.svg?key=fh3sc",
    "createdAt": "2023-01-05T13:15:00Z"
  }
];

// Courses data
const courses = [
  {
    "id": 1,
    "title": "JavaScript Fundamentals",
    "description": "Master the basics of JavaScript programming",
    "level": "beginner",
    "image": "/placeholder.svg?key=cyhea",
    "modules": [
      {
        "id": 1,
        "title": "Introduction to JavaScript",
        "lessons": [
          {
            "id": 1,
            "title": "What is JavaScript?",
            "duration": "10 minutes"
          },
          {
            "id": 2,
            "title": "Setting Up Your Development Environment",
            "duration": "15 minutes"
          },
          {
            "id": 3,
            "title": "Your First JavaScript Program",
            "duration": "20 minutes"
          }
        ]
      },
      {
        "id": 2,
        "title": "Variables & Data Types",
        "lessons": [
          {
            "id": 4,
            "title": "Variables and Constants",
            "duration": "15 minutes"
          },
          {
            "id": 5,
            "title": "Primitive Data Types",
            "duration": "20 minutes"
          },
          {
            "id": 6,
            "title": "Working with Strings",
            "duration": "25 minutes"
          }
        ]
      },
      {
        "id": 3,
        "title": "Operators & Expressions",
        "lessons": [
          {
            "id": 7,
            "title": "Arithmetic Operators",
            "duration": "15 minutes"
          },
          {
            "id": 8,
            "title": "Comparison Operators",
            "duration": "15 minutes"
          },
          {
            "id": 9,
            "title": "Logical Operators",
            "duration": "15 minutes"
          }
        ]
      }
    ],
    "totalLessons": 20,
    "totalStudents": 458,
    "createdAt": "2023-01-10T08:00:00Z"
  },
  {
    "id": 2,
    "title": "Advanced JavaScript",
    "description": "Dive deeper into advanced JavaScript concepts",
    "level": "intermediate",
    "image": "/placeholder.svg?key=ta6ec",
    "modules": [
      {
        "id": 1,
        "title": "DOM Manipulation",
        "lessons": [
          {
            "id": 1,
            "title": "Understanding the DOM",
            "duration": "20 minutes"
          },
          {
            "id": 2,
            "title": "Selecting DOM Elements",
            "duration": "25 minutes"
          },
          {
            "id": 3,
            "title": "Modifying DOM Elements",
            "duration": "30 minutes"
          }
        ]
      },
      {
        "id": 2,
        "title": "Event Handling",
        "lessons": [
          {
            "id": 4,
            "title": "Introduction to Events",
            "duration": "15 minutes"
          },
          {
            "id": 5,
            "title": "Event Listeners",
            "duration": "25 minutes"
          },
          {
            "id": 6,
            "title": "Event Bubbling and Capturing",
            "duration": "30 minutes"
          }
        ]
      },
      {
        "id": 3,
        "title": "Async JavaScript",
        "lessons": [
          {
            "id": 7,
            "title": "Callbacks",
            "duration": "20 minutes"
          },
          {
            "id": 8,
            "title": "Promises",
            "duration": "30 minutes"
          },
          {
            "id": 9,
            "title": "Async/Await",
            "duration": "35 minutes"
          }
        ]
      }
    ],
    "totalLessons": 18,
    "totalStudents": 276,
    "createdAt": "2023-02-15T09:30:00Z"
  },
  {
    "id": 3,
    "title": "React.js Fundamentals",
    "description": "Learn the basics of React.js frontend framework",
    "level": "intermediate",
    "image": "/placeholder.svg?key=vyg4r",
    "modules": [
      {
        "id": 1,
        "title": "Introduction to React",
        "lessons": [
          {
            "id": 1,
            "title": "What is React?",
            "duration": "15 minutes"
          },
          {
            "id": 2,
            "title": "Setting Up React Environment",
            "duration": "25 minutes"
          },
          {
            "id": 3,
            "title": "Your First React Component",
            "duration": "30 minutes"
          }
        ]
      },
      {
        "id": 2,
        "title": "React Components",
        "lessons": [
          {
            "id": 4,
            "title": "Functional Components",
            "duration": "20 minutes"
          },
          {
            "id": 5,
            "title": "Class Components",
            "duration": "25 minutes"
          },
          {
            "id": 6,
            "title": "Props and State",
            "duration": "35 minutes"
          }
        ]
      },
      {
        "id": 3,
        "title": "React Hooks",
        "lessons": [
          {
            "id": 7,
            "title": "useState Hook",
            "duration": "25 minutes"
          },
          {
            "id": 8,
            "title": "useEffect Hook",
            "duration": "30 minutes"
          },
          {
            "id": 9,
            "title": "Custom Hooks",
            "duration": "35 minutes"
          }
        ]
      }
    ],
    "totalLessons": 16,
    "totalStudents": 312,
    "createdAt": "2023-03-20T10:15:00Z"
  }
];

// Blog data
const blog = [
  {
    "id": 1,
    "title": "Getting Started with JavaScript: A Complete Guide",
    "excerpt": "This comprehensive guide will help beginners to start their journey in JavaScript programming with simple, step-by-step instructions.",
    "content": "JavaScript is one of the most popular programming languages in the world, powering the interactive elements of websites and web applications. For students looking to enter the world of web development, JavaScript is an essential skill to learn.\n\nIn this guide, we'll walk through the basics of JavaScript in simple English, making it accessible for students who are just starting their programming journey.\n\n## What is JavaScript?\n\nJavaScript is a programming language that allows you to implement complex features on web pages. It's what makes websites interactive and dynamic. When you click a button and something happens on the page, that's likely JavaScript in action.\n\n## Setting Up Your Development Environment\n\nTo start coding in JavaScript, you don't need any special software. All you need is:\n\n1. A text editor (like VS Code, Sublime Text, or even Notepad)\n2. A web browser (like Chrome, Firefox, or Edge)\n\n## Your First JavaScript Program\n\nLet's write a simple 'Hello, World!' program:\n\n```javascript\nconsole.log('Hello, World!');\n```\n\nYou can run this by opening your browser's developer console (usually by pressing F12) and typing this code.\n\n## Next Steps\n\nNow that you've written your first JavaScript program, you're ready to learn about variables, data types, and more complex programming concepts. Stay tuned for our next article in this series!",
    "author": {
      "id": 3,
      "name": "Mohammed Ali"
    },
    "category": "Tutorials",
    "tags": ["beginner", "introduction", "basics"],
    "image": "/placeholder.svg?key=w8q0y",
    "readTime": "10 min read",
    "publishedAt": "2023-05-05T09:00:00Z",
    "status": "published"
  },
  {
    "id": 2,
    "title": "Understanding JavaScript Variables and Data Types",
    "excerpt": "Learn about variables, constants, and the different data types available in JavaScript with practical examples.",
    "content": "Variables are one of the fundamental concepts in any programming language, including JavaScript. They allow us to store and manipulate data in our programs.\n\n## What are Variables?\n\nVariables are containers for storing data values. In JavaScript, we declare variables using the `let`, `const`, or `var` keywords.\n\n```javascript\nlet name = 'Rakib';\nconst age = 25;\nvar isStudent = true;\n```\n\n- `let` is used for variables that can change later\n- `const` is used for variables that should not change (constants)\n- `var` is the older way of declaring variables (less commonly used now)\n\n## Data Types in JavaScript\n\nJavaScript has several data types:\n\n### 1. Primitive Data Types\n\n- **String**: Text values like 'Hello' or \"World\"\n- **Number**: Numeric values like 42 or 3.14\n- **Boolean**: true or false values\n- **Undefined**: A variable that has been declared but not assigned a value\n- **Null**: Represents the intentional absence of any value\n- **Symbol**: Unique and immutable values (introduced in ES6)\n- **BigInt**: For very large integers (introduced in ES2020)\n\n### 2. Reference Data Types\n\n- **Object**: Collections of related data\n- **Array**: Ordered collections of values\n- **Function**: Reusable blocks of code\n\n## Examples\n\n```javascript\n// Strings\nlet country = 'United States';\nlet capital = \"Washington D.C.\";\n\n// Numbers\nlet population = 331.9; // in millions\nlet area = 9834000; // in square kilometers\n\n// Boolean\nlet isIndependent = true;\n\n// Array\nlet majorCities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];\n\n// Object\nlet countryInfo = {\n  country: 'United States',\n  capital: 'Washington D.C.',\n  population: 331.9,\n  language: 'English',\n  currency: 'USD'\n};\n```\n\nUnderstanding variables and data types is essential for writing effective JavaScript code. In our next article, we'll explore operators and expressions in JavaScript.",
    "author": {
      "id": 3,
      "name": "Mohammed Ali"
    },
    "category": "Tutorials",
    "tags": ["variables", "data types", "basics"],
    "image": "/placeholder.svg?key=x9toj",
    "readTime": "5 min read",
    "publishedAt": "2023-04-28T10:30:00Z",
    "status": "published"
  },
  {
    "id": 3,
    "title": "Building Your First JavaScript Function",
    "excerpt": "A step-by-step guide to creating and using functions in JavaScript, with explanations of parameters, return values, and scope.",
    "content": "Functions are one of the most powerful features in JavaScript. They allow you to write reusable blocks of code that can be called whenever needed.\n\n## What is a Function?\n\nA function is a block of code designed to perform a particular task. It's executed when it's called or invoked.\n\n## Declaring Functions\n\nThere are several ways to declare functions in JavaScript:\n\n### 1. Function Declaration\n\n```javascript\nfunction greet() {\n  console.log('Hello, World!');\n}\n\n// Call the function\ngreet(); // Outputs: Hello, World!\n```\n\n### 2. Function Expression\n\n```javascript\nconst greet = function() {\n  console.log('Hello, World!');\n};\n\n// Call the function\ngreet(); // Outputs: Hello, World!\n```\n\n### 3. Arrow Function (ES6)\n\n```javascript\nconst greet = () => {\n  console.log('Hello, World!');\n};\n\n// Call the function\ngreet(); // Outputs: Hello, World!\n```\n\n## Parameters and Arguments\n\nFunctions can take inputs, called parameters, and use them inside the function body.\n\n```javascript\nfunction greetPerson(name) {\n  console.log('Hello, ' + name + '!');\n}\n\n// Call the function with an argument\ngreetPerson('John'); // Outputs: Hello, John!\n```\n\nYou can have multiple parameters:\n\n```javascript\nfunction addNumbers(a, b) {\n  console.log(a + b);\n}\n\naddNumbers(5, 3); // Outputs: 8\n```\n\n## Return Values\n\nFunctions can return values using the `return` statement:\n\n```javascript\nfunction multiply(a, b) {\n  return a * b;\n}\n\nconst result = multiply(4, 5);\nconsole.log(result); // Outputs: 20\n```\n\n## Function Scope\n\nVariables declared inside a function are only accessible within that function (local scope):\n\n```javascript\nfunction showMessage() {\n  let message = 'Hello, local scope!';\n  console.log(message);\n}\n\nshowMessage(); // Outputs: Hello, local scope!\n// console.log(message); // Error: message is not defined\n```\n\n## Practical Example: Temperature Converter\n\nLet's create a function that converts Celsius to Fahrenheit:\n\n```javascript\nfunction celsiusToFahrenheit(celsius) {\n  return (celsius * 9/5) + 32;\n}\n\nconst tempC = 30;\nconst tempF = celsiusToFahrenheit(tempC);\nconsole.log(`The temperature is ${tempC}°C or ${tempF}°F`);\n// Outputs: The temperature is 30°C or 86°F\n```\n\nFunctions are essential for writing clean, maintainable, and reusable code. As you continue your JavaScript journey, you'll find yourself using functions extensively in your projects.",
    "author": {
      "id": 2,
      "name": "Farida Ahmed"
    },
    "category": "Tutorials",
    "tags": ["functions", "basics", "parameters"],
    "image": "/placeholder.svg?key=1qid3",
    "readTime": "7 min read",
    "publishedAt": "2023-04-23T11:45:00Z",
    "status": "published"
  },
  {
    "id": 4,
    "title": "DOM Manipulation Basics for Beginners",
    "excerpt": "Learn how to interact with the HTML Document Object Model (DOM) using JavaScript to create dynamic web pages.",
    "content": "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. In simpler terms, the DOM is a tree-like representation of a web page that JavaScript can manipulate.\n\n## What is the DOM?\n\nWhen a web page is loaded, the browser creates a Document Object Model of the page. This model allows JavaScript to access and manipulate the elements and content of a web page.\n\n## Selecting DOM Elements\n\nBefore you can manipulate elements, you need to select them. JavaScript provides several methods to select elements:\n\n### 1. getElementById\n\nSelects an element by its ID attribute:\n\n```javascript\nconst header = document.getElementById('main-header');\n```\n\n### 2. getElementsByClassName\n\nSelects elements by their class name:\n\n```javascript\nconst items = document.getElementsByClassName('item');\n```\n\n### 3. getElementsByTagName\n\nSelects elements by their tag name:\n\n```javascript\nconst paragraphs = document.getElementsByTagName('p');\n```\n\n### 4. querySelector\n\nSelects the first element that matches a CSS selector:\n\n```javascript\nconst firstButton = document.querySelector('button');\nconst loginForm = document.querySelector('#login-form');\nconst navItem = document.querySelector('.nav-item');\n```\n\n### 5. querySelectorAll\n\nSelects all elements that match a CSS selector:\n\n```javascript\nconst allButtons = document.querySelectorAll('button');\nconst navItems = document.querySelectorAll('.nav-item');\n```\n\n## Modifying DOM Elements\n\nOnce you've selected elements, you can modify them in various ways:\n\n### 1. Changing Text Content\n\n```javascript\nconst header = document.getElementById('main-header');\nheader.textContent = 'New Header Text';\n// or\nheader.innerHTML = 'New <span>Header</span> Text';\n```\n\n### 2. Changing Attributes\n\n```javascript\nconst link = document.querySelector('a');\nlink.setAttribute('href', 'https://example.com');\n// or directly\nlink.href = 'https://example.com';\n```\n\n### 3. Changing Styles\n\n```javascript\nconst paragraph = document.querySelector('p');\nparagraph.style.color = 'blue';\nparagraph.style.fontSize = '18px';\nparagraph.style.fontWeight = 'bold';\n```\n\n### 4. Adding and Removing Classes\n\n```javascript\nconst element = document.querySelector('.my-element');\n\n// Add a class\nelement.classList.add('active');\n\n// Remove a class\nelement.classList.remove('inactive');\n\n// Toggle a class\nelement.classList.toggle('visible');\n\n// Check if element has a class\nif (element.classList.contains('active')) {\n  console.log('Element is active');\n}\n```\n\n## Creating and Removing Elements\n\n### 1. Creating Elements\n\n```javascript\n// Create a new element\nconst newParagraph = document.createElement('p');\n\n// Add content to it\nnewParagraph.textContent = 'This is a new paragraph.';\n\n// Add it to the DOM\ndocument.body.appendChild(newParagraph);\n```\n\n### 2. Removing Elements\n\n```javascript\nconst elementToRemove = document.querySelector('.remove-me');\nelementToRemove.remove();\n\n// Or using the parent\nconst parent = document.querySelector('.parent');\nconst child = document.querySelector('.child');\nparent.removeChild(child);\n```\n\n## Practical Example: Dynamic List\n\nLet's create a simple to-do list application:\n\n```html\n<div id=\"todo-app\">\n  <input type=\"text\" id=\"todo-input\" placeholder=\"Add a new task\">\n  <button id=\"add-button\">Add</button>\n  <ul id=\"todo-list\"></ul>\n</div>\n```\n\n```javascript\n// Get references to DOM elements\nconst todoInput = document.getElementById('todo-input');\nconst addButton = document.getElementById('add-button');\nconst todoList = document.getElementById('todo-list');\n\n// Add event listener to the button\naddButton.addEventListener('click', function() {\n  // Get the input value\n  const taskText = todoInput.value.trim();\n  \n  // Check if input is not empty\n  if (taskText !== '') {\n    // Create a new list item\n    const newTask = document.createElement('li');\n    newTask.textContent = taskText;\n    \n    // Add the new task to the list\n    todoList.appendChild(newTask);\n    \n    // Clear the input field\n    todoInput.value = '';\n    \n    // Focus back on the input\n    todoInput.focus();\n  }\n});\n```\n\nDOM manipulation is a fundamental skill for web development. With these basics, you can start creating dynamic and interactive web pages using JavaScript.",
    "author": {
      "id": 1,
      "name": "Rakib Khan"
    },
    "category": "Tutorials",
    "tags": ["DOM", "web development", "intermediate"],
    "image": "/placeholder.svg?key=mb8pv",
    "readTime": "8 min read",
    "publishedAt": "2023-04-18T14:20:00Z",
    "status": "published"
  },
  {
    "id": 5,
    "title": "Introduction to ES6 Features",
    "excerpt": "Explore the modern features introduced in ECMAScript 2015 (ES6) that make JavaScript coding more efficient and powerful.",
    "content": "ECMAScript 2015, also known as ES6, introduced significant improvements to the JavaScript language. These features have transformed how we write JavaScript code, making it more readable, maintainable, and powerful.\n\n## Let and Const\n\nBefore ES6, variables were declared using `var`. ES6 introduced `let` and `const` for block-scoped variable declarations:\n\n```javascript\n// let - can be reassigned\nlet name = 'John';\nname = 'Jane'; // This works\n\n// const - cannot be reassigned\nconst PI = 3.14159;\n// PI = 3.14; // This would cause an error\n```\n\n## Arrow Functions\n\nArrow functions provide a shorter syntax for writing functions and don't have their own `this` context:\n\n```javascript\n// Traditional function\nfunction add(a, b) {\n  return a + b;\n}\n\n// Arrow function\nconst add = (a, b) => a + b;\n\n// With multiple statements\nconst greet = (name) => {\n  const message = `Hello, ${name}!`;\n  return message;\n};\n```\n\n## Template Literals\n\nTemplate literals allow for easier string interpolation and multiline strings:\n\n```javascript\nconst name = 'World';\nconst year = 2023;\n\n// String interpolation\nconst message = `Hello, ${name}! Welcome to ${year}.`;\n\n// Multiline strings\nconst multiline = `This is line one\nThis is line two\nThis is line three`;\n```\n\n## Destructuring Assignment\n\nDestructuring allows you to extract values from arrays or objects into distinct variables:\n\n```javascript\n// Array destructuring\nconst colors = ['red', 'green', 'blue'];\nconst [first, second, third] = colors;\nconsole.log(first); // 'red'\n\n// Object destructuring\nconst person = {\n  name: 'John',\n  age: 30,\n  city: 'New York'\n};\nconst { name, age, city } = person;\nconsole.log(name); // 'John'\n```\n\n## Default Parameters\n\nYou can now set default values for function parameters:\n\n```javascript\nfunction greet(name = 'Guest') {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet()); // 'Hello, Guest!'\nconsole.log(greet('John')); // 'Hello, John!'\n```\n\n## Rest and Spread Operators\n\nThe `...` syntax can be used as rest or spread operator:\n\n```javascript\n// Rest operator in functions\nfunction sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // 10\n\n// Spread operator with arrays\nconst fruits = ['apple', 'banana'];\nconst moreFruits = ['orange', ...fruits, 'mango'];\nconsole.log(moreFruits); // ['orange', 'apple', 'banana', 'mango']\n\n// Spread operator with objects\nconst basicInfo = { name: 'John', age: 30 };\nconst fullInfo = {\n  ...basicInfo,\n  city: 'New York',\n  occupation: 'Developer'\n};\n```\n\n## Classes\n\nES6 introduced a cleaner syntax for creating classes and working with inheritance:\n\n```javascript\nclass Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  greet() {\n    return `Hello, my name is ${this.name}`;\n  }\n}\n\nclass Student extends Person {\n  constructor(name, age, grade) {\n    super(name, age);\n    this.grade = grade;\n  }\n  \n  study() {\n    return `${this.name} is studying`;\n  }\n}\n\nconst student = new Student('John', 20, 'A');\nconsole.log(student.greet()); // 'Hello, my name is John'\nconsole.log(student.study()); // 'John is studying'\n```\n\n## Modules\n\nES6 introduced a standardized module system for JavaScript:\n\n```javascript\n// math.js\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\n\n// main.js\nimport { add, subtract } from './math.js';\nconsole.log(add(5, 3)); // 8\n```\n\n## Promises\n\nPromises provide a cleaner way to work with asynchronous operations:\n\n```javascript\nconst fetchData = () => {\n  return new Promise((resolve, reject) => {\n    // Simulating an API call\n    setTimeout(() => {\n      const data = { name: 'John', age: 30 };\n      if (data) {\n        resolve(data);\n      } else {\n        reject('Error fetching data');\n      }\n    }, 2000);\n  });\n};\n\nfetchData()\n  .then(data => console.log(data))\n  .catch(error => console.error(error));\n```\n\nThese ES6 features have significantly improved JavaScript development, making code more concise, readable, and maintainable. As you continue your JavaScript journey, mastering these features will help you write more efficient and modern code.",
    "author": {
      "id": 3,
      "name": "Mohammed Ali"
    },
    "category": "Tutorials",
    "tags": ["ES6", "modern JavaScript", "intermediate"],
    "image": "/placeholder.svg?key=8hi7t",
    "readTime": "6 min read",
    "publishedAt": "2023-04-12T09:15:00Z",
    "status": "published"
  }
];

// Progress data
const progress = [
  {
    "id": 1,
    "userId": 1,
    "name": "Rakib Khan",
    "streak": 7,
    "totalStudyTime": 1935,
    "coursesProgress": [
      {
        "courseId": 1,
        "title": "JavaScript Fundamentals",
        "progress": 80,
        "completedLessons": 16,
        "totalLessons": 20,
        "lastAccessed": "2023-05-05T14:30:00Z",
        "moduleProgress": [
          {
            "moduleId": 1,
            "title": "Introduction to JavaScript",
            "completed": true
          },
          {
            "moduleId": 2,
            "title": "Variables & Data Types",
            "completed": true
          },
          {
            "moduleId": 3,
            "title": "Operators & Expressions",
            "completed": true
          },
          {
            "moduleId": 4,
            "title": "Conditional Statements",
            "completed": true
          },
          {
            "moduleId": 5,
            "title": "Loops",
            "completed": true
          },
          {
            "moduleId": 6,
            "title": "Functions",
            "completed": true
          },
          {
            "moduleId": 7,
            "title": "Arrays",
            "completed": true
          },
          {
            "moduleId": 8,
            "title": "Objects",
            "completed": false
          },
          {
            "moduleId": 9,
            "title": "Error Handling",
            "completed": false
          }
        ]
      },
      {
        "courseId": 2,
        "title": "Advanced JavaScript",
        "progress": 40,
        "completedLessons": 8,
        "totalLessons": 20,
        "lastAccessed": "2023-05-04T10:15:00Z",
        "moduleProgress": [
          {
            "moduleId": 1,
            "title": "DOM Manipulation",
            "completed": true
          },
          {
            "moduleId": 2,
            "title": "Event Handling",
            "completed": true
          },
          {
            "moduleId": 3,
            "title": "Local Storage",
            "completed": true
          },
          {
            "moduleId": 4,
            "title": "Async JavaScript",
            "completed": false
          },
          {
            "moduleId": 5,
            "title": "Fetch API",
            "completed": false
          },
          {
            "moduleId": 6,
            "title": "ES6+ Features",
            "completed": false
          },
          {
            "moduleId": 7,
            "title": "Modules",
            "completed": false
          },
          {
            "moduleId": 8,
            "title": "Classes & OOP",
            "completed": false
          },
          {
            "moduleId": 9,
            "title": "Functional Programming",
            "completed": false
          }
        ]
      }
    ],
    "achievements": [
      {
        "id": 1,
        "title": "Fast Learner",
        "description": "Completed 5 lessons in one day",
        "earnedAt": "2023-05-03T16:45:00Z"
      },
      {
        "id": 2,
        "title": "Code Ninja",
        "description": "Completed all exercises in Functions module",
        "earnedAt": "2023-04-28T14:20:00Z"
      },
      {
        "id": 3,
        "title": "7-Day Streak",
        "description": "Studied for 7 consecutive days",
        "earnedAt": "2023-05-05T09:30:00Z"
      }
    ],
    "nextLessons": [
      {
        "id": 1,
        "courseId": 1,
        "moduleId": 8,
        "title": "JavaScript Objects: Advanced Concepts",
        "description": "Learn about object methods, prototypes, and advanced object manipulation",
        "duration": 45
      },
      {
        "id": 2,
        "courseId": 2,
        "moduleId": 4,
        "title": "Introduction to Asynchronous JavaScript",
        "description": "Learn about callbacks, promises, and async/await patterns",
        "duration": 60
      }
    ],
    "updatedAt": "2023-05-05T18:30:00Z"
  },
  {
    "id": 2,
    "userId": 2,
    "name": "Farida Ahmed",
    "streak": 12,
    "totalStudyTime": 2450,
    "coursesProgress": [
      {
        "courseId": 1,
        "title": "JavaScript Fundamentals",
        "progress": 100,
        "completedLessons": 20,
        "totalLessons": 20,
        "lastAccessed": "2023-04-20T11:45:00Z",
        "moduleProgress": [
          {
            "moduleId": 1,
            "title": "Introduction to JavaScript",
            "completed": true
          },
          {
            "moduleId": 2,
            "title": "Variables & Data Types",
            "completed": true
          },
          {
            "moduleId": 3,
            "title": "Operators & Expressions",
            "completed": true
          },
          {
            "moduleId": 4,
            "title": "Conditional Statements",
            "completed": true
          },
          {
            "moduleId": 5,
            "title": "Loops",
            "completed": true
          },
          {
            "moduleId": 6,
            "title": "Functions",
            "completed": true
          },
          {
            "moduleId": 7,
            "title": "Arrays",
            "completed": true
          },
          {
            "moduleId": 8,
            "title": "Objects",
            "completed": true
          },
          {
            "moduleId": 9,
            "title": "Error Handling",
            "completed": true
          }
        ]
      },
      {
        "courseId": 2,
        "title": "Advanced JavaScript",
        "progress": 65,
        "completedLessons": 13,
        "totalLessons": 20,
        "lastAccessed": "2023-05-05T13:20:00Z",
        "moduleProgress": [
          {
            "moduleId": 1,
            "title": "DOM Manipulation",
            "completed": true
          },
          {
            "moduleId": 2,
            "title": "Event Handling",
            "completed": true
          },
          {
            "moduleId": 3,
            "title": "Local Storage",
            "completed": true
          },
          {
            "moduleId": 4,
            "title": "Async JavaScript",
            "completed": true
          },
          {
            "moduleId": 5,
            "title": "Fetch API",
            "completed": true
          },
          {
            "moduleId": 6,
            "title": "ES6+ Features",
            "completed": false
          },
          {
            "moduleId": 7,
            "title": "Modules",
            "completed": false
          },
          {
            "moduleId": 8,
            "title": "Classes & OOP",
            "completed": false
          },
          {
            "moduleId": 9,
            "title": "Functional Programming",
            "completed": false
          }
        ]
      },
      {
        "courseId": 3,
        "title": "React.js Fundamentals",
        "progress": 25,
        "completedLessons": 4,
        "totalLessons": 16,
        "lastAccessed": "2023-05-04T16:10:00Z",
        "moduleProgress": [
          {
            "moduleId": 1,
            "title": "Introduction to React",
            "completed": true
          },
          {
            "moduleId": 2,
            "title": "React Components",
            "completed": false
          },
          {
            "moduleId": 3,
            "title": "React Hooks",
            "completed": false
          }
        ]
      }
    ],
    "achievements": [
      {
        "id": 1,
        "title": "Fast Learner",
        "description": "Completed 5 lessons in one day",
        "earnedAt": "2023-04-10T15:30:00Z"
      },
      {
        "id": 2,
        "title": "Code Ninja",
        "description": "Completed all exercises in Functions module",
        "earnedAt": "2023-04-15T11:45:00Z"
      },
      {
        "id": 3,
        "title": "7-Day Streak",
        "description": "Studied for 7 consecutive days",
        "earnedAt": "2023-04-18T09:20:00Z"
      },
      {
        "id": 4,
        "title": "JavaScript Master",
        "description": "Completed all Level 1 modules",
        "earnedAt": "2023-04-20T14:15:00Z"
      },
      {
        "id": 5,
        "title": "14-Day Streak",
        "description": "Studied for 14 consecutive days",
        "earnedAt": "2023-04-25T10:30:00Z"
      }
    ],
    "nextLessons": [
      {
        "id": 1,
        "courseId": 2,
        "moduleId": 6,
        "title": "ES6+ Features in Depth",
        "description": "Explore advanced ES6+ features and their practical applications",
        "duration": 55
      },
      {
        "id": 2,
        "courseId": 3,
        "moduleId": 2,
        "title": "Building React Components",
        "description": "Learn to create reusable React components with props and state",
        "duration": 60
      }
    ],
    "updatedAt": "2023-05-05T17:45:00Z"
  }
];

// Write data to files
fs.writeFileSync(path.join(dataDir, 'users.json'), JSON.stringify(users, null, 2));
fs.writeFileSync(path.join(dataDir, 'courses.json'), JSON.stringify(courses, null, 2));
fs.writeFileSync(path.join(dataDir, 'blog.json'), JSON.stringify(blog, null, 2));
fs.writeFileSync(path.join(dataDir, 'progress.json'), JSON.stringify(progress, null, 2));

console.log('Data seeded successfully!');
