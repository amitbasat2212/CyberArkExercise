# print(chr(67)) # C 

# ord('C') # 67 

# print("".join([chr(ord(c)+1) for c in "abc"]))



# #spot check1
# # def start_to_end(start,end):
# #     for i in range(start,end):
# #         print(f"{i}:{chr(i)}")



# #bytes
# byte_string = b'ABC' 
# print(bytes([65,66,67])) # ABC
# print("ABC".encode('ascii'))
# print("ABC".encode('utf-8')) 



#excrice-upper-1

def to_upper(c):
    if(c.islower()):
        return chr(ord(c)-32)

    return c;


print(to_upper("d"))    # "D"
print(to_upper("Q"))    # "Q" (no change)
print(to_upper("!"))    # "!" (no change) 


def upper(s):
    res="";
    for i in s:
        res+=to_upper(i);

    return res;    

print(upper("I love Python!"))     


#Exercise: Unicode Encryption
def encode(msg):
    res=""
    for b in msg.encode("ascii"):
        res+=" "
        res+=str(b);

    return res;

print(encode("Hello"))     


def decode(msg):
    array = msg.split();
    print("".join([chr(int(c)) for c in array])) 
   
print(decode("72 101 108 108 111"))   # "Hello"
print(decode(encode("Hello")))        # "Hello" 




#Exercise: Word value
a=1;#97
def get_word_value(word):
    res=0;
    for i in word:
        plus=ord(i)-96;
        res+=plus;

    return res;    


print(get_word_value("day"))    # 4 + 1 + 25 = 30   


#Exercise: Caesar cipher

def encode(msg, n):
  
    return "".join([chr((ord(i) + n-65) % 26 + 65) for i in msg ])


print(encode("ABXYZ", 3))    



#Exercise: Convert string-number to int
def string_number_to_int(n):
    if(not n.isnumeric()):
        return;

    rtr=0
    for c in n:
        rtr=rtr*10 + ord(c) - ord('0')

    return rtr


print(string_number_to_int("10"))       # output: 10
print(string_number_to_int("123"))      # output: 123
print(string_number_to_int("99"))       # output: 99
print(string_number_to_int("ABC")) 