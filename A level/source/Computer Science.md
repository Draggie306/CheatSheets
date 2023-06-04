
[< Back to A level Cheat Sheets](https://ibaguette.com/cheatsheets/alevel)

# Ah yes more computer science!


**This Cheat Sheet is in development. Unfinished sections are marked with [tbd] and there may be general issues and typos. ⚠**

[Last update: 03/06/2023 22:36](https://gist.github.com/Draggie306/1072270b844cda3e271d6f484aa9a976)

✅ Note: This file is synced with [this repository](https://github.com/Draggie306/CheatSheets). You'll always be on the latest version.

Use a PC/device with a large screen to see the Table of Contents on the left-hand side to quickly navigate through this document.

> Discuss with other students, developers, educators and professionals in the [Baguette Brigaders Discord server](https://discord.gg/GfetCXH)! You can also **receive a notification** when there are new Cheat Sheets, Summary Sheets *(new!)* or other revision material is made public there!

# Paper 1


# [tbd] Unit 1 - The characteristics of contemporary processors, input, output and storage devices


![Spec of the A level section 1.1](https://cheatsheet-assets.ibaguette.com/alevel/compsci/Spec-1.1.png)


## Components of a computer and their uses

Surprisingly, a computer has a lot of things in it to make it work! These things are often very small but very fast.


## 1.1.1 Structure and function of the processor

The CPU (Central Processing Unit) has many different components within it, each having their own specific function and role. Its purpose is to **process data**, **strong text**which can be searching, sorting, calculating, communicating between input/output devices, temporarily storing results of calculations...


### Control Unit

The **control unit** (CU) within the CPU is responsible for controlling all operations that occur within the CPU in other subunits and registers of the processor such as the ALU (Arithmetic Logic Unit), and how this data is exchanged to other registers or moved around the system. These operations are dictated typically by the speed of the clock signal (in Hz).

The CU also regulates and controls the data sequence between the processor and other hardware devices such as system memory through the **control bus**, and can generate and interpret received control signals from these received instructions after having decoded it (using the opcode and operand) into a sequence to determine the instruction needed to be carried out.

This could be, as an example, fetching the address and data requested from RAM, determine that an arithmetic calculation needs to occur, and storing the resulting data back in RAM, or in other registers.

> The Control Unit is the component of the processor which directs the operations of the CPU.

### Buses

There are three types of bus, which all do different things and have different directions

Buses themselves are physical, parallel wires, typically visible on a motherboard, that connect two or multiple components together. These wires, or lines, are typically arranged in multiples of 2 with eight or more, such as 8 16, 32 or 64 individual lines. A bus is the entire collection of these parallel wires going from one component to another. [[^1^](#credits)]

The CPU is connected to RAM by three separate buses, the address bus, data bus and control bus. These are collectively known as the system bus. As each bus is shared, **only one device can transmit along a bus at any given time**.

![motherboard](https://cheatsheet-assets.ibaguette.com/alevel/compsci/motherboardlines.jpg)

*Motherboard bus lines*

#### Control bus

The control bus exists to distinctly transmit command and control, timing and status information between components of a system. It is **bidirectional**, as signals need to be transmitted in both directions.

WIthin the control bus, there are control lines. These are needed to ensure there is **no conflict between**  **different** system **components** using the data and address buses. These control lines include:
-  **Memory Read** (RD): Data from the addressed memory location should be added on the data bus.
-  **Memory Write** (WR): Data in the data bus should be written to the addressed location in memory.
-  **Bus Request** (BR): A device is requesting use of the data bus.
-  **Bus Grant** (BG): The CPU has granted access to the data bus.
-  **Transfer ACK** (ACK): The data has been read (**ack**nowledged) by the device
-  **Interrupt request** (IRQ): A device (with lower priority) is requesting to access the CPU.
-  **Clock**: Signals used to synchronise operations between the CPU and other components. *A clock signal keeps the flow of data synchronised.*
-  **Reset**: The CPU will reboot if active.
  

#### Data bus
The data bus transfers data and instructions between components

#### Address bus
A system with a _32-bit_ address bus can address _2^32_ (4,294,967,296) memory locations. If each memory location holds one byte, the addressable memory space is 4 GiB.


#### How these buses link to assembly language programs?


### The ALU
The Arithmetic Logic Unit performs arithmetic operations on data. It consists of two parts - the **arithmetic unit** - this can include addition, subtraction, multiplication and division. It can also compare arithmetic values and return a binary value if, for example, A is greater than B.

The second part is the **logic unit** which includes logical bitwise AND, OR, NOT and XOR operations. Finally, it may also perform shift operations (binary shift) within a register, moving bits left or right.

![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/ALU_block.gif)

*Credit: [Lambtron](https://en.wikipedia.org/wiki/Arithmetic_logic_unit#/media/File:ALU_block.gif  "User:Lambtron")/Wikipedia. [License](https://creativecommons.org/licenses/by-sa/4.0)*

The ALU can compute integers of the same width as the data bus connecting to it - a 8 bit data bus can only provide the ALU with 8 bit integers. Multiple steps would need to be carried out in order to process larger integers, reducing efficiency of the processor.

> Modern CPUs may also contain a FPU, or 'floating point unit', to handle floating point numbers more efficiently.


### Program Counter (PC)
Holds the memory address of the next instruction to be fetched by the processor.


### Accumulator
Stores the 'intermediate' results of the data being processed at the current moment in the FDE cycle. The final results get stored in another register such as the Arithmetic Logic Unit, or get moved to main memory.

### Memory Address Register

### Memory Data Register

### Current Instruction Register

### The FDE cycle and its impacts on these registers

### Factors affecting CPU performance
There are a number of factors used by CPU manufacturers in order to make processors faster.

#### Clock Speed
The FDE cycle is controlled by the system clock's pulses. As a result, the faster this clock is, the faster a processor will be able to fetch, decode and execute instructions.

In modern systems, actions are executed on the rising edge of the system clock. These actions some time to complete (number of cycles).

![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/ClockSignal.png)
https://opensource.org/license/bsd-2-clause/
The clock width is the length of one pulse - the shortest time possible between the rising and falling edges. The clock period is the length between two rising or two falling edges.

The clock speed typically changes dynamically in modern systems to balance power and performance, with some energy efficient machines lowering their clock speeds to, for example, 1.1GHZ, during times of system idling, and may then increase ("boost") higher to 4.2GHz when launching a game is executed by the user. 

The user can increase the clock speed of a CPU. This is known as overclocking. With a faster clock speeed, data can be fetched, decoded and executed more quickly leading to improved system performance. However, heat generated by the CPU will increase proportionally with clock speed, so this is only viable for systems with better heat dissipation.

> The **Core i9-13900K** chip currently holds the record for fastest clock speed, reaching 9GHz. This dethroned the previous record set by an AMD chip in 2012, at 8.79GHz.
>  This was only managed under specialist, liquid nitrogen cooling conditions for a few seconds.

#### Core Count




#### Cache
Cache memory is small amounts of fast memory that stores frequently accessed data and instructions to improve CPU performance. It is typically on the CPU chip. When data or an instruction is fetched from system memory, it is copied into cache in case it is needed by a register immediately. This has a reduced latency compared to fetching from memory as it does not need to travel through the data bus.

> The CPU in reality checks for the data in the (L1) cache first and uses this before checking RAM - if it exists, it's a **cache hit** as opposed to a **cache miss**.

Cache memory operates in a **hierarchy** of levels, with L1 cache being the fastest and closest to the CPU registers, but very small, often only 64KiB in size due to its expensive price.

L1 cache is also split into **instruction** and **data** caches, (L1i/L1d) so that both data and instructions can be fetched simultaneously.

Due to this storage limitation, the **least recently used** data or instructions after several FDE cycles are **relegated** the higher-level L2 or L3 caches or copied back into main memory to prioritise newer, more important instructions. 

L3 cache is much larger, perhaps up to 96MiB, but the tradeoff is slower access speeds.

> CPU registers themselves could be considered as 'L0' cache - this is more of an analogy than fact, but registers are still much faster than even L1 cache.


### Pipelining
Pipelining is a technique used by most modern processors so increase the overall performance of the processor. 

This can be facilitated through overlapping stages in the FDE cycle. Without pipelining, all instructions are executed sequentially - the ALU remains idle when an instruction is being fetched. With pipelining implemented, different jobs are assigned to different stages in the FDE sycle simultaneously.

The next instruction(s) to be fetched can be fetched at the same time as the ALU is performing an operation on the current instruction, and stored in a buffer ready for execution, allowing for concurrent processing and improved throughput and efficiency through lower idle time.

![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/Pipelining-Instructions.jpg)
*A more detailed diagram of how instructions can be pipelined. These stages are **I**nstruction **F**etch, **I**nstruction **D**ecode, **O**perand **F**etch, **I**nstruction **E**xecution, and **O**perand **S**tore, but you don't need to know them. In a non-pipelined system, Instruction 2 would be fetched at point t5 and take until t9 to complete.* [Source](https://binaryterms.com/pipelining-in-computer-architecture.html)


### Contemporary Processor Architectures
von Neumannn architecture is used in the majority of computer systems today. Program instructions and data are stored together in system memory, both using the same data bus to connect to the CPU.
Benefits of von Neumann architecture include that it is cheaper, and makes more efficient of use of available RAM. This is because if the data store becomes full


#### von Neumann architecture


#### Harvard architecture
Harvard architecture is mostly used in specialist and some embedded systems. A program's data and instructions are stored separately in memory with a separate data bus connecting it to memory.


## 1.1.2 Types of processor


## 1.1.3 Input, output and storage


# [tbd] 1.2 Software and software development

## 1.2.1 Systems Software
### Operating Systems
Operating systems are needed by all computers to manage communication with hardware.

The user can interact with application software which interacts with the operating system (or interacts with the operating system directly) which then interacts with and manages hardware through drivers.

When a system starts, the bootloader in ROM loads the operating system into RAM.

The OS provides various functions such as a user interface, memory management, interrupts and interrupt handling, scheduling and device driver management.

> The Operating System hides the complexity of the hardware by providing a user interfact to the user. This can be through GUIs (graphical user interfaces) such as Windows, or through CLIs such as the Command Prompt or the Linux shell.

### Memory management
#### Paging

Paging is a technique which does not require the allocation of physical memory in a contiguous manner (i.e. all next to each other, like when writing data to a hard disk). Available memory is divided into equal-sized chunks or **pages** (typically 4, 8 or 16 KB), which can be swapped from primary to secondary storage if needed. 

If Program A requires 2 pages of RAM, it gets loaded into the first 2 memory addresses which correspond to these pages. Program B requires 3 pages, which get allocated after program A. Next, Program A terminates and Program C starts, requiring 4 pages. This program will be allocated non-contiguous pages, with 2 pages being before Process B, and 2 pages allocated after Process B.

This will be managed by the OS and a page table will be used to match each program's virtual memory addresses to the corresponding physical memory addresses.

> Virtual memory addresses are an example of abstraction by allocating each program with a virtual memory space, which the maps to physical memory. This allows for the operating system to enforce memory security and integrity, as well as allowing for virtual memory. 
> Developers can develop software without needing to worry about the specific memory layout for each system the program will run on.
 
![Core isolation and memory integirty](https://cheatsheet-assets.ibaguette.com/alevel/compsci/Core-Isolation.png)
*An example of memory integrity enforcement on Windows 10 and 11.*

#### Segmentation

Segmentation is the division of memory into segments which are typically of different lengths that correspond to a particular part of a program, such as a function or subroutine. Larger functions may occupy larger segments, while a print statement may only need a small segment of memory.

Both segmentation and paging is handled by the operating system.

#### Virtual memory
Virtual memory is a technique used by most operating systems to use a portion of secondary storage like a HDD or SSD as memory. 

When a program requests access to a page in memory that is not actually in RAM, a page fault or hard fault is raised, requesting the operating system to swap the page from virtual memory back into RAM to be executed by the CPU. 


However, this can cause two disadvantages. The main disadvantage of this is **disk thrashing** - when there is so much extra disk activity from swapping pages in and out of virtual memory that it slows down the performance of a computer. This is especially so on hard disk drives which have to actuate and seek to a specific location on the disk platter, increasing response times for programs.

Some areas of memory cannot be swapped in to and out of virtual memory, such as the operating system itself, which is in the "nonpaged" area. If a page fault occurs when the OS tries to retrieve data from this non-paged area, the system may crash.

![Hard faults](https://cheatsheet-assets.ibaguette.com/alevel/compsci/HardFaults.png)
*You can see how many hard page faults each program is having in Resource Monitor on Windows. As I have 48GB of RAM, my page file is only 1GB and I have little page faults. On other machines this may be much higher.*

> Programs can also share memory for similar tasks - for example a single developer may have multiple programs which have the same function in them. The operating system can handle this by giving both programs separate logical/virtual memory, but as only one instance of it in memory is required, this could be mapped to the same physical memory address, reducing memory consumption, allowing for more processes to use it.

### Interrupts and the Stack

The CPU needs to be interrupted when necessary, preventing issues such as program corruption after an error, or system instability. Interrupts can be sent to the CPU by software, hardware devices, drivers, or its own internal clock. 

Software can create an interrupt to request information from the OS (like an API call) and hardware can trigger interrupts when an I/O device has finished a transfer, a printer runs out of paper, or there is a power failure.

> An interrupt is a signal generated by software or hardware to temporarily suspend the current execution of a program to handle a specific event or condition.

After every clock cycle, the CPU checks if there are any interrupts that require processing. If so, it uses an **interrupt service routine** to handle the interrupt. The CPU will typically push all current contents of its registers onto the system stack. When processing has finished, the values can be popped (as a LIFO data structure) from this stack and reloaded into the CPU. If there is not an interrupt at a higher level than the one originally being executed, the CPU then continues with the FDE cycle.

### Scheduling
With multiple applications running concurrently, the OS needs to allocate processor time to each process or **job**, as one CPU can only process instructions and data for one application at a time. This is done through the **scheduler**. Its job is to ensure that CPU time is used as efficiently as possible to provide an acceptable response time to all users and programs, maximise the time that the processsor and its resources are being used and to ensure fairness on a multi-user system.

There are many scheduling algorithms which all have different uses and functions.

> The **scheduler** has another component, the **dispatcher**, which is responsible for executing (or 'dispatching' the scheduled tasks by assigning them to available resources (i.e. the CPU cycles)

> **Processor starvation** is when a process is unable to receive the necessary amount of CPU time to execute and complete its tasks.

#### First come first served
Jobs are processed in the same order as which they entered the queue.
|*Advantages*|*Disadvantages*|
|--|--|
|Easy to implement and test|Doesn't prioritise more urgent jobs |
|No job starvation and fair for all running jobs|Doesn't have priority levels|
|Suitable for batch processing systems|Can result in poorer system throughput overall
||Can create a backlog if the initial prioritisation of jobs is long-running ones


#### Round robin
Jobs are given a limited amount of processor time  (a *time slice* or *quantum*)  by the dispatcher to execute and complete. If the task fails to complete, the dispatcher moves to the nect job in the queue and allocates the CPU for this job. 

|*Advantages*|*Disadvantages*|
|--|--|
|Guarantees a good response time for each job |  Doesn't prioritise more urgent jobs or priority levels|
|All jobs will adventually be processed|Longer tasks will be disproportionately longer due to inefficient splitting|
Note: in some implementations of RR, a job with a higher priority may be given multiple consecutive time slices or quanta. *The best of both worlds!*

#### Shortest remaining time
Jobs with the lowest estimated job time are prioritised.  This can reduce the number of pending jobs that would otherwise be queued to execute after a big job. However it is difficult to predict which job will take the longest, especially in real-time operating systems or systems without any regular exection.

|*Advantages*|*Disadvantages*|
|--|--|
|Prioritises small jobs, for example background processes in batch systems|Difficult to predict which jobs will take CPU time - requiring a more advanced prioritisation algorithm|
|Reduces the number of pending jobs queued after a big job has completed|May lead to process starvation if there are lots of small tasks being added continuously|
|Increases throughput|More critical jobs may be delayed due to constant small job prioritisations|

#### Shortest job first
Similar to shortest remaining time. It still requires the processor to calculate how long each job will take and order the queue accordingly, but can also result in similar downsides.

|*Advantages*|*Disadvantages*|
|--|--|
|Waiting time is reduced in batch systems with small and predictable jobs|Longer response times for longer jobs|
|Increases throughput|Can lead to process starvation if small tasks are continuously added|
|  |Requires accurate timing estimation which may be complex|

#### Multi-level feedback queues
MLFQ scheduling is a feedback algorithm, which intelligently adjusts prioritisation of jobs over time based on behaviour.  The knowledge that I/O devices and jobs that rely on these take longer to complete compared to a CPU cycle can result in these being prioritised over calculations, reducing bottlenecks. 
While one job is transferring data onto a USB stick or printing, another job can be mining bitcoins which requires CPU[^3^] calculations.

|*Advantages*|*Disadvantages*|
|--|--|
|Reduces chance of bottlenecks and thereby prioritises jobs more efficiently|Difficult to implement|
|Processor use is maximised|More CPU resources may be allocated to insert the job into the queue rather than actually executing it for small jobs (overhead)|
|Combines multiple queues and can move jobs between them depending on their processor time| May result in process starvation for low-priority jobs if higher-priority jobs are constantly added|
|Allows for dynamic adjustment of different job priorities based on their historic behaviour, improving overall efficiency|  Requires careful fine-tuning of its parameters to be fully effective|
|Over time, this may increase the overall system throughput on the majority of systems the most|Not suitable for all systems like embedded or realtime systems due to its dynamic nature and overheads|

The multi-level feedback queue algorithm is used in the majority of devices, including Windows 10 and 11. The "scheduler" has been a key talking point from Microsoft regarding benefits to 

## 1.2.2 Applications Generation






## 1.2.3 Software Development





## 1.2.4 Types of Programming Language


### Assembly language + Little man Computer

The LMC instruction set is a simplification of assembly language which has many of the same principals of the lower-level language.

Here is the assembly code which you need to know:

|Mnemonic|Instruction|Explanation|
|--|--|--|
|`ADD`|Add|Adds the value stored in paricular memory address to accumulator
|`SUB`|Subtract|
|`STA`|Store|
|`LDA`|Load (***D**ata **A**ddress*)|
|`BRA`|Branch, **a**lways|
|`BRZ`|Branch, if **z**ero|
|`BRP`|Branch,, if **p**ositive|
|`INP`|Input|
|`OUT`|Output|outputs value of the accululator
|`HLT`|End program (*HALT*)
|`DAT`|Data location|

This can be used in any way to perform operations like adding adddresses in memory, squaring numbers, etc. You'll need to be familiar with this and be able to spot errors and rewrite the instruction list when needed.

### Modes of addressing memory


### OO languages


#### Classes
#### Objects
#### Methods
#### Attributes
#### Inheritance

![Hard faults](https://cheatsheet-assets.ibaguette.com/alevel/compsci/inheritance.jpeg)


#### Encapsulation
#### Polymorphism




# [tbd] 1.3 Exchanging data

Data and all sorts of information is constantly being moved, updates and transferred within a computer system or between (several) networks. Although nowadays data transfer and storage is extremely high-speed and accurate. 

Large web hosting platforms like Google Cloud and AWS offer "five nines" uptime, 99.999%, meaning that every year, their services can only be down for a maximum of 5 minutes and 13 seconds. Some services have even higher uptimes, like six nines (reminds me of my GCSE results) or even eight nines - that's *310 milliseconds* of downtime per *year.*

To ensure this, data must be transferred and stored securely and be error-resistant. For global networks such as Cloudflare with over 200 datacentres, transfer is slower and more susceptible to interference with increasing distance, so how are these extremely low error rates possible?

## 1.3.1 Compression, Encryption and Hashing

![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/SpecContent-exchanging-data.png)

### Compression techniques
Text, videos, images, sound and all sorts of media can be reduced in size. The benefits of this include faster file transfer times, less bandwidth is used, less storage is needed by the client and server and user experience is better, with less buffering on YouTube streams, for example.


There are two types of compression:

### Lossy compression
Non-essential information is removed from the source file. In the below images, the scene is clearly identifiable and if you open them in a new tab, you'll be able to zoom in to fine details such as the house or trees in the background with some clarity. 

If a pixel in an image is combined with a block of others in lossy compression, it isn't much of a deal.

![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/IMG_20230526_174532-FromCamera.jpg)
*Directly from my phone camera. 25,438 KiB*

![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/IMG_20230526_174532-Compress.png)
*Compressed! 543 KiB. ~50x reduction in filesize*

However, with the second image here, you should be able to tell that it's not as clear or as precise as the first one. Different colours have been merged into one, and "blockiness" is visible as the compression algorithm tries to combine multiple areas that have generally the same colours into one to save storage space. **It tries to remove as much of the less significant details as possible, conserving the general essence of the image.** There is a trade off between how heavily the image is compressed (and therefore the smaller the filesize) and the quality.

> Real life example: I run iBaguette.com. On the main site, I was using 1080p PNG images straight out of Photoshop for the article thumbnails. I switched to using lossy compression, and it reduced the file size by 95% at almost no visual quality loss as they are relatively small on the page, especially on mobile devices. With 5 articles loading, this sped up the page load times by ~2 seconds.


This logic can be applied to audio too. MP3 files and OGG files are formats that use lossy compression to remove sounds ouside of audible hearing ranges, or by removing quieter elements of a music track that play at the same time as louder parts.

VoIP services like Discord use compression at various **bitrates** to transmit peoples' voices. Lower bitrates such as 8kbps will require more compression and people will sound less defined and monotonic, while higher bitrates such as 64kbps - the default by many services today - will not have any issue in understanding the person at the other end of the line as this is less compressed. However, we still can still discern the difference between even the highest bitrates and being face-to-face.

> With advancements in audio codecs and compression techniques, lower bitrates have become more usable.



![audio](https://cheatsheet-assets.ibaguette.com/alevel/compsci/soundwave.png)
*Visualisation of what happens to audio content*
**Lossy Compression:**
|Advantages|Disadvantages|
|--|--|
|Small file sizes vs the original and vs lossless|Quality can be reduced significantly|
|Very fast data transfer and load time, suitable for websites|Not suitable for more precise applications|
|Lower processing power to decode|Original data cannot be fully recovered; irreversible
Widely supported and popular across platforms and devices|



### Lossless compression
Lossless compression techniques **records and optimises patterns** in the source data, rather than changing the data itself. As a result, when this losslessly compressed file is transferred, it can be decompressed in a way that is **structurally identical to the source** file, even though the data may not be represented identically to the source file during transfer.

> It uses algorithms to encode the source data in a **more efficient way**.

Lossless compression is important when transferring files such as binary data (like program files for OS updates) or when conserving all original content. This is because if a bit is lost in machine code, it could result in a critical error. 

- WAV and FLAC files are examples of lossless audio containers and codecs, respectfully. 
- PNG and RAW image files are lossless
- ZIP files can contain any number of file, in a losslessly encoded manner

However, lossless compression has disadvantages too. Lossy files are still much better for highly optimising size and quality of images as they are able to discard large amounts of the file if needed. Therefore, generally, only slight reductions over the initial file are possible. 

|Advantages|Disadvantages|
|--|--|
|All of the original file's data is preserved|  Longer file transfer times and potential buffering|
|Smaller file sizes compared to original|Sometimes unnecessary, e.g. for website images|
|Good for archival storage, or for high-value files| Still much larger file size than using lossy techniques|
|Preserves fine and intricate details of music, videos and images|Can occupy large amounts of drive space for diminishing quality returns|
|  |Inneffective for more random data - may be larger than the original file|
|  |Compression algorithms require more computing resources to compress and to decode|

There is no universal right/wrong option for which compression technique to use. It is a matter of trade-off between saving storage space, loading times, quality and type of file.

### Run length encoding (RLE)

Run Length Encoding is a lossless data compression algorithm. It replaces repeated, consecutive patterns of the same data with a "summary" - an instance of that specific element, as well as a count of it.

RLE works well where there are consecutive, repeated elements. This could be pixels in an image, musical notes or binary data. Here's an example:

AAAAABBBCDDAAA -> 5A3B1C2D3A.


To decode this data, the sequence just has to be expanded using the counts, and the source sequence will be reconstructed.

Likewise, if there are 10 adjacent pixels in an image with the same colour "00000110", this could be represented in RLE as 10(00000110).

### Dictionary encoding 
Dictionary encoding finds data which occurs regularly in a source file, and adds suitable matching data to a dictionary. This is like a table, with a numerical value, its data and a binary representation. The phrase "no_pain_no_gain" can be added to a table such as:

|Number|Data|Binary|
|--|--|--|
| 1 | no_ | 00 |
| 2 | p | 01 |
| 3 | g | 10 |
| 4 | ain_ | 11 |

Assuming zero overhead and optimal implementation, "no_pain_no_gain" goes from 15 bytes to:

000111001011 (12 bits)

However, for tiny strings like this, using a dictionary is impractical as the amount of data needed to create the dictionary would be larger than the savings from using it. However, if both the sender and receiver have the same existing copy of a dictionary and reference this, or create a dictionary for a large corpus of text like a book, then the potential savings are extremely high.


> LZMA compression (Lempel-Ziv-Markov chain algorithm) is a popular lossless open-source algorithm that uses dictionary encoding. Zip and gzip use variations of this algorithm.

### Encryption
Encryption is a method of transforming data from plaintext in a way such that it cannot be understood by people who do not have the means or authority to decrypt it. 

- Original message is plaintext.
- Encrypted message is the ciphertext.
- Encryption method/algorithm is the cipher.
- Data required to decrypt a message is the key (decryption key).

Plaintext -> cipher -> ciphertext -> key -> plaintext.

The Caesar cipher shifts letters of the alphabet by a fixed amount. It is a substitution cipher.

However, it is easily decrypted (or "cracked") by using little or no computing power. This can be done through a brute force attack, which uses every possible key to decrypt ciphertext until one works. To combat this, spaces are used to hide word lengths. As there are only 26 characters in the alphabet, this is easily brute forced.

### Vernam cipher/one-time pad
This was invented in 1917 and is the only encryption method still proven to be unbreakable. 
It consists of a few key features:
- The cipher or one-time pad must be equal or longer to the plaintext.
- The cipher/one-time pad must also be truly random.
- Both parties must physically meet to exchange the cipher.
- The cipher can only be used once; destroyed after use.

To actually encrypt the data, the bitwise exclusive OR operator (represented as ^ or XOR) is used on all plaintext with the corresponding character number in the key, after having translated all characters into the binary ASCII equivalent

This rule states that: 
- 0 and 0 will output 0
- **only 0 and 1, or 1 and 0 will output 1**
- 1 and 1 will output 0.


This could look like :

Plaintext char: 0100 0010 (**B**)
Corresponding cipher char: 1110 0010 (**Γ**)
|ASCII representation|Cipher|XOR| 
|--|--|--|
|0|1|1|
|1|1|0|
|0|1|1|
|0|0|0|
|0|0|0|
|0|0|0|
|1|1|0|
|0|0|0|

= 1010 0000. (this is **á**.)

> As this typically occurs in binary, unprintable characters are often produced such as `\x9F` (Control). 

To decrypt it back to plaintext, we XOR the result and the OTP.

Result of the original XOR (ciphertext): 1010 0000  (**á**)
OTP: 1110 0010 (**Γ**)


^ = 0100 0010 (**B**)

This also beats cryptanalysis techniques as methods such as frequency analysis attacks - which rely on comparing the frequency of letters in cyphertext to how often these letters appear in general communication - as each character of the ciphertext is truly random. This is referred to as entropy - unpredictability in cryptography.
> In cryptography, random does not just mean statistically random - it also means unpredictable.
> 
![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/Cloudflare-lamp-wall.jpg)
*An example of how entropy is created using lava lamps in the Cloudflare HQ. Other methods of generating real-world randomness include a double-pendulum system or radioactive decay.*

>Further reading: [here](https://www.cloudflare.com/en-gb/learning/ssl/lava-lamp-encryption/).

### Symmetric (private key) encryption

This uses the same key to encrypt and decrypt information. Think about an encrypted zip file - you add the password at the start, send the password (the key) to someone else (this is **key exchange**) and they can decrypt and unzip it. If the key is intercepted at all during transmission, it can compromise the security of all past and future communications which have used the same key.

### Asymmetric (public key) encryption

Asymmetric encryption uses two different but cryptographically related keys. The public key is made public, so all people wanting to send an encrypted message to the private key holder are able to do so. The private key is kept secure by typically one user or entity, and this key can then decrypt the data encrypted by the public key. This key cannot be deduced from the public key.

However, an intercepted message could be encrypted using your own public key impersonating a sender. To prevent this, digital message signing certificates can be used, which employs similar principals.

### Hashing

A hash function is an irreversible function to go from an input of arbitrary length to a fixed-length output.

This is typically used when storing passwords. Even if the database of user accounts and passwords is compromised, the hashes of these passwords are useless as they are one-way - will only match when the user enters the same password. *Unless it's not already on a list of known hash digests...*

> Known lists of hashes and their original values are called "rainbow tables".

SHA256 is an example of using a hash function. It can take any data as an input - a video file, checksums, text, and return a 256 bit string. 

Even if 1 bit of input data is changed, these functions will return completely different results. This makes them useful as checksums in packet headers, or for validating that a file has been downloaded correctly.

> Salting is an additional method of securing data by adding a unique random value to each password before hashing it, resulting in a cryptographically different hash value, theoretically immune to known hashes, even if the password is "password123".

![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/hashes.png)
*The SHA-1, CRC32, MD5 and SHA-256 hashes for this file at the time of writing. Oops, as I've written that, it's changed already...*

"1E71416792A1681496EBFB56B00D8056C9BA1C59" - sha-1 hash

### Uses for hashing

Hashes are used in packet headers (checksums), digital signatures to prove identity, digital certificates and Public Key Infrastructure (PKI) and more.

## 1.3.2 Databases
![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/SpecContent-Databases.png)

I really don't like databases. They are just boring. But luckily they're easy to understand and remember once you've got yeour head around them.

### Database concepts
Firstly, entities need to be worked out. 

**An entity is a category of object, person, event or thing of interest about which data is needed to be recorded.**

For example, employees of a company, films, actors, club members. Each **entity** has **attributes**.

The simplest kind of database, a flat file, holds data about one entity only, such as a user's coins and roles in the Baguette Brigaders Discord Server.

If you are designing a system for a company that sells subscriptions for online revision resources, a flat file would not be useful.

> luckily here at iBaguette we don't sell anything or lock anything behind a paywall.

There would need to be a few entities in this scenario, all linked together
- Customer
- Revision product
- Subscription amount
- Order number
- Subject
- Tier of revision guide
- more?

The DBMS (Database management system) needs to have a unique identifier for the entity. The primary key is notated by being [underlined](#).


## 1.3.3 Networks
![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/SpecContent-Networks.png)
The Internet is a public interconnection of computer networks which allows data to be sent to any connected device, globally.

The World Wide Web is a collection of websites and documents linked by hyperlinks made accessible via the Internet.

The Internet is the largest network (what computers communicate with each other on). THis is known as a Wide Area Network, or WAN, as it spans over a large geographic area.


The Internet can also be used to transmit data without using the World Wide Web. However, this data must travel through the backbone.

The Internet backbone is the core infrastructure of the Internet. It is made up of a series of dedicate, high-transmission fibre-optic cables that 'peer' (are connected with) each other, and are owned by large Internet Service Providers (ISPs).

By connecting all these cables together, these ISPs can create a single network that gives each other access to the entire Internet. The way they communicate is by using the **TCP** (Transport Control Protocol) and **IP** (Internet Protocol) protocols.

Protocol - a set of rules or procedures for transmitting data between electronic devices, such as computers


### IPv4 addressses
are a series of 4 octet values separated by a full stop (max 32 bits), ranging from 0 to 255. However, there are not enough addresses to support the growing population, so IPv6 is being used which uses 128 bits.

### Uniform Resource Locator (URL)
URLs are a standardised format for specifying the means of accessing a resource on the Internet and identifying its location. A URL consists of many components, including the protocol, domain name and path to the specific resource.

The protocol (like HTTP, HTTPS, FTP or WSS) indicated the communication method to access the specified resource. If it is using HTTP/HTTPS, then the resource is going to be on the World Wide Web

The domain name (like ibaguette.com) identifies the server where the resource is hosted.

By using URLs, users can easily access resources such as web pages, images, documents, and other files on the internet.

### Domain Name System (DNS)

The Domain Name System is a distributed database system that enables the translation of domain names into IP addresses, which can then be used to contact a server.

DNS servers are therefore dedicated computers that store an index of domain names and their corresponding IP addresses.

When a user types a domain name into their web browser or other application, the application sends a request to a DNS server to resolve the domain name to its associated IP address. The DNS server then searches its index for the domain name and returns the corresponding IP address to the requesting application. This allows the application to establish a connection to the server associated with the domain name, enabling the transfer of data between the client and server.

> Frequent DNS queries are often cached on a client's system so that a DNS server does not have to be contacted every time, and instead read from a DNS cache stored by the operating system or browser, which is much faster.

If the local DNS server does not have a record for the domain, it may forward the request to an ISP's DNS server. If the ISP DNS server does not have a record, then it may be forwarded to one of 13 global root DNS servers which hold the records of every domain on the Internet.

This process is known as **recursion** and enables the DNS system to efficiently resolve domain names to their corresponding IP addresses, even for domains hosted on remote servers.

Below the root servers are **generic** and **country** top-level domains (TLDs), such as .com, .edu, .org and .uk, .fr and .de.

  

### Internet registries

Domain names must be completely unique otherwise DNS requests could be manipulated. There are 5 global Internet registries (RIRs) which are responsible for allocating IP addresses to organisations in their respective regions (typically continental).

> IANA (Internet Assigned Numbers Authority) is responsible for coordinating the allocation of IP addresses to the RIRs.

### Area Networks

In a Local Area Network two, or more, computers are connected together, physically using a ethernet cable or wirelessly, within a small geographical area. For instance, within a small office or school site which is mostly confined to one building or site.

### Hubs and switches
A network switch is a hardware device that is commonly used to connect various network segments within a LAN. Switches are designed to forward data packets between different devices on a network.

Unlike hubs, which broadcast data packets to all devices on a network segment, switches selectively forward data packets only to their intended destination device.

Hubs connect multiple Ethernet devices together, making them act as a single network segment. Hubs are an older type of connector and are less commonly used today due to their limitations. Unlike switches, hubs broadcast all data packets to every device on the network, which can lead to network congestion and reduced performance.

A network switch operates by learning the MAC addresses of devices connected to it, and then using this information to forward data packets to the appropriate device. This allows devices on the network to communicate with one another directly, without the need for every device to receive every packet.

> Watch out! Many people still use the word ‘hub’ when they mean ‘switch’!

### Physical network topologies
A network topology refers to the physical or logical arrangement of computing devices which make up a network.

**Bus topology**: an arrangement where nodes are connected

in a 'chain' by a single central communications channel, or 'bus'. Each end of this bussy backbone is connected to a terminator which stops signals bouncing back. Each terminal, or node, on this cable is passive.

They are simple to set up and cheap, but only one computer can transmit data successfully at a time (or "collisions" will occur) and there is poor security generally, with a single point of failure, as well as being unsuitable for larger areas.

**Star topology**: an arrangement where a central node or switch (or hub) provides a central point of communication for all other nodes. A device connected on this network can send an appropriate message to the switch, which then uses the both devices' **Media Access Control (MAC)** address to determine where to send the message.

The failure of any one device (unless it is the switch itself) does not affect the operation of the network as a whole. This makes star networks highly reliable and easy to maintain, as well as being easy to add new stations. Higher transmission speeds can give better performance than a bus network too.

> Star networks are a popular choice for LANs and other small-scale networks, due to their simplicity and reliability. They are especially well-suited for networks that require high bandwidth and low latency and as well as for security, as data is sent only to one other device.


### Logical network topologies

  
- The **physical topology** of a network defines how the devices are physically connected.

- The **logical topology** defines how the devices communicate across the physical topologies.
  
For example, a network might be physically wired in a star topology, but use a logical bus topology to facilitate data transmission.

**Wi-Fi** is a wireless networking technology providing high-speed Internet and network connections. Devices connect to the Internet via a Wireless Access Point (WAP) which broadcasts on a specific radio frequency channel, typically on the 2.4GHZ spectrum or the 5-6GHz spectrum. This can then be accessed by any device within range and that has a compatible Network Interface Card (NIC).

However, network interference from other devices within range which are also using the same frequency is problematic, as seen in areas like football stadiums. To minimise this, admins can use **channel bonding** to pool multiple channels into a wider band, thereby increasing available bandwidth, and using Quality of Service (QoS) which prioritises different types of network traffic based on their importance, such as VoIP calls which require low latency.

### Mesh networks
Mesh networks are becoming more common with the widespread use of wireless technology. Each node in a mesh network has a connection to every other node, by transmitting data across any intermediate nodes, and only one node needs an Internet connection and all other nodes can share this, creating a redundant and flexible network architecture. These networks can become big enough to cover entire cities.



|Advantages|Disadvantages|
|--|--|
|No cabling costs: mesh networks can be wireless|Higher implementation and maintenance costs, especially for smaller businesses with limited resources|
|Network scaling and setup can be easier without added cabling allowing for easy expansion, as new nodes are automatically added to the network|Redundant connections can add to costs and complexity of the network, requiring increased planning and network management|
|No central switch, resulting in faster communication and less chance of traffic congestion through direct routing|Limited range, especially with wireless signals, or expensive cables. More nodes and APs will be required to extend coverage, increasing costs|
|Self-healing: with more nodes, the faster and more reliable the network becomes (one blocked route can just use other routes)|  |

  
### Packets, Packet Switching and Routers

Packet switching requires routers to direct the packets to their destination. A router is a network device that receives packets and forwards data packets from one network to another.

Each router stores data about the available routes to the destination node. It looks up the destination IP address in its routing table to find the best router to forward the packet to.

> Each transfer between routers is known as a **hop**

Routers will then continue to forward the packet until it reaches its destination node.

A packet is a segment of data that needs to be sent. They are made up of the trailer, payload and header.

> Packets are deliberately kept small to ensure that individual packets do not take excessive time to transfer preventing other packets from moving. 

However, they should not be too small as the additional data added makes data transfer inefficient as unnecessary headers and trailers would be required each time.

The **trailer** contains the **end of packet flag**, as well as **error checking components** like checksums or Cyclical Redundancy Checks (CRCs), are calculated at the origin and destination end. If they do not match, the data has become corrupted and is refused and a new copy is requested to be sent again.

The payload is the actual data that needs to be sent, varying in size from 500 to 1,500 bytes.

The packet header contains the IP addresses of the recipient and the sender, so that it can be directed appropriately across the network. The packet number and overall number of packets in the transmission is attached to assist in reassembling the data at the receiving end. The Time to Live (TTL), or hop limit, is also included.

> This is all dictated by the Transmission Control Protocol (TCP).

### Circuit switching

On the other hand, **circuit switching** is a communication method in which a dedicated physical path is established between two devices for the duration of the communication session, even when no data is being transmitted.

This doesn't really work for the billions of devices that are connected. The complete circuit can't be shared by other devices, so how would this work when downloading a 10gb file? You'd have to wait for the entire download to finish to start doing something else. This makes circuit switching only really useful for realtime scenarios like phone calls when a consistent and uninterrupted connection is required. (But, if one point in the circuit fails, the entire phone call will as data cannot be rerouted, unlike packet switching)

> In summary, **packet switching** divides data into packets and transmits them over the network to their destination, where they are reassembled. Packet switching is more efficient and flexible than circuit switching, and is thus more widely used.


### Protocols and Standards

Network hardware devices include routers, switches, hubs, and access points, among others. These devices connect computers and other devices in a network, allowing them to communicate and share resources.


Protocols and standards establish guidelines and rules for communication between devices on a network. Common protocols include TCP/IP, HTTP, and FTP, while common standards include Ethernet and Wi-Fi.

### [tbd] The TCP/IP Protocol Stack

The TCP/IP protocol stack consists of four main layers. From the top of the stack to the bottom, they are:

#### Application layer

 It specifies what high-level **protocol** needs to be used in order for applications to communicate with each other over a network.

- For example, if the application is a browser then it would select a protocol such as HTTP
- Email clients would use SMTP and POP3/IMAP
- File transfer programs may use FTP.

This specifies the rules of what should be sent, rather than the actual data/payload.

#### Transport layer

The transport layer uses the **Transmission Control Protocol** (TCP) as well as the **User Datagram Protocol** (UDP) to establish an end-to-end connection to the recipient. 

Application data from the above application layer often has large filesizes, such as uploading a 10GB video file, and thus must be split into segments, or TCP packets, and then numbers these sequentially. 

The port number (a 16 bit number) is also added in this layer. Servers listen on specific well-known port numbers like 443 for HTTPS for oncoming connections. On the client end, ephemeral port numbers are assigned so received data can be passed up from the transport layer to the application layer to the correct, unique application.

> If there are 65,535 TCP connections or more at a time all accessing some data, new connections cannot be established as this is the 16-bit limit for the transport layer!

Finally, sockets, or TCP endpoints, are also assigned on this layer. These are made up of the IP address and the port number, such as 83.231.132.94:25565. These sockets are either the source or the destination, for example, accessing ibaguette.com will make the accessor (client) the source, and the server's port 443 will be the destination, and send the data to the client. The destination and source ports on the server and client will then swap.

> Sockets can be combined with DNS to go to a specific port on a website. For example, mc.ibaguette.com:8123 could initiate a HTTP connection to a server with a specific port of 8123 rather than the default HTTP port of 80.

**Bonus Points for A***
TCP ensures that no data is received erroneously or is lost during transport, so packets can be retransmitted and all must me acknowledged by the receiving device. This security adds delays and additional processing overhead. UDP does not add any of these error checks, but is more suited towards realtime applications such as Discord Voice Chats, whereas text chat it uses TCP.

For this reason, UDP is deemed as the unreliable protocol and  it is "send and forget", with packets arriving out of order or not at all. TCP is a sequential stream but is slower due to ACK packets (acknowledgement) and can cause packets to queue and ping spikes. TCP is susceptible to ping spikes, and UDP is susceptible to packet loss (hence why in online games you get packet loss and ping spikes - they use *both* depending on what's being requested!)

#### Internet/Network layer

Uses the Internet Protocol to address packets with a destination and source IP address in each packet's header. Other data fields in the header may include the Time To Live (TTL) or maximum packet hops, and the header checksum.

It's worth noting that the IP has no guarantee of correct transmission, and it is up to TCP in the transport layer to do this.


#### Link/Data Link/Network Interface layer

  

Each layer has its own specific tasks in transmitting data over a network.


### Transferring Files using FTP

FTP (File Transfer Protocol) is a standard protocol used to transfer files. It is widely used for uploading files to and downloading files from servers with little overhead.

### Email Servers

An email server receives incoming messages and stores them until the recipient retrieves them. It also sends outgoing messages to the intended recipients. Email servers use various protocols such as SMTP, POP, and IMAP to transmit and receive email messages.


## 1.3.4 Web technologies
![enter image description here](https://cheatsheet-assets.ibaguette.com/alevel/compsci/SpecContent-WebDev.png)

How to add an external stylesheet:


```html
<link  href= “nameofstylesheet.css”  rel= “stylesheet”  type=“text/css”>
```

Changing the attributes of an HTML element:

```js
chosenElement = document.getElementById(“example”); // Gets element with id "example" from the DOM
chosenElement.innerHTML = “Hello  World”; // Changing the displayed HTML content
```

  

# [tbd] 1.4 Data types, data structures and algorithms

  
# [tbd] 1.5 Legal, moral, cultural and ethical issues



# Paper 2

# 2.1 Elements of computational thinking

## 2.1.1 Thinking abstractly

## 2.1.2 Thinking ahead

## 2.1.3 Thinking procedurally


## 2.1.4 Thinking logically

## 2.1.5 Thinking concurrently

# 2.2 Problem solving and programming




# Credits + Footnotes

[1] Andy aka (https://electronics.stackexchange.com/users/20218/andy-aka), Difference between a bus and a wire, URL (version: 2014-01-11): https://electronics.stackexchange.com/q/96149

[2] _Teach-ICT A Level Computing - ALU_. [online] Available at: https://www.teach-ict.com/as_as_computing/ocr/2016/AS2016/1.1.1/alu_registers/miniweb/pg8.htm#:~:text=Arithmetic%20Logic%20Unit%20(ALU) [Accessed 22 May 2023].

[3] Yes I know it should be GPUs for parallel processing but you can still do it on your CPU if you really want to

