const emailServiceKey = process.env.RESEND_API_KEY;
const recipientEmail = process.env.RECIPIENT_EMAIL;
const senderEmail = process.env.SENDER_EMAIL;
const allowedOrigin = process.env.ALLOWED_ORIGIN;

const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,POST');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    return await fn(req, res);
};

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { subject, text } = req.body;

        if (!subject || !text) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        if (subject.length > 200 || text.length > 5000) {
            return res.status(400).json({ error: 'El contenido excede el límite permitido' });
        }

        const fetchResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${emailServiceKey}`,
            },
            body: JSON.stringify({
                from: senderEmail,
                to: [recipientEmail],
                subject,
                html: text,
            }),
        });

        if (fetchResponse.ok) {
            const data = await fetchResponse.json();
            res.status(200).json(data);
        } else {
            res.status(fetchResponse.status).json({ error: 'Error al enviar el email' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
};

export default allowCors(handler);
