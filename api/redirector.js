export default async function handler(req, res) {
  // Extract query params
  const inputData = req.query;

  // Get IP and User Agent
  const ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || 'IP-not-found';
  const userAgent = req.headers['user-agent'] || 'UA-not-found';
  const baseUrl = 'https://offer.ecom-unity.eu/loopbrandanalysis';

  // Build query params
  const params = new URLSearchParams({
    utm_source: inputData.utm_source || '',
    utm_medium: inputData.utm_medium || '',
    utm_campaign: inputData.utm_campaign || '',
    utm_content: inputData.utm_content || '',
    fbclid: inputData.fbclid || '',
    hsa_acc: inputData.hsa_acc || '',
    hsa_cam: inputData.hsa_cam || '',
    hsa_grp: inputData.hsa_grp || '',
    hsa_ad: inputData.hsa_ad || '',
    hsa_src: inputData.hsa_src || '',
    hsa_net: inputData.hsa_net || '',
    hsa_ver: inputData.hsa_ver || '',
    ip: ip,
    ua: userAgent
  });

  const finalUrl = `${baseUrl}?${params.toString()}`;

  // Redirect user to the final URL
  res.writeHead(302, { Location: finalUrl });
  res.end();
}
