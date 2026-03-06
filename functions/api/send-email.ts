import { Resend } from 'resend';

interface Env {
    RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const { request, env } = context;

        // Parse the JSON payload from the frontend
        const { name, email, message } = await request.json() as { name: string, email: string, message: string };

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        if (!env.RESEND_API_KEY) {
            return new Response(JSON.stringify({ error: 'Server configuration error' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Initialize Resend securely on the server
        const resend = new Resend(env.RESEND_API_KEY);

        // Send the email
        const data = await resend.emails.send({
            from: 'House of Ravya Website <onboarding@resend.dev>', // Temporary Resend testing domain
            to: ['sumukha.kunte@gmail.com'], // Deliver all inquiries to the website owner
            subject: `New Contact Inquiry from ${name}`,
            html: `
        <h2>New Message via House of Ravya Website</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
        });

        if (data.error) {
            return new Response(JSON.stringify({ error: data.error.message }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ success: true, id: data.data?.id }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
