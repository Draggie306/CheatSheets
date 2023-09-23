[< Back to all GCSE Cheat Sheets](https://ibaguette.com/cheatsheets/gcse)


> Looking to ace your exams with easy-to-access, free 1:1 advice from exam survivors? Join the [Baguette Brigaders Discord server](https://ibaguette.com/discord), home to a friendly community of students, teachers and professionals who can answer any of your questions and give you valuable exam tips, tricks and insights! 

Latest update: 23/09/2023 19:04

---

# 1.2 - Memory and Storage

## 1.2.1 Primary storage

Primary storage consists of RAM (random access memory) and ROM (read only memory). ROM is non-volatile (retains its data after being powered off) and is usually often now only used to boot the computer, providing for the BIOS or UEFI.

Memory/RAM is small in size compared to secondary storage, but is much faster as it does not have moving parts or have to retain that information. It is usually from 4-16GB in size. The more RAM a computer has, the more programs and instructions it can store simultaneously.

Virtual memory is needed in systems. Virtual memory is a area of secondary storage which is used as an overflow for when memory is filled up. When RAM is full, data which would have gone to memory goes to an area of the disk drive. However, virtual memory is much slower than even the fastest SSDs, let alone HDDs with their moving parts.


## 1.2.2 Secondary storage

Secondary storage is non-volatile, meaning it retains the data written to it even when offline.

A HDD (magnetic) has high capacity and involves flipping magnetic polarity to store bits. It is fairly fast to access. A SSD (solid state) has high capacity and involves trapping electrons to store bits. They are extremely fast to access. A USB drive (solid state) is tiny in comparison but very portable so is useful for transferring files between people and their computers. Optical storage devices like CDs and DVDs use a laser to scan the tracks, and when light reflects back it will either reflect from 'lands' - representing 1, or does not reflect in 'pits' - representing 0.

Embedded systems may not need these as the instructions to run them are usually in ROM. For example, a watch does not need to edit the time as it runs all the time.

## 1.2.3 Units

The basic unit is the bit. It represents 1 or 0. Above this is the nibble - or 4 bits. Above this again is the byte, or 8 bits.
A kilobyte is 1000 bits.
A megabyte is 1000 kilobytes. (1,000,000 bits)
A gigabyte is 1000 megabytes. (1,000,000,000 bits)
A terabyte is 1000 gigabytes. (1,000,000,000,000 bits)

An image is usually be 500kb. Therefore, on a 2GB USB stick, 2000 images.

Videos can be 100 megabytes, so 20 image can be stored.

Sound file size = sample rate x duration (s) x bit depth 
Image file size = colour depth x image height (px) x image width (px) 
Text file size = bits per character x number of characters

## 1.2.4 Data storage


![Your device cannot load this image - it may be blocked.](https://cheatsheet-assets.ibaguette.com/gcse/compsci/1.2.4_Data_storage.png)
![Your device cannot load this image - it may be blocked.](https://cheatsheet-assets.ibaguette.com/gcse/compsci/1.2.4_Data_storage__part_of_1.2_Memory_and_Storage.png)
*There's a lot in this topic (including the things I find the hardest but shh)*

### Denary to binary
To convert a denary number into binary, write out all the base 2 numbers in a row (128, 64, 32, 16, 8, 4, 2, 1). Then, get your number, let's say 253, and subtract it from the largest. You'd then get 125. Write '1' below the '128' and repeat on the next numbers. If when you subtract it it's negative, write a zero below and then do the next smallest number.

### Adding binary digits
0 + 0 = 0
0 + 1 = 1
1 + 1 = 0, carry 1
1 + 1 + carried 1 = 1, carry 1


### Denary/binary to hex

Hex(adecimal) is a base 16 system to simplify binary representation. A hex digit can be any of these: **0 1 2 3 4 5 6 7 8 9 A B C D E F**.

Each hex digit represents a 4 digit binary sequence. 

0 in hex is 0 in denary, and 0000 in binary.

Remember how to convert denary to binary? Well, firstly convert the denary into binary, then split the 8-bit digit binary number into nibbles of 4 bits each. Then, add 1 to 0000 (binary) whilst incrementing hexadecimal by 1. Let's go through an example.

1) Convert 103 into hexadecimal. [2 marks]

1. Convert 103 into binary.
	= 01100111
2. Split into nibbles
	= 0110 0111
3. Work out hex of nibble 1
	= 6
4. Work out hex of nibble 2
	= 7
5. Put together
	= 67

The other way is to divide the denary number by 16 until you can't (here, 6 times). Then get the remainder (here, 7). Then put together. Magic ✨


2) Convert 212 into hexadecimal. [2 marks]

Try and work it out. The answer is below 'Binary shifts' below...

![Your device cannot load this image - it may be blocked.](https://cheatsheet-assets.ibaguette.com/gcse/compsci/Denary_to_binary_to_hex_quick_drawn_table_lmao.jpg)
*I guarantee you this will be in my exam paper lol*

### Hex to denary/binary

You can reverse the above. Personally, I'd write down the hex digits, and convert them into nibbles where I can then easily convert into denary.


### Binary shifts

A shift of 1 to the left means multiply by 2.
A shift of 3 to the left means multiply by 2^3 = 8
A shift of 1 to the right means divide by 2
A shift of 3 to the right means divide by 2^3 = 8

left = multiply, right = divide.


Answer to 2) Convert 212 into hexadecimal. [2 marks]

1) to binary = 11010100
2) nibbles = 1101 0100
3) nibble 1 = D (remember it goes into ABCDEF)
4) nibble 2 = 4
5) **answer = D4** 

