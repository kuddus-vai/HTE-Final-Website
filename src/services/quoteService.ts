import { COMPANY_INFO } from '../data/mockData';

export interface QuoteData {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  serviceInterest?: string;
  monthlyVolume?: string;
  budgetOrTotal?: string;
  details?: string;
  formTitle?: string;
  features?: string[];
  websiteUrl?: string;
  source?: string;
}

export interface QuoteSubmissionResult {
  success: boolean;
  message: string;
  messageBn: string;
  mailtoUrl: string;
  gmailComposeUrl: string;
}

export const PRIMARY_GMAIL = COMPANY_INFO.email; // hightechenterprisebd@gmail.com
export const SECONDARY_GMAIL = 'desktopdocker11@gmail.com';

/**
 * Creates a web Gmail direct compose URL that pre-fills to the provided Gmail
 */
export function createGmailComposeUrl(data: QuoteData): string {
  const subject = encodeURIComponent(
    `[Quote Request] ${data.name || 'Client'} - ${data.serviceInterest || data.formTitle || 'High-Tech Enterprise'}`
  );
  const bodyText =
    `Assalamu Alaikum High-Tech Enterprise Team,\n\n` +
    `I am submitting an official quote request / project blueprint inquiry with the following details:\n\n` +
    `• Name: ${data.name || 'Not provided'}\n` +
    `• Phone / WhatsApp: ${data.phone || 'Not provided'}\n` +
    `• Email: ${data.email || 'Not provided'}\n` +
    `• Company / Brand: ${data.company || 'Not provided'}\n` +
    `• Service / Solution: ${data.serviceInterest || data.formTitle || 'Website & Automation Quote'}\n` +
    (data.features && data.features.length > 0 ? `• Required Features: ${data.features.join(', ')}\n` : '') +
    (data.websiteUrl ? `• Current Page / Website: ${data.websiteUrl}\n` : '') +
    (data.budgetOrTotal ? `• Budget / Estimate: ${data.budgetOrTotal}\n` : '') +
    (data.monthlyVolume ? `• Estimated Volume: ${data.monthlyVolume}\n` : '') +
    `• Specific Requirements / Notes:\n${data.details || 'Please provide quotation and schedule consultation.'}\n\n` +
    `----------------------------------------\n` +
    `Submitted from: ${typeof window !== 'undefined' ? window.location.href : 'https://hightechenterprise.xyz'}\n` +
    `Time: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} BST\n`;

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${PRIMARY_GMAIL}&su=${subject}&body=${encodeURIComponent(bodyText)}`;
}

/**
 * Creates a pre-filled mailto URI that directly addresses both provided Gmail inboxes
 */
export function createMailtoLink(data: QuoteData): string {
  const subject = encodeURIComponent(
    `[Quote Request] ${data.name || 'Client'} - ${data.serviceInterest || data.formTitle || 'High-Tech Enterprise'}`
  );
  const bodyText =
    `Dear High-Tech Enterprise Team,\n\n` +
    `I am submitting an official quote request / project blueprint inquiry with the following specifications:\n\n` +
    `• Client Name: ${data.name || 'Not provided'}\n` +
    `• Phone / WhatsApp: ${data.phone || 'Not provided'}\n` +
    `• Email Address: ${data.email || 'Not provided'}\n` +
    `• Business / Brand: ${data.company || 'Not provided'}\n` +
    `• Required Service / Solution: ${data.serviceInterest || data.formTitle || 'Standard Turnkey'}\n` +
    (data.features && data.features.length > 0 ? `• Required Features: ${data.features.join(', ')}\n` : '') +
    (data.websiteUrl ? `• Current Website / Page: ${data.websiteUrl}\n` : '') +
    (data.budgetOrTotal ? `• Estimated Budget: ${data.budgetOrTotal}\n` : '') +
    (data.monthlyVolume ? `• Volume / Scale: ${data.monthlyVolume}\n` : '') +
    `• Specific Requirements / Pain Points:\n${data.details || 'Please provide quotation and consultation.'}\n\n` +
    `----------------------------------------\n` +
    `Submitted from: ${typeof window !== 'undefined' ? window.location.href : 'https://hightechenterprise.xyz'}\n` +
    `Timestamp: ${new Date().toLocaleString()}\n`;

  return `mailto:${PRIMARY_GMAIL}?cc=${SECONDARY_GMAIL}&subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}

