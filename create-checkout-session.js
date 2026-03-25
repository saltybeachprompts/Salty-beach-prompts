
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name: "Salty Beach Transformation" },
        unit_amount: 99,
      },
      quantity: 1,
    }],
    success_url: process.env.NEXT_PUBLIC_BASE_URL + "?success=true",
    cancel_url: process.env.NEXT_PUBLIC_BASE_URL,
  });

  res.json({ url: session.url });
}
