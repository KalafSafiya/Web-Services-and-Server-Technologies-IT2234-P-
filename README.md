IT2234 Practical  Day 06 - 03/04/2025

ASYNCHRONOUS PROGRAMMING CONCEPTS
----------------------------------

1. Callbacks
What is a Callback?
A callback is a function passed into another function to be executed later, after the operation finishes.

How It Works
1.fs.readFile('file.txt', 'utf8', callback)
  -Reads file.txt asynchronously in UTF-8 encoding.
  -Takes a callback function that executes when the file read is complete.
2.Callback Function ((err, data) => {...})
  -If there's an error, it prints an error message.
  -If successful, it prints the file content.
3.console.log("File reading is done..");
  -This executes before the file content is printed because file reading is asynchronous

  ![image](https://github.com/user-attachments/assets/c40b7f71-654b-4f24-aaa5-964a114077a8)




2. Promises
What is a Promise?
A Promise is an object that represents an operation that will complete in the future. It has 03 states:
  -Pending (waiting for the operation to finish)
  -Fulfilled (operation completed successfully)
  -Rejected (operation failed)

How It Works
  1.fs.readFile(filepath, 'utf8') returns a promise.
  2.then((data) => {...}) executes when the operation is successful.
  3.catch((err) => {...}) executes if an error occurs.

  ![image](https://github.com/user-attachments/assets/0d547277-e469-4b13-905d-f78baf3184e1)



3. Async/Await
What is Async/Await?
  -async makes a function return a promise.
  -await pauses the function execution until the promise resolves.

How It Works
  1.fs.readFile() returns a promise.
  2.await waits for the file to be read before moving forward.
  3.The try...catch block handles errors.

4. Promise.allSettled()

What is Promise.allSettled()?
  -It waits for all promises to complete (either fulfilled or rejected).
  -It does not stop if one promise fails 

How It Works
  1.Both fs.readFile('file.txt') and fs.readFile('data.txt') start running at the same time.
  2.Promise.allSettled() waits for both to finish.
  3.It returns an array with:
    { status: "fulfilled", value: "file content" } if successful.
    { status: "rejected", reason: Error } if failed.
  4.The program does not stop if one operation fails



![image](https://github.com/user-attachments/assets/5a086c20-2310-428c-82f5-c84c9a9ced93)





