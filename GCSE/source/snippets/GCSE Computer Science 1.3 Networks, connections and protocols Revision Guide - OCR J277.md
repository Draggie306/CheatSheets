[< Back to all GCSE Cheat Sheets](https://ibaguette.com/cheatsheets/gcse)


> Looking to ace your exams with easy-to-access, free 1:1 advice from exam survivors? Join the [Baguette Brigaders Discord server](https://ibaguette.com/discordcs), home to a friendly community of students, teachers and professionals who can answer any of your questions and give you valuable exam tips, tricks and insights! 

Latest update: 23/09/2023 19:58

---

# 1.3 - Networks, connections and protocols

## 1.3.1 Networks and topologies

A network's topology is how different nodes (a device connected to a network) are arranged in it. All nodes are either wired or wirelessly connected.

Some useful key terms which you should probably know:

**Router**: directs and receives packets incoming/outgoing to/from the Internet to devices in a private network via IP addresses. It connects networks together - your home LAN to the Internet, or a WAN. Nodes connected to it are given private IP addresses (192.168.1.x) and has a public IP address. (You can see your public IP [here](https://whatismyipaddress.com/).)

**Switch**: A device which connects devices on a computer network by using packet switching to receive and forward data to the destination device. It uses MAC addresses to forward data at the data link layer. (MAC (Media Access Control) addresses are used to identify a device on the local network assigned by its Network Interface Card)

**WAP**: wireless access point. Usually built into the switch, or physically connected by wire to it. Unless there's a repeater which would mean WAPs are connected to other WAPs 


**Packet switching**: a method of breaking up data, and sending it using the most efficient route. For example, if you send an image, it will be broken up into 'packets' of around 1000 bytes each (if the image is 1mb then there'll be 1000 packets) and then sent. To ensure data is not corrupted on route to the destination, each packet contains the following in a header: the IP address it is going to , the IP address it has come from, the sequence number of the packet, the number of packets in the whole communication, and error checking data

**DNS**: Domain Name System. How domain names are translated to IP addresses. When you go to [ibaguette.com](ibaguette.com), your device will make a request to a DNS server asking for the actual IP address to connect to, such as 172.67.139.203. If a DNS server does not contain the IP address, your request will be forwarded to a bigger DNS server, and finally a root DNS server containing every single domain's IP address. 

The two topologies which you need to know are:

### Star topologies
- Used in many networks
- Used by client-server networks - all data sent from clients pass through (a) central server(s).
- All computers can communicate to each other through the central switch.

Advantages include:
- If a node or its connection fails, other nodes can still communicate
- New nodes can be added by connecting it to the switch
- Any incoming data from the Internet cam be forwarded directly to the intended node.
- Fast data transfer to the hub as each wire isn’t shared with other computers

Disadvantages:
- The entire network will go down if the switch fails
- Can be expensive to set up - requires additional hardware such as the central switch and lots of network cables

They are used anywhere, from company buildings to your home right now. Your 'router' is currently acting as the switch, router and WAP for all the nodes connected in your house.

### Mesh topologies

Full meshes are when every device is connected to every other device. Partial meshes are when every device is connected to at least another device, which shares a connection with other devices (the original device is indirectly connected with every other device)

Advantages:
- No single point of failure – resilient to attacks
- Messages can be received more quickly if the route to the intended recipient is short
- Expansion and modification can be done without disrupting the network
- Data can be transmitted from different devices simultaneously

Disadvantages:
- Can involve redundant connections
- Expensive to install cabling if using wired connections
- Network maintenance and administration is difficult
- Full mesh networks are impractical to set up because of the high number of connections needed


## 1.3.2 Wired/wireless, protocols, networks

*Advance information: The following will be directly assessed:*
- Modes of connection
- Encryption
- IP addressing and MAC addressing
- Standards
- Common protocols

![Your device cannot load this image - it may be blocked.](https://cheatsheet-assets.ibaguette.com/gcse/compsci/1.3.2_Wired_and_wireless_networks_protocols_and_layers.png)

A network is a group of two or more computers connected together to communicate. There are 2 ways for them to communicate: wired (ethernet) and wireless (Wi-Fi, Bluetooth).

It may seem obvious but benefits for being in a network include accessing and sharing resources, sharing hardware like printers, communications via email, text or video, and roaming profile (can access your files from any computer in network). 

In larger networks, antiviruses and firewalls can be implemented network-wide instead of on individual computers, improving security and cost effectiveness. 

Admins can monitor what people do on these networks, and give them rights (User Access Levels) to restrict access. However, networks can cost a lot as equipment like dedicated cables or switches are needed to communicate, and malware can spread more quickly if a network has poor security.

### IP and MAC addressing, standards
The 32-bit IP address system is also known as IPv4. It allows for over 4 billion addresses (2^32 = 4,294,967,296 addresses). We're running out very quickly.
> IPv4 addresses are just numbers, like `248.228.179.104`. Each number separated by decimals cannot be over 255, as that's the 8 bit limit.

IPv6's adoption is increasing now. IPv6 uses 16 bits for each section of the address, creating a 128-bit address. This allows almost 80 octillion unique IP addresses.
> IPv6 addresses can be letters as well. They are separated by colons, such as `8cfb:3abd:dde5:ca41:e080:0328:6e86:5007`. Each part separated by colons can be from 0000 to ffff. This means that there are 1,028x more addresses than IPv4. That's 340,282,366,920,938,463,463,374,607,431,768,211,456 addresses. 
> (no, you don't need to remember that)

A MAC address is different to an IP address - it is assigned to devices within a network. It can't be changed by the user, as it's on the network card on the device.

Remember, a **protocol is a set of rules that governs the transmission of data**. For example, HTTPS.

Standards allows hardware/software to interact across different manufacturers/producers. For example, HDMI or USB-C (love you Apple)

### Encryption

Encryption is the process of changing a message so that it can only be understood by the intended recipient, through the use of a public and a private key (also known as asymmetric encryption). A public key can be given to anyone - it can be used to encrypt a message. but it cannot decrypt a message - only the second key (the private key) can do that. The message will remain encrypted unless the private key is compromised, either by giving it out or by brute forcing it.

Unencrypted messages are referred to as plaintext messages. Encrypted messages are known as ciphertext.

https://www.bbc.co.uk/bitesize/guides/zr3yb82/revision/4


### Common protocols

You need to know a few common protocols.
- **TCP/IP (Transmission Control Protocol/Internet Protocol)** 
	- Used for accessing the Internet. Set of rules describing how packets are sent. All packets have source IP, destination IP, packet reassembly sequence, the actual data (or payload), and error checking details.
-  **HTTP (Hyper Text Transfer Protocol)** 
	-  Sends web pages from the webserver to your browser.
-  **HTTPS (Hyper Text Transfer Protocol Secure)** 
	-  Sends web pages **securely encrypted** from the webserver to your browser. Needed on sites with private information like banks.
- **FTP (File Transfer Protocol)** 
	- Transfer files. You can upload a file to a FTP server and someone else can download it.
- **POP (Post Office Protocol)** 
	- Used to download email to device, then deletes from server.
- **IMAP (Internet Message Access Protocol)** 
	- Used to download email from the server, but caching it on-device. Doesn't delete from web server.
- **SMTP (Simple Mail Transfer Protocol)**
	- Used to send the email

### Layers

Finally, you need to know how layers are used in protocols, and the benefits of using layers; for a teaching example, please refer to the 4-layer TCP/IP model.
> Not requires: Knowledge of the names and function of each TCP/IP layer

Layering means the breakdown of the sending of messages into separate components and activities, with each component handling a different part of communication. Therefore, it allows standards to be put in place and simply adapted as new hardware and software is developed.

[See this Bitesize page if you want to learn more, but it's not required](https://www.bbc.co.uk/bitesize/guides/z666pbk/revision/5)

- Application layer - applications and protocols.
- Transport layer - breakdown into packets
- Network layer - adds sender and receiver's IP addresses to packets and sends over network
- Data link layer - the NIC and drivers are here and send it to another computer

---

This is an snippet from our complete GCSE Computer Science Cheat Sheet. 

For the full version, including comprehensive coverage of both Paper 1 and Paper 2, along with coding practice examples, visit [https://ibaguette.com/cheatsheets/gcse](https://ibaguette.com/cheatsheets/gcse) and select "Computer Science: Paper 1 and 2."

Feel free to share these revision resources with friends, family, and teachers!

> Created with 💕 by Draggie
