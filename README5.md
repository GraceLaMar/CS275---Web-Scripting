# HW8 - React To-Do Componet

## Data Model

- `TodoItem({ item })` - This function will render a single element of the tasks. Always treats title as a string. 

- `TodoList({ items = [] })` - Renders a `<ul>`that cintains all of the elements from the previous function `TodoItem` and uses `items = []` to make sure that the empty list still renders correctly. 

- `App()` - This is the main componet of the app. This renders the TodoList and includes the button to test if they work. 

- `runTests()` - This function is used when the button is pressed. Preforms the assertions and outputs the results. 

## Assertion Ideas

Test 1: Happy Path

- This assert statement will check that only one list for each item exists in the input array. 

Test 2: Edge Case

- This assert statement makes sure that the empty list renders correctly. 

Test 3: Non-Mutation

- This assert statement is used to make sure that original list of items is not modified when the componet renders. 

Test 4: Non-string title

- This assert statement makes sure that the title passes as numbers and are correctly displayed. 

## LLM Interaction

Prompt 

- Help me write JavaScript assertions to test my React To-Do list component. I want to verify that the correct number of items render, empty lists render safely, the original array is not modified, and non-string titles display correctly.

Excerpt from LLM Response

- `const container1 = document.createElement("div");`
`ReactDOM.createRoot(container1).render(<TodoList items=``{itemsOriginal} />);`
`const lis = container1.querySelectorAll("li");`
`assert(lis.length === itemsOriginal.length, "Happy path: correct``number of <li>");`


Orchestration

- After comparing the LLM's results to mine, I decided not to implement this because it wanted me to create a container for every assertion. It seemed easier to me to use the one container. 
