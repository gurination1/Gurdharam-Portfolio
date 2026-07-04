import json
import os
import re

def analyze_headings(headings):
    stats = {
        "H1_count": 0,
        "H2_count": 0,
        "H3_count": 0,
        "H4_count": 0,
        "H5_count": 0,
        "H6_count": 0,
        "has_skips": False,
        "skip_details": [],
        "keyword_stuffed": False,
        "heading_list": []
    }
    
    levels = []
    for h in headings:
        tag = h["tag"]
        text = h["text"]
        level = int(tag[1])
        levels.append(level)
        stats[f"{tag}_count"] += 1
        stats["heading_list"].append(f"{tag}: {text}")
        
    # Check for skips
    # E.g., if we go from level X to Y where Y > X + 1 (e.g. H1 to H3, H2 to H4)
    # Note: Going back up (e.g. H3 to H2) is normal.
    for i in range(len(levels) - 1):
        curr_lvl = levels[i]
        next_lvl = levels[i+1]
        if next_lvl > curr_lvl + 1:
            stats["has_skips"] = True
            stats["skip_details"].append(f"H{curr_lvl} -> H{next_lvl}")
            
    # Check for keyword stuffing in headings (e.g., same keyword repeated multiple times in headings)
    all_heading_text = " ".join([h["text"].lower() for h in headings])
    stuffed_keywords = []
    for kw in ["development", "seo", "company", "services", "chandigarh", "mohali", "punjab"]:
        count = all_heading_text.count(kw)
        if count > 5:
            stuffed_keywords.append(f"{kw} ({count}x)")
    if stuffed_keywords:
        stats["keyword_stuffed"] = True
        stats["stuffed_details"] = stuffed_keywords
        
    return stats

def main():
    json_path = "/root/gurdharam-portfolio/scratch/crawl_results.json"
    if not os.path.exists(json_path):
        print(f"File not found: {json_path}")
        return
        
    with open(json_path, "r") as f:
        data = json.load(f)
        
    analysis = {}
    
    for domain, comp_data in data.items():
        if "error" in comp_data:
            analysis[domain] = {
                "name": comp_data["name"],
                "status": "error",
                "error": comp_data["error"]
            }
            continue
            
        homepage = comp_data.get("homepage")
        services = comp_data.get("services", [])
        
        # Calculate average word count
        all_word_counts = []
        if homepage:
            all_word_counts.append(homepage["word_count"])
        for s in services:
            all_word_counts.append(s["word_count"])
            
        avg_word_count = sum(all_word_counts) / len(all_word_counts) if all_word_counts else 0
        
        # Analyze homepage headings
        hp_heading_stats = analyze_headings(homepage["headings"]) if homepage else None
        
        # Analyze service page headings
        service_analyses = []
        for s in services:
            service_analyses.append({
                "url": s["url"],
                "word_count": s["word_count"],
                "heading_stats": analyze_headings(s["headings"]),
                "keywords": s["keyword_counts"]
            })
            
        # Keyword distribution across headings in homepage
        hp_heading_keywords = {}
        if homepage:
            for h in homepage["headings"]:
                h_text_lower = h["text"].lower()
                h_tag = h["tag"]
                for kw in ["punjab", "chandigarh", "mohali", "panchkula", "whatsapp", "bot", "web development", "seo", "automation"]:
                    if kw in h_text_lower:
                        if kw not in hp_heading_keywords:
                            hp_heading_keywords[kw] = []
                        hp_heading_keywords[kw].append(f"{h_tag}: {h['text']}")
                        
        analysis[domain] = {
            "name": comp_data["name"],
            "status": "success",
            "avg_word_count": avg_word_count,
            "homepage": {
                "url": homepage["url"] if homepage else None,
                "word_count": homepage["word_count"] if homepage else 0,
                "heading_stats": hp_heading_stats,
                "keyword_counts": homepage["keyword_counts"] if homepage else {},
                "heading_keyword_distribution": hp_heading_keywords
            },
            "services": service_analyses
        }
        
    with open("/root/gurdharam-portfolio/scratch/analysis_summary.json", "w") as f:
        json.dump(analysis, f, indent=2)
    print("Analysis saved to /root/gurdharam-portfolio/scratch/analysis_summary.json")

if __name__ == "__main__":
    main()
