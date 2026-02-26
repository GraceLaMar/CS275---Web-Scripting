# HW5 - Utility Functions with Assertions

## Function Ideas
- add(a,b) - Adds two numbers together and returns null if inputted value is not a number.
- min(a,b) - Finds the minimum value of two numbers and returns null if inputted value is not a number.
- max(a,b) - Finds the maximum value of two numbers and returns null if inputted value is not a number.
- isEven(n) - Evaluates if a number is even and returns true if it is and false otherwise. If null value inmputted, returns false.
- sumArray(arr) - Adds all values together in an array to find and return the sum. Returns null if array is null or contains non-numbers.
- average(arr) - Finds the averrage of an array of numbers reusing sumArray. Returns null if array is null or contains non-numbers.

## Assertion Ideas
add(a,b)
- add(2,3) = 5 (2 numbers add together to equal another number)
- add("cat","dog") = null (strings are rejected as non numbers)
- add("null",5) = null (null values return null)

min(a,b)
- min(3,8) = 3 (minimum of 2 numbers is another number)
- min("3",8) = null (strings are rejected as non numbers)
- min(null,8) = null (null values return null)

max(a,b)
- max(3,8) = 8 (maximum of 2 numbers is another number)
- max("3",8) = null (strings are rejected as non numbers)
- max(null,8) = null (null values return null)

isEven(n)
- isEven(4) = true (even values return true when go through function)
- isEven("4") = false (strings are rejected as non numbers)
- isEven(null) = false (null values return false)

sumArray(arr)
- sumArray([1,2,3]) = 6 (arrays return sum by adding values together)
- sumArray([1,"2",3]) = null (strings are rejected as non numbers)
- sumArray(null) = null (null values return null)

average(arr)
- average([2,4,6]) = 4 (arrays return average by using sum function)
- average([2,"4",6]) = null (strings are rejected as non numbers)
- average(null) = null (null values return null)

## LLM transcript snippet
Prompt
- Explain test-driven development using my function isEven(n).

Excerpt from LLM Response 
- "Test-Driven Development (TDD) is a programming approach where you write 
   tests before writing the actual function. For example, with your isEven(n) 
   function, you would first write tests for cases like positive numbers, negative 
   numbers, zero, and non-number inputs. Initially, these tests would fail since the 
   function isn’t implemented yet. Then, you write the minimal code to make all the 
   tests pass—like checking that n is a number and n % 2 === 0. Finally, you can safely 
   refactor the function, knowing the tests will catch any mistakes. TDD ensures your
   code works correctly and handles all expected cases."

Reflection
- Reading about what the LLM came up with about TDD with isEven allowed me to see the 
importance of testing first. With this I wrote my assert statements first and I was able 
to see how it would fail with just the asserts. Adding the code after allowed me to 
check that it worked correctly. 
