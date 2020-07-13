### MYOB Coding Exercise

Input - first name, last name, annual salary, super rate (%), payment start date   
Output - name, pay period, gross income, income tax, net income, super
 
Calculation details 
```
pay period = per calendar month
gross income = annual salary / 12 months
income tax = based on the tax table provide below
net income = gross income - income tax
super = gross income x super rate
```

### Run the Application

To start the app:
```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

### Running Unit Tests
```
npm test
```







