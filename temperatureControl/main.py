import random 
import time 

def provide_random_temperature():
    return random.randint(10,50)


def main():
    while True:
        data = provide_random_temperature()
        print("dados gerados:", data)
        time.sleep(5)


if __name__ == "__main__":
    main()
           