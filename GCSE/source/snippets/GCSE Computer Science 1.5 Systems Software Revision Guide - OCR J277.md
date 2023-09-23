[< Back to all GCSE Cheat Sheets](https://ibaguette.com/cheatsheets/gcse)


> Looking to ace your exams with easy-to-access, free 1:1 advice from exam survivors? Join the [Baguette Brigaders Discord server](https://ibaguette.com/discordcs), home to a friendly community of students, teachers and professionals who can answer any of your questions and give you valuable exam tips, tricks and insights! 

Latest update: 23/09/2023 20:21

---

# 1.5 Systems Software


## 1.5.1 Operating systems

![Your device cannot load this image - it may be blocked.](https://cheatsheet-assets.ibaguette.com/gcse/compsci/1.5.1_Operating_systems_as_part_of_systems_software_unit.png)

An operating system is a suite of programs that controls the general operation of a computer, and provides an easy way for us to interact with computers and run applications.

OSes can control hardware components, provide a UI, manage files in a file system, manage memory, manage users, and even provide multitasking. Examples are Windows and Linux in desktops, and iOS and Android for mobile devices.

### User interfaces

UIs are (is a) program(s) that allow a user to interact with the computer. The GUI is the most popular as they include desktops and icons for ease of use, with menus and a mouse to interact with it. They are easy to use but use more processing power. CLIs are text based programs (command prompt in Windows) which are very powerful, and require little processing power to display due to their simplicity. However they are difficult for most people to use. Mobile UIs are basically the same as GUIs but replace the mouse with touch and gestures to navigate.

### Multitasking & memory management

Multitasking is a classic example of OS' evolution over the years. With CLIs a user could only do one process. Now, videos can be streamed while uploading documents to the cloud. This requires an OS to support it (duh) and enough memory to run multiple processes. The OS manages memory use to prioritise running processes, and when another process closes, this extra available memory gets allocated to the running program. 

### Peripherals and drivers

Peripherals are hardware devices physically connected to a computer like mice, monitors, printers, etc etc (you knew that right... RIGHT?!?)

OSes use drivers to control peripherals. Data is transferred between devices and the CPU, and this needs drivers to manage the interactions between the user and the computer. As drivers contain instructions on how to manage a device, every device connected will have its own associated driver. Any device can be used with a computer, as long as standards (wrote about above) are met and a driver is available. Drivers are frequently updated to improve the hardware device's performance or to fix a bug.
> However, if a driver update goes wrong then it will take some extra effort to fix it, as you can't interact with the hardware with the bad driver...


### User and file management

The OS controls...

... user management functions, e.g.: 
- Creating, modifying, and deleting of an account 
- Access rights (admin, or normal user)
- Logging actions

... handling files
- Create, modify and delete files
- Allocating to folders 
- Moving and renaming between folders 
- Copying and pasting
- Searching
- Access rights (read only)
- Sorting (date modified, name)
- Overall file system for organising (NTFS)



## 1.5.2 Utility software

Utility software helps maintain the system. It includes programs involving encryption software, defragmentation and data compression tools. Computers often come with these software built in (even part of the OS now) to keep the device running smoothly.

### Encryption software

Encryption software is used to scramble the contents of files to everyone but authorised users who have the decryption/private key. It can encrypt individual files or even the entire disk! This is useful for government organisations or banks which have private and sensitive data stored. If someone steals a disk, what can they do with the data if they can't read it?

### Defragmentation software

If you know what defragging a hard disk is, then you can skip this.

If you don't, read below:

Hard disk drives are separated into thousands of tracks, with thousands of segments in these tracks. When a file is written to a disk, it is written to the next available segment. Let's say you're downloading a 30GB game - and you pause it halfway through for an hour, and you download some music. Then, on the hard drive, you will have some of the game, then some music. Let's say you finish the download. Then, there will be some game, some music, and the rest of the game. Oh, also, how about some programs were updating in the background and it didn't say! Then, there will be loads of 'fragmented' parts of games, programs and music, all jumbled around near each other on the disk!

This is terrible for the computer's performance, as the head has to go to loads of physically distanced parts of the disk to read and write to. Defragging moves the files from all these parts to one consecutive track, where possible. This will load your games up a load faster!
![Your device cannot load this image - it may be blocked.](https://cheatsheet-assets.ibaguette.com/gcse/compsci/hard_drive.png)
*What a hard drive is actually made from. Remember there can be several platters on a large drive!*

##### NOTE: Solid state drives' speeds are not affected by fragmentation. Do NOT EVER try and defrag a SSD! 


### Compression software

Compression software reduces the size of a file on secondary storage to make it easier to send (as lower file size = lower packets needed) and allows more files to be stored (as lower file size = more free space). Note that most compression will need to be lossless, as you can't just get rid of a bit of a program and hope it'll work. Examples of compressed data are ZIP files.


### Backup software

Now this isn't in the specification, but I think it's worth knowing about.

Backup software takes a copy of the files on a computer to either a high capacity secondary storage device (usually removable so a USB drive or big HDD) or uploaded to the cloud. 

It can be a full backup or an incremental backup which takes place. A full backup is making a copy of every single file on a device, so will take a lot of time and storage space. Incremental backups only take a copy of new and modified files since the last backup, so they're cheaper and faster. Usually admins will take one backup at the start then daily incremental backups.

Remember, it will take a long time to download from the cloud, so if there's a question on this then remember that. Then again, cloud documents can be accessed from anywhere...

---

This is an snippet from our complete GCSE Computer Science Cheat Sheet. 

For the full version, including comprehensive coverage of both Paper 1 and Paper 2, along with coding practice examples, visit [https://ibaguette.com/cheatsheets/gcse](https://ibaguette.com/cheatsheets/gcse) and select "Computer Science: Paper 1 and 2."

Feel free to share these revision resources with friends, family, and teachers!

> Created with 💕 by Draggie

