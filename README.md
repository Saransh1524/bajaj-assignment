
# 📄 README.md

```markdown
# BFHL Assignment API

This project is a simple REST API built as part of the Full Stack assignment.  
The API processes an array of mixed values and returns categorized results such as even numbers, odd numbers, alphabets, special characters, sum of numbers, and a concatenated string in alternating caps.

---

##  Hosted API
- Base URL: [`https://bajaj-assignment-lk7y.onrender.com`](https://bajaj-assignment-lk7y.onrender.com)  
- Route: `/bfhl`  
- Method: `POST`  
- Status Code: `200 OK` for successful requests  

---

##  Request Format
Endpoint:  
```

POST /bfhl

```

Headers:
```

Content-Type: application/json

````

Body Example:
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
````

---

##  Response Format

**Example Response (for above input):**

```json
{
  "is_success": true,
  "user_id": "saransh_naole_15062003",
  "email": "yourmail@vitstudent.ac.in",
  "roll_number": "22BIT0154",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

---

##  Test Cases

### Example A

**Input:**

```json
{ "data": ["a","1","334","4","R","$"] }
```

**Output:**

```json
{
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

---

### Example B

**Input:**

```json
{ "data": ["2","a","y","4","&","-","*","5","92","b"] }
```

**Output:**

```json
{
  "odd_numbers": ["5"],
  "even_numbers": ["2","4","92"],
  "alphabets": ["A","Y","B"],
  "special_characters": ["&","-","*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

---

### Example C

**Input:**

```json
{ "data": ["A","ABcD","DOE"] }
```

**Output:**

```json
{
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": ["A","ABCD","DOE"],
  "special_characters": [],
  "sum": "0",
  "concat_string": "EoDdCbAa"
}
```

---

## 🛠️ Local Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/Saransh1524/bajaj-assignment.git
cd bfhl-api
npm install
```

Run the server:

```bash
npm start
```

API will be available at:

```
https://bajaj-assignment-lk7y.onrender.com
```

---

##  Tech Stack

* **Backend:** Node.js, Express.js
* **Hosting:** Render
* **Testing:** Jest, Supertest (for unit tests)

---

##  Author

Saransh Naole
Roll No: 22BIT0154 | VIT Vellore

```
