import string
from random import randint, choice

characters = string.ascii_letters + string.punctuation + string.digits
# print(characters)

default_limit = 50
print("Enter 1 for default 50 character pwd \n Enter 2 to generate a custom limit pwd")
user_preferred_option = int(input())


def main():
    if user_preferred_option == 2:
        print("Please enter a number limit for your password")
        pwd_limit = int(input())
        user_preferred_limit(pwd_limit)
    else:
        make_strong_pwd(default_limit)


def user_preferred_limit(pwd_limit):

    pwd_user_limit = "".join(choice(characters)
                             for x in range(0, pwd_limit))
    print("Generating " + str(pwd_limit) + " character strong password...")
    print("Your Custom Limit Password: " + pwd_user_limit)


def make_strong_pwd(default_limit):
    pwd_default_limit = "".join(choice(characters)
                                for x in range(0, default_limit))
    print("Generating default 50 character strong password...")
    print("Password: " + pwd_default_limit)


if __name__ == "__main__":
    main()
