"""
Jenny Burdier
Monday, June 24, 2024
"""

print("Welcome to Python")
# declaring variables
num1 = 12
num2 = -9
sum = num1 + num2
fullname = "Petter Pan"
checkmood = True
# print variables and string in one print
print(f"Welcome to python {fullname}. The sum of {num1} and {num2} is {sum}")

# collect data from the keyword
print("--------------- Example 1: calculating hypotenuse ---------------------")
h = float(input("Enter a heght: "))
w = float(input("Enter a width: "))
# calculate the hypotenuse
hyp = (h**2 + w**2)**0.5
hyp = round(hyp,2)

print(f"The collected height is {h} and width is {w}. The calculated hypotenuse is {hyp}")

print("--------------- Example 2: string ------------------")
msg = "Hello World!"
lenghtmsg = len (msg)
check1 = "m" in msg
check2 = "o" in msg

print(f"The message has {lenghtmsg} characters. ")
print(f"The charactor in index 6 is {msg[6]}")
print(f"Is letter 'm' in msg? {check1}")
print(f"Is letter 'o' in msg? {check2}")

print("--------------- Example 3: control flow ------------------")
# check if someone's age is grater than or equal to 21
age = 19
if age>=21:
    print("You are underage")
else:
    print("You are underage")

print("n\------------- Example 4: control flow (gpa) -------------------")
grade1 = float(input("Enter grade 1: "))
grade2 = float(input("Enter grade 2: "))

average = (grade1 + grade2)/2
if average >=90 and average <=100:
    gpa = "A"
elif average>=80 and average<=89.99:
    gpa = "B"
elif average >=70 and average <=79.99:
    gpa = "C"
elif average >=60 and average <=69.99:   
    gpa = "D"
elif average>1000:
    gpa = "Undefined"
else:
    gpa = "F"

print(f"The average grade is {average} with a gpa of {gpa}")

print("\n---------------------- Example 5: for loop -----------------------")
# print from 0 to 5, exclusive (meaning not including the 5 in the loop count)
for x in range(0,5):
    print(x)

print("\n---------------------- Example 6: for loop from -3 to 3 -----------------------")
# print from -3 to 3
for m in range(-3,4):
    print(m)

print("\n---------------------- Example 7: for loop from 9 to 0 -----------------------")
# print from 9 to 1 decreasement by 2
for n in range(9,0,-2):
    print(n)
    
print("\n---------------------- Example 8: for loop in a list -----------------------")
animals =["fish", "cat", "dog"]

for x in animals:
        print(x)

print("\n---------------------- Example 9: for loop -----------------------")
# print from 1 to 5 --> 12345
n = 1
while n<=5:
    print(n)
    n = n+1

else:
    print("End of program")







