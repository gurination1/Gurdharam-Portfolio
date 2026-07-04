import urllib3
import requests
from bs4 import BeautifulSoup
import re
import json
import os
import time

# Disable SSL warnings
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

competitors = [
    {"name": "ThinkNext", "domain": "thinknext.co.in"},
    {"name": "Apensia", "domain": "apensia.in"},
    {"name": "Appwrk", "domain": "appwrk.com"},
    {"name": "Ink Web Solutions", "domain": "inkwebsolutions.com"},
    {"name": "TechGlide", "domain": "techglide.in"},
    {"name": "WebHopers", "domain": "webhopers.in"},
    {"name": "DevexHub", "domain": "devexhub.com"},
    {"name": "Stellen Infotech", "domain": "stelleninfotech.com"},
    {"name": "Brihaspati Tech", "domain": "brihaspatitech.com"},
    {"name": "PSoft", "domain": "psoft.in"}
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

def clean_text(text):
    if not text:
        return ""
    return re.sub(r'\s+', ' ', text).strip()

def get_word_count(soup):
    # Remove script and style elements
    for script in soup(["script", "style"]):
        script.extract()
    text = soup.get_text()
    words = re.findall(r'\w+', text)
    return len(words)

def extract_headings(soup):
    headings = []
    for tag_name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
        for tag in soup.find_all(tag_name):
            text = clean_text(tag.get_text())
            if text:
                headings.append({
                    "tag": tag_name.upper(),
                    "text": text
                })
    return headings

def get_service_urls(soup, base_url):
    service_urls = set()
    service_patterns = [
        re.compile(r'/services?(/|$)', re.I),
        re.compile(r'/(web-development|seo|whatsapp|chatbot|app-development|digital-marketing)(/|$)', re.I)
    ]
    
    for a in soup.find_all('a', href=True):
        href = a['href']
        # Convert to absolute URL
        if href.startswith('/'):
            url = base_url.rstrip('/') + href
        elif href.startswith('http'):
            if base_url in href or base_url.replace('www.', '') in href or 'thinknext' in href or 'apensia' in href or 'appwrk' in href or 'inkweb' in href or 'techglide' in href or 'webhopers' in href or 'devexhub' in href or 'stellen' in href or 'brihaspati' in href or 'psoft' in href:
                url = href
            else:
                continue
        else:
            url = base_url.rstrip('/') + '/' + href
            
        # Clean URL (remove anchors and queries)
        url = url.split('#')[0].split('?')[0].rstrip('/')
        
        # Check if URL fits service patterns
        for pattern in service_patterns:
            if pattern.search(url):
                service_urls.add(url)
                break
                
    # Also if we don't have enough, let's look for standard links containing "service" or "work"
    if len(service_urls) < 3:
        for a in soup.find_all('a', href=True):
            href = a['href']
            text = clean_text(a.get_text())
            if any(kw in text.lower() for kw in ['service', 'what we do', 'our work', 'solutions']):
                if href.startswith('/'):
                    url = base_url.rstrip('/') + href
                elif href.startswith('http'):
                    url = href
                else:
                    url = base_url.rstrip('/') + '/' + href
                url = url.split('#')[0].split('?')[0].rstrip('/')
                # check if it is same domain
                domain_part = base_url.replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0]
                if domain_part in url:
                    service_urls.add(url)
                    
    return list(service_urls)[:4] # limit to top 4 potential service pages

def analyze_keywords(soup):
    # Count occurrences of specific keywords
    text = soup.get_text().lower()
    keywords = [
        "punjab", "chandigarh", "mohali", "panchkula",
        "whatsapp", "chatbot", "whatsapp bot", "bot", "ai bot",
        "web development", "website design", "custom web",
        "seo", "google indexing", "day-1", "indexing",
        "automation", "faceless", "video automation", "youtube automation"
    ]
    counts = {}
    for kw in keywords:
        # Match word boundaries or substring depending on keyword
        counts[kw] = len(re.findall(r'\b' + re.escape(kw) + r'\b', text))
    return counts

def main():
    results = {}
    for comp in competitors:
        name = comp["name"]
        domain = comp["domain"]
        print(f"Crawling {name} ({domain})...")
        
        results[domain] = {
            "name": name,
            "domain": domain,
            "homepage": None,
            "services": []
        }
        
        # Crawl homepage
        base_urls = [
            f"https://{domain}",
            f"https://www.{domain}",
            f"http://{domain}",
            f"http://www.{domain}"
        ]
        homepage_soup = None
        homepage_url = None
        
        for url in base_urls:
            try:
                print(f"Trying {url}...")
                response = requests.get(url, headers=HEADERS, timeout=12, verify=False, allow_redirects=True)
                if response.status_code == 200:
                    homepage_soup = BeautifulSoup(response.content, 'html.parser')
                    homepage_url = response.url
                    break
            except Exception as e:
                print(f"Failed to fetch {url}: {e}")
                
        if not homepage_soup:
            print(f"ERROR: Could not fetch homepage for {domain}")
            results[domain]["error"] = "Homepage unreachable"
            continue
            
        # Parse homepage
        print(f"Successfully fetched homepage: {homepage_url}")
        hp_word_count = get_word_count(homepage_soup)
        hp_headings = extract_headings(homepage_soup)
        hp_keywords = analyze_keywords(homepage_soup)
        
        results[domain]["homepage"] = {
            "url": homepage_url,
            "word_count": hp_word_count,
            "headings": hp_headings,
            "keyword_counts": hp_keywords
        }
        
        # Get potential service pages
        service_urls = get_service_urls(homepage_soup, homepage_url)
        print(f"Found service URLs: {service_urls}")
        
        for s_url in service_urls:
            if s_url == homepage_url or s_url == homepage_url.rstrip('/') or s_url + '/' == homepage_url:
                continue
            try:
                print(f"Crawling service page: {s_url}")
                time.sleep(1) # delay to avoid blocking
                s_resp = requests.get(s_url, headers=HEADERS, timeout=12, verify=False)
                if s_resp.status_code == 200:
                    s_soup = BeautifulSoup(s_resp.content, 'html.parser')
                    s_wc = get_word_count(s_soup)
                    s_headings = extract_headings(s_soup)
                    s_kw = analyze_keywords(s_soup)
                    results[domain]["services"].append({
                        "url": s_url,
                        "word_count": s_wc,
                        "headings": s_headings,
                        "keyword_counts": s_kw
                    })
            except Exception as e:
                print(f"Failed to fetch service page {s_url}: {e}")
                
    # Save results to json
    os.makedirs("/root/gurdharam-portfolio/scratch", exist_ok=True)
    with open("/root/gurdharam-portfolio/scratch/crawl_results.json", "w") as f:
        json.dump(results, f, indent=2)
    print("Crawling complete. Saved to /root/gurdharam-portfolio/scratch/crawl_results.json")

if __name__ == "__main__":
    main()
