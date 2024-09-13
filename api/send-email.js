const emailServiceKey = process.env.RESEND_API_KEY;

const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir desde cualquier origen
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end(); // Maneja la solicitud de preflight de CORS
        return;
    }

    return await fn(req, res);
};

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const fetchResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${emailServiceKey}`,
            },
            body: JSON.stringify({
                from: 'Acme <onboarding@resend.dev>',
                to: ['alejobuc@gmail.com'],
                subject: req.body.subject,
                html: req.body.text,
            }),
        });

        if (fetchResponse.ok) {
            const data = await fetchResponse.json();
            res.status(200).json(data); // Responde con los datos
        } else {
            res.status(fetchResponse.status).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

export default allowCors(handler);
