import type { Inquiry } from "../inquiry";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function display(value: string) {
  return value || "Not provided";
}

export function createInquiryEmail(inquiry: Inquiry) {
  const rows = [
    ["Name", inquiry.name],
    ["Company", inquiry.company],
    ["Email", inquiry.email],
    ["Phone", display(inquiry.phone)],
    ["Services interested in", inquiry.services.join(", ")],
    ["Estimated budget", display(inquiry.budget)],
    ["Project timeline", inquiry.timeline],
    ["Submission timestamp", `${inquiry.submittedAt} (UTC)`],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #e7e0d2;color:#6d6558;font-size:13px;vertical-align:top;width:180px;">${escapeHtml(label)}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #e7e0d2;color:#161513;font-size:14px;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;background:#f3f0e9;font-family:Arial,Helvetica,sans-serif;color:#161513;">
        <div style="margin:0 auto;max-width:680px;padding:40px 20px;">
          <div style="border-top:4px solid #c6a972;background:#ffffff;padding:32px;">
            <p style="margin:0 0 10px;color:#8a7449;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Kuiken Group Website</p>
            <h1 style="margin:0 0 28px;font-size:28px;line-height:1.2;">New project inquiry</h1>
            <table role="presentation" style="width:100%;border-collapse:collapse;">${htmlRows}</table>
            <div style="margin-top:28px;">
              <p style="margin:0 0 10px;color:#6d6558;font-size:13px;">Project description</p>
              <div style="white-space:pre-wrap;border-left:3px solid #c6a972;padding:2px 0 2px 18px;font-size:15px;line-height:1.7;">${escapeHtml(inquiry.description)}</div>
            </div>
          </div>
        </div>
      </body>
    </html>`;

  const text = [
    "KUIKEN GROUP WEBSITE — NEW PROJECT INQUIRY",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Project description:",
    inquiry.description,
  ].join("\n");

  return { html, text };
}
