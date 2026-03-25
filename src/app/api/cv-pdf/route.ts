import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(request: NextRequest) {
  const host = request.headers.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const cvUrl = `${protocol}://${host}/cv`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    await page.goto(cvUrl, { waitUntil: "networkidle0" });

    const pdfUint8 = await page.pdf({
      format: "A4",
      printBackground: false,
      margin: { top: "1cm", bottom: "1cm", left: "0", right: "0" },
      displayHeaderFooter: false,
    });

    return new NextResponse(Buffer.from(pdfUint8), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Bartlomiej-Perucki-CV.pdf"',
      },
    });
  } finally {
    await browser.close();
  }
}
