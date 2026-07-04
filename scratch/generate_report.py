import json
import os

def load_data():
    with open("/root/gurdharam-portfolio/scratch/crawl_results.json", "r") as f:
        raw = json.load(f)
    with open("/root/gurdharam-portfolio/scratch/analysis_summary.json", "r") as f:
        summary = json.load(f)
    return raw, summary

def generate_markdown(raw_data, summary_data):
    md = []
    md.append("# Competitor Heading Quality and Keyword Distribution Report")
    md.append("\n*Prepared for Gurdharam Jeet Singh*\n")
    md.append("This report presents a deep-dive analysis of heading structures, levels, quality, word counts, and local SEO keyword distribution across the homepages and service pages of 10 key local competitors in the Punjab/Chandigarh region.")
    
    md.append("\n## 1. Executive Summary & Comparison Table\n")
    md.append("Based on the crawl data, there is a substantial disparity in SEO technical heading structures among local competitors. Some agencies (like Apensia and Appwrk) write extremely long-form content, while others (like PSoft, WebHopers, and DevexHub) suffer from significant technical flaws such as missing H1s, massive level skipping, or multiple H1 tags.")
    
    # Comparison table header
    md.append("| Competitor Domain | Avg Word Count | Homepage H1s | Level Skips | Keyword Stuffing | Local/Service Heading Focus | Overall SEO Grade |")
    md.append("| :--- | :---: | :---: | :---: | :---: | :--- | :---: |")
    
    # Fill comparison table
    for domain, stats in summary_data.items():
        if stats.get("status") == "error":
            md.append(f"| {domain} | N/A | N/A | N/A | N/A | Crawl Failed ({stats.get('error')}) | F |")
            continue
            
        hp = stats.get("homepage", {})
        hs = hp.get("heading_stats", {})
        
        avg_wc = f"{stats.get('avg_word_count'):.0f}"
        h1s = str(hs.get("H1_count", 0))
        skips = "Yes" if hs.get("has_skips", False) else "No"
        stuffed = "Yes" if hs.get("keyword_stuffed", False) else "No"
        
        # Local/Service heading focus summary
        focus_list = []
        dist = hp.get("heading_keyword_distribution", {})
        if "chandigarh" in dist or "punjab" in dist or "mohali" in dist:
            focus_list.append("Local")
        if "web development" in dist or "seo" in dist or "bot" in dist or "automation" in dist:
            focus_list.append("Service")
        focus_str = " + ".join(focus_list) if focus_list else "General / None"
        
        # Grading logic
        grade = "A"
        if h1s != "1" or skips == "Yes" or stuffed == "Yes":
            grade = "B"
        if int(h1s) > 2 or int(h1s) == 0:
            grade = "C"
        if int(h1s) >= 10:
            grade = "D"
        if stats.get("avg_word_count", 0) < 500:
            grade = "D"
            
        md.append(f"| {domain} | {avg_wc} | {h1s} | {skips} | {stuffed} | {focus_str} | {grade} |")
        
    md.append("\n### Key Takeaways from Table:")
    md.append("- **Technical Flaws are Widespread:** 2 of the 10 competitors have **0 H1 tags** on their homepage (WebHopers, DevexHub). 3 competitors have **multiple H1 tags** (Apensia: 2, Ink Web: 2, PSoft: 10). Gurdharam can easily outrank them on technical parameters by strictly sticking to one H1 per page.")
    md.append("- **Word Count Gap:** Appwrk (3,584 words avg) and Apensia (3,059 words avg) represent the high-quality, long-form content benchmark. Meanwhile, PSoft and WebHopers have very thin content, creating an opportunity for Gurdharam to outrank them by writing in-depth service pages.")
    md.append("- **Silo & Local Keywords:** Apensia is the only competitor aggressively using local geotargeted Chandigarh/Punjab silos and mapping them directly in headings. Ink Web Solutions does it on the homepage, while others ignore local search terms in their headings entirely.")
    
    md.append("\n## 2. Competitor-by-Competitor Breakdown\n")
    
    for domain, stats in summary_data.items():
        if stats.get("status") == "error":
            md.append(f"### {domain} ({stats.get('name')}) - FAILED")
            md.append(f"- **Status:** Crawl Failed")
            md.append(f"- **Error:** {stats.get('error')}")
            md.append("\n---")
            continue
            
        name = stats.get("name")
        md.append(f"### {domain} ({name})")
        md.append(f"- **Average Word Count:** {stats.get('avg_word_count'):.1f} words")
        
        hp = stats.get("homepage", {})
        if hp:
            md.append(f"- **Homepage URL:** [{hp.get('url')}]({hp.get('url')})")
            md.append(f"- **Homepage Word Count:** {hp.get('word_count')} words")
            
            hs = hp.get("heading_stats", {})
            if hs:
                md.append("- **Homepage Heading Structure Quality:**")
                md.append(f"  - **H1-H6 Counts:** H1: {hs['H1_count']}, H2: {hs['H2_count']}, H3: {hs['H3_count']}, H4: {hs['H4_count']}, H5: {hs['H5_count']}, H6: {hs['H6_count']}")
                md.append(f"  - **Heading Level Skips:** {'Yes (' + ', '.join(hs['skip_details']) + ')' if hs['has_skips'] else 'None'}")
                md.append(f"  - **Keyword Stuffed:** {'Yes (' + ', '.join(hs.get('stuffed_details', [])) + ')' if hs['keyword_stuffed'] else 'No'}")
                
            dist = hp.get("heading_keyword_distribution", {})
            md.append("- **Local / Service Keywords in Homepage Headings:**")
            if dist:
                for kw, headings in dist.items():
                    md.append(f"  - **'{kw}'** found in:")
                    for h in headings:
                        md.append(f"    - `{h}`")
            else:
                md.append("  - No local/service keywords targeted directly in headings.")
                
            # Collapsible Full Heading Inventory
            md.append("  <details>")
            md.append("  <summary>Click to view all Homepage Headings</summary>")
            md.append("  \n  ```text")
            # Get headings from raw data
            raw_hp = raw_data[domain].get("homepage", {})
            for h in raw_hp.get("headings", []):
                md.append(f"  {h['tag']}: {h['text']}")
            md.append("  ```\n  </details>")
            
        services = stats.get("services", [])
        md.append(f"- **Service Pages Analyzed ({len(services)}):**")
        for i, s in enumerate(services):
            md.append(f"  - **Service Page {i+1}:** [{s.get('url')}]({s.get('url')})")
            md.append(f"    - **Word Count:** {s.get('word_count')} words")
            shs = s.get("heading_stats", {})
            if shs:
                md.append(f"    - **H1-H4 Counts:** H1: {shs['H1_count']}, H2: {shs['H2_count']}, H3: {shs['H3_count']}, H4: {shs['H4_count']}")
                md.append(f"    - **Heading Level Skips:** {'Yes (' + ', '.join(shs['skip_details']) + ')' if shs['has_skips'] else 'None'}")
            
            # Collapsible headings for service pages
            md.append("    <details>")
            md.append(f"    <summary>Click to view headings for Service {i+1}</summary>")
            md.append("    \n    ```text")
            raw_s = raw_data[domain].get("services", [])[i]
            for h in raw_s.get("headings", []):
                md.append(f"    {h['tag']}: {h['text']}")
            md.append("    ```\n    </details>")
            
        md.append("\n---")
        
    md.append("\n## 3. Structural & SEO Heading Patterns Identified")
    md.append("\nThrough parsing the headings of all 10 sites, several major SEO heading patterns emerged:")
    md.append("1. **The Multi-H1 Anti-Pattern:** Several agencies treat H1 like a style class rather than a semantic page title. PSoft has **10 H1 tags** on its homepage, which dilutes the main topic of the site and confuses search engine crawler priority. Ink Web has 2 H1 tags. Gurdharam should strictly use exactly one H1 per page.")
    md.append("2. **The Missing H1 Anti-Pattern:** DevexHub and WebHopers have **0 H1 tags** on their homepage. This means search engines have to guess the primary context of their homepages, significantly hurting their ranking potential for competitive brand and service terms.")
    md.append("3. **Local Silo Mastery vs. Complete Neglect:** Apensia is highly competitive because of its dedicated local silo strategy (e.g., `/apensia/seo-services/chandigarh`). They have a dedicated page for Chandigarh with over 6,300 words, utilizing targeted headings like `H2: Professional SEO Services in Chandigarh...` and `H4: Chandigarh & Tricity`. In contrast, global agencies like Appwrk and Stellen completely omit local geographical keywords in their heading hierarchies, choosing to target only high-level service terms. Gurdharam must model Apensia's silo structure for Chandigarh, Mohali, and Punjab.")
    md.append("4. **Heading Level Skips:** Ink Web Solutions and PSoft skip heading levels (e.g., Ink Web skips from H4 to H6; PSoft skips from H2 to H4). This violates basic accessibility and semantic outline standards, which Google uses to construct search snippets and map page hierarchies.")
    md.append("5. **Chatbot and Automation Headings:** Only DevexHub and Brihaspati Tech target Chatbots/Automation in their headings (e.g., `H3: Build AI Chatbots Subscription Platform` or `H3: Try AI Call Bot`). This indicates that **WhatsApp AI Bots** and **Faceless Automation** are very low-competition services in the local Chandigarh/Punjab area, creating a massive opportunity for Gurdharam to dominate these niches.")
    
    md.append("\n## 4. Concrete Heading Optimizations for Gurdharam")
    md.append("\nTo outrank these competitors, Gurdharam should implement a highly structured, keyword-optimized, and technically compliant heading hierarchy across his portfolio/agency website.")
    
    md.append("\n### A. Strict Technical Heading Rules")
    md.append("1. **Exactly One H1 per Page:** Use H1 exclusively for the primary topic of the page (e.g., the primary service/location hook).")
    md.append("2. **Logical Flow (No Level Skipping):** Headings must follow a strict sequential order: H1 -> H2 -> H3 -> H4. Never skip levels (e.g., H2 straight to H4).")
    md.append("3. **No Empty Headings:** Ensure no empty `<h1>` or `<h2>` tags are left by WordPress themes, page builders (Elementor/Divi), or custom templates.")
    md.append("4. **Styling != Semantics:** Do not use heading tags for visual resizing. If a paragraph needs to look large, use CSS classes (e.g., class=\"text-xl\"), not `<h2>` or `<h3>`.")
    
    md.append("\n### B. Proposed Homepage Heading Blueprint")
    md.append(" Gurdharam should target both service authority and regional relevance on the homepage. Here is the recommended blueprint:")
    md.append("```text")
    md.append("H1: Autonomous AI Bots & Custom Web Development in Chandigarh, Punjab")
    md.append("  ├── H2: Next-Gen Web Solutions & AI Automation for Modern Businesses")
    md.append("  │    ├── H3: Custom Web Development & Day-1 Google Indexing")
    md.append("  │    ├── H3: WhatsApp AI Bots (Dentists, Dental Clinics, Real Estate)")
    md.append("  │    └── H3: 24/7 Faceless Media & Video Automation Pipelines")
    md.append("  ├── H2: Why Our AI & Web Architecture Outperforms Traditional Agencies")
    md.append("  │    ├── H3: Day-1 Google Indexing & Advanced Technical SEO Silos")
    md.append("  │    └── H3: Autonomous Pipelines Running on Zero Maintenance")
    md.append("  ├── H2: Empowering Local Businesses in Chandigarh, Mohali & Panchkula")
    md.append("  └── H2: Frequently Asked Questions (AI & Custom Dev)")
    md.append("       ├── H3: How does Day-1 Google Indexing work?")
    md.append("       ├── H3: Can a WhatsApp AI Bot integrate with my CRM?")
    md.append("       └── H3: What platforms support Faceless Video Automation?")
    md.append("```")
    
    md.append("\n### C. Proposed Service Silo Page Heading Blueprint")
    md.append("To target highly profitable local searches, Gurdharam should create location-specific service silos (e.g., `/services/whatsapp-ai-bot-chandigarh`). Here is a blueprint for a service landing page:")
    md.append("```text")
    md.append("H1: WhatsApp AI Bots for Dental Clinics & Local Businesses in Chandigarh")
    md.append("  ├── H2: Automate Appointment Booking & Lead Qualification 24/7")
    md.append("  │    ├── H3: Interactive Dental Clinic Assistant (Demo)")
    md.append("  │    └── H3: Smart WhatsApp Bots for Real Estate & Professional Services")
    md.append("  ├── H2: Key Features of Our Local AI Bot Integrations")
    md.append("  │    ├── H3: Real-time Sync with Google Sheets & CRM")
    md.append("  │    └── H3: Zero-Maintenance Autonomous Hand-off")
    md.append("  ├── H2: Serving Chandigarh, Mohali, Panchkula & Punjab Region")
    md.append("  └── H2: FAQ for Local Businesses in the Tricity")
    md.append("       ├── H3: How long does it take to deploy a WhatsApp AI Bot?")
    md.append("       └── H3: Will it work for dental clinic appointment booking?")
    md.append("```")
    
    md.append("\n### D. Word Count and Content Depth Target")
    md.append("- **Homepage Target:** Aim for **2,500 - 3,000 words** to outrank ThinkNext, Ink Web, and match Apensia's depth.")
    md.append("- **Service Silo Target:** Aim for **1,500 - 2,500 words** of high-density technical copy per service page. This is much deeper than PSoft (133 words) or Apensia's thin pages, but structured cleanly so that users can read it easily.")
    
    return "\n".join(md)

def main():
    raw_data, summary_data = load_data()
    report_content = generate_markdown(raw_data, summary_data)
    
    output_path = "/root/gurdharam-portfolio/scratch/competitor_heading_quality_report.md"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w") as f:
        f.write(report_content)
        
    print(f"Report generated and saved to {output_path}")

if __name__ == "__main__":
    main()
