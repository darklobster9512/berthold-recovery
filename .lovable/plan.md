# Contact form: send in the requested format

The contact form already posts to `https://pcfmaslrlferrnoopgqn.supabase.co/functions/v1/contact-submit` as JSON with first_name, last_name, email, phone, topic, damage_amount, message and source = "berthold-partner.de". The only missing field is `brand_domain`.

## Changes
1. Add `brand_domain: "berthold-partner.de"` to the sent data.
2. Empty optional fields (phone, damage amount) are sent as an empty text `""` instead of `null`, so they match the example.
3. The name field keeps getting split into first and last name (last word = last name). The form stays the same for visitors.
4. Send one test entry to the endpoint and check the response.
