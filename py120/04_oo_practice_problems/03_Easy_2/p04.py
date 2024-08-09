class Greeting:
    def greet(self, message):
        print(message)

class Hello(Greeting):
    def hi(self):
        self.greet('Hello')

class Goodbye(Greeting):
    def bye(self):
        self.greet('Goodbye')


#1 
hello = Hello()  # 
hello.hi()          # no `greet` in Hello, calls `greet` from `Greeting
                    # prints Hello

#2
hello = Hello()
hello.bye()
'''
No `bye` in Hello or Greeting.  AttributeError
'''      

#3
hello = Hello()
hello.greet()
'''
No `greet` in Hello, calls `greet` from `Greeting`, but no 'message'
provided, so Error will be thrown (expecting 2 args, received one)
'''

#4
hello = Hello()
hello.greet('Goodbye')
'''
Calls `greet` from Greeting, prints 'Goodbye'
'''

#5
Hello.hi()
'''
This is an instance method and it can't be called by the class.
Error: expected one argument, received zero
'''