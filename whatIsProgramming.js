/**
 * A general understanding of what programming is, will help contextualize how JavaScript works and what it can actually do. 
 * It also gives you a better idea how programming actually works in a computer.
 * 
 * Computer programming is the act of giving a set of instructions to a computer to execute some action. 
 * Regarless of the language we use, programming allows us to store, maniuplate and organize data in a way that is much more
 * efficient than if we were to do this with a simple pen and paper. 
 * 
 * A simple example would be, writing some function to add 2 numbers together. While we could do this in our head very fast, we can't 
 * do this for a set of 1 million numbers. BUT a computer can and it can keep track of each operation with incredible precision. And this 
 * is the real power of programming, performing operations on huge sets of data with accuracy. 
 * 
 * This is pretty obvious, but what is less obvious is that computers don't actually understand a programming language like JavaScript by itself.
 * 
 * As the saying goes, computers can only really understand 1's and 0's (or binary). This is often referred to as machine language or machine code
 * and it is the lowest level of instruction you can send a CPU.
 * 
 * The key takeaway here is that all other langauges including JavaScript have to be translated into machine code for the computer to actually 
 * understand them.
 * 
 * Over the years many programming languages have been created that are translated into machine code or sometimes other 'intermediate' 
 * languages like byte code before being again translated into machine code.
 * 
 * I bring this up because JavaScript is known as a high level (it's not close to the 'metal') langauge that requires an intermediary program 
 * called an interpreter or sometimes an interpreter & compiler (which we will talk about later) to actualy break it down into machine code.
 * 
 * Which brings us to point out why we create other programming languages to begin with. We do this because it's really hard to understand and
 * write complex code in 1's and 0's. So we create new languages that allow us to write in syntax that roughly resembles natural human language, 
 * like english. This allows us to understand what we are writing with greater ease and it also allows us to execute operations with fewer lines
 * of code than if we wrote them in machine code. This is practice or phenonmon called, Abstraction. We are abstracting away complicated underlying 
 * processes and only concerning ourselves with the critical elements that allow us to achieve some goal.
 *  
 * 
 * This is an example of how we would produce the words 'Hello World!' in machine code:
 * 
 *   b8    21 0a 00 00   #moving "!\n" into eax
 *   a3    0c 10 00 06   #moving eax into first memory location
 *   b8    6f 72 6c 64   #moving "orld" into eax
 *   a3    08 10 00 06   #moving eax into next memory location
 *   b8    6f 2c 20 57   #moving "o, W" into eax
 *   a3    04 10 00 06   #moving eax into next memory location
 *   b8    48 65 6c 6c   #moving "Hell" into eax
 *   a3    00 10 00 06   #moving eax into next memory location
 *   b9    00 10 00 06   #moving pointer to start of memory location into ecx
 *   ba    10 00 00 00   #moving string size into edx
 *   bb    01 00 00 00   #moving "stdout" number to ebx
 *   b8    04 00 00 00   #moving "print out" syscall number to eax
 *   cd    80            #calling the linux kernel to execute our print to stdout
 *   b8    01 00 00 00   #moving "sys_exit" call number to eax
 *   cd    80            #executing it via linux sys_call
 *  
 * Here is the same thing in JavaScript
 * 
 *  console.log("Hello World!");
 * 
 * See how much more readable and less work that was in JavaScript? By using a high level language like JavaScript
 * we necessarily abstract away the complex and lengthy machine code that actually gets run on our computer under the
 * hood. Eventually our JavaScript will be broken down into something close to the machine code above, but we don't have 
 * to concern ourselves with that, we just care about console.log()!
 * 
 * So that's a really brief intro into the broader world of computer programming, definitely an intersted topic that I 
 * encoure you to dig into further. 
 * 
 */