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

def clean_number(num_string):
    naughty = [',' , '_', '$', " ",'%', '+']
    return ''.join(char for char in num_string if (char not in naughty))

print("*** WELCOME TO LOAN-CALC 3000! ***")

while True:

    # Get loan amt from user

    loan_amt = prompt("How much $ would you like to borrow?") or "$20,000"
    loan_amt = clean_number(loan_amt)

    # validate: Positive $ amount
    while not (valid_number(loan_amt) and (float(loan_amt) > 0)):
        loan_amt = prompt("Invalid number, please try again. "
                          "An example of a valid number is $20,000")
        loan_amt = clean_number(loan_amt)
    loan_amt = float(loan_amt)

    # Get APR from user as %
    apr = prompt("What is your APR? Example: 5.5%. "
                "(not to be confused with APY)") or "5.5%"
    apr = clean_number(apr)

    # Validate
    while not (valid_number(apr) and (float(apr) >= 0)):
        apr = prompt('''Invalid APR, please try again.  A couple of examples:
                     5%
                     6.3''')
        apr = clean_number(apr)
    
    apr = float(apr) / 100   # Convert to percentage (5.5% ==> 0.055)

    # Convert APR to monthly interest rate
    monthly_interest_rate = float(apr)/12

    # Get loan duration from user, in months
    months = prompt("What's the duration of the loan in months?") or '24'
    months = clean_number(months)
    
    while not (valid_number(months) and 
               (float(months) % 1 == 0) and 
               (int(months) > 0)):
        months = prompt("Invalid number, please try again."
                        " A couple of examples: 4 or 24 mo."
                        " Whole numbers only, please."
                        )
        months = clean_number(months)
    
    months = int(months)


    # calculate
    if apr > 0:
        monthly_payment = (
                loan_amt * (monthly_interest_rate / 
                (1 - (1 + monthly_interest_rate) ** (-1 * months)))
                )
    else:
        monthly_payment = loan_amt / months
    
    rounded_monthly_payment = round(monthly_payment, 2)
    
    total_payment = monthly_payment*months

    # Notes on the following print statment:
    # apr*100 since APR's are usually listed as, for example, 5.5%, not 0.055
    print(
f'''
INPUTS:
Borrowing: ${loan_amt:,.2f}
APR: {apr*100}% 
Loan Duration: {months} months

RESULTS:
Monthly Payment: ${rounded_monthly_payment:,.2f}
Total Payments: ${total_payment:,.2f}
''' )

    # print ("loop finished, starting over \n" , '*'*20)
    break