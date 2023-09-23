
[< Back to all GCSE Cheat Sheets](https://ibaguette.com/cheatsheets/gcse)


> Looking to ace your exams with easy-to-access, free 1:1 advice from exam survivors? Join the [Baguette Brigaders Discord server](https://ibaguette.com/discord), home to a friendly community of students, teachers and professionals who can answer any of your questions and give you valuable exam tips, tricks and insights! 

Latest update: 23/09/2023 18:45

---
# 1.1 - Systems architecture

## 1.1.1 Architecture of the CPU

### **The purpose of the CPU - the F-D-E cycle**

The Fetch-Decode-Execute cycle is the main job of the CPU. To execute a program, the program code is copied from secondary storage into the main memory. The CPU’s **program counter** is set to the memory location where the first instruction in the program has been stored, and execution begins.  
In a program, each **machine code** instruction takes up a slot in the main memory. These memory locations each have a **unique memory address**. The **program counter stores the address** of each instruction and tells the CPU in what order they should be executed.

Step by step:

-   The CPU checks the program counter to see the next instruction to execute.
-   The program counter gives a memory address to where the next instruction is
-   The CPU fetches the instruction from this memory address
-   The instruction is decoded and executed. For example the value decoded could be a number, which is entered to the ALU (arithmetic logic unit) and added to another fetched from cache and multiplied.
-   The program counter increments by 1
-   The cycle is repeated indefinitely

### **CPU components and their function(s)**

The ALU (Arithmetic Logic Unit)

-   Performs calculations and logical operations
-   Where decisions are made (e.g `if x > 10`)

The CU (Control Unit)

-   Fetches, decodes and executes instructions
-   Controls hardware

Cache

-   A small amount of high speed memory physically inside the CPU.
-   Temporarily holds small amounts of data which the CPU will reuse often.
-   Speeds up the system - does not have to wait for some data in memory to be fetched
-   Level 1, 2, 3 cache - 1 is the fastest, most expensive, has the lowest amount of storage, likewise 3 is the slowest, least expensive but contains the most amount of potential storage

**Registers** are:

-   Small amounts of high speed memory in the CPU used to store small amounts of data needed for processing
-   Includes the address of the current instruction, the next instruction to be executed, and the results of calculations

In case you find the difference between Cache and Registers difficult, here’s something useful from [Stack Overflow](https://stackoverflow.com/questions/3500491/are-cpu-registers-and-cpu-cache-different):

-   CPU register is just a small amount of data storage, that facilitates  
    some CPU operations.
-   CPU cache, is a high speed volatile memory which  
    is bigger in size, that helps the processor to reduce the memory  
    operations.
-   It is not very inaccurate to think of the processor’s  
    register as the level 0 cache, smaller and faster than the other  
    layers of cache in-between the processor and memory. The difference  
    is only that from the point of view of the instruction set, cache  
    access is transparent (the cache is accessed through a memory address  
    that happens to be a cached address at the moment) whereas registers  
    are explicitly referenced in each instruction.

There will probably be a table to tick what things do, or a 2-4 marker asking what something does and to explain it. I’d recommend learning 2 registers in detail, and what 4 just do.

### Von Neumann architecture

This is basically a summary of the above.

Von Neumann architecture is the design of which most every computer now is comprised of. It states:

-   **Data _and_ instructions** are stored as **binary**
-   **Data _and_ instructions** are both stored in **primary storage**
-   Instructions are fetched from **memory** **one at a time** and in order
-   The processor **decodes and executes** an instruction, and then does the same for the next instruction
-   This will continue until there are no more instructions

A processor based on von Neumann architecture has five registers which it uses for processing:

-   the **program counter** (PC) holds the **memory address** of the next instruction to be fetched from primary storage
-   the **memory address register** (MAR) holds the address of the **current instruction** that is to be fetched from memory, or the address in memory to which data is to be transferred
-   the **memory data register** (MDR) holds the **contents found at the address** held in the MAR, or data which is to be transferred to primary storage
-   the **current instruction register (CIR)** holds the instruction that is currently being decoded and executed
-   the **accumulator (ACC)** is a special purpose register and is **used by the arithmetic logic** unit (ALU) to **hold the data being processed and the results of its calculations**

Note the above was heavily taken from [Bitesize](https://www.bbc.co.uk/bitesize/guides/zhppfcw/revision/3) as it’s just easier to explain

Personally I find this the easiest way to remember them:

-   program counter counts the programs by 1 every cycle
-   memory address register has the current memory address
-   memory data register has the memory data at the address
-   don’t worry about the CIR because it’s self-explanatory
-   accumulator (ACC) holds data being processed and the results of it


---


This is an snippet from our complete GCSE Computer Science Cheat Sheet. 

For the full version, including comprehensive coverage of both Paper 1 and Paper 2, along with coding practice examples, visit [https://ibaguette.com/cheatsheets/gcse](https://ibaguette.com/cheatsheets/gcse) and select "Computer Science: Paper 1 and 2."

Feel free to share these revision resources with friends, family, and teachers!

> Created with 💕 by Draggie
