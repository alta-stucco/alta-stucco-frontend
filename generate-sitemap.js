import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const sitemap = new SitemapStream({ hostname: "https://www.altastucco.com" });

const pages = [
  { url: "/", changefreq: "never", priority: 1.0 },
  { url: "/about", changefreq: "never", priority: 1.0 },
  { url: "/faq", changefreq: "never", priority: 1.0 },
  { url: "/contact", changefreq: "never", priority: 1.0 },
];

pages.forEach((page) => sitemap.write(page));
sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data);
});
