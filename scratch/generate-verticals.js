const fs = require('fs');
const path = require('path');

const verticals = [
  // ━━━ WHATSAPP BOTS (12 Verticals) ━━━
  {
    id: "jewelry-stores",
    type: "whatsapp-bot",
    name: "Jewelry Stores & Showrooms",
    title: "WhatsApp Bot for Jewelry Stores | Daily Gold Rates & Catalog Quotes | Gurdharam",
    metaDescription: "Automate live gold rate quotes, HD design catalog browsing, and pre-qualify high-ticket showroom walk-ins 24/7 with a direct Meta Cloud API WhatsApp bot. Zero SaaS platform fees.",
    painPoint: "High-value jewelry prospects drop off when waiting hours for custom pricing quotes on volatile daily gold rates, diamond certifications, or ornament availability.",
    example: "A client texts asking for 22k bridal necklace pricing. The bot queries live MCX market gold rates, adds custom making charges and 3% GST, and dispatches a verified HD catalog card with 6-digit HUID hallmarking details in 680ms.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-furniture-showrooms",
      "/services/whatsapp-bot-automobile-dealerships"
    ],
    roiMetrics: [
      { metric: "Quote Drop-off", value: "-78%", timeframe: "First 14 Days", description: "Sub-second live gold rate pricing prevents buyers from shopping at competitor showrooms." },
      { metric: "VIP Walk-ins", value: "3.2x", timeframe: "Monthly", description: "Automated bridal appointment booking triples qualified high-ticket weekend showroom visits." },
      { metric: "Sales Desk Savings", value: "₹45,000/mo", timeframe: "Recurring", description: "Eliminates repetitive manual messaging, photo sharing, and weight calculations by sales staff." }
    ],
    compliance: [
      { standard: "BIS 100% Hallmarking", authority: "Bureau of Indian Standards", requirement: "Mandatory 6-digit HUID code display on all gold ornament quotes.", implementation: "Integrated HUID lookup and hallmark verification badges on all product cards." },
      { standard: "PMLA 2002 Compliance", authority: "Financial Intelligence Unit", requirement: "Customer identity verification for cash transactions above ₹2,00,000.", implementation: "Automated PAN/Aadhaar document collection and secure encrypted vault storage." }
    ],
    workflow: [
      { step: 1, title: "Inbound Buyer Ping", actor: "Customer", action: "Sends message requesting 22k gold chain pricing or custom bridal necklace catalog.", tech: "Meta Cloud API Webhook" },
      { step: 2, title: "Live MCX & Inventory Query", actor: "Bot Engine", action: "Pulls today's gold rate, computes weight + making charge + GST, and filters in-stock designs.", tech: "Node.js + SQLite D1" },
      { step: 3, title: "Interactive Card Dispatch", actor: "Bot Engine", action: "Sends rich media card with HD photos, net weight, hallmarking badge, and trial booking button.", tech: "WhatsApp Interactive Templates" },
      { step: 4, title: "VIP Showroom Appointment", actor: "Sales Manager", action: "Receives qualified lead alert on private dashboard with customer budget and selected designs.", tech: "Real-time WebSocket CRM" }
    ],
    faqs: [
      { question: "How does the bot calculate live gold rates dynamically?", answer: "The bot connects to real-time bullion feeds (MCX / IBJA) every morning. When a customer inquires, it automatically calculates the final price using the formula: (Gram Weight × Daily Rate) + Making Charges + 3% GST." },
      { question: "Can customers book physical appointments to view high-value sets?", answer: "Yes. The bot provides an interactive calendar picker where customers select their preferred date and private viewing lounge time slot, automatically blocking the calendar." },
      { question: "Are there recurring monthly fees for using this WhatsApp bot?", answer: "Zero platform subscriptions. You connect directly to Meta Cloud API, utilizing Meta's 1,000 free monthly customer service conversations with zero middleman markup." }
    ],
    techStack: ["Meta Cloud API v20.0", "SQLite Cloud Engine", "Interactive List Pickers", "Node.js Webhooks", "MCX Bullion API"]
  },
  {
    id: "coaching-institutes",
    type: "whatsapp-bot",
    name: "Coaching Institutes & Schools",
    title: "WhatsApp Bot for Coaching Institutes & Academies | Lead Triage & Demo Booking | Gurdharam",
    metaDescription: "Automate student inquiries, syllabus PDF downloads, fee breakdowns, and demo class bookings 24/7. Direct Meta Cloud API WhatsApp bot for schools and competitive institutes in Punjab.",
    painPoint: "Front-desk counselors spend 4+ hours daily answering repetitive inquiries about batch timings, fee structures, and course syllabus instead of counseling serious enrollments.",
    example: "A parent texts inquiring about JEE prep batches. The bot verifies student class, provides batch schedules, sends fee structure PDFs, and schedules a free offline trial session in under 30 seconds.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-clinics-hospitals",
      "/services/whatsapp-bot-gyms-fitness"
    ],
    roiMetrics: [
      { metric: "Demo Class Attendance", value: "+42%", timeframe: "First Month", description: "Instant trial booking and automated T-24h/T-2h reminders ensure students attend their demo classes." },
      { metric: "Inquiry Deflection", value: "85%", timeframe: "Immediate", description: "Routine fee structure and timetable queries resolved automatically without counselor intervention." },
      { metric: "Admin Cost Savings", value: "₹35,000/mo", timeframe: "Monthly", description: "Replaces 2 junior support staff dedicated to manual phone answering and PDF dispatch." }
    ],
    compliance: [
      { standard: "DPDP Act 2023 (Section 9)", authority: "Data Protection Board of India", requirement: "Verifiable parental consent for student data collection under 18 years of age.", implementation: "Explicit parent opt-in consent capture before processing student records." },
      { standard: "ASCI Educational Guidelines", authority: "Advertising Standards Council of India", requirement: "Accurate representations of course duration, faculty, and past result claims.", implementation: "Audited official fee sheets and authentic faculty credentials sent directly to parents." }
    ],
    workflow: [
      { step: 1, title: "Student Inquiry Ingestion", actor: "Student/Parent", action: "Texts WhatsApp bot asking about NEET, JEE, IELTS, or Foundation course details.", tech: "Meta Cloud API Webhook" },
      { step: 2, title: "Targeted Stream Triage", actor: "Bot Engine", action: "Asks for target exam year, current grade, and preferred morning or evening batch timing.", tech: "WhatsApp Quick Replies" },
      { step: 3, title: "Instant Syllabus Dispatch", actor: "Bot Engine", action: "Delivers official prospectus PDF, fee breakdown, and teacher profile deck in under 1 second.", tech: "Media Message Engine" },
      { step: 4, title: "Demo Seat Reservation", actor: "Head Counselor", action: "Locks offline classroom seat, generates entry pass, and syncs student details with institute ERP.", tech: "Google Sheets / ERP Webhook" }
    ],
    faqs: [
      { question: "Can the bot collect admission registration fees via UPI?", answer: "Yes. The bot can generate dynamic Razorpay or direct UPI intent links with verified QR codes, sending an automated tax invoice upon payment confirmation." },
      { question: "Can we send automated reminders before test series or demo classes?", answer: "Yes. The system schedules automated reminders 24 hours and 2 hours prior to scheduled demo lectures or mock tests to maximize attendance." },
      { question: "How does it connect to our current student management software?", answer: "The bot connects via standard REST APIs, Webhooks, or direct Google Sheets synchronization, updating student status in real-time." }
    ],
    techStack: ["Meta Cloud API v20.0", "Google Sheets Sync", "PDF Prospectus Engine", "Razorpay / UPI Gateway", "Node.js Webhook"]
  },
  {
    id: "clinics-hospitals",
    type: "whatsapp-bot",
    name: "Clinics, Doctors & Hospitals",
    title: "WhatsApp Bot for Clinics & Hospitals | OPD Booking & Queue Updates | Gurdharam",
    metaDescription: "Automate doctor appointments, OPD queue notifications, and patient follow-ups 24/7. Direct Meta API healthcare bot with zero recurring platform fees and strict patient data privacy.",
    painPoint: "Front-desk clinic receptionists face severe phone congestion during morning peak hours, causing missed appointments, long waiting room queues, and patient frustration.",
    example: "A patient messages seeking a consultation with a cardiologist. The bot displays open morning/evening OPD slots, captures patient details, reserves the token, and sends Google Maps clinic navigation.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-salons-spas",
      "/services/whatsapp-bot-gyms-fitness"
    ],
    roiMetrics: [
      { metric: "Phone Queue Backlog", value: "-68%", timeframe: "First 7 Days", description: "Automates 7 out of 10 incoming booking calls, liberating clinical staff for in-person care." },
      { metric: "Patient No-Show Rate", value: "-45%", timeframe: "Monthly", description: "Automated WhatsApp appointment confirmations and day-of reminders keep consultation slots full." },
      { metric: "Staff Hours Reclaimed", value: "2.5 hrs/day", timeframe: "Daily", description: "Receptionists no longer spend hours reading schedules or writing manual token receipts." }
    ],
    compliance: [
      { standard: "DPDP Act 2023 & DISHA", authority: "Ministry of Health & Family Welfare", requirement: "Zero patient health information (PHI) leakage to third-party ad tracking pixels.", implementation: "100% private database encryption with zero third-party analytics scripts." },
      { standard: "NMC Telemedicine Guidelines", authority: "National Medical Commission", requirement: "Explicit doctor registration numbers and consultation scope disclosures.", implementation: "Verified doctor credentials and emergency contact disclaimers on every interaction." }
    ],
    workflow: [
      { step: 1, title: "Patient Appointment Request", actor: "Patient", action: "Messages clinic asking for doctor consultation or lab test availability.", tech: "WhatsApp Business API" },
      { step: 2, title: "Department & Slot Selection", actor: "Bot Engine", action: "Displays interactive doctor list, consultation fees, and available morning/evening OPD tokens.", tech: "Interactive Section Menus" },
      { step: 3, title: "Token Confirmation & Pass", actor: "Bot Engine", action: "Issues unique digital OPD token pass with estimated consultation time and fasting instructions.", tech: "Dynamic PDF Generator" },
      { step: 4, title: "HMS Integration & Sync", actor: "Clinic Reception", action: "Updates clinic electronic health record queue and alerts duty doctor on internal dashboard.", tech: "REST API / SQLite Engine" }
    ],
    faqs: [
      { question: "Is patient consultation data kept secure and confidential?", answer: "Yes. We deploy direct encrypted webhooks without third-party SaaS middleware, ensuring all patient names, symptoms, and tokens remain strictly within your clinic's private database." },
      { question: "Can patients reschedule or cancel their appointments via WhatsApp?", answer: "Yes. Patients can tap 'Reschedule' or 'Cancel' directly inside WhatsApp, instantly releasing the time slot for other waiting patients." },
      { question: "Can the bot send lab test reports and prescription PDFs?", answer: "Yes. Once the pathologist or doctor uploads the report to your system, the bot securely delivers password-protected PDFs directly to the patient's WhatsApp." }
    ],
    techStack: ["Meta Cloud API v20.0", "ABDM / ABHA ID Ready", "Encrypted SQLite DB", "OPD Token Engine", "Google Maps API"]
  },
  {
    id: "salons-spas",
    type: "whatsapp-bot",
    name: "Salons, Spas & Beauty Parlors",
    title: "WhatsApp Bot for Salons & Spas | Stylist Booking & No-Show Reduction | Gurdharam",
    metaDescription: "Automate salon bookings, stylist selection, service packages, and automated appointment reminders 24/7. Slash no-shows and fill weekday chairs on auto-pilot.",
    painPoint: "Last-minute client cancellations and no-shows leave empty stylist chairs that cost premium salons up to ₹30,000+ in lost billable services every week.",
    example: "A client texts requesting a bridal hair spa and makeup on Saturday. The bot checks senior stylist availability, books the 2-hour slot, and triggers automated reminder alerts 24 hours and 2 hours prior.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-clinics-hospitals",
      "/services/whatsapp-bot-gyms-fitness"
    ],
    roiMetrics: [
      { metric: "No-Show Chair Loss", value: "-72%", timeframe: "First Month", description: "Automated two-step appointment reminders ensure clients arrive on time or reschedule early." },
      { metric: "Weekday Slot Fill", value: "+28%", timeframe: "Ongoing", description: "Automated off-peak discount broadcast messages convert slow Tuesday-Thursday slots into bookings." },
      { metric: "Recovered Revenue", value: "₹28,000/mo", timeframe: "Monthly", description: "Prevents revenue leakage by filling cancelled slots through automated waitlist notifications." }
    ],
    compliance: [
      { standard: "Consumer Protection Rules 2020", authority: "Ministry of Consumer Affairs", requirement: "Clear disclosure of service pricing, cancellation timelines, and refund terms.", implementation: "Transparent digital rate card with explicit cancellation policy cards displayed prior to booking." },
      { standard: "GST Invoice Guidelines", authority: "Central Board of Indirect Taxes", requirement: "18% GST itemized invoice generation for luxury salon and beauty treatments.", implementation: "Automated itemized digital tax invoice generation with GST breakdown." }
    ],
    workflow: [
      { step: 1, title: "Service & Stylist Selection", actor: "Client", action: "Selects desired hair, skin, or spa treatment from categorized interactive WhatsApp menu.", tech: "Interactive List Component" },
      { step: 2, title: "Calendar Slot Lock", actor: "Bot Engine", action: "Checks real-time stylist availability, locks the time window, and prevents double-booking.", tech: "Google Calendar API" },
      { step: 3, title: "Appointment Confirmation", actor: "Bot Engine", action: "Sends VIP booking pass with salon directions, preparation tips, and cancel/reschedule buttons.", tech: "Dynamic Template Engine" },
      { step: 4, title: "Drip Reminder Sequence", actor: "Bot Engine", action: "Dispatches automated reminder 24h before and 2h before the appointment with single-tap confirmation.", tech: "Cron / Scheduled Webhook" }
    ],
    faqs: [
      { question: "Can clients pick their preferred stylist or makeup artist?", answer: "Yes. The bot displays a list of active stylists along with their specializations, allowing clients to book specific artists or select 'Any Available Stylist'." },
      { question: "How does the bot help fill empty chairs during slow weekdays?", answer: "You can trigger targeted promotional broadcasts to past clients offering weekday package deals, driving instant bookings directly back into open calendar slots." },
      { question: "Can we collect advance booking deposits to prevent frivolous bookings?", answer: "Yes. The bot can integrate UPI and payment gateways to collect partial advance deposits before locking premium weekend slots." }
    ],
    techStack: ["Meta Cloud API v20.0", "Google Calendar Engine", "Scheduled Cron Workers", "UPI Payment Hooks", "Node.js Webhook"]
  },
  {
    id: "real-estate",
    type: "whatsapp-bot",
    name: "Real Estate Brokers & Builders",
    title: "WhatsApp Bot for Real Estate | Property Leads & RERA Catalog Automation | Gurdharam",
    metaDescription: "Filter homebuyers by budget, location, and property type 24/7. Auto-send RERA-approved project brochures and route qualified high-ticket buyers directly to brokers.",
    painPoint: "Real estate agents waste 80% of their workday fielding calls from unqualified leads or non-serious window shoppers who don't have matching budgets.",
    example: "A prospective buyer texts asking for 3BHK flats in Chandigarh. The bot asks for budget (₹80L–₹1.5Cr), preferred sector, sends high-resolution PDF brochures with RERA registration numbers, and alerts the lead broker.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-furniture-showrooms",
      "/services/whatsapp-bot-wedding-planners"
    ],
    roiMetrics: [
      { metric: "Qualified Buyer Triage", value: "5.4x", timeframe: "First 30 Days", description: "Filters out window-shoppers instantly by verifying budget, possession timeline, and preferred location." },
      { metric: "Broker Time Reclaimed", value: "90%", timeframe: "Daily", description: "Brokers only spend time speaking to high-intent buyers who have already reviewed project brochures." },
      { metric: "Lead Cost Savings", value: "₹60,000/mo", timeframe: "Monthly", description: "Maximizes ROI from portal leads (99acres / MagicBricks) by engaging prospects within 15 seconds." }
    ],
    compliance: [
      { standard: "Punjab RERA Section 11(2)", authority: "Real Estate Regulatory Authority", requirement: "Mandatory display of RERA project registration numbers and agent license on all advertisements.", implementation: "Automatic watermark and text inclusion of official RERA license on all generated brochures." },
      { standard: "PMLA Real Estate Rules", authority: "Financial Intelligence Unit", requirement: "Buyer KYC and source of funds verification for high-value property acquisitions.", implementation: "Secure buyer document intake module with end-to-end encrypted storage." }
    ],
    workflow: [
      { step: 1, title: "Instant Lead Engagement", actor: "Buyer", action: "Submits inquiry via portal ad or scans site signage QR code, triggering instant bot greeting.", tech: "Meta Cloud API Webhook" },
      { step: 2, title: "Buyer Qualification Filter", actor: "Bot Engine", action: "Gathers configuration (2BHK/3BHK/Villa), investment budget, and expected possession date.", tech: "Interactive Button Matrix" },
      { step: 3, title: "RERA Brochure PDF Dispatch", actor: "Bot Engine", action: "Delivers verified floor plans, payment schedules, and site location map with RERA verification badge.", tech: "Media Pipeline Engine" },
      { step: 4, title: "Broker Hot-Handoff", actor: "Lead Broker", action: "Receives qualified WhatsApp summary with buyer phone, budget, and booked physical site tour.", tech: "Direct CRM Webhook" }
    ],
    faqs: [
      { question: "How quickly does the bot respond to incoming leads from Facebook or portal ads?", answer: "The bot triggers within 500ms of the webhook arriving from Meta Ads, 99acres, or your website, engaging the prospect while their buying intent is at its highest." },
      { question: "Can the bot share video walkthroughs and location pins?", answer: "Yes. The bot can deliver HD video tours, Google Drive media links, and exact Google Maps site location pins directly inside the chat." },
      { question: "Does the bot comply with RERA advertisement regulations?", answer: "Yes. All property cards and PDF brochures sent by the bot automatically include your official RERA agent registration number and specific project RERA credentials." }
    ],
    techStack: ["Meta Cloud API v20.0", "RERA Verification Module", "PDF Brochure Engine", "Lead Scoring Logic", "Node.js Webhook"]
  },
  {
    id: "malls-retail",
    type: "whatsapp-bot",
    name: "Shopping Malls & Retail Centers",
    title: "WhatsApp Bot for Malls & Retail Centers | Tenant Directory & Offers | Gurdharam",
    metaDescription: "Automate store directory search, ongoing tenant deals, cinema showtimes, and parking directions 24/7 with an interactive retail WhatsApp chatbot.",
    painPoint: "Mall shoppers struggle to locate specific brand outlets, upper-floor stores, cinema showtimes, or active promotional sales, resulting in missed retail revenue.",
    example: "A visitor texts 'Where is Zara?'. The bot replies in under a second with 'First Floor, Central Atrium (Near Escalator 2)', displays today's ongoing 20% discount offer, and shares a floor map vector.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-restaurants-cafes",
      "/services/whatsapp-bot-wedding-planners"
    ],
    roiMetrics: [
      { metric: "Upper-Floor Retail Footfall", value: "+34%", timeframe: "First Month", description: "Direct vector search guides shoppers directly to upper-floor retail outlets and niche boutique stores." },
      { metric: "Directory Resolution Speed", value: "92%", timeframe: "Immediate", description: "Automates tenant location and parking queries without requiring human information desk staff." },
      { metric: "Info-Desk Overhead", value: "₹40,000/mo", timeframe: "Monthly", description: "Reduces printed mall brochures and minimizes physical customer support staff requirements." }
    ],
    compliance: [
      { standard: "Legal Metrology Act", authority: "Department of Consumer Affairs", requirement: "Accurate disclosure of maximum retail price (MRP) and transparent promotional discount terms.", implementation: "Audited brand promotional message templates with clear expiry and terms disclaimer." },
      { standard: "DPDP Act 2023 Visitor Privacy", authority: "Data Protection Board", requirement: "Explicit opt-in consent before sending promotional mall retail broadcast updates.", implementation: "Double opt-in verification and instant one-tap 'Unsubscribe' button on all marketing messages." }
    ],
    workflow: [
      { step: 1, title: "QR Scan & Store Search", actor: "Shopper", action: "Scans QR code at mall entrance or texts bot asking for specific brand, cuisine, or cinema movie.", tech: "WhatsApp Business API" },
      { step: 2, title: "Instant Directory Lookup", actor: "Bot Engine", action: "Performs fuzzy vector search against tenant database, identifying floor, wing, and nearby landmarks.", tech: "SQLite Vector Search" },
      { step: 3, title: "Floor Map & Deal Card", actor: "Bot Engine", action: "Dispatches high-resolution floor map cutout along with active store coupons and cinema timings.", tech: "Rich Media Dispatcher" },
      { step: 4, title: "Parking & Event Updates", actor: "Mall Operations", action: "Provides parking fee rates, EV charging station status, and weekend promotional event schedules.", tech: "Live CMS Webhook" }
    ],
    faqs: [
      { question: "How is the tenant and store directory updated when new brands open?", answer: "Mall management can update store listings, floor locations, and promotions in a simple Google Sheet or web dashboard, which syncs with the bot in real-time." },
      { question: "Can the bot showcase live movie showtimes and PVR/INOX ticket links?", answer: "Yes. The bot can display daily movie schedules along with direct booking deep-links for theater complexes inside the mall." },
      { question: "Can shoppers view active restaurant menus and reserve dining tables?", answer: "Yes. Shoppers can view menus for food court and fine dining restaurants, connecting directly to table reservation lines." }
    ],
    techStack: ["Meta Cloud API v20.0", "SQLite Directory Engine", "Vector Store Locator", "Floor Map Engine", "Node.js Webhook"]
  },
  {
    id: "gyms-fitness",
    type: "whatsapp-bot",
    name: "Gyms & Fitness Centers",
    title: "WhatsApp Bot for Gyms & Fitness Centers | Membership Renewals & Class Booking | Gurdharam",
    metaDescription: "Automate gym membership renewal reminders, personal trainer schedules, and free trial passes on auto-pilot. Recover lapsed gym members with direct UPI payment links.",
    painPoint: "Gyms lose up to 30% of their member base simply because front-desk staff fails to send proactive renewal reminders before plans expire.",
    example: "A member's quarterly plan expires in 3 days. The bot automatically sends a personalized renewal reminder with a direct UPI payment link, generating a digital receipt and updating turnstile access.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-clinics-hospitals",
      "/services/whatsapp-bot-salons-spas"
    ],
    roiMetrics: [
      { metric: "Membership Renewal Rate", value: "+38%", timeframe: "First 60 Days", description: "Automated renewal sequences with one-tap UPI payment links recover members before they churn." },
      { metric: "Lapsed Member Recovery", value: "₹45,000/mo", timeframe: "Monthly", description: "Re-engages inactive gym members with personalized 'Welcome Back' promotional discounts." },
      { metric: "Manual Calling Elimination", value: "100%", timeframe: "Immediate", description: "Replaces uncomfortable manual phone calls by trainers and receptionists asking for subscription fees." }
    ],
    compliance: [
      { standard: "Consumer Protection Act 2019", authority: "Central Consumer Protection Authority", requirement: "Zero deceptive auto-debits; clear display of subscription duration and refund policies.", implementation: "Explicit manual authorization required for all renewals with transparent receipt generation." },
      { standard: "DPDP Biometric & Health Privacy", authority: "Data Protection Board of India", requirement: "Secure storage of member fitness assessments, body metrics, and attendance logs.", implementation: "Encrypted database storage with zero sharing of member health logs to external ad networks." }
    ],
    workflow: [
      { step: 1, title: "Automated Expiry Trigger", actor: "Bot Engine", action: "Monitors member database and identifies subscriptions expiring in T-5, T-2, and day of expiry.", tech: "Scheduled Cron Worker" },
      { step: 2, title: "Personalized Alert & Link", actor: "Bot Engine", action: "Dispatches friendly WhatsApp notification with renewal options and direct Razorpay / UPI QR code.", tech: "Meta Cloud API" },
      { step: 3, title: "Instant Payment Verification", actor: "Member", action: "Completes payment via PhonePe, Google Pay, or Paytm; webhook verifies transaction status.", tech: "UPI Payment Webhook" },
      { step: 4, title: "Access Card & Invoice Dispatch", actor: "Gym System", action: "Renews membership dates, issues digital tax invoice PDF, and updates RFID turnstile access.", tech: "SQLite / CRM API" }
    ],
    faqs: [
      { question: "Can prospective members book free trial workout sessions via WhatsApp?", answer: "Yes. New leads can choose their preferred day and time slot for a free trial workout, automatically receiving an entry QR pass." },
      { question: "Can personal trainers track client session bookings through the bot?", answer: "Yes. Trainers receive real-time alerts when a client books or reschedules a 1-on-1 personal training or group yoga/crossfit class." },
      { question: "How does the bot connect to biometric or RFID turnstile systems?", answer: "The bot triggers webhook updates to your gym management software or local database, automatically activating turnstile access cards upon payment." }
    ],
    techStack: ["Meta Cloud API v20.0", "Cron Expiry Engine", "Razorpay / UPI Webhooks", "Turnstile RFID Sync", "Node.js Webhook"]
  },
  {
    id: "restaurants-cafes",
    type: "whatsapp-bot",
    name: "Restaurants & Cafes",
    title: "WhatsApp Bot for Restaurants & Cafes | Direct Ordering & Table Reservations | Gurdharam",
    metaDescription: "Take direct food orders, process table reservations, and share digital menus on WhatsApp. Bypass 25-30% Swiggy and Zomato aggregator commissions on repeat orders.",
    painPoint: "Restaurants sacrifice 20% to 30% of their top-line revenue to food delivery aggregators on repeat customer orders that could easily be captured directly.",
    example: "A customer scans a table QR code or texts the restaurant. The bot opens a dynamic digital menu, compiles food orders with special spice notes, collects payment, and sends an order ticket to the kitchen.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-malls-retail",
      "/services/whatsapp-bot-wedding-planners"
    ],
    roiMetrics: [
      { metric: "Aggregator Margin Recovery", value: "20–30%", timeframe: "Per Order", description: "Bypasses third-party delivery commissions by taking repeat takeaway and delivery orders on WhatsApp." },
      { metric: "Direct Repeat Orders", value: "+35%", timeframe: "Monthly", description: "Automated loyalty reward points and weekend special menus drive direct high-margin repeat business." },
      { metric: "Net Profit Retained", value: "₹55,000/mo", timeframe: "On ₹2L Volume", description: "Saves substantial fees by keeping customer relationships, phone numbers, and orders in-house." }
    ],
    compliance: [
      { standard: "FSSAI Regulations 2011", authority: "Food Safety and Standards Authority of India", requirement: "Mandatory display of 14-digit FSSAI license number and hygiene disclosures on digital food bills.", implementation: "Automatic inclusion of verified FSSAI registration number and allergen notices on all receipts." },
      { standard: "5% Restaurant GST Compliance", authority: "GST Council of India", requirement: "Accurate calculation and itemized billing of 5% GST without input tax credit (ITC) for standalone eateries.", implementation: "Exact itemized GST math and digital tax invoice delivery straight to customer WhatsApp." }
    ],
    workflow: [
      { step: 1, title: "QR Scan & Digital Menu", actor: "Diner", action: "Scans table QR code or clicks WhatsApp link to open interactive food menu with categorized dishes.", tech: "WhatsApp Catalog Engine" },
      { step: 2, title: "Cart Selection & Customization", actor: "Diner", action: "Selects items, adds special cooking requests (e.g. less spicy, no onions), and confirms delivery address.", tech: "Interactive Message Matrix" },
      { step: 3, title: "Instant Payment & KOT Print", actor: "Bot Engine", action: "Processes payment via UPI QR code and automatically triggers Kitchen Order Ticket (KOT) thermal printer.", tech: "POS Thermal Printer Webhook" },
      { step: 4, title: "Order Status Tracking", actor: "Bot Engine", action: "Sends real-time updates ('Food Preparing', 'Out for Delivery', 'Delivered') to customer chat.", tech: "Real-time Order Status Engine" }
    ],
    faqs: [
      { question: "How does the kitchen receive orders placed via WhatsApp?", answer: "Orders can automatically print on your existing kitchen thermal printer (KOT) or appear on a kitchen display tablet within 2 seconds of payment confirmation." },
      { question: "Can the bot manage dine-in table reservations?", answer: "Yes. Customers can reserve tables for specific guest counts and timings, receiving automated confirmation and reminder passes." },
      { question: "Can we run daily specials and seasonal dessert broadcasts?", answer: "Yes. You can send promotional photo cards with limited-time deals to your opted-in customer database to boost slow weekday dining." }
    ],
    techStack: ["Meta Cloud API v20.0", "WhatsApp Catalog API", "Thermal KOT Printer Sync", "UPI Direct Gateway", "Node.js Webhook"]
  },
  {
    id: "travel-agencies",
    type: "whatsapp-bot",
    name: "Travel Agencies & Tour Operators",
    title: "WhatsApp Bot for Travel Agencies | Custom Itinerary Quotes & Visa Triage | Gurdharam",
    metaDescription: "Automate holiday package quotes, day-wise travel itineraries, and visa requirement checklists 24/7. Convert vacation inquiries into booked trips on WhatsApp.",
    painPoint: "Travel agents take up to 24 hours to research and manually format custom day-wise itineraries, losing impatient holiday travelers to competing agencies.",
    example: "A traveler asks for a 5-day Dubai package for 2 adults. The bot queries destination packages, filters 3-star vs 5-star hotel options, and sends a complete day-wise PDF itinerary with price breakdown in 45 seconds.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-wedding-planners",
      "/services/whatsapp-bot-real-estate"
    ],
    roiMetrics: [
      { metric: "Quote Delivery Speed", value: "4.1x Faster", timeframe: "Immediate", description: "Delivers comprehensive day-by-day vacation itineraries and cost estimates in under 60 seconds." },
      { metric: "Inquiry Abandonment", value: "-60%", timeframe: "First Month", description: "Immediate engagement keeps travelers from submitting quote requests to multiple competing agencies." },
      { metric: "Manual Workload Saved", value: "₹38,000/mo", timeframe: "Monthly", description: "Automates repetitive flight timing, visa checklist, and hotel tier formatting tasks." }
    ],
    compliance: [
      { standard: "Ministry of Tourism Guidelines", authority: "Ministry of Tourism, Govt of India", requirement: "Clear disclosure of inclusions, exclusions, cancellation terms, and travel insurance options.", implementation: "Standardized transparent inclusion/exclusion tables embedded into all dispatched itinerary PDFs." },
      { standard: "DPDP Passport Data Privacy", authority: "Data Protection Board", requirement: "Encrypted handling and automatic redaction of sensitive traveler passport and visa documents.", implementation: "End-to-end encrypted document upload vault with automatic TTL file expiration." }
    ],
    workflow: [
      { step: 1, title: "Travel Request Ingestion", actor: "Traveler", action: "Texts destination (e.g. Dubai, Bali, Kashmir), travel dates, traveler count, and hotel category.", tech: "Interactive Button Flow" },
      { step: 2, title: "Dynamic Itinerary Match", actor: "Bot Engine", action: "Pulls matching package template, calculates seasonal pricing, and compiles day-by-day sightseeing plan.", tech: "Node.js + Package Database" },
      { step: 3, title: "Branded PDF Deck Dispatch", actor: "Bot Engine", action: "Generates and sends customized agency PDF itinerary with hotel photos, day plan, and payment link.", tech: "PDF Assembly Engine" },
      { step: 4, title: "Visa Checklist & Agent Call", actor: "Tour Specialist", action: "Dispatches country-specific visa document checklist and schedules a call with senior holiday planner.", tech: "CRM Lead Routing" }
    ],
    faqs: [
      { question: "Can the bot generate custom itineraries for both domestic and international trips?", answer: "Yes. The bot supports custom packages for domestic destinations (Goa, Kashmir, Kerala) as well as international destinations (Dubai, Thailand, Europe)." },
      { question: "How does the bot assist with visa documentation?", answer: "When a traveler selects an international destination, the bot instantly sends the exact checklist of required embassy documents, photo specifications, and processing timelines." },
      { question: "Can the bot connect directly to flight and hotel GDS APIs?", answer: "Yes. We can integrate live API feeds from Amadeus, Sabre, or private wholesaler portals to display dynamic flight and hotel availability." }
    ],
    techStack: ["Meta Cloud API v20.0", "Dynamic PDF Engine", "Encrypted Passport Vault", "Multi-Currency Calc", "Node.js Webhook"]
  },
  {
    id: "wedding-planners",
    type: "whatsapp-bot",
    name: "Wedding Planners & Banquet Halls",
    title: "WhatsApp Bot for Wedding Planners & Banquets | Date Availability & Venue Decks | Gurdharam",
    metaDescription: "Automate wedding date availability checks, banquet hall pricing, decor catalog sharing, and site tour bookings 24/7 with a custom luxury wedding WhatsApp bot.",
    painPoint: "Banquet coordinators miss dozens of wedding inquiries during busy weekend events because they cannot manually check dates, calculate per-plate pricing, or send decor decks in real time.",
    example: "A bride's family texts asking about auspicious wedding dates in November for 500 guests. The bot checks banquet availability, shares per-plate menu packages and decor themes, and schedules a venue walkthrough.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-travel-agencies",
      "/services/whatsapp-bot-real-estate"
    ],
    roiMetrics: [
      { metric: "Quote Response Speed", value: "3.5x Faster", timeframe: "Immediate", description: "Answers bride and family inquiries instantly while they are actively evaluating event venues." },
      { metric: "Off-Season Date Fill", value: "+45%", timeframe: "Annual", description: "Proactively suggests available weekday and off-peak auspicious dates with special package pricing." },
      { metric: "Coordinator Time Saved", value: "₹50,000/mo", timeframe: "Monthly", description: "Eliminates repetitive photo emailing and basic date checking, allowing coordinators to focus on event execution." }
    ],
    compliance: [
      { standard: "Municipal Noise & Event Curfews", authority: "Local Municipal Corporation / Punjab Police", requirement: "Disclosure of 10:00 PM outdoor sound amplification limits and fire safety capacity limits.", implementation: "Standard venue terms, maximum guest capacity disclosures, and curfew policies embedded in quotes." },
      { standard: "18% GST Composite Supply", authority: "GST Council of India", requirement: "Compliant tax invoicing separating venue rental, catering services, and event management fees.", implementation: "Itemized tax calculation tables separating per-plate catering from stage decor services." }
    ],
    workflow: [
      { step: 1, title: "Event Date & Guest Count", actor: "Event Host", action: "Submits preferred wedding/reception dates, guest count (e.g. 400-600), and event type.", tech: "Interactive Date Picker" },
      { step: 2, title: "Banquet Slot Verification", actor: "Bot Engine", action: "Queries banquet hall reservation calendar and identifies available halls and morning/evening slots.", tech: "Google Calendar / SQLite" },
      { step: 3, title: "Menu & Decor Deck Dispatch", actor: "Bot Engine", action: "Delivers categorized vegetarian/non-vegetarian per-plate menus and luxury stage decor photo galleries.", tech: "Media Message Engine" },
      { step: 4, title: "Physical Venue Tour Booking", actor: "Banquet Manager", action: "Locks in-person site walkthrough with banquet manager and adds host details to CRM.", tech: "Calendar Appointment Sync" }
    ],
    faqs: [
      { question: "Can the bot handle multi-day wedding events (Mehendi, Sangeet, Wedding, Reception)?", answer: "Yes. The bot can gather details for multi-day functions, building a unified itinerary and combined quote across multiple halls and outdoor lawns." },
      { question: "Can clients customize their catering menu options inside WhatsApp?", answer: "Yes. Clients can select starters, main courses, live counters, and dessert choices from interactive menus to receive a tailored per-plate cost estimate." },
      { question: "Does the bot support high-resolution photo and video gallery sharing?", answer: "Yes. The bot delivers compressed HD photo decks and video walkthrough links highlighting past wedding stage decors, lighting setups, and mandap designs." }
    ],
    techStack: ["Meta Cloud API v20.0", "Banquet Calendar Sync", "High-Resolution Media Engine", "Per-Plate Math Calc", "Node.js Webhook"]
  },
  {
    id: "furniture-showrooms",
    type: "whatsapp-bot",
    name: "Furniture Showrooms & Manufacturers",
    title: "WhatsApp Bot for Furniture Showrooms | Catalog Browsing & Custom Sizing | Gurdharam",
    metaDescription: "Showcase living room, bedroom, and office furniture catalogs on WhatsApp. Answer wood quality, dimension, and delivery queries 24/7 to drive retail showroom walk-ins.",
    painPoint: "Shoppers require exact dimensions, wood specifications (Teak, Sheesham, Engineered), and fabric choices before visiting physical showrooms, overwhelming sales staff with repetitive questions.",
    example: "A customer asks for 6-seater marble dining table options. The bot asks for room dimensions, shares HD photos with exact measurements and wood specs, and offers a VIP showroom visit pass.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-jewelry-stores",
      "/services/whatsapp-bot-real-estate"
    ],
    roiMetrics: [
      { metric: "Dimension Inquiries Automated", value: "70%", timeframe: "First 14 Days", description: "Resolves repetitive questions about sofa lengths, bed dimensions, and wood warranties instantly." },
      { metric: "Showroom Walk-in Rate", value: "+32%", timeframe: "Monthly", description: "VIP digital discount passes incentivize online catalog browsers to visit your physical showroom." },
      { metric: "Sales Support Cost Saved", value: "₹30,000/mo", timeframe: "Monthly", description: "Frees retail sales representatives from manual catalog sending and photo compression." }
    ],
    compliance: [
      { standard: "Consumer Protection Act 2019", authority: "Ministry of Consumer Affairs", requirement: "Accurate disclosure of primary wood material (Teak, Sheesham, MDF), warranty duration, and return terms.", implementation: "Mandatory material disclosure labels and warranty certificates attached to product cards." },
      { standard: "Transparent Freight Disclosures", authority: "Department of Trade & Commerce", requirement: "Clear indication of delivery fees, floor transit charges, and assembly service inclusions.", implementation: "Automatic zip code freight lookup embedded directly into final quote calculations." }
    ],
    workflow: [
      { step: 1, title: "Category & Room Ingestion", actor: "Shopper", action: "Selects category (Sofa Sets, Dining Tables, Beds, Office Desks) from interactive WhatsApp menu.", tech: "Interactive Catalog Menu" },
      { step: 2, title: "Dimension & Material Filter", actor: "Bot Engine", action: "Asks for preferred seating capacity, room size, and material preference (Solid Teak vs Engineered).", tech: "Smart Filter Logic" },
      { step: 3, title: "HD Catalog Card Dispatch", actor: "Bot Engine", action: "Delivers product cards with multi-angle photos, exact dimensions, warranty terms, and live price.", tech: "Media Message Engine" },
      { step: 4, title: "Showroom Visit Pass", actor: "Showroom Lead", action: "Issues personalized digital discount pass and alerts showroom floor manager of upcoming customer visit.", tech: "Store CRM Webhook" }
    ],
    faqs: [
      { question: "Can customers submit custom furniture dimensions for bespoke carpentry quotes?", answer: "Yes. Customers can send their room measurements or architect blueprints, which the bot forwards to your design team for custom drafting." },
      { question: "Can the bot verify delivery and assembly availability by pin code?", answer: "Yes. The bot asks for the customer's delivery pin code, instantly checking logistics coverage and estimating transit timelines." },
      { question: "Can we link 3D WebGL or AR model views inside the chat?", answer: "Yes. The bot can share direct links to 3D interactive WebGL viewers where customers can rotate and preview furniture models in 360 degrees." }
    ],
    techStack: ["Meta Cloud API v20.0", "Product Catalog Engine", "Pin Code Logistics Sync", "Dynamic Quote Calc", "Node.js Webhook"]
  },
  {
    id: "automobile-dealerships",
    type: "whatsapp-bot",
    name: "Automobile Dealerships & Service Centers",
    title: "WhatsApp Bot for Automobile Dealerships | Test Drives & Service Reminders | Gurdharam",
    metaDescription: "Automate test-drive bookings, periodic service reminders, and insurance renewal alerts 24/7 with a custom automotive WhatsApp bot. Boost workshop retention on auto-pilot.",
    painPoint: "Dealerships lose thousands in profitable periodic workshop service revenue because vehicle owners forget service intervals or find calling the dealership cumbersome.",
    example: "A car owner's 10,000km periodic service is due. The bot sends an automated WhatsApp service reminder, lets the owner pick a service date and pickup option, and books the workshop bay automatically.",
    parentPath: "/services/whatsapp-business-bot",
    parentName: "WhatsApp Business Bot",
    crossLinks: [
      "/services/whatsapp-bot-jewelry-stores",
      "/services/whatsapp-bot-furniture-showrooms"
    ],
    roiMetrics: [
      { metric: "Periodic Service Retention", value: "+52%", timeframe: "First 60 Days", description: "Automated odometer and date-based service alerts bring car owners back to your authorized workshop." },
      { metric: "Test-Drive Booking Rate", value: "+40%", timeframe: "Monthly", description: "Allows new car prospects to schedule showroom or home test-drives in under 60 seconds." },
      { metric: "Workshop Revenue Recovered", value: "₹75,000/mo", timeframe: "Monthly", description: "Recovers high-margin lubricant, parts, and maintenance revenue from lapsed vehicle owners." }
    ],
    compliance: [
      { standard: "Motor Vehicles Act 1988", authority: "Ministry of Road Transport and Highways", requirement: "Mandatory valid driver's license verification prior to executing test-drive reservations.", implementation: "Secure driving license photo collection and instant optical verification before booking confirmation." },
      { standard: "IRDAI Motor Insurance Guidelines", authority: "Insurance Regulatory and Development Authority", requirement: "Transparent disclosure of comprehensive insurance policy add-on covers (Zero Dep, Engine Protect).", implementation: "Clear itemized premium calculation tables detailing IDV and add-on cover options." }
    ],
    workflow: [
      { step: 1, title: "Automated Service Trigger", actor: "Bot Engine", action: "Monitors Dealer Management System (DMS) records and triggers alert 10 days before periodic service due date.", tech: "DMS Database Sync" },
      { step: 2, title: "Service Date & Bay Booking", actor: "Vehicle Owner", action: "Selects preferred date, drop-off time, and optional door-to-door vehicle pickup service.", tech: "Interactive Calendar Flow" },
      { step: 3, title: "Job Card & Token Pass", actor: "Bot Engine", action: "Generates digital workshop job card token with service advisor contact and Google Maps location pin.", tech: "Dynamic PDF Engine" },
      { step: 4, title: "Live Service Status Updates", actor: "Service Advisor", action: "Sends real-time updates ('Vehicle on Lift', 'Washing', 'Ready for Delivery') with UPI invoice link.", tech: "Live Workshop Webhook" }
    ],
    faqs: [
      { question: "How does the bot integrate with our existing Dealer Management System (DMS)?", answer: "We connect directly via secure REST APIs or database webhooks to auto-sync vehicle ownership records, service histories, and technician availability." },
      { question: "Can prospective buyers book test drives for specific vehicle variants?", answer: "Yes. Buyers can select specific car models (e.g. Petrol Automatic vs Diesel Manual) and choose showroom or home test-drive appointments." },
      { question: "Can the bot send car insurance renewal quotes with instant payment links?", answer: "Yes. The bot can calculate insurance renewal premiums across partner insurers (HDFC ERGO, ICICI Lombard) and process policy renewals on WhatsApp." }
    ],
    techStack: ["Meta Cloud API v20.0", "DMS System Integration", "Insurance Premium Calc", "Live Job Card Engine", "Node.js Webhook"]
  },

  // ━━━ SOCIAL MEDIA AUTOMATION (3 Verticals) ━━━
  {
    id: "coaching-institutes",
    type: "social-media-automation",
    name: "Coaching Institutes & Educators",
    title: "Social Media Video Automation for Coaching Institutes | Shorts & Reels | Gurdharam",
    metaDescription: "Generate 30+ educational YouTube Shorts and Instagram Reels monthly on auto-pilot. Programmatic video pipeline turning question banks into viral video lectures with zero manual editing.",
    painPoint: "Coaching institutes want to dominate student social feeds but cannot afford ₹50,000+/month for video editing agencies or the hours required to film manual daily lectures.",
    example: "A physics question bank is uploaded in CSV format. The automated pipeline generates high-resolution 1080p60 vertical video reels with question timers, dynamic voiceover narration, animated formulas, and institute branding in 45 seconds.",
    parentPath: "/services/automated-video-generation-engine",
    parentName: "Automated Video Generation",
    crossLinks: [
      "/services/social-media-automation-jewelry-brands",
      "/services/social-media-automation-real-estate"
    ],
    roiMetrics: [
      { metric: "Video Production Cost", value: "-90%", timeframe: "Per Video", description: "Reduces cost from ₹2,500 per agency-edited reel to under ₹25 in local computing resources." },
      { metric: "Monthly Video Volume", value: "30+ Reels", timeframe: "Monthly", description: "Publishes high-quality daily exam prep shorts on YouTube and Instagram without filming overhead." },
      { metric: "Organic Student Reach", value: "+150%", timeframe: "First 90 Days", description: "Consistent daily posting algorithmically expands student discovery across Punjab and North India." }
    ],
    compliance: [
      { standard: "ASCI Educational Ad Code", authority: "Advertising Standards Council of India", requirement: "Ban on deceptive rank claims, guaranteed selection claims, or unverified test statistics in video ads.", implementation: "Automated template guardrails ensuring factual exam analysis without misleading promotional claims." },
      { standard: "Copyright Act 1957 (Fair Use)", authority: "Copyright Office of India", requirement: "Use of licensed audio stems, royalty-free sound effects, and original educational problem sets.", implementation: "100% royalty-free background music synthesis and original dynamic mathematical rendering." }
    ],
    workflow: [
      { step: 1, title: "Question Bank Ingestion", actor: "Teacher / Admin", action: "Uploads spreadsheet containing competitive exam questions, 4 options, and step-by-step solutions.", tech: "CSV / JSON Parser" },
      { step: 2, title: "Dynamic React Scene Assembly", actor: "Video Engine", action: "Compiles Remotion React components rendering animated question cards, countdown timers, and formulas.", tech: "Remotion React Video" },
      { step: 3, title: "Neural Voiceover & Captions", actor: "Audio Engine", action: "Synthesizes natural teacher narration and auto-burns synchronized animated word-level subtitles.", tech: "Whisper + Piper TTS" },
      { step: 4, title: "GPU NVENC Render & Upload", actor: "Video Engine", action: "Renders 1080p60 MP4 via local NVIDIA GPU and auto-publishes to YouTube Shorts and Instagram API.", tech: "FFmpeg NVENC + YouTube API" }
    ],
    faqs: [
      { question: "Do teachers need to record their voice or face for every video?", answer: "No. The pipeline synthesizes natural neural voiceover audio in Hindi, English, or Punjabi directly from text, animating formulas and question cards programmatically." },
      { question: "Can we include our institute logo, contact number, and website watermark?", answer: "Yes. Every generated video automatically overlays your branded vector logo, admission helpline number, and animated call-to-action cards." },
      { question: "How long does it take to render a 60-second video reel?", answer: "Using local hardware GPU acceleration (FFmpeg NVENC), a complete 1080p60 60-second educational reel renders in approximately 25 to 45 seconds." }
    ],
    techStack: ["Remotion React v4.0", "FFmpeg NVENC Hardware Acceleration", "Whisper Subtitle Alignment", "Neural Speech Synthesis", "YouTube / Meta Graph APIs"]
  },
  {
    id: "jewelry-brands",
    type: "social-media-automation",
    name: "Jewelry Brands & Goldsmiths",
    title: "Social Media Video Automation for Jewelry Brands | 3D Shimmer Reels | Gurdharam",
    metaDescription: "Transform static jewelry photos into cinematic 1080p60 Instagram Reels and YouTube Shorts. Automated 3D lighting, weight overlays, and hallmark badges with zero manual video editing.",
    painPoint: "Jewelers release dozens of new gold and diamond designs weekly but lack the budget and video editors to produce luxury cinematic reels for every individual product.",
    example: "A jeweler uploads 3 photos of a diamond ring. The automated engine applies WebGL 3D lighting pans, highlights gemstone sparkle, overlays net gold weight and live rates, and outputs a luxury Instagram Reel in under a minute.",
    parentPath: "/services/automated-video-generation-engine",
    parentName: "Automated Video Generation",
    crossLinks: [
      "/services/social-media-automation-coaching-institutes",
      "/services/social-media-automation-real-estate"
    ],
    roiMetrics: [
      { metric: "Video Catalog Output", value: "10x", timeframe: "Monthly", description: "Publish reels for 100% of new showroom inventory instead of just 5-10 select bridal sets." },
      { metric: "Editing Freelancer Cost", value: "₹40,000/mo", timeframe: "Monthly", description: "Eliminates reliance on outside video editors who charge ₹1,500 to ₹3,000 per promotional video." },
      { metric: "Instagram Engagement", value: "+65%", timeframe: "First 60 Days", description: "Cinematic vertical video formats receive 4x more algorithmic distribution than static product photos." }
    ],
    compliance: [
      { standard: "BIS Hallmarking Video Disclosure", authority: "Bureau of Indian Standards", requirement: "Prominent visual display of BIS hallmark logo and 6-digit HUID authenticity badge on screen.", implementation: "Automatic lower-third hallmark stamp overlay rendered on every jewelry video frame." },
      { standard: "Diamond Origin Transparency", authority: "Gem & Jewellery Export Promotion Council", requirement: "Clear textual disclosure distinguishing natural mined diamonds from lab-grown CVD diamonds.", implementation: "Mandatory gemstone classification badge rendered beside product title in video header." }
    ],
    workflow: [
      { step: 1, title: "Product Photo Upload", actor: "Jeweler", action: "Uploads 2-4 clean product images along with gold purity (18k/22k), weight, and making charge details.", tech: "Web Dashboard / Cloudinary" },
      { step: 2, title: "3D Glint & Shader Animation", actor: "Video Engine", action: "Applies subtle 3D parallax depth pans, glint particle effects, and cinematic soft blur transitions.", tech: "WebGL / GLSL Shaders" },
      { step: 3, title: "Luxury Audio & Badge Burn", actor: "Audio Engine", action: "Syncs classical royalty-free instrumental music and overlays gold rate and hallmarking badges.", tech: "FFmpeg Audio Engine" },
      { step: 4, title: "Automated Instagram Publish", actor: "Video Engine", action: "Dispatches 1080p60 MP4 to Instagram Graph API with optimized hashtags and direct WhatsApp link.", tech: "Instagram Graph API" }
    ],
    faqs: [
      { question: "Can the video show today's live gold rate dynamically in the video frame?", answer: "Yes. The pipeline can fetch today's live MCX bullion price at render time, dynamically engraving the current gold rate directly into the video's lower third." },
      { question: "Does the video look realistic or like a cheap slideshow?", answer: "Our custom Remotion + GLSL shader pipeline creates smooth 60 FPS multi-plane parallax depth, cinematic camera pans, and natural lighting glints that look like agency studio renders." },
      { question: "Can we schedule videos to publish automatically every morning?", answer: "Yes. The pipeline integrates directly with Instagram Graph API and YouTube Data API to publish videos automatically at your peak customer viewing hours." }
    ],
    techStack: ["Remotion React v4.0", "WebGL 3D Shaders", "FFmpeg NVENC 1080p60", "Instagram Graph API", "Cloudinary Image CDN"]
  },
  {
    id: "real-estate",
    type: "social-media-automation",
    name: "Real Estate Developers & Brokers",
    title: "Social Media Video Automation for Real Estate | Property Tour Reels | Gurdharam",
    metaDescription: "Turn property photo listings and spec sheets into cinematic 1080p60 property tour videos for Instagram Reels and YouTube Shorts. RERA watermark compliant with zero video editors.",
    painPoint: "Real estate brokers have hundreds of active property listings but spend days waiting for videographers to film and edit walkthroughs, losing fast buyer inquiries.",
    example: "A broker uploads 5 photos of a luxury 3BHK flat with price, square footage, and location. The automated pipeline compiles a 45-second high-energy video tour with animated floor specs, drone transition effects, and RERA registration badges.",
    parentPath: "/services/automated-video-generation-engine",
    parentName: "Automated Video Generation",
    crossLinks: [
      "/services/social-media-automation-coaching-institutes",
      "/services/social-media-automation-jewelry-brands"
    ],
    roiMetrics: [
      { metric: "Video Production Turnaround", value: "< 3 Mins", timeframe: "Per Property", description: "Generate polished marketing reels for new property listings in minutes instead of 3-5 days." },
      { metric: "Video Production Bill", value: "-85%", timeframe: "Monthly", description: "Saves ₹50,000+ monthly on videography agencies while publishing 5x more property video listings." },
      { metric: "Buyer Inquiries Generated", value: "+80%", timeframe: "First Month", description: "Dynamic video walkthroughs generate significantly higher DM and WhatsApp inquiries than static images." }
    ],
    compliance: [
      { standard: "Punjab RERA Section 11(2)", authority: "Real Estate Regulatory Authority", requirement: "Mandatory persistent on-screen display of project RERA registration number and official website.", implementation: "Fixed bottom-banner watermark with official RERA license number burned into all frames." },
      { standard: "ASCI Property Advertising Code", authority: "Advertising Standards Council of India", requirement: "Accurate disclosure of super built-up vs carpet area and authentic project location references.", implementation: "Standardized carpet area specification cards generated directly from verified property spec sheets." }
    ],
    workflow: [
      { step: 1, title: "Property Specs & Photo Drop", actor: "Broker", action: "Uploads property photos, carpet area, configuration (2/3/4 BHK), price, and sector location.", tech: "Listing Management Dashboard" },
      { step: 2, title: "Animated Spec Sheet Layout", actor: "Video Engine", action: "Compiles animated floor layout cards, feature bullet callouts, and smooth camera zoom pans.", tech: "Remotion React Video" },
      { step: 3, title: "Voiceover Narration & Map", actor: "Audio Engine", action: "Synthesizes engaging property tour commentary and renders an animated location accessibility map.", tech: "Neural TTS + SVG Map Engine" },
      { step: 4, title: "RERA Watermark & Auto-Push", actor: "Video Engine", action: "Burns RERA registration badge and automatically uploads to Instagram Reels, Facebook, and YouTube Shorts.", tech: "FFmpeg NVENC + Social APIs" }
    ],
    faqs: [
      { question: "Can the video include drone shot transitions and neighborhood landmark highlights?", answer: "Yes. The pipeline can blend uploaded drone footage clips with static interior photographs using smooth motion blur cross-dissolve transitions." },
      { question: "Is the video formatted properly for mobile smartphone viewing?", answer: "Yes. All videos are rendered in native vertical 9:16 aspect ratio (1080x1920 at 60 FPS), perfectly optimized for Instagram Reels, YouTube Shorts, and WhatsApp Status." },
      { question: "Can we include direct WhatsApp contact buttons and broker phone numbers?", answer: "Yes. Every video ends with a clear 5-second call-to-action card displaying your agency logo, broker mobile number, and website address." }
    ],
    techStack: ["Remotion React v4.0", "FFmpeg NVENC 1080p60", "RERA Watermark Engine", "Dynamic Map Rendering", "YouTube Data API"]
  },

  // ━━━ WEBSITE DESIGN (4 Verticals) ━━━
  {
    id: "jewelry-showrooms",
    type: "website-design",
    name: "Jewelry Showrooms & Goldsmiths",
    title: "High-End Website Design for Jewelry Showrooms | 3D WebGL & Fast Indexing | Gurdharam",
    metaDescription: "Custom 3D WebGL website design for jewelry showrooms. Sub-400ms load speed, live MCX daily gold rate ticker, interactive diamond 3D viewer, and WhatsApp VIP booking integration.",
    painPoint: "Traditional jewelry websites built on slow WordPress templates take 4+ seconds to load, look outdated on mobile, and fail to convey the luxury craftsmanship of physical showrooms.",
    example: "A bride visits your website on mobile. The site loads in under 400ms, displays a live 22k gold rate ticker, lets her rotate a 3D bridal choker in WebGL, and taps to book a private showroom viewing on WhatsApp.",
    parentPath: "/services/web-development",
    parentName: "Custom Web Development",
    crossLinks: [
      "/services/website-design-coaching-institutes",
      "/services/website-design-clinic-websites"
    ],
    roiMetrics: [
      { metric: "Showroom Visit Conversion", value: "+45%", timeframe: "First 60 Days", description: "Interactive 3D ornament viewers and instant VIP lounge appointment bookings double footfall conversion." },
      { metric: "Mobile Page Load Time", value: "< 400ms", timeframe: "Immediate", description: "Vite React SSG static pre-rendering loads 8x faster than traditional slow WordPress jewelry sites." },
      { metric: "Local Search Ranking", value: "#1 Rank", timeframe: "90 Days", description: "Structured JSON-LD jewelry store schemas and clean HTML rank for high-intent city jewelry queries." }
    ],
    compliance: [
      { standard: "PCI-DSS Level 1 Security", authority: "Payment Card Industry Security Standards", requirement: "Zero on-site storage of cardholder data with tokenized gateway handoffs.", implementation: "100% tokenized Razorpay / Stripe checkout without handling raw payment credentials." },
      { standard: "BIS Hallmark Verification API", authority: "Bureau of Indian Standards", requirement: "Public display of showroom BIS certification and 6-digit HUID authenticity portal links.", implementation: "Embedded direct BIS hallmark verification widget and official certification badges." }
    ],
    workflow: [
      { step: 1, title: "Ultra-Fast Static Page Load", actor: "Visitor", action: "Opens website on mobile; React SSG delivers First Contentful Paint in under 400ms with zero layout shift.", tech: "Vite + React SSG" },
      { step: 2, title: "Interactive 3D WebGL Viewer", actor: "Visitor", action: "Rotates high-resolution 3D jewelry piece, inspecting diamond cuts and gold textures at 60 FPS.", tech: "Three.js + DRACO GLTF" },
      { step: 3, title: "Live Daily Bullion Ticker", actor: "Web System", action: "Displays real-time 24k/22k/18k gold and silver market prices updated automatically from MCX feeds.", tech: "Live Bullion Webhook" },
      { step: 4, title: "VIP Showroom Pass Booking", actor: "Sales Manager", action: "Visitor taps WhatsApp button, sending pre-filled design ID and booking an in-person viewing slot.", tech: "Direct Meta Cloud API" }
    ],
    faqs: [
      { question: "Why is a custom Vite React site better than Shopify or WooCommerce for jewelry?", answer: "Custom Vite React static sites achieve sub-400ms loading speeds, custom 3D WebGL model interactions, and 100/100 Lighthouse performance scores without recurring Shopify monthly app fees or slow WooCommerce database lag." },
      { question: "Can the website show live daily gold rates automatically?", answer: "Yes. The site includes an automated bullion price engine that fetches live MCX market rates every morning and updates all product pricing tables dynamically." },
      { question: "How does the 3D WebGL viewer perform on budget Android smartphones?", answer: "We utilize DRACO mesh compression and optimized GLSL shaders, ensuring smooth 60 FPS rotation even on budget Android devices without draining battery or crashing." }
    ],
    techStack: ["React 19 + Vite", "Three.js WebGL Engine", "DRACO 3D Compression", "MCX Bullion API", "Tailwind CSS"]
  },
  {
    id: "coaching-institutes",
    type: "website-design",
    name: "Coaching Institutes & Academies",
    title: "High-Performance Website Design for Coaching Institutes | Admission Lead Engine | Gurdharam",
    metaDescription: "Sub-500ms admission websites for coaching academies and schools. Zero-crash exam result portals, interactive course finders, and direct WhatsApp lead capture engines.",
    painPoint: "Coaching institute websites crash during exam result announcements, suffer from slow mobile load speeds, and lose student admission inquiries due to complicated inquiry forms.",
    example: "A student searches for IELTS or NEET coaching in Punjab. Your website loads in 350ms, showcases verified student results with scorecards, filters upcoming batches, and books a free trial class on WhatsApp in 2 taps.",
    parentPath: "/services/web-development",
    parentName: "Custom Web Development",
    crossLinks: [
      "/services/website-design-jewelry-showrooms",
      "/services/website-design-clinic-websites"
    ],
    roiMetrics: [
      { metric: "Result Day Uptime", value: "100%", timeframe: "During Peak Traffic", description: "Static pre-rendered architecture easily handles 50,000+ concurrent students on result announcement days." },
      { metric: "Student Lead Conversion", value: "+60%", timeframe: "First Month", description: "Single-tap WhatsApp trial booking converts significantly more students than long multi-field forms." },
      { metric: "Bounce Rate Reduction", value: "-70%", timeframe: "Immediate", description: "Sub-400ms mobile page load speed prevents prospective students from leaving for competitor websites." }
    ],
    compliance: [
      { standard: "DPDP Act 2023 Minor Protection", authority: "Data Protection Board of India", requirement: "Strict privacy safeguards when handling student mobile numbers and personal identity records.", implementation: "Zero third-party marketing tracking pixels on student registration forms." },
      { standard: "WCAG 2.1 AA Accessibility", authority: "W3C Accessibility Guidelines", requirement: "High color contrast, full keyboard navigability, and screen reader compatibility for all educational content.", implementation: "100% compliant accessible color palettes and semantic HTML navigation landmarks." }
    ],
    workflow: [
      { step: 1, title: "Lightning Fast Mobile Load", actor: "Student", action: "Lands on course page from Google; static HTML loads instantly with zero server database bottleneck.", tech: "Vite React SSG" },
      { step: 2, title: "Course & Batch Filter", actor: "Student", action: "Filters competitive exam streams (JEE, NEET, IELTS, NDA), viewing batch schedules, fees, and faculty.", tech: "Client-Side Search Index" },
      { step: 3, title: "Verified Result Showcase", actor: "Student", action: "Inspects authenticated past year student scorecards and video testimonials in high-speed responsive gallery.", tech: "Optimized WebP Gallery" },
      { step: 4, title: "Direct WhatsApp Enrollment", actor: "Counselor", action: "Student taps 'Book Free Demo', sending pre-filled course choice to counselor WhatsApp instantly.", tech: "Meta Cloud API Gateway" }
    ],
    faqs: [
      { question: "Will the website stay online when thousands of students check test results simultaneously?", answer: "Yes. Because our sites are statically pre-rendered and served from a global edge CDN, they can easily withstand 100,000+ simultaneous visitors without slow downs or server crashes." },
      { question: "Can we manage course updates, fee schedules, and blog posts without coding?", answer: "Yes. We connect a lightweight headless CMS or Google Sheet backend, allowing your administrative staff to update course dates and fees in seconds." },
      { question: "How does the website help rank #1 in our local city on Google?", answer: "We implement exhaustive LocalBusiness and Course schemas, localized keyword landing pages, and sub-400ms Core Web Vitals to dominate local search rankings." }
    ],
    techStack: ["React 19 + Vite SSG", "Headless CMS Engine", "Global Edge CDN", "WebP Image Pipeline", "Tailwind CSS"]
  },
  {
    id: "clinic-websites",
    type: "website-design",
    name: "Clinics, Doctors & Hospitals",
    title: "Healthcare Website Design for Clinics & Doctors | HIPAA/DPDP Compliant | Gurdharam",
    metaDescription: "High-performance medical website design for doctors, dental clinics, and hospitals. Sub-400ms load speed, zero patient data leaks, doctor profile SEO, and WhatsApp appointment booking.",
    painPoint: "Healthcare websites frequently violate privacy norms by loading third-party advertising pixels on patient forms, suffer from poor local Google rankings, and confuse patients with complex booking portals.",
    example: "A patient searches for a top orthopedic doctor. Your clinic website loads instantly, presents verified doctor qualifications, displays treatment FAQs, and books an OPD slot directly via WhatsApp in 30 seconds.",
    parentPath: "/services/web-development",
    parentName: "Custom Web Development",
    crossLinks: [
      "/services/website-design-jewelry-showrooms",
      "/services/website-design-mall-retail"
    ],
    roiMetrics: [
      { metric: "Online Appointment Share", value: "+55%", timeframe: "First 60 Days", description: "Simple single-tap WhatsApp booking converts mobile visitors into confirmed clinical consultations." },
      { metric: "Lighthouse Performance Score", value: "98/100", timeframe: "Immediate", description: "Delivers perfect Core Web Vitals scores for optimal Google ranking and instantaneous mobile page load." },
      { metric: "Local Medical SERP Rank", value: "Top 3", timeframe: "90 Days", description: "Structured MedicalCondition and Physician JSON-LD schemas dominate regional doctor searches." }
    ],
    compliance: [
      { standard: "DPDP Act 2023 & DISHA Norms", authority: "Ministry of Health & Family Welfare", requirement: "Strict prohibition against sharing patient symptoms, booking requests, or IP addresses with ad trackers.", implementation: "Zero third-party tracking cookies or ad pixels embedded anywhere on clinical forms." },
      { standard: "NMC Digital Ethics Guidelines", authority: "National Medical Commission", requirement: "Authentic display of medical registration council numbers and prohibition of misleading cure guarantees.", implementation: "Verified medical council registration numbers displayed on every physician profile card." }
    ],
    workflow: [
      { step: 1, title: "Physician & Specialty Search", actor: "Patient", action: "Visits clinic website and searches for specific medical specialty or doctor name from clean navigation.", tech: "Vite React Static Page" },
      { step: 2, title: "Treatment Details & FAQ", actor: "Patient", action: "Reviews doctor credentials, surgical expertise, treatment procedures, and medical insurance empannelment.", tech: "Medical Schema Entity" },
      { step: 3, title: "OPD Slot Selection", actor: "Patient", action: "Chooses morning or evening OPD time window and confirms appointment requirements.", tech: "Interactive Time Slot Widget" },
      { step: 4, title: "WhatsApp Booking & Location", actor: "Receptionist", action: "Dispatches instant WhatsApp confirmation token with clinic floor map and parking instructions.", tech: "Meta Cloud API Sync" }
    ],
    faqs: [
      { question: "Is the clinic website compliant with Indian healthcare data privacy laws?", answer: "Yes. We strictly adhere to the DPDP Act 2023 and DISHA guidelines, ensuring zero patient health records or appointment details are exposed to third-party ad networks." },
      { question: "Can the website showcase individual profiles for multiple consulting doctors?", answer: "Yes. Each doctor receives a dedicated, SEO-optimized profile page featuring their medical council registration, specializations, OPD timings, and patient reviews." },
      { question: "Can patients view empanelled insurance and Ayushman Bharat TPA lists?", answer: "Yes. The site includes a searchable health insurance directory allowing patients to verify cashless hospitalization and TPA coverage in seconds." }
    ],
    techStack: ["React 19 + Vite SSG", "Physician Schema Engine", "Zero-Tracker Architecture", "Google Maps API", "Tailwind CSS"]
  },
  {
    id: "mall-retail",
    type: "website-design",
    name: "Malls, Retail Centers & Plazas",
    title: "Website Design for Shopping Malls & Retail Plazas | Interactive Map & Deals | Gurdharam",
    metaDescription: "Interactive website design for shopping malls and retail centers. Features 3D SVG floor maps, real-time tenant directory search, cinema showtimes, and retailer promotion portals.",
    painPoint: "Outdated mall websites lack interactive floor navigation, take seconds to load tenant directories on mobile devices, and fail to promote upper-level retail stores effectively.",
    example: "A weekend mall shopper visits the website. The interactive vector map lets them tap between Ground, First, and Second floors, filter dining vs fashion outlets, and view active weekend store discounts.",
    parentPath: "/services/web-development",
    parentName: "Custom Web Development",
    crossLinks: [
      "/services/website-design-jewelry-showrooms",
      "/services/website-design-clinic-websites"
    ],
    roiMetrics: [
      { metric: "Tenant Promo Visibility", value: "+40%", timeframe: "First Month", description: "Dynamic homepage deal carousels showcase active brand promotions directly to shoppers." },
      { metric: "Directory Search Latency", value: "0.3s", timeframe: "Immediate", description: "Instant client-side fuzzy search locates store locations, floor numbers, and phone numbers in milliseconds." },
      { metric: "Upper-Tier Store Footfall", value: "+25%", timeframe: "Quarterly", description: "Interactive floor-by-floor vector maps guide foot traffic directly to upper-floor retail outlets." }
    ],
    compliance: [
      { standard: "Legal Metrology Transparency", authority: "Department of Consumer Affairs", requirement: "Accurate disclosure of featured promotional discounts, terms, and store operating hours.", implementation: "Standardized tenant offer cards with clear validity dates and terms of service." },
      { standard: "WCAG 2.1 AA Accessibility", authority: "W3C Accessibility Guidelines", requirement: "Screen-reader compatible floor map alternatives and high-contrast directory lists.", implementation: "Text-accessible directory fallback and keyboard-navigable store listings alongside SVG maps." }
    ],
    workflow: [
      { step: 1, title: "Interactive Vector Map Nav", actor: "Shopper", action: "Taps between building floors on mobile; lightweight SVG vector map updates smoothly at 60 FPS.", tech: "Interactive SVG Engine" },
      { step: 2, title: "Tenant Brand Search", actor: "Shopper", action: "Types brand name or category (e.g. 'Athletic Wear', 'Coffee'); instant filter highlights matching stores on map.", tech: "Client-Side Fuzzy Search" },
      { step: 3, title: "Cinema & Event Timings", actor: "Shopper", action: "Checks daily multiplex showtimes and weekend live performance schedules in dedicated entertainment hub.", tech: "Dynamic Event Schedule" },
      { step: 4, title: "Directions & Parking Guide", actor: "Shopper", action: "Accesses parking gate directions, tariff rates, and EV charging station status in one tap.", tech: "Real-time Operations Sync" }
    ],
    faqs: [
      { question: "How easily can mall administrative staff add new stores or remove closed tenants?", answer: "Mall management can update store names, categories, logo images, and floor numbers via a simple cloud dashboard or spreadsheet that syncs to the site instantly." },
      { question: "Does the interactive floor map work smoothly on mobile browsers?", answer: "Yes. Our floor maps are built with lightweight vector SVGs and hardware-accelerated CSS transforms, providing pinch-to-zoom and pan interactions without lag." },
      { question: "Can retail tenants submit their own promotional sales and coupon banners?", answer: "Yes. The platform includes a retailer portal where brand store managers can submit seasonal deals for administrative approval and publishing." }
    ],
    techStack: ["React 19 + Vite SSG", "Interactive SVG Floor Map", "Client-Side Fuzzy Index", "Tailwind CSS", "Global CDN"]
  }
];

fs.writeFileSync(
  path.resolve('/root/gurdharam-portfolio/src/data/verticals.json'),
  JSON.stringify(verticals, null, 2),
  'utf8'
);

console.log('✅ Successfully wrote enriched 19-vertical dataset to src/data/verticals.json (Total count: ' + verticals.length + ')');
