# A Level Computer Science - June 2023 Paper 1 Revision

# Software
Software makes the world go round!
## Application software

Applications software is software installed by the user to be of benefit to them

Can be divided into:
- General-purpose
	- Off-the-shelf application that can be used for a variety of tasks: word processor, spreadsheets
- Special purpose
	- Created to perform one specific task: accounting, camera applications, games. browser
- Bespoke
	- Readily available and preexisting applications which are available for anyone to purchase are known as **off-the-shelf software**.
	- Software that is custom-made for a specific user or company is bespoke software. This is mostly used by businesses as they can afford to employ coders and designers to create the software. 

### Open-source
True open source-licensed software allows anyone to access, inspect, and modify its source code.

Open source programs are free to use (but may have license restrictions for redistribution and licensing for companies), and the owner still has copyright over the source code written.

Usually, anyone can modify the software and sell it to customers, providing derivatives of this original open-source program is also open-source. 

> Freeware is free to use, but its source code is not public

This is different from closed-source proprietary software which does not allow access to its source code, the creator owns the copyright and can require a license to use the software, which may include restrictions and policies in use, for example only running it on a particular site and no redistribution of the application.


## BIOS
The BIOS is the Basic Input Output System. It has a variety of roles, and most of them are executed on system startup. When a computer is initialised, the BIOS is read from non-volatile ROM: Its roles include:
- Initialises and tests hardware devices such as memory (POST) before loading the operating system
- Query attached devices such as the PCI/e 
- Loads the operating system (Bootstrap loader) from secondary storage, if initialised successfully, into primary RAM


## LANs
Local area networks are a type of network (where 2+ computers are connected physically or wirelessly) in a **restricted geographical area**, such as a home, office or school.

A network switch is used to **connect multiple computers** within a LAN, allowing data communication.

> A hub connects multiple Ethernet devices together and **makes them act as a single node** in a network.

## Protocols
A protocol is a set of rules governing data communication, ensuring standardisation across devices.

There are a range of protocols to know:

- The Internet Protocol (IP) addresses each device (router) connected to the Internet. 
- Each device on a network needs to be uniquely identified, their hardware MAC address is used.

HTTP(S) is a protocol that specifies that the resource to retrieve requires https (hypertext transfer protocol) and is most likely a webpage. The fully qualified domain name and name of the resource to be accessed make up the URL of a resource to access through HTTP

SMTP (sending), POP (receiving + deleting) and IMAP (receiving local + server copy) are email protocols 

### TCP/IP (optional)

The TCP/IP stack is the standard of networking protocols with four layers:
- Application (application-level protocols applied e.g. email clients or browsers)
- Transport (packets, ports, checksums, uses the Transmission Control/User Datagram protocols)
- Network (uses IP to address packets)
- Link (across a physical connection, uses MAC addresses of the physical NIC)

The reverse occurs on the receiving end

> Protocols are typically followed by `://`. For example, `wss://<domain>` for websockets, `ftp://<ip_addr>` for File Transfer Protocol and more

>The Domain Name System is a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network.

## Operating system
OSes have a variety of functions including

- providing a UI so the user can interact with the computer system
	- this hides the complexity of managing the hardware devices connected
	- this is done through a CLI or GUI 