### Characters

Characters are also represented as binary. In ASCII, there are 8 bits, so that's 255 characters possible. In Unicode, there are 16 bits, or more, allowing it so represent every character and emoji in the world - over 2 million.

A in binary is 0100 0001.
Character sets are ordered logically, so B is one more than A:
B in binary is 0100 0010.


### Images

An image is represented as a series of pixels, again, represented as binary. Each pixel has a specific colour, represented by a specific code (can be a hex value).

The image's size and quality can be affected by the colour depth and resolution. 

A black and white image has a bit depth of 1. This means it can only represent two colours - 2^1^ = 2 colours. An image which uses 10 bit depth can represent 2^10^ = 1024 colours. Colour depth = range of colours available.
> Colour depth is interchangable with bit depth.

Size, or dimensions, is how many pixels the image contains, in terms of height by width. 1920x1080 is a classic example - a screen with these dimensions would have 2,073,600 pixels.

The size of an image file can be estimated using:
-   the image height in pixels
-   the image width in pixels
-   the colour depth per pixel

If a 1920x1080 image, with a colour depth of 24 bits was to be saved:

1920x1080 = 2,073,600
2,073,600 x 24 = 49,766,400 bits
divided by 8 = 6,220,800 bytes
divided by 1000 = 6220.8KB / 6.2208 MB

Resolution is used to describe how densely packed the pixels are. A high resolution would have more pixels, but will be larger in size. A low resolution image will look like Minecraft when enlarged, but has a low file size.

Files contain extra data called metadata. Metadata includes data about the file itself, such as file type, date created, author, geolocation and camera.

An image file also includes **metadata** about the image data itself, such as the height and width of the image, the resolution and the colour depth. This allows for software to more easily  interpret and decode the image file correctly, and output it to a monitor, for example.


### Sound

Sample rate is the number of samples recorded in a second.  It is measured in hertz. The higher the sample rate, the closer the recorded digital signal is to the original, analogue sound. An audio file on a CD is usually recorded at 44.1KHz which is a compromise between low file size and high quality.

Bit depth is the number of bits used to record each sample. The higher the bit depth, the more accurately the sound can be recorded but the higher the file size. 

Bit rate is the amount of data processed per second. It is calculated by sample rate x bit depth, and is in bits per second. Higher bit rate = higher quality sound, and also the file size.

#### Recording sound

To record an audio file, analogue sound must first be captured by an input device, like a microphone, and then converted into a digital file to store on a computer. 

Firstly, the microphone picks up sound and converts it into an electrical signal. This is then used by the ADC (analogue-digital converter, typically located in a system's sound card) and sampled at regular intervals which directly represent the sound wave's traits, such as amplitude. 

This is represented as a binary sequence called Pulse Code Modulation (PCM), and saved to a file. The raw data of the converted signal is uncompressed (using WAV/FLAC/AIFF formats). 

When the file is read, the binary PCM sequence is passed through the DAC (digital-analogue converter) which uses the data to reconstruct an analogue waveform, as close to the original as possible. This analog signal is then amplified and sent to speakers, which vibrate based on these analog signals, creating audible sound waves.


## 1.2.5 Compression

There are 2 types of compression.

### Lossy compression

Lossy - some data is removed, reducing the overall data and quality and therefore size of the file. In an image, this can be seen through reducing colour depth, reducing the amount of colours in the image, reducing the file. Bit depth can be reduced in audio files to reduce the file. > Remember, in bit depth, it squares every time. A bit depth of 4 would mean 2^4 bits, or 16 potential colours or audio bits.

Examples of lossy compression include JPEG, MPEG (or MP4) and MP3 files.

### Lossless compression

For other files, data cannot be lost, like texts. Files need to be reduced in size without the loss of data. WAV audio files or PNG image files are examples of lossless formats. However, lossless files are bigger than lossy, even when compressed. 

For example, a binary representation of `000000111100110000000111111` can be represented as 604121217161. (because there's 6 zeroes, 4 ones, 2 zeroes etc)

This would reduce the file from 27 bytes to 12 bytes. A reduction of over 60%!

> Lossless formats preserve every single detail, no matter how small, which 'costs' a lot in file size.

---

This is an snippet from our complete GCSE Computer Science Cheat Sheet. 

For the full version, including comprehensive coverage of both Paper 1 and Paper 2, along with coding practice examples, visit [https://ibaguette.com/cheatsheets/gcse](https://ibaguette.com/cheatsheets/gcse) and select "Computer Science: Paper 1 and 2."

Feel free to share these revision resources with friends, family, and teachers!

> Created with 💕 by Draggie
