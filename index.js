const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Utility function to check if string is numeric
const isNumeric = (str) => /^\d+$/.test(str);

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

   
    if (!data || !Array.isArray(data)) {
      console.error("Invalid input:", req.body);
      return res.status(400).json({
        is_success: false,
        error: "Invalid input: 'data' must be an array",
      });
    }

    console.log("Incoming data:", data);

    let even = [], odd = [], alphabets = [], special = [];
    let sum = 0, concatStr = "";

    data.forEach((item) => {
      if (isNumeric(item)) {
        let num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) even.push(item);
        else odd.push(item);
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        concatStr += item;
      } else {
        special.push(item);
      }
    });

    // Alternating caps in reverse order
    let revConcat = concatStr.split("").reverse();
    let altCaps = revConcat
      .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
      .join("");

    return res.status(200).json({
      is_success: true,
      user_id: "saransh_naole_15042004", 
      email: "saransh.naole2022@vitstudent.ac.in",
      roll_number: "22BIT0154",
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alphabets,
      special_characters: special,
      sum: sum.toString(),
      concat_string: altCaps,
    });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ is_success: false, error: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

module.exports = app; 
