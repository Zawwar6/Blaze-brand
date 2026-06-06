import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, email, message, captchaToken } = await req.json();

    // const captchaRes = await fetch(
    //   `https://www.google.com/recaptcha/api/siteverify`,
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    //   }
    // );

    // const captchaData = await captchaRes.json();
    // if (!captchaData.success) {
    //   return Response.json({ error: "Invalid captcha" }, { status: 400 });
    // }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "Contact Form Submission",
      text: `From: ${fullName} (${email})\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ error }, { status: 500 });
  }
}
