import type { RequestHandler } from "./$types"
import Stripe from "stripe";
const STRIPE_KEY = ""


//localhost:5137/api/stripeCheckout

// post / stripecheckout data:items
// reutrn -> url to checkout
const stripe = new Stripe(STRIPE_KEY, {
    apiVersion: "2022-11-15"
})

export const POST: RequestHandler = async({request}) => {
    // items: []
    const data = await request.json();
    const items = data.items;
    // adapt array to stripe format

    let lineItems:any = [];
    items.forEach((item:any) => {
        lineItems.push({price:items.id, quantity: item.quantity})
        
    });

    // it gives us a checkout url
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode:'payment',
        success_url: "http://localhost5173/store/success",
        cancel_url: "http://localhost5173/store/cancel"
    })
    return new Response(
        JSON.stringify({url: session.url}),{
            status:200,
            headers:{"content-type":'application/json'}
        }
    )
}