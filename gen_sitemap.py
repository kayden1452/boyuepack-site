#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Regenerate sitemap.xml from the HTML files actually present on disk.

Only indexable pages are listed: every page carries `<meta name="robots" content="index...">`
and a canonical pointing at itself. Run on every push so the sitemap cannot drift.
"""
import glob
import os
import re
from datetime import date

SITE = "https://boyuepackaging.com"
TODAY = date.today().isoformat()

# pages that rank above the rest; everything else gets the default priority
PRIORITY = {
    "index.html": ("1.0", "weekly"),
    "products.html": ("0.9", "weekly"),
    "stand-up-pouches.html": ("0.9", "monthly"),
    "coffee-bags.html": ("0.9", "monthly"),
    "pet-food-bags.html": ("0.9", "monthly"),
    "spout-pouches.html": ("0.9", "monthly"),
    "retort-pouches.html": ("0.9", "monthly"),
    "8-side-seal-bags.html": ("0.9", "monthly"),
    "digital-printing-packaging.html": ("0.8", "monthly"),
    "gravure-printing-packaging.html": ("0.8", "monthly"),
    "printed-roll-film.html": ("0.8", "monthly"),
    "contact.html": ("0.8", "monthly"),
    "manufacturing.html": ("0.7", "monthly"),
    "about.html": ("0.6", "monthly"),
    "quality.html": ("0.6", "monthly"),
}
DEFAULT = ("0.7", "monthly")
# buying guides sit one level below the product pages
GUIDES = (
    "coffee-bag-material-guide.html",
    "retort-pouch-structure-guide.html",
    "pet-food-packaging-barrier-guide.html",
    "pouch-type-selection-guide.html",
    "stand-up-vs-flat-bottom.html",
)


def indexable(path):
    head = open(path, encoding="utf-8").read()
    m = re.search(r'<meta name="robots" content="([^"]*)"', head)
    if m and "noindex" in m.group(1):
        return False
    return '<link rel="canonical"' in head


def main():
    pages = [p for p in sorted(glob.glob("*.html")) if indexable(p)]
    if "index.html" in pages:
        pages.remove("index.html")
        pages.insert(0, "index.html")
    rows = []
    for p in pages:
        loc = SITE + "/" if p == "index.html" else "%s/%s" % (SITE, p)
        pri, freq = PRIORITY.get(p, DEFAULT)
        if p in GUIDES:
            pri, freq = "0.8", "monthly"
        rows.append(
            "  <url><loc>%s</loc><lastmod>%s</lastmod><changefreq>%s</changefreq>"
            "<priority>%s</priority></url>" % (loc, TODAY, freq, pri)
        )
    xml = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(rows)
        + "\n</urlset>\n"
    )
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write(xml)
    print("sitemap.xml written with %d urls" % len(rows))
    missing = [p for p in os.listdir(".") if p.endswith(".html") and p not in pages]
    if missing:
        print("NOT indexable (excluded):", ", ".join(sorted(missing)))


if __name__ == "__main__":
    main()
