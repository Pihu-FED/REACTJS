import React from 'react'
import {useState} from "react";


const App = () => {
  const students = [
    {name:"Pushpa Chaudhary" , email:"pushpachaudhary027@gmail.com" , phone: 7409633731},
    {name:"Mudit Goyal" , email:"muditgoyal012@gmail.com" , phone: 7409526431},
    {name:"Basuri Goswami" , email:"basurigoswy027@gmail.com" , phone: 2345633731},
    {name:"Parth Dholakiya" , email:"parthdholakia027@gmail.com" , phone: 7409633731},
    {name:"sankirt shetty" , email:"sankirth0125@gmail.com" , phone: 7409633731},
    
  ]
  const [count , setCount] = useState(0);
  
  return (
    
    <div className="box"> 
    <h1>MODULE: 9 ReactJs Intro</h1>
    <div className="container-parent">
    <div className="container-question">
    <h2>Q.1 What is React Js? </h2>
    </div>
    <div className="container-answer">
    <h3>
            A.1  ReactJS, often simply referred to as React, is an open-source JavaScript library developed by Facebook. It is a popular front-end or client-side library used for building user interfaces (UIs) in web applications. React was first released in 2013 and has since gained significant traction among web developers:
            <br/>
            Key features and concepts of React include:
            <ol className="order">
                <li>Components: React applications are built using components. A component is a self-contained, reusable unit that can be composed to form the UI. </li>
                <li>Virtual DOM: React utilizes a virtual representation of the actual DOM (Document Object Model). When the state of a component changes, React creates a virtual DOM tree and compares it with the previous version. </li>
                <li>JSX (JavaScript XML): React uses JSX, an XML-like syntax, to define the structure of components. JSX allows developers to write HTML-like code directly in JavaScript, making it easier to describe how the UI should look. </li>
                <li>One-way Data Binding: React follows a one-way data flow, where data changes in a parent component are passed down to child components as props. This ensures a clear flow of data and simplifies debugging. </li>
                <li>Unidirectional Data Flow: React applications typically follow a unidirectional data flow, meaning data changes are propagated from parent components to child components and not the other way around. </li>
            </ol>

          </h3>
    </div>
    <div className="container-question">
    <h2> Q.2 What is NPM in React Js?</h2>
        </div>
        <div className="container-answer">
<h3> A.2 In ReactJS, NPM stands for "Node Package Manager." NPM is a package manager for Node.js, a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. React is often used in conjunction with Node.js for server-side rendering and to manage various aspects of the development workflow.
    <br/>
    To use NPM in a React project, developers typically follow these steps:
    <ol className="order">
        <li>Initialize a new project: Create a new project directory and navigate to it in the command line. Use the command npm init to create a new package.json file. This file will keep track of your project's metadata and dependencies.</li>
        <li>Install React and other dependencies: Use the command npm install react react-dom to install React and ReactDOM. These packages are essential for building React applications.</li>
        <li>Install other required packages: Depending on the needs of the project, developers may need to install additional packages, such as React Router for routing, Redux for state management, Axios for making API requests, etc. Use the npm install command with the package names to install these dependencies.</li>
        <li>Use the installed packages: Once the packages are installed, you can import and use them in your React application by including the relevant import statements in your code.</li>
        </ol>
</h3>
    </div>
    <div className="container-question">
<h2>
    Q.3  What is Role of Node Js in react Js?
</h2>
        </div>
        <div className="container-answer">
<h3>
    A.3 Node.js plays a crucial role in ReactJS development by serving as the server-side environment and providing a set of tools and functionalities that complement the front-end React code. The role of Node.js in ReactJS development can be summarized in the following points:
    <br/>
    <ol className="order">
        <li>Server-side Rendering (SSR): React applications are typically single-page applications (SPAs) that run entirely in the client's web browser. </li>
        <li>Build Tools and Bundling: Node.js has a rich ecosystem of build tools and bundlers that enhance React development. For example, tools like "Webpack" and "Parcel" are often used to bundle and optimize React code</li>
        
        <li>npm (Node Package Manager): As mentioned earlier, npm is a package manager for Node.js that helps manage dependencies in a React project. </li>
        <li>API and Data Handling: React applications often need to interact with servers or APIs to fetch data and perform server-side operations. </li>
        <li>Development Environment: Node.js allows developers to set up a development environment with features like hot module replacement (HMR) and live-reloading.</li>
    </ol>
    </h3>
        </div>
        <div className="container-question">
            <h2>
                Q.4 What is CLI command In React Js?
            </h2>
        </div>
        <div className="container-answer">
            <h3> A.4  In ReactJS, the CLI (Command Line Interface) command refers to various commands executed in the terminal or command prompt to perform specific tasks related to React development. These commands are provided by different tools and frameworks that make React development more efficient and manageable. The most commonly used CLI commands in ReactJS development are:
                <br/>
                Here's how the Bootstrap grid system works:
                <ol className="order">
                    <li>Create React App (CRA):
                        The "create-react-app" command is used to create a new React project with a predefined folder structure, development server, and build configurations. It sets up all the necessary dependencies and build tools to get started with React development quickly.</li>
                    <li>npm/yarn Start:
                        After creating a React project, you can use the "npm start" or "yarn start" command to start the development server. This command will compile your React code, launch a local development server, and open the application in your default web browser.</li>
                    <li>npm/yarn Build:
                        The "npm build" or "yarn build" command is used to create a production-ready build of your React application. </li>
                    <li>npm/yarn Install:
                        When you have a new React project or need to add new dependencies to your existing project, you can use the "npm install" or "yarn install" command. This command reads the "package.json" file, fetches the specified dependencies from the npm registry, and installs them in the "node_modules" folder. </li>
                        <li>npm/yarn Test:
                            The "npm test" or "yarn test" command is used to run the test suites defined in your React project. Testing is an essential part of the development process to ensure the reliability and correctness of your code.</li>
                </ol>


            </h3>
        </div>
        <div className="container-question">
            <h2> Q.5 What is Components in React Js?
            </h2>
        </div>
        <div className="container-answer">
            <h3> A.5 In ReactJS, components are the building blocks of a user interface. A component is a self-contained, reusable piece of code that encapsulates the logic, behavior, and visual representation of a part of a user interface. It can be as simple as a button or as complex as an entire page layout.
                <br/>Components in React can be of two main types:

                <ol className="order">
                    <li>Functional Components:
Functional components are also known as "stateless" components. They are defined as JavaScript functions that take an input, called "props" (short for properties), and return React elements to describe the UI. Functional components are the simplest form of components, and they are primarily used for representing UI elements that don't require internal state management.</li>
                    <li>Class Components:
                        Class components are also known as "stateful" components. They are defined as ES6 classes that extend the React.Component class. Class components have additional features, including the ability to manage internal state using the setState method. They are used when a component needs to maintain state, handle lifecycle events, or have more complex logic. </li>
                                    </ol>

            </h3>
        </div>
        <div className="container-question">
            <h2> Q.6 What is Header and Content Components in React Js?
            </h2>
        </div>
        <div className="container-answer">
            <h3> A.6 
                In ReactJS, Header and Content components are two separate components used to create a typical layout for a web page. They are part of a larger application structure and work together to organize the user interface and content.
                <br/>
                <ol className="order">
                    <li>Header Component:
                        The Header component is responsible for rendering the top section of a web page, which often contains the website's logo, navigation menu, and other elements that are consistent across multiple pages.</li>
                        <li>Content Component:
                            The Content component is responsible for rendering the main content area of a web page. It typically displays the unique content of the page, such as articles, images, forms, or any other relevant information specific to that page. </li>
                </ol>
               
            </h3>
        </div>
       
        <div className="container-question">
            <h2> Q.7 How to install React Js on Windows, Linux Operating System? How to Install
                NPM and How to check version of NPM? </h2>
        </div>
        <div class="container-answer">
            <h3> A.7  Here are the steps to install ReactJS on Windows and Linux:
                <br/>
                Step 1: Install Node.js and npm:
            <br/>
            <ol className="order">
                <li>Windows:
                    Visit the Node.js website (https://nodejs.org) and download the Windows Installer (.msi) for the LTS (Long Term Support) version, which is recommended for most users. Run the installer and follow the installation instructions.</li>
                    <li>Linux:
                        On Linux, you can use the package manager specific to your distribution to install Node.js and npm. For example, on Ubuntu, you can use the following commands in the terminal:</li>
                        <br/>
                        Step 2: Verify Node.js and npm Installation:

After installing Node.js and npm, you can check their versions to ensure they were installed correctly. Open a terminal or command prompt and run the following commands:
<ol className="order">
    <li>To check the version of Node.js:</li>
    <li>To check the version of npm:</li>
</ol>
<br/>Step 3: Create a React Application:
<br/>
Step 4: Navigate to the React Application:

<br/>
Step 5: Start the React Development Server:

            </ol>
            </h3>

                </div>
                <div className="container-question">
            <h2>
                Q.8 How to check version of React Js? 
            </h2>
        </div>
        <div className="container-answer">
            <h3> A.8 To check the version of ReactJS installed in your project, you can use the terminal or command prompt. Follow these steps:
<ol className="order">
    <li>Navigate to the root folder of your React project using the terminal or command prompt.</li>
    <li>In the project's root folder, you should find a file called package.json. This file contains information about the project's dependencies, including the version of ReactJS.</li>
    <li>Open the package.json file in a text editor or view its contents in the terminal using a command-line text editor like cat (Linux) or type (Windows).</li>
    <li>Look for the "react" entry under the "dependencies" or "devDependencies" section. The version of ReactJS will be specified next to it.</li>
    <li>the version of ReactJS is specified as "^18.2".</li>
</ol>

            </h3>
        </div>
        <div className="container-question">
            <h2>Q.9 How to change in components of React Js?</h2>
        </div>
        <div className="container-answer">
            <h3>A.9 Here are the general steps to change components in ReactJS:
                <br/>
                <ol className="order">
                    <li>Locate the Component File:
                        Identify the component you want to change and locate its corresponding file within your project's folder structure. Components are typically stored in separate .js files.</li>
                        <li>Open the Component File:
                            Open the component file in your text editor or IDE.</li>
                            <li>Make the Necessary Changes:
                                Inside the component file, you can make the desired changes to the component's code. This may involve modifying the component's JSX markup, updating its state or props, adding new logic or methods, etc.</li>
                                <li>Save the Changes:
                                    After making the necessary updates, save the changes to the component file.</li>
                                    <li>Verify the Changes:
                                        Run your React application to see the updated component in action and verify that the changes are behaving as expected. </li>
                </ol>
                </h3>

        </div>
        <div class="container-question">
            <h2> Q.10 How to Create a List View in React Js?</h2>
        </div>
        <div class="container-answer">
       

  
    <div className="App">
      <h1>The React Way to render a list</h1>
      
      {
        students.map((data)=>
      <div className="form-check">
      <input type="checkbox"className="form-check-box"/> 
       <h2>the data of studennt is :{data.name}, {data.email}, {data.phone}</h2>
   
       </div>
         )
      }
    </div>

    <div class="container-question">
            <h2> Q.11 Create Increment decrement state change by button click?</h2>
        </div>
        <div className='container-answer'>
        
   
    <div className="container my-5">
    <div className="card text-container my-5">
    <div className="card-body"> 
    <h1>Counter App</h1>
    <div className="my-5">
    <h2 className="my-5">{count}</h2>
    <button className="btn btn-success mx-3" onClick={()=> setCount(count+1)}>Increment</button>
    <button className="btn btn-danger mx-3" onClick={()=> setCount(count-1)}>Decrement</button>
    <button className="btn btn-secondary mx-3" onClick={()=> setCount(0)}>Reset</button>

    </div>

    </div>

    </div>
      
    </div>
  




        </div>

                  
        </div>
        
    </div>
    </div>
  )
}

export default App