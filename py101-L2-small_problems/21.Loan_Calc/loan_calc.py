'''
m = p * (j / (1 - (1 + j) ^^ (-n)))


'''
# MESSAGES
invalid_no = "Invalid number, please try again."

def prompt(message):
    x = input("==> " + message + '\n')
    return x

def valid_number(number):
    try:
        float(number)
    except ValueError:
        return False
    
    return True

def format_number(num_string):
    for i in [',' , '_', '$', " ",'%']:
        num_string = num_string.replace(i,"")
        return num_string

while True:

    # Get loan amt from user

    loan_amt = prompt("How much $ would you like to borrow?") or "$20,000"
    loan_amt = format_number(loan_amt)

    # validate: Positive $ amount
    while not (valid_number(loan_amt) and (float(loan_amt) > 0)):
        loan_amt = prompt("Invalid number, please try again. "
                          "An example of a valid number is $20,000")

    # print(loan_amt)

    # Get APR from user as %
    apr = prompt("What is your APR? Example: 5.5%. "
                                   "(not to be confused with APY)") or "5.5%"
    apr = format_number(apr)

    while not (valid_number(apr) and float(apr) < 0):
        apr = prompt('''Invalid APR, please try again.  A couple of examples:
                     5%
                     6.3''')
    
    monthly_interest_rate = apr/12

    breakpoint()
    #monthly_interest_rate = APR/12


    # Get loan duration from user
    # validate
    # print in days/years


    # calculate

    # Output

    '''
    monthly_payment = loan_amt * (monthly_interest_rate / (1 - 
                    (1 + monthly_interest_rate) ** (-1 * loan_duration_months)))
    '''
    print ("loop finished, starting over \n" , '*'*20)