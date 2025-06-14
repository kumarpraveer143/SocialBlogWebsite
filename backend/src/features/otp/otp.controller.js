import nodemailer from "nodemailer";

class OtpController {
  constructor() {
    this.otps = {}; // In-memory storage for OTPs
    this.sendOtp = this.sendOtp.bind(this); // Bind sendOtp method to the class instance
    this.verifyOtp = this.verifyOtp.bind(this); // Bind verifyOtp method to the class instance
  }

  generateOtp() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  async sendOtp(req, res) {
    const { email } = req.body;
    const { name } = req.cookies;

    const otp = this.generateOtp();
    const expiryTime = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes

    // Store OTP with its expiration time
    this.otps[email] = { otp, expiryTime };

    const splitedName = name.split(" ");

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: "praveerTech <techpraveer@gmail.com>",
      to: email,
      subject: "To reset password",
      html: `<h1>Hello ${splitedName[0]},</h1><br>
             <p>Use this OTP to reset your password.</p><br>
             <h1>${otp}</h1>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.status(500).json({ success: false, msg: "OTP send Failed" });
      }
      return res
        .status(200)
        .json({ success: true, msg: "OTP sent successfully" });
    });
  }

  async verifyOtp(req, res) {
    const { email, otp } = req.body;

    if (!this.otps[email]) {
      return res.status(400).json({ success: false, msg: "OTP not found" });
    }

    const { otp: storedOtp, expiryTime } = this.otps[email];

    if (Date.now() > expiryTime) {
      delete this.otps[email];
      return res.status(400).json({ success: false, msg: "OTP has expired" });
    }

    if (parseInt(otp, 10) !== storedOtp) {
      return res.status(400).json({ success: false, msg: "Invalid OTP" });
    }

    // OTP is valid
    delete this.otps[email];
    return res
      .status(200)
      .json({ success: true, msg: "OTP verified successfully" });
  }
}

export default OtpController;
