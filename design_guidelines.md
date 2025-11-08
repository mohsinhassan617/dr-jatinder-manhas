# Design Guidelines for Dr. Jatinder Manhas Portfolio Website

## Design Approach
**Reference-Based**: Academic portfolio following established university faculty page patterns with modern presentation (inspired by research-focused institutions like MIT, Stanford faculty profiles)

## Visual Theme
- **Style**: Clean, research-oriented, professional academic presentation
- **Typography**: Inter or Poppins font family
- **Aesthetic**: Light background with elegant, readable typography optimized for content consumption

## Layout Structure

### Navigation
- Fixed top navigation bar with smooth scroll links to all sections:
  - Home | Research | Publications | Projects | Events & FDPs | Teaching & Administration | Awards | Contact
- Scroll-to-top button
- Mobile-responsive hamburger menu

### Hero Section
- **Layout**: Split layout with profile photo on left, information on right
- **Profile Photo**: Prominent professional headshot (placeholder if unavailable)
- **Content Hierarchy**:
  - H1: Dr. Jatinder Manhas, Ph.D.
  - H2: Associate Professor, Department of Computer Science & IT, University of Jammu
  - H3: Associate Director, SIIEDC (University of Jammu)
  - Research interests as tag pills or badge elements
- **CTAs**: Three prominent buttons - "View Publications", "Research Projects", "Contact"

### Academic Profile Section
- Timeline layout displaying educational qualifications
- Each entry shows: Degree, Year, Institution, Specialization
- Visual timeline connector between entries

### Research Section
- **Research Interests**: Icon-tagged display for each domain (AI, ML, Deep Learning, Computer Vision, BCI, EEG, Neuroscience, Drones, IoT)
- **Ph.D. Supervision**: Two-column grid
  - Left: Awarded (4 completed theses with names, topics, years)
  - Right: Ongoing (6 current scholars with enrollment years and topics)
- **Research Projects**: Responsive card grid (2-3 columns)
  - Each card displays: Title, Sponsoring Agency, Budget, Duration
  - Expandable accordion for full details

### Publications Section
- Tabbed interface with filters:
  - Journal Publications | Conference Proceedings | Books Authored/Edited
- Citation metrics header showing publication count
- Each entry with clickable DOI links
- Clean list format with proper academic citation styling

### Awards & Fellowships
- Card-based timeline layout
- Categories: Fellowships & Awards | International Travel Sponsorships | Countries Visited
- Year badges with award descriptions

### Events & FDPs
- Structured timeline with icons:
  - 🎓 Conferences Organized
  - 🛩️ Army Collaborations (Youth Festivals)
  - 📚 FDPs and Workshops Coordinated
- Chronological display with dates and descriptions

### Teaching & Administrative Roles
- Two collapsible subsections:
  - Teaching Experience (courses, guest lectures, visiting faculty)
  - Administrative Experience (committee memberships, leadership roles)
- Table or expandable card layout

### Contact Section
- Two-column layout:
  - **Left**: Contact form (Name, Email, Message fields)
  - **Right**: Contact information card
    - Address, Email, Mobile
    - Social links with icons: LinkedIn, ResearchGate, ORCID, JU Faculty Profile
    - Download CV button (PDF)

## Spacing & Rhythm
- Section padding: py-16 to py-24 for desktop, py-12 for mobile
- Consistent spacing units: Tailwind 4, 6, 8, 12, 16 for internal component spacing
- Max-width container: max-w-7xl for full sections, max-w-4xl for text-heavy content

## Component Specifications
- **Cards**: Rounded corners (rounded-lg), subtle shadow, hover elevation
- **Buttons**: Primary CTA buttons with clear hierarchy, secondary outlined buttons
- **Timeline**: Vertical connector line with circular nodes
- **Tags/Pills**: Rounded-full badges for research interests
- **Icons**: Use Heroicons or Font Awesome for consistent iconography
- **Animations**: Subtle fade-in on scroll (AOS library or Framer Motion), smooth scroll behavior

## Images
- **Hero Section**: Professional headshot of Dr. Jatinder Manhas (square or circular crop, 300-400px)
- **No additional images needed** - content-driven design focusing on text and data presentation

## Accessibility & Quality
- ARIA labels for navigation and interactive elements
- Keyboard navigation support
- High contrast ratios for readability
- Responsive breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
- Meta tags for Google Scholar and ORCID
- Structured data (organization + person schema)

## Special Features
- Smooth scroll-to-section navigation
- Download CV button (prominent placement in hero and contact sections)
- Contact form with validation
- Mobile-optimized responsive design
- Favicon (JU logo or AI/ML symbol)