"""
Jenny Burdier
Tusday, June 25
"""
# create a function that takes two numbers and return the sum of them
def addition(x,y):
    return x+y

# calling function addition()
result = addition(2,5)
print(result)
print(addition(8,10))

# define a function to calculate the area of a rectangle using the length and the width
def arearectangle(length, width):
    area = length*width
    return area

# calling function arearectangle
print(f"The area of a rectangle is {arearectangle(3,5)}")

# define a function to check if a number is positive, negative, or zero
def ispositive(num):
    try:
        if num>0:
            return "positive"
        elif num<0:
            return "negative"
        elif num== 0:
            return "zero"
        else:
            return "undefined"
    except:
        return "undefined"

        # print("ERROR!")
#------ first example ------------
        # if num>0:
            # return "positive"
        # elif num<0:
            # return "negative"
        # else:
            # return "undefined"
#--------------------------------

# calling function ispositive()
n = "Peter" # ----- 0 ---------- First example
print(f"The number is {ispositive(n)}")


# define a function and check if a number is even number%2== 0
def iseven(num):
    try:
        if num%2==0:
            return True
        else:
            return False
    except:
        return "ERROR"

# calling function iseven
x = "Peter pan "
print(f"Is the number even? {iseven(x)}")

print('\n ================ CLASSES ======================')
class MyClass:
    # property (variable)
    i = 12345

    # method (function)
    def testing(self):
        return "Hello World!"

# calling class MyClass
newclass = MyClass()
# step 2) call the instance class property
isinstanceproperty = newclass.i

# step 3) call the instance class method
isinstancemethod = newclass.testing()

# print result
print(f"Instance class property {isinstanceproperty}")
print(f"Instance class method {isinstancemethod}")

print('\n ================ CAR CLASS EXAMPLE ======================')
class Car:
    # instantiation object
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    # method to return the information of the car
    def get_descriptive_car(self):
        return (f"{self.year}, {self.make} {self.model}")

# create an instance of the class car
newcar = Car("Audi", "a4", 2020)

# access method get_descriptive_car
car_description = newcar.get_descriptive_car()
print(car_description)



