import json

with open("/root/gurdharam-portfolio/scratch/analysis_summary.json") as f:
    data = json.load(f)

for domain in ["thinknext.co.in", "apensia.in"]:
    stats = data.get(domain, {})
    print("="*60)
    print(f"Domain: {domain} ({stats.get('name')})")
    print(f"Average Word Count: {stats.get('avg_word_count')}")
    hp = stats.get("homepage", {})
    if hp:
        print(f"Homepage URL: {hp.get('url')}")
        print(f"Homepage Word Count: {hp.get('word_count')}")
        hs = hp.get("heading_stats", {})
        if hs:
            print(f"  Headings Count: H1: {hs['H1_count']}, H2: {hs['H2_count']}, H3: {hs['H3_count']}, H4: {hs['H4_count']}, H5: {hs['H5_count']}, H6: {hs['H6_count']}")
            print(f"  Skips: {hs['skip_details']}")
            print(f"  Keyword Stuffed: {hs['keyword_stuffed']}")
            if hs['keyword_stuffed']:
                print(f"    Stuffed Details: {hs.get('stuffed_details')}")
        print(f"  Heading Keyword Dist: {hp.get('heading_keyword_distribution')}")
    
    services = stats.get("services", [])
    print(f"Services Crawled: {len(services)}")
    for i, s in enumerate(services):
        print(f"  Service {i+1}: {s.get('url')}")
        print(f"    Word Count: {s.get('word_count')}")
        shs = s.get("heading_stats", {})
        if shs:
            print(f"    Headings Count: H1: {shs['H1_count']}, H2: {shs['H2_count']}, H3: {shs['H3_count']}, H4: {shs['H4_count']}")
            print(f"    Skips: {shs['skip_details']}")
