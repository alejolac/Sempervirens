// api/send-email.js
import Resend from 'resend';

const resend = new Resend('YOUR_API_KEY'); // Reemplaza con tu clave de API

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { to, from, subject, text } = req.body;
        try {
            const response = await resend.sendEmail({ to, from, subject, text });
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