- [memory management](#memory-management)
- interrupt handling
- processor scheduling


## Memory management
Operating systems must allow the allocation of RAM to and between different programs executing on the computer
All programs may occupy more space than there is available in memory and thus the OS must manage the allocation

This can be done in different ways:

### Paging
Memory is divided into various fixed-chung sections called pages. Each page has a unique address
Pages may not be allocated in a physically contiguous manner - and as a result, a page table has to be used to map the logical and physical memory locations

Unlike in HDDs, this apparent fragmentation is not a problem

### Segmentation
Memory chunks can be allocated in different lengths depending on parts of the program such as a function or variable

The OS can manage the allocation of these for efficiency - e.g. the same memory addresses can be used for the same function across different programs 

### Virtual memory

Virtual memory is an area of secondary storage which acts as RAM
Some segments or pages of current processes can be stored here if they are deemed less frequently accessed than other programs such as the OS itself

**Disk thrashing** may occur if too many processes' pages are swapped in and out of this virtual location - memory is much faster than secondary storage


## Stacks
Stacks are a LIFO abstract data type data structure 

Items can be pushed and popped to and from the top. The most recently pushed items are at the top. Data is retrieved from the SAME end it enters. Recursive functions make use of the stack.

Overflow - pushing to full stack
Underflow - popping from an empty stack
- Before these operations are undertaken the programmer should use a function like `stack.isFull()` or `stack.isEmpty()` to prevent a stack overflow/underflow error

On a system level, the call stack stores and passes the outputs between functions, return values and parameters

Another system-level stack is used when CPU interrupts occur. The interrupt service routine handles what the CPU should do when there is an interrupt called, contents of CPU registers are pushed onto the stack, the interrupt service routine handles the interrupt and the values then popped into the CPU registers.

> Examples of stacks include: back function on a web browser, recent changes made to code and word documents

## Pseudocode
Good luck

```cpp
stack = new Stack()

stack = [12, 34, 463, 34. 59]

// pop item
if top_pointer == 0 then
	print("The stack is empty. Not popping due to underflow")
else
	item = stack[top_pointer].pop()
	top_pointer = top_pointer - 1
	// in a function, item would be returned
endif

// push item
if top_pointer == stack.length() then
	print("The stack is full")
else
	stack[top_pointer + 1] = 34
endif
```

## Queues

Queues are another specialist, abstract data type, typically used in event-driven programming. A queue is a list which can only be inserted from one end and retrieved from another. They are a FIFO structure

Elements can interact with the queue by using `enQueue()`, `deQueue()`, `isEmpty()` and `isFull()`.

Array-based queues have predictable memory usage as they take up a proportional amount of memory to the size of the queue instantiated during the program.

### Circular queues
Queues with an array (mutable static data type) can be circular. This is when the front and rear pointers are used to determine where the front and end of the queue are. To add an item, we `enQueue(item)` at position `end_pointer + 1`.

But before we do that, we should check if:
- The `front_pointer == rear_pointer + 1` (or `isFull()` or `size == maxSize`) as if so the queue is full. 
- The queue is empty if the `front_pointer == rear_pointer` (or `isEmpty()` or `size == 0`)

Circular queues are more memory efficient - the pointer can just point at the next element without filling in the queue spaces with blanks between the elements

### Priority queue
Sometimes priority queues are used to give preference to certain elements. When `enQueue()`ing an item the priority (which can be denoted with a letter), it will jump up the queue until it reaches other elements of that priority.


# Data types & structures
The below sections target data types, structures and calculations.

## Arrays, tuples and lists

### Arrays
Arrays cannot typically grow in size and are static. Size and data type of all items must be specified during initialisation
- Ordering 100 cities with individual variable names is inconvenient
- They can be added to an array, referred to with an index between square brackets
- To call the tenth city, you would do city_ten = city [9] (due to 0-indexing)

Arrays can be of two, three or more dimensions. As such they can be used to represent records, tables, and coordinates. 


### Lists
are dynamic data structures and can grow/shrink as the program requires

### Tuples
Tuples are ordered sets of values of mixed data types. However, they are immutable and the data stored cannot be changed. They are static

It can be instantiated with:
my_tuple = new Tuple(29387, "beans" "Helllo", 34, 324, True, False)

However we can't change my_tuple[2] = "Hello" due to the immutability, nor can items be appended





## Binary and hexadecimal
Denary value 15 is equivalent to hex F and binary `1111`.

To convert between binary and hex, split into nibbles and calculate 0-9, A-F what the value(s) is(are).

To convert from hex to binary, DIVide by 16 (work out how many times 16 goes into the value) and convert this into hex. Then you MOD 16 for the remainder and convert this into hex. Then combine the two hex values.

## Two's complement

Flip all the bit values and then add the value `1` to **the least significant bit**. The first, most significant bit represents a the opposite value when represented as two's complement - in an 8-bit binary value it would represent -128 in two's complement. 

When subtracting, simply add the negative number. In other words, use two's complement on the number to subtract to make it a negative, and apply normal binary addition rules. 

## Sign and magnitude
These are basic ways of representing positive and negative numbers.

The sign bit is an additional bit added to the leftmost position. Should this be `1`, then the overall value (magnitude) should represent a negative number. Likewise, if it is `0`, then the overall value is a positive number.

e.g. let's say the number is 131:
`1000 0011`
to make this -131, it would be:
`11000 0011`


However, arithmetic values cannot be easily done without an additional decoding step performed. This is why two's complement is preferred and used across various devices.

## Floating point binary
Possibly the hardest section.

![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/WhatTheSpecSaysFloatingPointArithmetic.png)

Floating point numbers involve a mantissa and exponent. They are represented as $m$ x $10^n$, where $m$ is the mantissa and $n$ is the expone**n**t.

Floating points are written in the form of scientific notation. This means that there is one digit, followed by the decimal place, and the rest is a decimal. Then, it is followed by a multiplication of ten to either a positive or negative power.

In floating point binary, the concept is the same. The mantissa's binary point will always be after the most significant bit to start with. Then, we look at the exponent. Apply the normal binary weighting line to it, and convert it to denary. We then move the binary point along the mantissa, to the right if a positive exponent and to the left if negative, the number of digits that the exponent adds to. From this, the final value is obtained. Apply the normal binary weighting line to it and convert it into denary.

> Remember, values below the binary point are fractional ones.

### Normalisation

- Question: *Convert the binary value `000010110111` with an 8-bit mantissa and 4-bit component into denary.*

Typically the binary number will already be given as an 8-bit mantissa and a 4-bit exponent. If not, separate it into this format.

- `00001011 0111`

Next, the mantissa must start with **either** 01 (for a positive number) **or** 10 (for a negative number). Do not just write this in the first two most significant bit areas though: the entire number must be shifted along to accommodate for this. 
**If a sequence of `01` only occurs three spaces to the right, the whole binary number must be moved left three spaces.** You can then introduce padding on either side of zeroes.

- `0.1011000  0111`

In this scenario, the mantissa has been normalised. However this is only half the equation, to compensate for this binary shift, the exponent must be reduced. This is done by applying the normal binary weighting line to the exponent values and subtracting (or adding) the number of binary shifts performed from the total value of the exponent. For example, if the exponent was `0111` and we moved three spaces to the left, we must reduce 3 from the exponent, to get `0100`. 

- `0.1011000  0100`
- =  `01011000 0100`

= 0.5 + 0.125 + 0.0625 = 0.6875

= 0.6875 * 10^4^ = 6875

1.  **Original Binary Number:** 000010110111
2.  **Separate into Mantissa and Exponent:** 00001011 0111
3.  **Normalise Mantissa:** 0.1011000 0111
4.  **Adjust Exponent:** 0.1011000 0100 (Shifted 3 positions to the left, so reduce the exponent by 3)
5.  **Combine Mantissa and Exponent:** 01011000 0100
6.  **Convert to Decimal:** 0.5 + 0.125 + 0.0625 = 0.6875
7.  **Apply Exponent:** 0.6875 * 10^4^ = 6875

### Negative denary to a normalised floating point with two's complement
Value: -14.5

1) Convert to positive denary (14.5):
> 0000 1110.1

