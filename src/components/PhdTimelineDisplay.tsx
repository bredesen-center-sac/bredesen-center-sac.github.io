import { Chrono } from 'react-chrono';
import type { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';

const phdItems: TimelineItemModel[] = [
  {
    title: "Year 1",
    cardTitle: "Core Coursework & Initial Milestones",
    cardSubtitle: "Complete foundational coursework, lab rotations (GST) or qualifying exams (ESE/DSE), and set professional goals.",
    cardDetailedText: [
      "Coursework (at least 21 hours completed)",
      "GST students complete 3 lab rotations",
      "ESE and DSE students take Qualifying Exams during summer term",
      "Set professional development goals and plan to meet them"
    ]
  },
  {
    title: "Year 2",
    cardTitle: "Committee Formation & Continued Coursework",
    cardSubtitle: "Establish doctoral committee, complete further courses, and plan for comprehensive exams.",
    cardDetailedText: [
      "Submit doctoral committee form",
      "Hold first doctoral committee meeting",
      "Complete coursework (3-15 hours)",
      "Determine which semester to take comprehensive exams"
    ]
  },
  {
    title: "Year 3",
    cardTitle: "Comprehensive Exams & Dissertation Proposal",
    cardSubtitle: "Pass comprehensive exams, gain PhD candidacy, complete dissertation proposal (GST), and advance research.",
    cardDetailedText: [
      "Hold annual doctoral committee meeting",
      "Pass comprehensive exams",
      "Submit Admission to Candidacy form",
      "GST students complete dissertation proposal",
      "Continue research and writing"
    ]
  },
  {
    title: "Year 4",
    cardTitle: "Sustained Research & Defense Preparation",
    cardSubtitle: "Continue research and writing, hold committee meetings, and begin scheduling the dissertation defense.",
    cardDetailedText: [
      "Hold annual doctoral committee meeting",
      "Schedule year and semester for dissertation defense",
      "Assess and pursue professional development opportunities",
      "Continue research and writing"
    ]
  },
  {
    title: "Year 5",
    cardTitle: "Sustained Research & Defense Preparation",
    cardSubtitle: "Continue research and writing, hold committee meetings, and begin scheduling the dissertation defense.",
    cardDetailedText: [
      "Hold annual doctoral committee meeting",
      "Schedule year and semester for dissertation defense",
      "Assess and pursue professional development opportunities",
      "Continue research and writing"
    ]
  },
  {
    title: "Final Year",
    cardTitle: "Dissertation Completion, Defense & Graduation",
    cardSubtitle: "Finalize and defend dissertation, submit all forms, and complete graduation requirements.",
    cardDetailedText: [
      "Apply for graduation",
      "Submit draft to TRACE",
      "Complete final draft and submit to committee",
      "Schedule and announce dissertation defense",
      "Defend dissertation and submit paperwork",
      "Submit final dissertation to TRACE",
      "Submit dissertation approval form",
      "Complete survey of Earned Doctorates",
      "Complete survey of BC Students",
    ]
  }
];

export function PhdTimelineDisplay() {
  return (
    <div style={{ width: '100%', minHeight: '600px' }}>
      <Chrono
        items={phdItems}
        mode="VERTICAL"
        scrollable={{ scrollbar: true }}
        theme={{
          primary: 'var(--ut-orange-hsl, #FF8200)',
          secondary: 'var(--ut-smokey-hsl, #4B4B4B)',
          cardBgColor: 'hsl(0 0% 100%)',
          cardForeColor: 'hsl(0 0% 3.9%)',
          titleColor: 'var(--ut-orange-hsl, #FF8200)',
          titleColorActive: 'hsl(0 0% 100%)',
        }}
        fontSizes={{
          cardSubtitle: '0.85rem',
          cardText: '0.9rem',
          cardTitle: '1.1rem',
          title: '1rem',
        }}
        useReadMore={false}
        allowDynamicUpdate
      />
    </div>
  );
} 