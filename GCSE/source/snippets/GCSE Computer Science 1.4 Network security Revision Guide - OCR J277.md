[< Back to all GCSE Cheat Sheets](https://ibaguette.com/cheatsheets/gcse)


> Looking to ace your exams with easy-to-access, free 1:1 advice from exam survivors? Join the [Baguette Brigaders Discord server](https://ibaguette.com/discordcs), home to a friendly community of students, teachers and professionals who can answer any of your questions and give you valuable exam tips, tricks and insights! 

Latest update: 23/09/2023 20:19

---

# 1.4 - Network security

## 1.4.1 Threats to computer systems
![Your device cannot load this image - it may be blocked.](https://cheatsheet-assets.ibaguette.com/gcse/compsci/1.4_and_1.4.1_Network_Security_-_threats_to_systems_and_networks.png)

### Malware
Malware is an umbrella term for malicious software designed to compromise a system.

**Viruses** - often in another file. When ran, they replicate and can spread throughout a network. They usually delete or modify other data, including personal documents or critical system files. Can upload your files to a server.

**Worms** - similar to viruses with the ability to replicate and spread, but are often completely standalone programs which exploit vulnerabilities in a system, not requiring a host file. Typically distributed by emails. They may not initially damage systems, but try and spread rapidly to other systems.

**Trojans** - a malicious application pretending to be a useful application. A user must run it to spread.

**Spyware** - monitor a user's activities and sends them back to a server. This could include websites visited, passwords, usernames and applications opened. This can  then be used by advertising agencies to market more targeted ads to a user.

> Adware is the same as this but used to serve more relevant ads to a user. Becoming more common on mobile devices.

**Ransomware** - arguably the worst type of malware. Encrypt documents, and require a ransom payment such as Bitcoin (due to its anonymity), to decrypt the data. Often will delete data after a certain time if not paid. Often won't decrypt the data even if paid. Usually deletes copies of data and locks the system by taking over how the system boots. Very easily spreads through the network if ran as administrator. (user access levels useful here!)


### Social engineering
e.g. phishing, people as the ‘weak point’ 

Emails which try to deceive users to give their personal details. Designed to look like a genuine email from a useful service, like a bank, and will have a link to a website (still looking like a real bank) where there will be a username/password field, and maybe even credit card numbers. Of course, when you enter the data, it's just sent to someone else.


### Brute-force attacks 

A program is used to systematically try all possible combinations of a username and password until the correct one is 'cracked'.

### Denial of service attacks

Where a computer sends loads of requests to a server to overwhelm it. The server will become overwhelmed and legitimate requests will no longer work.

Multiple computers doing this concurrently is called a distributed denial of service attack, or DDoS. They usually only last a few seconds but send tens of millions of requests.

### Data interception and theft 

Data interception is when data is intercepted while being transferred, using a special software called a 'packet sniffer'. It can identify what packets are doing and their destination across the Internet or in a network. They are usually difficult to detect, as the data still reaches its intended destination. The information gathered is sent back to a server where it can be seen by malicious entities.

### SQL injection

You don't need to know what SQL actually is, but rather the process of it. SQL is widely used in databases to ensure their structures are maintained and to quickly read a value in it. SQL code can be entered as a data input in, for example a username/password field, which can cause errors. Even worse, someone can input something like `FROM * PRINT Passwords` to get a list of everyone's passwords if unencrypted!



## 1.4.2 Preventing vulnerabilities

### Penetration testing

Pen testing is when authorised users (including white hat hackers) probe a network for weaknesses, and attempt to exploit them. It is used to check how resistant a network is against malicious attacks by trying to identify security issues before they are exploited. White hat hackers or organisations who attempt to find vulnerabilities can get paid hundreds of thousands for finding issues!



### Anti-malware software

Anti malware detects installed malware, prevents malware from being installed and removes malware from a device. It scans through all files that are run or modified and sees if it matches a list of known malicious files. However, if the antimalware software is not updated, it may not be able to correctly identify new, zero-day threats which the system is exposed to.


### Firewalls 

Firewalls monitor traffic and allow it to pass through or deny it. It can be placed in front of the network, or can be placed in front of an individual device. Legitimate programs such as a game server requires the firewall to allow a program or port (e.g for a Minecraft Java server the port is 25565) to communicate with other devices. Firewalls can be hardware or software based, and as most things hardware-based firewalls are more effective but cost more than software-based implementations.


### User access levels 

User access levels only allow a user to do certain things, including running software, accessing the Internet, installing new software and editing the accounts of other users. In a school, students will be denied the access to managing other students and software, but will be allowed to access the Internet. Teachers will be allowed to manage students, and maybe the software installed. Finally, admins will be able to access everything.

This reduces the risks as if a student downloads a virus, it will not be able to access any other device, as it is effectively isolated from managing network devices. However, if an admin gets infected, it would mean disaster for the network...

### Passwords 

Passwords are used to verify a user's identity. Secure passwords could include a password policy to ensure it is secure and difficult to guess, and one changes regularly. They should ideally be unique across different websites, so if one website account is compromised, the same passwords cannot be used to login to your account on another site which you might want to be kept secure, like a bank.


### Encryption 

The process of changing data from plaintext to ciphertext so it cannot be understood. For example if a database containing passwords gets accessed by a hacker, the passwords themselves are not visible and the user's private key is still needed to decrypt them. Smart, right?


### Physical security

Server rooms should be locked and only authorised people such as the admins can unlock them. Obviously, if someone gets into a server room, they can nick all the drives containing users' information. Also, don't write down your passwords on a sticky note, someone can just take a picture of them...


---

This is an snippet from our complete GCSE Computer Science Cheat Sheet. 

For the full version, including comprehensive coverage of both Paper 1 and Paper 2, along with coding practice examples, visit [https://ibaguette.com/cheatsheets/gcse](https://ibaguette.com/cheatsheets/gcse) and select "Computer Science: Paper 1 and 2."

Feel free to share these revision resources with friends, family, and teachers!

> Created with 💕 by Draggie