2) Perform one's compliment (total inversion of all bits)
> 11110001.0 

3) Add `1` to the least significant bit column, now in the fraction stage
> 11110001.1

4) Normalise mantissa by shifting the bits until the leftmost bits are `10` (for a negative number) 
> (111) 	1.00011
> = 1.00011

5) Pad because of the ones we just took off to an 8bit number
> 1.0001100

6) As we moved 4 digits to the left, calculate the exponent
> 0100

7) Append exponent to the normalised floating point
> 1.0001100 0100




# Programming languages
The below sections are a section of the content of the paper targeted on programming languages, starting with assembly

## Assembly language
These languages are directly matched to the machine code which is specific to the architecture and its instruction set. It uses mnemonics which are short words which correlate to machine code binary. 

The assembler at this stage translates the mnemonics into the machine code.

If the LMC code is covered in any detail. lord have mercy

## High-level languages
These are written "above" the low-level languages. Each instruction may equate to several lines of machine code. They are designed to be more human-readable, with an English-like syntax, and can be cross-system and operate across varying CPU architectures. This is in comparison to low-level languages like assembly, which are platform-dependent.

Programming paradigms involved in high-level languages include imperative and procedural. Imperative programming includes declarative and object-oriented coding. They use sequence, selection and iteration to tell a computer how to solve a problem.

Declarative languages like SQL, HTML and CSS on the other hand tell the computer what it should do as opposed to how it can do it

## Encryption and hashing

**Lossless compression**
- No data is lost, just represented in a different way
- Good for binary files, text files
- Run-length encoding and dictionary compression are used to reduce file size e.g. images

**Lossy compression**
- Non-essential data is permanently removed, such as similar image colours or inaudible sounds
- Can sacrifice quality for more significant file size gains

**Caesar cipher encryption**
- All letters are shifted by a given amount in the alphabet
- Can be broken by brute force
- Frequency analysis can show that E is the most common letter followed by T, A, O etc. Patterns can be spotted fairly quickly.

