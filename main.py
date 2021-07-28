import string
from random import randint, choice


def gen_pwd():
    characters = string.ascii_letters + string.punctuation + string.digits
    print(characters)

    password = "".join(choice(characters) for x in range(0, 50))
    print("Generating 50 character strong password...")
    print("Password: " + password)


if __name__ == "__main__":
    gen_pwd()