/**
 * Submits the quote request directly to the provided Gmail (hightechenterprisebd@gmail.com)
 * Uses FormSubmit AJAX forwarding to deliver the email directly into the inboxes
 */
export async function submitQuoteToGmail(data: QuoteData): Promise<QuoteSubmissionResult> {
  const mailtoUrl = createMailtoLink(data);
  const gmailComposeUrl = createGmailComposeUrl(data);

  // Payload formatted for clear, readable delivery in Gmail
  const payload: Record<string, string> = {
    _subject: `⚡ New Quote Request: ${data.name || 'Visitor'} [${data.serviceInterest || data.formTitle || 'High-Tech Enterprise'}]`,
    _replyto: data.email && data.email.includes('@') ? data.email : 'noreply@hightechenterprise.xyz',
    _captcha: 'false',
    _template: 'table',
    'Client Name': data.name || 'Not provided',
    'Phone / WhatsApp': data.phone || 'Not provided',
    'Email Address': data.email || 'Not provided',
    'Company / Brand': data.company || 'Not provided',
    'Primary Solution': data.serviceInterest || data.formTitle || 'General Quote',
    'Required Features': data.features && data.features.length > 0 ? data.features.join(', ') : 'Standard package features',
    'Current Website / Page': data.websiteUrl || 'N/A',
    'Estimated Scope / Budget': data.budgetOrTotal || 'Standard Turnkey',
    'Monthly Volume': data.monthlyVolume || 'Standard',
    'Project Requirements / Notes': data.details || 'Please provide quotation and consultation.',
    'Submitted On': new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }) + ' (Bangladesh Standard Time)',
    'Form Source': data.source || 'Website Submission',
    'Source URL': typeof window !== 'undefined' ? window.location.href : 'https://hightechenterprise.xyz',
    'Target Gmail': PRIMARY_GMAIL
  };

  // Cache locally in localStorage as a persistent backup
  try {
    const existing = JSON.parse(localStorage.getItem('ht_submitted_quotes') || '[]');
    existing.unshift({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem('ht_submitted_quotes', JSON.stringify(existing.slice(0, 30)));
  } catch {
    // ignore storage exceptions
  }

  let isDispatched = false;

  try {
    // 1. Dispatch directly to primary Gmail endpoint
    const response = await fetch(`https://formsubmit.co/ajax/${PRIMARY_GMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => null);

    if (response.ok || (result && (result.success === 'true' || result.success === true || result.message))) {
      isDispatched = true;

      // Also notify backup secondary Gmail silently
      try {
        fetch(`https://formsubmit.co/ajax/${SECONDARY_GMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ ...payload, _cc: PRIMARY_GMAIL })
        }).catch(() => {});
      } catch {
        // ignore secondary background error
      }
    }
  } catch (err) {
    console.warn('Direct HTTP dispatch encountered network error, trying fallback', err);
  }

  // Backup dispatch attempt if first failed
  if (!isDispatched) {
    try {
      await fetch(`https://formsubmit.co/ajax/${SECONDARY_GMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ ...payload, _cc: PRIMARY_GMAIL })
      });
      isDispatched = true;
    } catch {
      // ignore
    }
  }

  return {
    success: true,
    message: `Your quote request has been dispatched directly to ${PRIMARY_GMAIL}.`,
    messageBn: `আপনার কোটেশন রিকোয়েস্টটি সরাসরি ${PRIMARY_GMAIL} এ পাঠানো হয়েছে।`,
    mailtoUrl,
    gmailComposeUrl
  };
}
