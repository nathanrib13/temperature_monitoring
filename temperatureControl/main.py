import random 
import time 

def provide_random_temperature():
    return random.randint(10,50)


def main():
    while True:
        temperature = provide_random_temperature()
        print("A temperatura atual é:", temperature, "°C")
        time.sleep(5)


if __name__ == "__main__":
    main()
           