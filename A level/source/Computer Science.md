


  
[< Back to A level Cheat Sheets](https://ibaguette.com/cheatsheets/alevel)

# Ah yes more computer science!


**⚠ Note: This is severely in development. Please check back later. I'm currently prioritising the Geography A level Cheat Sheet.**

**Unfinished sections are marked with [tbd] and there may be general issues and typos. ⚠**

[Last update: 22/05/2023 18:47](https://gist.github.com/Draggie306/1072270b844cda3e271d6f484aa9a976)

✅ Note: This file is synced with [this repository](https://github.com/Draggie306/CheatSheets). You'll always be on the latest version.

Use a PC/device with a large screen to see the Table of Contents on the left-hand side to quickly navigate through this document.

> Discuss with other students, developers, educators and professionals in the [Baguette Brigaders](https://discord.gg/GfetCXH) Discord server!

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

### Assembly language + Little man Computer (LMC)

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



## 1.2.4 Types of Programming Language



# [tbd] 1.3 Exchanging data

## 1.3.1 Compression, Encryption and Hashing

## 1.3.2 Databases

## 1.3.3 Networks

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

**Advantages:**
- No cabling costs: Mesh networks can be wireless, eliminating the need for costly cabling and making it easier to set up and scale the network.
- Faster communication: Since data packets do not need to travel via a central switch, communication can be faster and more efficient, especially in larger networks where traffic can become congested.
- Self-healing: The more nodes that are installed, the faster and more reliable the network becomes, since one blocked connection can easily be circumvented by another route. In this respect, the mesh can be described as ‘self-healing’.
- Easy expansion: New nodes are automatically incorporated into the network, making it easier to add new devices and scale the network.

**Disadvantages:**
- Higher implementation cost: Building and maintaining a mesh network can be difficult and time-consuming, making it less desirable for smaller networks or businesses with limited resources.
- Redundant connections: The chance of redundant connections is high, adding to costs and complexity. Careful planning and management is needed to avoid unnecessary connections and reduce costs.
- Limited range: Mesh networks are typically limited to a certain range, depending on the strength of the wireless signal. This means that additional nodes or access points may be required to extend coverage, which can increase the cost and complexity of the network.

  
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

> On the other hand, **circuit switching** is a communication method in which a dedicated physical path is established between two devices for the duration of the communication session.

> In summary, **packet switching** divides data into packets and transmits them over the network to their destination, where they are reassembled. Packet switching is more efficient and flexible than circuit switching, and is thus more widely used.

  

### Protocols and Standards

Network hardware devices include routers, switches, hubs, and access points, among others. These devices connect computers and other devices in a network, allowing them to communicate and share resources.

  

Protocols and standards establish guidelines and rules for communication between devices on a network. Common protocols include TCP/IP, HTTP, and FTP, while common standards include Ethernet and Wi-Fi.

### [tbd] The TCP/IP Protocol Stack

The TCP/IP protocol stack consists of four main layers.

  

1. Application layer

2. Transport layer

3. Internet layer

4. Data Link/Network Interface layer.

  

Each layer has its own specific tasks in transmitting data over a network.

  
  

#### Application layer

- The application layer is based at the top of the stack. It specifies what protocol needs to be used in order to relate the application that’s being sent.

- For example, if the application is a browser then it would select a protocol such as HTTP, POP3, FTP

### Transferring Files using FTP

FTP (File Transfer Protocol) is a standard protocol used to transfer files. It is widely used for uploading files to and downloading files from servers with little overhead.

### Email Servers

An email server receives incoming messages and stores them until the recipient retrieves them. It also sends outgoing messages to the intended recipients. Email servers use various protocols such as SMTP, POP, and IMAP to transmit and receive email messages.


## 1.3.4 Web technologies


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


# Credits + Footnotes

[1] Andy aka (https://electronics.stackexchange.com/users/20218/andy-aka), Difference between a bus and a wire, URL (version: 2014-01-11): https://electronics.stackexchange.com/q/96149

[2] _Teach-ICT A Level Computing - ALU_. [online] Available at: https://www.teach-ict.com/as_as_computing/ocr/2016/AS2016/1.1.1/alu_registers/miniweb/pg8.htm#:~:text=Arithmetic%20Logic%20Unit%20(ALU) [Accessed 22 May 2023].

[3] Yes I know it should be GPUs for parallel processing but you can still do it on your CPU if you really want to

