const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const User = require("../model/users.model");
require("dotenv").config();

const registeruser = async (req, res) => {
  const { name, email, pass } = req.body;

  // Create a verification token (valid for 1 hour)
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const verificationUrl = `http://localhost:5000/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify your email",
    html: `<h2>Click the link to verify your email:</h2>
             <a href="${verificationUrl}">${verificationUrl}</a>`,
  };

  try {
    await transporter.sendMail(mailOptions);

    let newUser = new User({ name, email, pass, isVarified: false });

    newUser.save();

    res.status(200).json({
      msg: "Verification email sent",
      newUser,
    });
  } catch (error) {
    res.status(500).send("Error sending email");
  }
};

const varifyUser = async (req, res) => {
  const token = req.query.token;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(400).send("Invalid token");
    }

    user.isVarified = true; // Mark user as verified
    await user.save();
    res.status(200).send("Email verified successfully");
  } catch (error) {
    res.status(400).send("Invalid or expired token");
  }
};
module.exports = { registeruser, varifyUser };
