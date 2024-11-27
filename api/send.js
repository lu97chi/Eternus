export function GET(request) {
    return new Response(`Hello from ${process.env.VERCEL_REGION} ${process.env.RESEND_API_KEY}`);
  }