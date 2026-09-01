import * as XLSX from 'xlsx';

export interface FormSubmission {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  company?: string;
  serviceNeeded?: string;
  budget?: string;
  message?: string;
  type: 'Inquiry' | 'Booking' | 'RSVP';
}

const STORAGE_KEY = 'growio_form_submissions';

// Deployed Google Apps Script Web App URL
export let GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyHkabOfV8sX0XM324G1p4qmZZpirObRhDKBeQsU3pIrqhAoDv-WNejCs1JNjQXHR7A5g/exec';

export const setGoogleSheetWebhookUrl = (url: string) => {
  GOOGLE_SHEET_WEBHOOK_URL = url;
};

export const sendToGoogleSheet = async (data: FormSubmission) => {
  if (!GOOGLE_SHEET_WEBHOOK_URL) return;
  try {
    // Post as text/plain so browser handles CORS silently with Google Apps Script
    await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Error posting to Google Sheet:', error);
  }
};

export const saveSubmissionToExcel = (submission: Omit<FormSubmission, 'id' | 'timestamp'>) => {
  const newRecord: FormSubmission = {
    ...submission,
    id: 'SUB-' + Math.floor(100000 + Math.random() * 900000),
    timestamp: new Date().toLocaleString(),
  };

  // 1. Store in LocalStorage history
  const existing: FormSubmission[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  existing.unshift(newRecord);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

  // 2. Post directly to your Google Sheet on Drive (no file popup download)
  sendToGoogleSheet(newRecord);

  return newRecord;
};

export const downloadExcelFile = (data: FormSubmission[], fileName = 'Growio_Submissions.xlsx') => {
  const excelRows = data.map((item) => ({
    'Submission ID': item.id,
    'Date & Time': item.timestamp,
    'Submission Type': item.type,
    'Full Name': item.name,
    'Email Address': item.email,
    'Company / Brand': item.company || 'N/A',
    'Service Requested': item.serviceNeeded || 'N/A',
    'Estimated Budget': item.budget || 'N/A',
    'Message / Overview': item.message || 'N/A',
  }));

  const worksheet = XLSX.utils.json_to_sheet(excelRows);
  worksheet['!cols'] = [
    { wch: 15 },
    { wch: 22 },
    { wch: 15 },
    { wch: 22 },
    { wch: 25 },
    { wch: 20 },
    { wch: 30 },
    { wch: 18 },
    { wch: 40 },
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Growio Submissions');
  XLSX.writeFile(workbook, fileName);
};

export const exportAllSubmissionsToExcel = () => {
  const existing: FormSubmission[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  if (existing.length === 0) {
    alert('No form submissions recorded yet.');
    return;
  }
  downloadExcelFile(existing, `Growio_All_Submissions_${new Date().toISOString().slice(0, 10)}.xlsx`);
};

export const getAllSubmissions = (): FormSubmission[] => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
};
