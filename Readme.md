# Node/Express Basics

This is a small tutorial made for new Node.js developers, this aims to teach newcomers how to set up a express server for their next back-end.

[TOC]

## Introduction to Node.js

### What is Node.js?

> Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/). 

Node.js is a V8 wrapper which allows us to run JavaScript code in our computer  without the use of a web browser, it has access to many powerful API and access to the OS resources like the File System. Node is written in C++ 

While Node is mostly seen as plain JavaScript, it is executed in another way

![Browser vs Node JS](./img/jsvsnode.png)

Both Chrome and Node DO NOT know how to run/interpret JavaScript, they send  the code to the V8 engine which sends back the results. V8 is written in C++ this means that when we are sending code de V8 we are actually executing some C++ function and not JavaScript code. 

![Image result for Node js c++ bindings](https://miro.medium.com/max/800/0*DLjTUbiHLIUv47ha.jpg)

### Why use Node.js?

Everyday new developers are jumping into Node.js. Node is great for the whole stack. 

> Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 

"non-blocking I/O" means that Node will not interrupt the code execution while an  operation with the I/O is in progress say Querying a database, this  started in the browser where the blocking of the I/O would freeze the  whole web page. 

This means function execution will be overall better performance wise, since operations are not invoked in a linear fashion.

![Image result for blocking vs nonblocking node](https://2.bp.blogspot.com/-I9lzkfaYdrk/VZveysjldAI/AAAAAAAAPCo/lGqH0YLmZkI/s640/bb.png)

> Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world 

Node Package Manager, is a package manager which manages all of our  project's dependencies, this includes installing, un-installing, updating and maintaining our packets.  A package in a nutshell is someone's code which is uploaded into [npm.js' official website](https://www.npmjs.com/), here code is identified by a unique name. We can use this code however we wish to for our own applications or we can some else's package to develop our own packages.

### Installing Node.js

Node is available in Windows, Mac Os and most Linux distributions.

### Windows

On windows, just as any other installations download the executable from [Node.js's official website](https://nodejs.org/es/).

### Linux

On Linux you will receive a tar.gz file, but you can also use the snap store. Run the following command to install node:

```
sudo snap install node --channel=12/stable --classic
```

After installation we can check if node is installed by running

```
node -v
```

This is the expected output

```
v12.16.1
```

## Hello World

Let's write our first node application, to start off open your favorite text-editor. For this tutorial [Visual Studio Code](https://code.visualstudio.com/) will be used. In a new folder create a file named `hello-world.js`

```
mkdir hello-world
cd hello-world
touch hello-world.js
```

Open up a new terminal window and navigate towards this directory path. To start using Node, we need to initialize Node in this folder.

```
npm innit
```

After we run this command we will be prompted to fill up a form about this package we are creating, you may fill it as you wish.

```
Press ^C at any time to quit.
package name: (hello-world) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Je12emy
license: (ISC) 
```

We can also skip this configuration by using the default values using the command

```
npm innit --yes
```

Afterwards we will be shown the basic information for this package

```
About to write to /home/je12emy/Documents/Express-Basics/code-samples/Hello-World/package.json:

{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Je12emy",
  "license": "ISC"
}


Is this OK? (yes) 
```

If you check you file structure you may notice a new file has been created: `package.json`

```
.
├── hello-world.js
└── package.json

0 directories, 2 files
```

`package.json` displays basic information about our package and it's dependencies (other packages which are used). This is key for collaborating with other developers, since all they need to do is install all the decencies needed with a simple command and they will be able to work along in our application. For now let's focus on `hello-world.js`.

Open up `hello-world.js`, remember we pretty much are working with JavaScript so all previous knowledge will transfer nicely into Node. For now let's just print "Hello World".

```javascript
console.log('Hello World');
```

**How do we execute this code?** Simply navigate into this folder path and run the command:

```
node <filename>
```

Now call the file and the message "Hello World" should show up.

```
je12emy@pop-os:~/Documents/Hello-World$ node hello-world.js 
Hello World
```



