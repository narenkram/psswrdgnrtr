import string 
from random import randint, choice

characters = string.ascii_letters + string.punctuation + string.digits
print(characters)


password = "".join(choice(characters) for x in range(0, 50))
print(password)