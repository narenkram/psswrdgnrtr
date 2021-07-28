import string
from random import randint, choice

print("Welcome, Python Password Generator v0.1")


letters = string.ascii_letters
symbols = string.punctuation
digits = string.digits
mixed_characters = letters + symbols + digits
# print(mixed_characters)

default_limit = 50
print("Enter 1 to generate a mixed character password (Recommended)")
print("Enter 2 to generate a custom limit password")
print("Enter 3 to generate a letters only password")
print("Enter 4 to generate a numbers only password")
print("Enter 5 to generate a symbols only password")
user_preferred_option = int(input())


def main():
    if user_preferred_option == 1:
        make_mixed_pwd(default_limit)
    if user_preferred_option == 2:
        print("Please enter a number limit for your password")
        pwd_limit = int(input())
        user_preferred_limit(pwd_limit)
    if user_preferred_option == 3:
        make_letters_pwd(default_limit)
    if user_preferred_option == 4:
        make_digits_pwd(default_limit)
    if user_preferred_option == 5:
        make_symbols_pwd(default_limit)
    else:
        print("Not a valid input, try again")


def user_preferred_limit(pwd_limit):

    pwd_user_limit = "".join(choice(mixed_characters)
                             for x in range(0, pwd_limit))
    print("Generating " + str(pwd_limit) + " character strong password...")
    print("Your new customized password: " + pwd_user_limit)


def make_mixed_pwd(default_limit):
    pwd_default_limit = "".join(choice(mixed_characters)
                                for x in range(0, default_limit))
    print("Generating default 50 character strong password...")
    print("Your new password: " + pwd_default_limit)


def make_letters_pwd(default_limit):
    letters_pwd = "".join(choice(letters)
                          for x in range(0, default_limit))
    print("Generating letters only password...")
    print("Your new password: " + letters_pwd)


def make_digits_pwd(default_limit):
    digits_pwd = "".join(choice(digits)
                         for x in range(0, default_limit))
    print("Generating numbers only password...")
    print("Your new password: " + digits_pwd)


def make_symbols_pwd(default_limit):
    symbols_pwd = "".join(choice(symbols)
                          for x in range(0, default_limit))
    print("Generating symbols only password...")
    print("Your new password: " + symbols_pwd)


if __name__ == "__main__":
    main()
