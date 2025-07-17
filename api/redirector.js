     export default async function handler(req, res) {
       const zapierUrl = 'https://hooks.zapier.com/hooks/catch/12008416/u2fcjet/';
       const params = req.query;

       // Forward params to Zapier
       await fetch(zapierUrl, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(params),
       });

       // Redirect to your landing page with original params
       const landingUrl = 'https://offer.ecom-unity.eu/loopbrandanalysis/'; // CHANGE THIS!
       const search = new URLSearchParams(params).toString();
       res.writeHead(302, { Location: `${landingUrl}?${search}` });
       res.end();
     }
