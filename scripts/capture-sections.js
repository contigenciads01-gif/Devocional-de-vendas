const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const ARTIFACT_DIR = "C:\\Users\\thiag\\.gemini\\antigravity\\brain\\df16523e-5471-4dab-b1cf-e3debefc8b22";

async function main() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const consoleLogs = [];
  const errors = [];

  const page = await browser.newPage();
  page.on('console', msg => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => errors.push(err.toString()));

  // 1. Desktop 1440px
  console.log('Capturing Desktop 1440px...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });

  // Wait for preloader animation to complete
  await new Promise(r => setTimeout(r, 2200));

  // Hero Screenshot
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, '01-hero-desktop.png'),
  });

  // Scroll to Pain Section
  await page.evaluate(() => {
    window.scrollTo({ top: 900, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, '02-pain-chart.png'),
  });

  // Scroll to MacBook section
  await page.evaluate(() => {
    window.scrollTo({ top: 1800, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, '03-macbook-windows.png'),
  });

  // Scroll to Ritual & 30 Days
  await page.evaluate(() => {
    window.scrollTo({ top: 3800, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, '04-ritual-weeks.png'),
  });

  // Scroll to Offer
  await page.evaluate(() => {
    window.scrollTo({ top: 5600, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, '05-offer-guarantee.png'),
  });

  // Scroll to Final CTA & Footer
  await page.evaluate(() => {
    window.scrollTo({ top: 7200, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, '06-final-cta.png'),
  });

  // 2. Tablet 768px
  console.log('Capturing Tablet 768px...');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 1 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, '07-tablet-hero.png'),
  });

  // 3. Mobile 390px (iPhone 13/14/15 size)
  console.log('Capturing Mobile 390px...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, '08-mobile-hero.png'),
  });

  // Mobile scrolled (test sticky mobile CTA)
  await page.evaluate(() => window.scrollTo(0, 900));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, '09-mobile-sticky-cta.png'),
  });

  console.log('Done capturing screenshots!');
  console.log('Console errors count:', errors.length);
  if (errors.length > 0) {
    console.log('Errors:', errors);
  }

  await browser.close();
}

main().catch(err => {
  console.error('Capture failed:', err);
  process.exit(1);
});