**Vernham cipher encryption**
- Unbreakable encryption
- XOR operations are used to encrypt data with a one-time pad of truly random origin with a length equal to or greater than the original data, given in person and destroyed after use.

**Symmetric encryption**
- When the same key is used to encrypt and decrypt data. Therefore intercepting the key is as easy as intercepting a message. This is private key cryptography.

**Asymmetric encryption**
- Uses a different but mathematically related key to encrypt and decrypt data (public and private keys).
- The public key encrypts data, private key decrypts it.
- The public key is made... public
- The private key, used to decrypt the data into plaintext, is only known by one party like a server. 
- Communication can be verified to be coming from and going to the specific server
- Prevents man-in-the-middle attacks as data intercepted cannot be decrypted without the private key


**Hashing**
- Hashing functions map an input to a fixed-length, typically smaller output. 
- The original value cannot be determined
- Useful for storing passwords - less of a security risk to store a hashed representation of them in a hashed format rather than the values of them themselves. We just need to compare the inputted value's hashed value to the password 


## HTML & CSS

The Document Object Model interpreter converts the HTML document into a displayable, formatted page [todo]
The Cascading Style Sheet interpreter styles related HTML to format the page in a more sophisticated way
The JavaScript engine compiles referenced JS code and executes it within the page sandbox

HTML uses tags to define the page content and structure

#### Tags
```html
<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<p> Paragraph</p>
<ul>
	<li>Unordered list</<li>
</ul>
<ol>
	<li>Ordered list 2</li>
</ol>
```

#### Stylesheet

```html
<head>
	<style>
	/* For an element */
	h1 {
		color: blue; /* Don't forget to use American spellings */
		font-size: larger;
		text-align: center;
	}
	
	/* For an ID (identifier) */
	#my-text-id-1 {
		text-align: left;
		border: none;
		background-color: #00acff;
	}
	/* For a class */
	.myclass23 {
		border-style: solid;
		border-color: pink;
		height: 200px;
		width: 50pc;
	} 
```

#### Inline/embedded styling
```html
<p style="color:red; font-size:large">Red large text</p>
```

#### External stylesheet
```css
<link href="styles.css" rel="stylesheet" type="text/css">
```


## Computing-related legislation

**The Data Protection Act 2018**
- Controls how data about living people is stored and processed, containing the EU GDPR

**Computer Misuse Act 1990**
- An offence to modify or access computer material without permission from the owner
- Addresses computer-related crimes

**Copyright, Designs and Patents Act 1988**
- Illegal to infringe or copy others' work without permission
- Protects the intellectual property rights of creators - e.g. illegal sites and users

**Regulation of Investigatory Powers Act 2000**
- Regulates large-scale surveillance and investigation by authorities
- Requires ISPs to secretly watch over all activities in transit
- Prevents the existence of any court documents which prove that this has been undertaken
- Allows interception of communications on target individuals (subject to legal safeguards)

Companies can be fined if they do not disclose that a data breach has occurred by the ICO.


**Investigatory Powers Act 2016**
- More obligations for ISPs to assist with data interception - log retention of activity for at least 1 year without a police warrant
- Allows police to hack devices with any means for national security benefits

## SQL

SELECT (column) FROM (table) WHERE (var) LIKE/BETWEEN/= (criteria) ORDER BY (var) DESC, (var) ASC

ALTER TABLE (table)
MODIFY COLUMN (columnID)

DELETE FROM (table)
WHERE (primaryKey) = "CRITERIA"

```
CREATE TABLE tableName
(
	SomeColumn 			CHAR(4) 	NOT NULL	PRIMARY KEY,
	SomeOtherColumn		VARCHAR,
	FOREIGN KEY			OtherTableColumn		REFERENCES SomeOtherTable(PrimaryKey)
)


```

### Normalisation

A table in 1st normal form has no repeating attributes (atomic values)
A table in 2NF is in 1NF and has no partial dependencies (only when composite primary key)
A table is in 3NF if it is in 2NF and has no transitive/non-key dependencies; all fields depend on the key, the whole key and nothing but the key

Benefits of 3NF normalisation is that it upholds ACID

**Atomicity**
The instruction/database query is executed in its entirety or not at all

**Consistency**
All transactions must abide by the transaction rules (referential integrity)

**Isolation**
All transactions executing concurrently will have the same result as if they are executed sequentially

**Durability**
The state of all processed transactions will remain so after the transaction has been completed (can use disk buffer, etc.)

## Functions
Return a value

## Logic gates



## Boolean expressions

### Truth tables

### Karnaugh maps



