# OCR A Level Computer Science June 2023 Paper 2 Algorithms and Programming Dedicated Target Revision Cheat Sheet


# Data Structures
- Abstract data types (ADTs) are a way of encapsulating data, and operations on that data, into a single unit. They may have various different implementations.
- A data structure on the other hand is well-defined, both in terms of how data is stored and how data is interacted with

### Trees
are an abstract data type. Data that is hierarchical, such as a file system, can be represented in a tree data structure as opposed to in a linear manner. A tree is a connected, undirected graph with no cycles

- Each item is a **node**. Each node may have/be:
	- a **parent** node with links to one or multiple children
	- a child node which is linked to a parent and may or may not have children
	- a leaf node with no children
	- a root node at the top of the tree where everything stems from



## Binary Search Trees
[Trees](#trees) can also store non-hierarchical data. Binary trees are a good example of this: each node has at most one or two children. 

The big-O notation of these trees is O (log n). Unbalanced trees have a worst-case time complexity of O(n)

**"Starting at the root each time, if the next item is less than the node, it is added to the left of the root. Otherwise, move it to the right."**

They can be represented as an array with each index containing a left and right pointer, and the data itself. Use -1 as a pointer if there is no subtree



## Depth-first (post-order)
Traverse the left subtree, then the right subtree, then visit the root node.

Algorithmically, this can be written as:

```c
procedure post_traverse(index)
	if tree[index].left_pointer != 0 then
		post_traverse(tree[index].left_pointer)
	endif

	if tree[index].right_pointer != 0 then
		post_traverse(tree[index].right_pointer)
	endif
	
	print(tree[index].data)
endprocedure
```

For either in-order, pre-order and post-order traversals, the location of the print statement is what changes. The base algorithm is the same. Pre-order search would have the output preceding the first selection, whilst the in-order search would have the output statement between the two selection statements.

The output of post-order traversals will always be the last time that node is visited in the entire tree. 

Alternatively, you can calculate it by finding the leftmost node and moving right and up (see diagram to help)

### Deleting a node
When deleting a node from the search tree, the binary search tree's properties must be conserved. That is, each value to the right of any node must be greater than the root node, and each value from the left must be smaller.

For leaf nodes, this is easy.

However, it is slightly more tricky when there are one or more child nodes

When there is only one child, its parent is simply removed and the child is attached to the grandparent node

When there are two children, the value of the smallest value in the right (largest) subtree replaces the one of the node being deleted.


## Backtracking
Backtracking is a method used to intelligently try out different paths or sequences until the solution is found, based on previous results. For example, instead of traversing each possible path in a maze, the backtracking algorithm can swap to an adjacent path on reaching a dead end. The last decision made will be undone, and an alternative path (or **candidate**) is then attempted.

## Graph



## Dijkstra's Shortest Path Algorithm
Dijkstra's algorithm is a way of finding the shortest path between one and any other node in a weighted graph. It can be unidirectional or bidirectional, too.

The data type used is a priority queue. Initially, each node is assigned a temporary distance with 0 at the start and infinity at every other node. 

Each iteration through the algorithm generally looks like this:
1. Add all nodes to the priority queue with the starting node value of 0 and everything else infinity
2. If the node has been fully explored, mark them green and dequeue them
3. Compute distance to all other neighbours
4. Reorder the priority based on distance
5. Update the distance to each node if a shorter one is found
6. Traverse to the next closest node
7. Repeat until the priority queue is empty and all nodes' shortest distances have been calculated

> Limitations include negative weights not being calculated correctly
> Graphs with loads of nodes may be better suited to use a "Fibonacci heap" rather than a weighted graph.


## Decomposition
Breaking a problem into smaller sub-problems in a way that each individual sub-problem is easier to tackle, and completes a task of the overall problem. Sub-problems can be continually divided.

This is an element of **modularisation** and part of thinking procedurally.

The benefits of decomposition include:
- Large programs can be broken down into easier to maintain modules
- These modules, if used frequently by a range of software, can be included in a library (e.g. cryptographic functions)
- Modules can be individually tested which allows for better debugging without affecting any other part of the program, and programmers can work on several modules concurrently.
- Modules can be re-used and called throughout the program


## Linked List
A dynamic, abstract data structure. Each element/node in the linked list contains the data itself, and pointers to the next node's address (link). 

It is non-contiguous. This means that data is not stored sequentially in memory. The last value will point to null.

When adjusting the linked list, adding an element is as easy as changing the pointer value for the previous node to the new, inserted value, and setting the pointer value of this new node to the next node in the list. Similarly, deleting a node and its data will just modify the previous node's link to the next node, after the deleted one. 

Mutltiple pointers or links can be added to nodes in the array which can represent anothe way of ordering, e.g. alphabetical AND number ordering of a list of names.

## Functions
Return a value


## Recursive functions and algorithms
A recursive routine must satisfy three conditions:
- Include a **base/stopping case**
- **Call itself** if this base case is not met
- Have a **finite number of recursions**


## Big-O Notation
Big-O is used to represent the time and compute efficiency of an algorithm.

Tractable problems have a polynomial time solution, or better. These are O(n), O(n^2^) and O(n^k^).
Intractable problems are those which do not have polynomial time solutions. They are effectively useless as they cannot solve a problem in an efficient, reasonable amount of time, as time and computational power increases significantly for even small increases of 

It's worth noting that sometimes when big-O is applied to algorithms such as depth-first traversals with only ~30 elements or so, they may be negligible time differences in exponential solutions compared to linear or logarithmic solutions for small element numbers and, as such, it may be more efficient and simpler to code for programmers to just use an algorithm with a poor time complexity as it will not bring much, if any, benefit to when the input size is small.

### Linear
- The algorithm takes an amount of time that increases with a linear positive correlation with more elements added. O(n)
	- Example: For loop
	- Okay

#### Constant
- The algorithm takes a fixed amount of time, no matter how many elements inputted there are. O(1)
	- Example: Always returning the first value in an array
	- Best case

### Exponential

- The algorithm takes a large amount of time even for small increases in elements. O(2^n^)
	- Terrible

- The algorithm takes an obscenely large amount of time even for small increases in elements. O(n^n^)
	- Shocking

#### Quadratic
- The algorithm takes more time than a standard linear correlation when more elements are added. O(n^2^)
	- Awful

#### Factorial
- The algorithm must compute every single possible combination of all elements and all preceding elements. O(n!)
	- Example: Travelling salesman problem
	- Just avoid

### Logarithmic
- The algorithm a linear amount of time, in addition to slightly more time, for each element to compute the results of a large number. O(n log n)
	- Examples: Merge sort, quick sort, binary tree sorting
	- Okay


- The algorithm only takes slightly more time for each increase in elements. O(log n)
	- Example: Binary search
	- Excellent


## Concurrent processing
Concurrent processing is the act of processing data at the same time as opposed to sequentially - one after the other. 

It is especially important in database transactional processes

## Merge sort and bubble sort

### Merge sort
Merge sort is based on the divide and conquer strategy similar to binary search. As such, its average and worst-case time complexity is O(n log n) - making it more efficient than bubble and insertion sort/

Merge sort repeatedly divides the initial list in half until there are singular elements. Then, each element from index 0 is compared with its neighbouring one (index + 1). This is repeated until the first pair is ordered successfully. This is repeated; the sublists therefore double in size after comparing the elements and merging them. Repeat until the resulting list is of complete length and is ordered.

### Bubble sort
Bubble sort is a very simple algorithm to implement and is simple to understand. Each element in the array is compared to the element at its position, plus one. 

- Get the length of the array
- For each iteration (i) to the length of the array subtract 1 (zero-index):
	- Get the value of the element at position iteration
	- Compare this to the value of the element at position iteration plus one
	- If the number is greater, swap them
	- (this can be done by creating a temp variable for the position of the current iteration, setting position to position + 1, then setting position + 1 to temp)
	- Add 1 to iteration (i)
	- Repeat until for statement is complete
- Print out the ordered list!



## IDE



## Sub-procedures




## Abstraction
Hiding the exact way in which data is interacted with to make it simpler to understand


# OOP/Procedural

### procedural languages
Procedural languages are those which tell the computer how to complete an instruction/follow an algorithm as a sequence of step-by-step instructions, or procedures, which can, in turn, call other procedures. All data about variables and content is stored as primitive data types: var, char, bool, int, float, etc.

### object-oriented languages
Within a program, there is a range of objects which can interact with other objects. These can be abstract data types themselves, or, using a class and inheritance, can be anything like an animal. Each object has attributes (what it is) and its methods (what it does)

A class is a list of attributes and methods that all objects that are based on (or, inherit from) that class contain. Storing both of these in a single class is known as encapsulation. This is the process of data hiding

```cpp
class Cat
	private furColour
	private breed
	
	// rest of attributes

	public procedure new(furColour, breed)
		furColour = furColour
		breed = breed
	endprocedure

	public procedure meow()
		print("Meow")
	endprocedure


cat1 = new Cat("black", "siamese")
```


## Constructors
Contructors, in a nutshell, are procedures within a class that create a new instance of an object. They are typically declared in OOP as `public procedure new(attribute1, attribute2 ...)`. Emphasis on the `new` name.

This allows multiple independent variables to be created as instances of a class object.

(See the "`new`" keyword in the class snippet above.)

```cpp
public procedure new(furColour, breed)
	furColour = furColour
	breed = breed
endprocedure
```


	 


## Local/global variables (9 marks)
Local and global variables are both variables but with differing **scopes** and lifetime.

There are a range of reasons as to where, when and why to use local and global variables. A global variable, typically declared with the `global` keyword in object-oriented and procedural languages, such as Python, has its data available and modifiable for any procedure in the program. This is different to a local variable, which is declared within an enclosing scope of a single procedure, and is removed from memory and unassigned when all processing is completed within that procedure, and the procedure becomes out-of-scope. Global variables have a static lifetime, meaning it is allocated when the program starts and is deallocated when the program terminates.

The benefits of using local variables are significant. Firstly, local variables allow for **recursion**. This is because each declaration of the variable is local to that specific function and, as such, a copy is created in memory of the function and all its content (or "**frame**") and is typically pushed onto a call stack. This local variable, which can store various values such as the calculation in the Fibonacci sequence, can be then used to store the values of the previous intermediary inputs, calculations and outputs to calculate the final output, all whilst using the same variable name due to differing scopes. This improves efficiency as various variables do not have to be statically typed nor specified for each iteration. 

In addition, local variables reduce "spaghetti code" and improve the efficiency and readability of a program, improving its maintainability. As locally scoped variables only exist during the execution of a particular subroutine, they cannot overwrite the data of other variables which may interrupt and cause unexpected behaviour. For example, this is particularly the case in large programs with a range of different calculations required. In maths programs, the variable name "value" or "number" may be frequently used by programmers for simplicity, and these functions may call other functions with the same variable identifier. However, as the scope of each variable is that of that function executing, the values are isolated to each subroutine running and will not interfere with other calculations being made.

This is different to global variables. These are visible to all subroutines and can be modified by them. Global variable values can be much harder to track using breakpoints and debugging tools in an IDE if seemingly unrelated subroutines may accidentally modify the global value. However, global variables also have their uses too: values which may remain unchanged during the execution of a program such as "tax" and "pi" can be statically typed as a constant and global, which prevents the modification of the value, whilst only needing to be initialised once at the beginning of the program for it to be within the scope of all relevant functions.

### Local/global var summary

- **Local variables**
	- Only accessible/modifiable in a single procedure
	- Dynamic lifetime, created and removed only during procedure execution
	- Allows recursion for efficient handling of intermediate values without the need for redeclaration due to being in different scopes - separate instances for each function call "frame".
	- Improves code readability and maintainability as local scoped variables cannot overwrite other variables
- **Global variables**
	- Visible to all subroutines/procedures
	- Static lifetime, allocated at program start; deallocated at program termination
	- Risk of spaghetti code and unintended modifications to values especially in big programs
	- Can be useful for certain situations, e.g. avoiding redeclaration of constants e.g. "pi" across the program
	- Can be harder to track and debug as more subroutines have more opportunity to inadvertently alter them.


> If it's something theoretical for an exam, I find I learn best by digging into something (ideally from multiple books or sources) until I know I understand the whole picture well enough to write about it on my own as a test to see what I'd picked up and what I'd missed! After writing it down, I'll compare my explanation to the books or official answers afterwards. It takes a long time to do that but I think a good way to know how well you understand something is when you can put it into plain English language, without having to refer back to books, using words that any non-technical non-IT person would be able to understand. [1](https://www.thestudentroom.co.uk/showthread.php?t=5347580)






