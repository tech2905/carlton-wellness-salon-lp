import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    const crmUrl = process.env.NEXT_PUBLIC_CRM_API_URL;
    const token = process.env.TELECRM_AUTH_TOKEN;
    
    if (!crmUrl || !token) {
      console.error('Missing CRM API URL or Auth Token in environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const response = await fetch(crmUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.replace(/^"|"$/g, '')}` // Safely strip quotes just in case
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const resultText = await response.text();
      let resultData;
      try {
        resultData = JSON.parse(resultText);
      } catch (e) {
        resultData = resultText; // E.g. "OK"
      }
      return NextResponse.json({ success: true, data: resultData });
    } else {
      const errorText = await response.text();
      console.error('CRM API Error:', errorText);
      return NextResponse.json({ error: 'Failed to submit to CRM' }, { status: response.status });
    }
  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
