// api/send.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { to, subject, html } = req.body;
  
      const RESEND_API_KEY = process.env.RESEND_API_KEY; // Store this securely in Vercel's Environment Variables
  
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Your Name lu97is@gmail.com',
            to,
            subject,
            html,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          res.status(200).json({ success: 'Email sent', data });
        } else {
          const error = await response.json();
          res.status(response.status).json({ error: error.message });
        }
      } catch (err) {
        res.status(500).json({ error: 'Failed to send email' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  