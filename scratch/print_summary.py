import json

def main():
    with open("/root/gurdharam-portfolio/scratch/analysis_summary.json", "r") as f:
        data = json.load(f)
        
    for domain, stats in data.items():
        if stats.get("status") == "error":
            print(f"Domain: {domain} - FAILED ({stats.get('error')})")
            continue
            
        print("="*60)
        print(f"Domain: {domain} ({stats['name']})")
        print(f"Average Word Count: {stats['avg_word_count']:.1f}")
        
        hp = stats.get("homepage")
        if hp:
            print(f"Homepage URL: {hp['url']}")
            print(f"Homepage Word Count: {hp['word_count']}")
            hs = hp.get("heading_stats")
            if hs:
                print(f"  Headings Count: H1: {hs['H1_count']}, H2: {hs['H2_count']}, H3: {hs['H3_count']}, H4: {hs['H4_count']}, H5: {hs['H5_count']}, H6: {hs['H6_count']}")
                print(f"  Skips: {hs['skip_details']}")
                print(f"  Keyword Stuffed: {hs['keyword_stuffed']}")
                if hs['keyword_stuffed']:
                    print(f"    Stuffed Details: {hs.get('stuffed_details')}")
            dist = hp.get("heading_keyword_distribution")
            if dist:
                print("  Heading Keyword Distribution:")
                for kw, headings in dist.items():
                    print(f"    - '{kw}': {headings}")
                    
        print(f"Services Crawled: {len(stats['services'])}")
        for i, s in enumerate(stats['services']):
            print(f"  Service {i+1}: {s['url']}")
            print(f"    Word Count: {s['word_count']}")
            shs = s.get("heading_stats")
            if shs:
                print(f"    Headings: H1: {shs['H1_count']}, H2: {shs['H2_count']}, H3: {shs['H3_count']}, H4: {shs['H4_count']}")
                if shs['skip_details']:
                    print(f"    Skips: {shs['skip_details']}")

if __name__ == "__main__":
    main()
