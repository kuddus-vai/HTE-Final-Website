#!/usr/bin/env node
/**
 * Dynamic sitemap.xml generator for Cloudflare Pages
 * Usage: node scripts/generate-sitemap.js > dist/sitemap.xml
 *
 * This script reads the site's routes and generates a standards-compliant XML sitemap
 */

const baseUrl = 'https://hightechenterprise.xyz';

// সাইটের রাউটগুলো (React Router বা আপনার সাইটের মতোম পেজগুলো)
const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/demos', changefreq: 'weekly', priority: 0.9 },
  { url: '/pricing', changefreq: 'weekly', priority: 0.9 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/ai-ugc', changefreq: 'weekly', priority: 0.9 },
  { url: '/automation', changefreq: 'weekly', priority: 0.9 },
  { url: '/websites', changefreq: 'weekly', priority: 0.9 },
  { url: '/portfolio', changefreq: 'monthly', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/offers', changefreq: 'weekly', priority: 0.9 },
];

// আজকের তারিখ
const today = new Date().toISOString().split('T')[0];

// XML হেডার ও স্কোপ
// let xml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
//        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
// `;

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// প্রতিটি রাউটের জন্য URL এন্ট্রি তৈরি
routes.forEach(route => {
  const fullUrl = baseUrl + route.url;
  xml += `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
});

xml += '</urlset>\n';

console.log(xml);
