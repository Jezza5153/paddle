import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface OrderConfirmationData {
  email: string;
  orderNumber: string;
  firstName: string;
  items: { name: string; quantity: number; price: string }[];
  total: string;
}

export async function sendOrderConfirmation(data: OrderConfirmationData) {
  try {
    await resend.emails.send({
      from: "PaddleForge <info@paddleforge.nl>",
      to: data.email,
      subject: `Bestelling bevestigd — ${data.orderNumber}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px;">
          <h1 style="font-size: 24px; font-weight: 600; color: #101828; margin-bottom: 8px;">
            Bedankt voor je bestelling, ${data.firstName}!
          </h1>
          <p style="color: #475467; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Je betaling is ontvangen. We gaan direct voor je aan de slag.
          </p>
          
          <div style="background: #F7F8FA; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <p style="color: #475467; font-size: 14px; margin-bottom: 16px;">
              <strong style="color: #101828;">Bestelnummer:</strong> ${data.orderNumber}
            </p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="border-bottom: 1px solid #E4E7EC;">
                  <th style="text-align: left; padding: 8px 0; color: #475467; font-size: 12px; font-weight: 500;">Product</th>
                  <th style="text-align: center; padding: 8px 0; color: #475467; font-size: 12px; font-weight: 500;">Aantal</th>
                  <th style="text-align: right; padding: 8px 0; color: #475467; font-size: 12px; font-weight: 500;">Prijs</th>
                </tr>
              </thead>
              <tbody>
                ${data.items
                  .map(
                    (item) => `
                  <tr style="border-bottom: 1px solid #E4E7EC;">
                    <td style="padding: 12px 0; color: #101828; font-size: 14px;">${item.name}</td>
                    <td style="text-align: center; padding: 12px 0; color: #101828; font-size: 14px;">${item.quantity}</td>
                    <td style="text-align: right; padding: 12px 0; color: #101828; font-size: 14px;">${item.price}</td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" style="padding: 12px 0; font-weight: 600; color: #101828; font-size: 14px;">Totaal</td>
                  <td style="text-align: right; padding: 12px 0; font-weight: 600; color: #101828; font-size: 16px;">${data.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <h2 style="font-size: 18px; font-weight: 600; color: #101828; margin-bottom: 12px;">Wat gebeurt er hierna?</h2>
          <ul style="color: #475467; font-size: 14px; line-height: 1.8; padding-left: 24px;">
            <li>Je bestelling wordt verwerkt</li>
            <li>Je ontvangt een track & trace code zodra het pakket onderweg is</li>
            <li>Uitpakken en direct het veld op!</li>
          </ul>
          
          <p style="color: #475467; font-size: 14px; margin-top: 24px;">
            Vragen? Mail ons op <a href="mailto:info@paddleforge.nl" style="color: #0E9F6E;">info@paddleforge.nl</a>
          </p>
          
          <hr style="border: none; border-top: 1px solid #E4E7EC; margin: 32px 0 16px;" />
          <p style="color: #98A2B3; font-size: 12px;">
            PaddleForge — Slim starten met padellen.
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send order confirmation email:", error);
  }
}
