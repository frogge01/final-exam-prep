const { useState, useMemo } = React;

// Icon components
const Menu = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const X = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const BookOpen = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const Layers = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>;
const ClipboardList = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>;
const ChevronDown = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>;
const ArrowLeft = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
const ArrowRight = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const CheckSquare = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
const Square = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>;
const BarChart3 = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>;

// UI Components
const Button = ({ children, className = '', ...props }) => <button className={`inline-flex items-center justify-center ${className}`} {...props}>{children}</button>;
const Card = ({ children, className = '', ...props }) => <div className={`bg-white ${className}`} {...props}>{children}</div>;
const CardContent = ({ children, className = '', ...props }) => <div className={className} {...props}>{children}</div>;

// Get data from window (loaded from data.js)
const flashcardData = window.flashcardData;
const lectureNotes = window.lectureNotes;
const examQuestions = window.examQuestions;

const lectures = Array.from({ length: 12 }, (_, index) => {
  const id = index + 2;
  const studyTimes = {
    2: "6h", 3: "5h", 4: "5.5h", 5: "5h", 6: "5h", 7: "7h",
    8: "5h", 9: "5.5h", 10: "5.5h", 11: "5.5h", 12: "5h", 13: "7h"
  };
  
  return {
    id,
    title: `Lecture ${id}`,
    subtitle: id === 2 ? "Lipid Rafts" : 
              id === 3 ? "Voltage-gated Ion Channels" :
              id === 4 ? "Nucleus & Epigenetics" :
              id === 5 ? "Migration & Motor Proteins" :
              id === 6 ? "Lysosomal Function" :
              id === 7 ? "Post-Translational Modifications" :
              id === 8 ? "ER Stress" :
              id === 9 ? "Cell Cycle & p53" :
              id === 10 ? "PINK1/Parkin" :
              id === 11 ? "Mitochondrial Metabolism" :
              id === 12 ? "MAMs" : "Cardiolipin & Neuroglobin",
    studyTime: studyTimes[id],
    highPriority: [7, 8, 9, 10, 11, 12, 13].includes(id),
    topPriority: id === 7,
  };
});

const contentTypes = [
  {
    value: "notes",
    label: "Lecture full notes",
    icon: BookOpen,
    heading: "Full Lecture Notes",
    nextMode: "flashcards",
  },
  {
    value: "flashcards",
    label: "Flash cards",
    icon: Layers,
    heading: "Flash Cards",
    nextMode: "testing",
  },
  {
    value: "testing",
    label: "Testing",
    icon: ClipboardList,
    heading: "Testing Mode",
    nextMode: null,
  },
];

// FormattedLectureNotes Component - Parses and displays lecture notes with sections
function FormattedLectureNotes({ content, lectureTitle }) {
  const [expandedSections, setExpandedSections] = useState({});
  
  if (!content) return <p className="text-slate-600">No notes available for this lecture.</p>;
  
  // Parse the content into sections
  const lines = content.split('\n');
  const sections = [];
  let currentSection = null;
  let currentSubsection = null;
  let currentSubsubsection = null;
  let currentContent = [];
  
  lines.forEach((line, index) => {
    if (line.startsWith('### ')) {
      // H3 - Sub-subsection (handle BEFORE H2 and H1)
      if (currentSubsubsection) {
        currentSubsubsection.content = currentContent.join('\n');
        if (currentSubsection) {
          if (!currentSubsection.subsubsections) currentSubsection.subsubsections = [];
          currentSubsection.subsubsections.push(currentSubsubsection);
        }
      }
      currentSubsubsection = {
        id: `subsubsection-${index}`,
        title: line.replace(/^### /, ''),
        level: 3,
        content: ''
      };
      currentContent = [];
    } else if (line.startsWith('## ')) {
      // H2 - Subsection
      if (currentSubsubsection) {
        currentSubsubsection.content = currentContent.join('\n');
        if (currentSubsection) {
          if (!currentSubsection.subsubsections) currentSubsection.subsubsections = [];
          currentSubsection.subsubsections.push(currentSubsubsection);
        }
        currentSubsubsection = null;
      }
      if (currentSubsection && currentContent.length > 0 && !currentSubsubsection) {
        currentSubsection.content = currentContent.join('\n');
      }
      if (currentSubsection) {
        currentSection?.subsections.push(currentSubsection);
      }
      currentSubsection = {
        id: `subsection-${index}`,
        title: line.replace(/^## /, ''),
        level: 2,
        content: '',
        subsubsections: []
      };
      currentContent = [];
    } else if (line.startsWith('# ')) {
      // H1 - Main section
      if (currentSubsubsection) {
        currentSubsubsection.content = currentContent.join('\n');
        if (currentSubsection) {
          if (!currentSubsection.subsubsections) currentSubsection.subsubsections = [];
          currentSubsection.subsubsections.push(currentSubsubsection);
        }
        currentSubsubsection = null;
      }
      if (currentSubsection) {
        if (currentContent.length > 0 && !currentSubsubsection) {
          currentSubsection.content = currentContent.join('\n');
        }
        currentSection?.subsections.push(currentSubsection);
        currentSubsection = null;
      }
      if (currentSection) {
        if (currentContent.length > 0 && !currentSubsection) {
          currentSection.content = currentContent.join('\n');
        }
        sections.push(currentSection);
      }
      currentSection = {
        id: `section-${index}`,
        title: line.replace(/^# /, ''),
        level: 1,
        subsections: [],
        content: ''
      };
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  });
  
  // Push the last items
  if (currentSubsubsection) {
    currentSubsubsection.content = currentContent.join('\n');
    if (currentSubsection) {
      if (!currentSubsection.subsubsections) currentSubsection.subsubsections = [];
      currentSubsection.subsubsections.push(currentSubsubsection);
    }
  } else if (currentSubsection) {
    currentSubsection.content = currentContent.join('\n');
    currentSection?.subsections.push(currentSubsection);
  } else if (currentSection && currentContent.length > 0) {
    currentSection.content = currentContent.join('\n');
  }
  if (currentSection) {
    sections.push(currentSection);
  }
  
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  
  const renderContent = (text) => {
    if (!text || text.trim() === '') return null;
    return (
      <div className="whitespace-pre-wrap text-base leading-relaxed text-slate-700">
        {text}
      </div>
    );
  };
  
  return (
    <div className="space-y-4">
      {sections.map((section, idx) => {
        // Skip table of contents and title sections
        if (section.title.includes('Table of Contents') || 
            section.title.includes('Complete Exam Study Notes') ||
            idx === 0) {
          return null;
        }
        
        const isExpanded = expandedSections[section.id] !== false; // Default expanded
        
        return (
          <div key={section.id} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition"
            >
              <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
              <ChevronDown 
                className={`h-5 w-5 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
            
            {/* Section Content */}
            {isExpanded && (
              <div className="px-5 pb-5 space-y-4">
                {renderContent(section.content)}
                
                {/* Subsections */}
                {section.subsections.map((subsection) => {
                  const subExpanded = expandedSections[subsection.id] !== false;
                  
                  return (
                    <div key={subsection.id} className="ml-4 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
                      <button
                        onClick={() => toggleSection(subsection.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-100 transition"
                      >
                        <h3 className="text-lg font-semibold text-slate-800">{subsection.title}</h3>
                        <ChevronDown 
                          className={`h-4 w-4 text-slate-500 transition-transform ${subExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      {subExpanded && (
                        <div className="px-4 pb-4 space-y-3">
                          {renderContent(subsection.content)}
                          
                          {/* Sub-subsections (H3 headers like Ceramide, Gangliosides) */}
                          {subsection.subsubsections?.map((subsubsection) => (
                            <div key={subsubsection.id} className="ml-2 p-4 rounded-lg bg-white border border-slate-200">
                              <h4 className="text-base font-semibold text-slate-800 mb-2">{subsubsection.title}</h4>
                              {renderContent(subsubsection.content)}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// TestingSection Component - Manages state for collapsible answer guides
function TestingSection({ selectedLecture, activeLecture, examQuestions, handleGoBack }) {
  const [expandedAnswers, setExpandedAnswers] = useState({});
  
  const toggleAnswer = (index) => {
    setExpandedAnswers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  return (
    <div className="space-y-6">
      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardContent className="p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Exam Practice Questions</h2>
            <p className="mt-2 text-slate-600">
              {activeLecture?.title} - {examQuestions[selectedLecture]?.length || 0} essay questions
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Practice these in exam conditions - time yourself and write full essay answers
            </p>
          </div>

          <div className="space-y-4">
            {examQuestions[selectedLecture]?.map((q, index) => (
              <div key={index} className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden hover:border-slate-300 transition">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-base leading-relaxed text-slate-800">
                        {q.question}
                      </p>
                      {q.question.includes('40 marks') && (
                        <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-900">
                          <span>⭐</span>
                          <span>40-MARK ESSAY - HIGH PRIORITY</span>
                        </div>
                      )}
                      {q.question.match(/\((\d+) marks\)/)?.[1] && (
                        <div className="mt-3 text-sm font-medium text-slate-500">
                          Time: ~{Math.round(parseInt(q.question.match(/\((\d+) marks\)/)[1]) * 1.25)} minutes
                        </div>
                      )}
                      
                      <div className="mt-4">
                        <button
                          onClick={() => toggleAnswer(index)}
                          className="flex items-center gap-2 rounded-lg bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-200 transition"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${expandedAnswers[index] ? '' : '-rotate-90'}`} />
                          <span>{expandedAnswers[index] ? 'Hide' : 'Show'} Answer Guide</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {expandedAnswers[index] && (
                  <div className="border-t-2 border-emerald-200 bg-emerald-50 p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 rounded-lg bg-emerald-700 p-2">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-900">How to Answer This Question</h4>
                        <p className="text-sm text-emerald-700 mt-1">
                          Use the flashcards and lecture notes to build your answer
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white border border-emerald-200 p-4">
                      <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-wrap">
                        {`USE FLASHCARDS: Check the MEGA flashcard pack for Lecture ${selectedLecture}

KEY STRUCTURE:
• Introduction (1 paragraph): Define key terms and state what you'll cover
• Main content (3-5 paragraphs): Detailed mechanisms and pathways
• Clinical relevance (1 paragraph): Disease connections and therapeutic implications  
• Conclusion (1 paragraph): Summary and significance

TIP: Organize flashcard answers into essay format with clear transitions between sections. Include specific protein names, numbers (pH values, ΔΨm, etc.), and clinical examples.`}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {(!examQuestions[selectedLecture] || examQuestions[selectedLecture].length === 0) && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
              <p className="text-slate-600">No exam questions available for this lecture yet.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Integration Questions */}
      {selectedLecture === 13 && examQuestions.integration && (
        <Card className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-emerald-900">
                🔗 Integration Questions
              </h3>
              <p className="mt-2 text-emerald-700">
                Cross-lecture questions connecting multiple topics - {examQuestions.integration.length} questions
              </p>
            </div>

            <div className="space-y-4">
              {examQuestions.integration.map((q, index) => {
                const intIndex = `int-${index}`;
                return (
                  <div key={index} className="rounded-2xl border-2 border-emerald-300 bg-white overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-white font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-base leading-relaxed text-slate-800">
                            {q.question}
                          </p>
                          {q.question.match(/\((\d+) marks\)/)?.[1] && (
                            <div className="mt-3 text-sm font-medium text-emerald-700">
                              Time: ~{Math.round(parseInt(q.question.match(/\((\d+) marks\)/)[1]) * 1.25)} minutes
                            </div>
                          )}
                          
                          <div className="mt-4">
                            <button
                              onClick={() => toggleAnswer(intIndex)}
                              className="flex items-center gap-2 rounded-lg bg-emerald-200 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-300 transition"
                            >
                              <ChevronDown className={`h-4 w-4 transition-transform ${expandedAnswers[intIndex] ? '' : '-rotate-90'}`} />
                              <span>{expandedAnswers[intIndex] ? 'Hide' : 'Show'} Answer Guide</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {expandedAnswers[intIndex] && (
                      <div className="border-t-2 border-emerald-300 bg-emerald-50 p-6">
                        <div className="rounded-lg bg-white border border-emerald-300 p-4">
                          <p className="text-sm leading-relaxed text-slate-700">
                            <strong className="text-emerald-900">Integration Strategy:</strong><br />
                            Connect concepts from multiple lectures. Show how pathways link together. Include specific examples from each lecture mentioned in the question.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center justify-center">
        <Button
          onClick={handleGoBack}
          className="rounded-2xl bg-slate-200 px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-300"
        >
          Back to Selection
        </Button>
      </div>
    </div>
  );
}

// FlashCard Component
function FlashCard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="cursor-pointer h-64"
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-600 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 rounded-2xl border-2 border-slate-300 bg-white p-6 shadow-md"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-lg bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              Question
            </span>
            <span className="text-xs text-slate-400">Click to flip</span>
          </div>
          <div className="flex h-[calc(100%-2.5rem)] items-center justify-center">
            <p className="text-center text-lg font-medium leading-relaxed text-slate-900">
              {question}
            </p>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6 shadow-md"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-lg bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
              Answer
            </span>
            <span className="text-xs text-emerald-600">Click to flip back</span>
          </div>
          <div className="flex h-[calc(100%-2.5rem)] items-center justify-center">
            <p className="text-center text-base leading-relaxed text-slate-800">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LectureStudyDashboard() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedLecture, setSelectedLecture] = useState(2);
  const [selectedContentType, setSelectedContentType] = useState("notes");
  const [currentView, setCurrentView] = useState("selection");
  const [progressMenuOpen, setProgressMenuOpen] = useState(false);
  
  // Progress tracking: { lectureId: { notes: bool, flashcards: bool, testing: bool } }
  const [progress, setProgress] = useState(() => {
    const initial = {};
    for (let i = 2; i <= 13; i++) {
      initial[i] = { notes: false, flashcards: false, testing: false };
    }
    return initial;
  });

  const activeLecture = useMemo(
    () => lectures.find((lecture) => lecture.id === selectedLecture),
    [selectedLecture]
  );

  const activeContent = useMemo(
    () => contentTypes.find((content) => content.value === selectedContentType),
    [selectedContentType]
  );

  const ActiveIcon = activeContent?.icon || BookOpen;

  // Calculate overall progress
  const calculateProgress = () => {
    const totalSections = 12 * 3; // 12 lectures × 3 sections each
    let completedSections = 0;
    Object.values(progress).forEach(lecture => {
      if (lecture.notes) completedSections++;
      if (lecture.flashcards) completedSections++;
      if (lecture.testing) completedSections++;
    });
    return Math.round((completedSections / totalSections) * 100);
  };

  const toggleProgress = (lectureId, section) => {
    setProgress(prev => ({
      ...prev,
      [lectureId]: {
        ...prev[lectureId],
        [section]: !prev[lectureId][section]
      }
    }));
  };

  const handleOpenContent = () => {
    setCurrentView("content");
  };

  const handleGoBack = () => {
    setCurrentView("selection");
  };

  const handleNextMode = () => {
    if (activeContent?.nextMode) {
      setSelectedContentType(activeContent.nextMode);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Get flashcards for current lecture
  const currentFlashcards = flashcardData[selectedLecture] || [];

  const overallProgress = calculateProgress();

  // Progress Slide-out Menu
  const ProgressMenu = () => (
    <>
      {/* Overlay */}
      {progressMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={() => setProgressMenuOpen(false)}
        />
      )}
      
      {/* Slide-out Panel */}
      <div 
        className={`fixed right-0 top-0 z-50 h-full w-96 transform bg-white shadow-2xl transition-transform duration-300 ${
          progressMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b border-slate-200 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">Overall Progress</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setProgressMenuOpen(false)}
                className="rounded-xl"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Progress Bar */}
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">Course Completion</span>
                <span className="font-bold text-slate-900">{overallProgress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {Object.values(progress).reduce((sum, l) => sum + (l.notes ? 1 : 0) + (l.flashcards ? 1 : 0) + (l.testing ? 1 : 0), 0)} of 36 sections completed
              </p>
            </div>
          </div>

          {/* Lecture List */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              {lectures.map((lecture) => {
                const lectureProgress = progress[lecture.id];
                const completedSections = (lectureProgress.notes ? 1 : 0) + 
                                         (lectureProgress.flashcards ? 1 : 0) + 
                                         (lectureProgress.testing ? 1 : 0);
                const isComplete = completedSections === 3;
                
                return (
                  <div 
                    key={lecture.id}
                    className={`rounded-2xl border p-4 transition ${
                      isComplete 
                        ? 'border-emerald-200 bg-emerald-50' 
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold ${
                          isComplete ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {lecture.id}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{lecture.title}</p>
                          <p className="text-xs text-slate-500">{lecture.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-slate-600">{completedSections}/3</span>
                    </div>
                    
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleProgress(lecture.id, 'notes')}
                        className="flex w-full items-center gap-2 text-left"
                      >
                        {lectureProgress.notes ? (
                          <CheckSquare className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Square className="h-4 w-4 text-slate-300" />
                        )}
                        <span className="text-xs text-slate-700">Notes</span>
                      </button>
                      
                      <button
                        onClick={() => toggleProgress(lecture.id, 'flashcards')}
                        className="flex w-full items-center gap-2 text-left"
                      >
                        {lectureProgress.flashcards ? (
                          <CheckSquare className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Square className="h-4 w-4 text-slate-300" />
                        )}
                        <span className="text-xs text-slate-700">Flashcards</span>
                      </button>
                      
                      <button
                        onClick={() => toggleProgress(lecture.id, 'testing')}
                        className="flex w-full items-center gap-2 text-left"
                      >
                        {lectureProgress.testing ? (
                          <CheckSquare className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Square className="h-4 w-4 text-slate-300" />
                        )}
                        <span className="text-xs text-slate-700">Testing</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Content View Component
  if (currentView === "content") {
    return (
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <div className="min-h-screen">
          {/* Header with Back Button */}
          <header className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm">
            <div className="flex h-16 items-center gap-4 px-6">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl"
                onClick={handleGoBack}
                aria-label="Go back to selection"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <ActiveIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h1 className="truncate text-lg font-semibold tracking-tight">
                    {activeContent?.heading}
                  </h1>
                  <p className="truncate text-xs text-slate-500">{activeLecture?.title} - {activeLecture?.subtitle}</p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="p-6 md:p-8">
            <div className="mx-auto max-w-6xl">
              
              {/* NOTES MODE */}
              {selectedContentType === "notes" && (
                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-slate-900">{activeLecture?.title}: {activeLecture?.subtitle}</h2>
                      <p className="mt-2 text-sm text-slate-600">
                        Complete book-style notes • Click sections to expand/collapse
                      </p>
                    </div>
                    
                    <FormattedLectureNotes 
                      content={lectureNotes[selectedLecture]} 
                      lectureTitle={activeLecture?.title} 
                    />

                    {/* Navigation to Next Mode */}
                    {activeContent?.nextMode && (
                      <div className="mt-12 flex items-center justify-center border-t border-slate-200 pt-8">
                        <Button
                          onClick={handleNextMode}
                          className="group flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-base font-medium text-white hover:bg-slate-800"
                        >
                          <span>Continue to Flash Cards</span>
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* FLASHCARDS MODE */}
              {selectedContentType === "flashcards" && (
                <div className="space-y-6">
                  <Card className="rounded-3xl border-slate-200 shadow-sm">
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight">Flash Cards</h2>
                        <p className="mt-2 text-slate-600">
                          {activeLecture?.title} - {currentFlashcards.length} cards
                        </p>
                        <p className="mt-2 text-sm text-slate-500">Click any card to flip and reveal the answer</p>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {currentFlashcards.map((card, index) => (
                          <FlashCard key={index} question={card.q} answer={card.a} />
                        ))}
                      </div>

                      {currentFlashcards.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
                          <p className="text-slate-600">No flashcards available for this lecture yet.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Navigation to Next Mode */}
                  {activeContent?.nextMode && currentFlashcards.length > 0 && (
                    <div className="flex items-center justify-center">
                      <Button
                        onClick={handleNextMode}
                        className="group flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-base font-medium text-white hover:bg-slate-800"
                      >
                        <span>Continue to Testing</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* TESTING MODE */}
              {selectedContentType === "testing" && (
                <TestingSection 
                  selectedLecture={selectedLecture}
                  activeLecture={activeLecture}
                  examQuestions={examQuestions}
                  handleGoBack={handleGoBack}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Selection View (Original Layout)
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <ProgressMenu />
      <div className="flex min-h-screen">
        <aside
          className={`relative border-r border-slate-200 bg-white shadow-sm transition-all duration-300 ${
            menuOpen ? "w-72" : "w-20"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
            {menuOpen && (
              <div>
                <h1 className="text-lg font-semibold tracking-tight">Study Hub</h1>
                <p className="text-xs text-slate-500">Lectures 2–13</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle lecture menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          <nav className="space-y-2 p-3">
            {lectures.map((lecture) => {
              const isActive = lecture.id === selectedLecture;
              const isPriority = lecture.highPriority || lecture.topPriority;
              
              return (
                <button
                  key={lecture.id}
                  onClick={() => setSelectedLecture(lecture.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition relative ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md"
                      : isPriority 
                        ? "text-slate-700 hover:bg-slate-100"
                        : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {isPriority && !isActive && (
                    <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center">
                      <svg className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
                      </svg>
                    </div>
                  )}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${
                      isActive 
                        ? "bg-white/15" 
                        : isPriority
                          ? "bg-yellow-100 text-yellow-900 border-2 border-yellow-400"
                          : "bg-slate-200"
                    }`}
                  >
                    {lecture.id}
                  </div>
                  {menuOpen && (
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-medium">{lecture.title}</p>
                        <span className={`flex-shrink-0 text-xs font-medium ${
                          isActive ? "text-emerald-300" : "text-emerald-600"
                        }`}>
                          ~{lecture.studyTime}
                        </span>
                      </div>
                      <p className={`truncate text-xs ${
                        isActive 
                          ? "text-slate-300" 
                          : "text-slate-500"
                      }`}>
                        {lecture.subtitle}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 p-6 md:p-8">
          <div className="mx-auto max-w-5xl space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="mb-2 text-sm font-medium uppercase tracking-wide text-slate-500">
                    Opened lecture
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    {activeLecture?.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-slate-600">
                    Select a lecture from the left menu, then choose what kind of study material you want to view.
                  </p>
                </div>

                <div className="w-full md:w-72">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Choose study mode
                  </label>
                  <div className="relative">
                    <select
                      value={selectedContentType}
                      onChange={(event) => setSelectedContentType(event.target.value)}
                      className="w-full appearance-none rounded-2xl border border-slate-300 bg-white px-4 py-3 pr-10 text-sm font-medium outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                    >
                      {contentTypes.map((content) => (
                        <option key={content.value} value={content.value}>
                          {content.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white mt-1">
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-xl font-semibold tracking-tight md:text-2xl">{activeContent?.heading}</h3>
                      <p className="truncate text-sm text-slate-500">{activeLecture?.title}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
                    <p className="mb-4 text-base leading-7 text-slate-700">
                      {selectedContentType === "notes" && "Start by reading the complete lecture notes to understand all concepts."}
                      {selectedContentType === "flashcards" && `Practice with ${currentFlashcards.length} interactive flashcards for quick revision.`}
                      {selectedContentType === "testing" && "Test your knowledge with exam-style questions and MCQs."}
                    </p>
                    <div className="flex items-center gap-3">
                      <Button
                        onClick={handleOpenContent}
                        className="rounded-xl bg-slate-900 px-6 py-2 text-sm font-medium text-white hover:bg-slate-800"
                      >
                        Open {activeContent?.label}
                      </Button>
                      {selectedContentType === "flashcards" && (
                        <span className="text-sm text-slate-600">
                          {currentFlashcards.length} cards available
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">Lecture {selectedLecture} Progress</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setProgressMenuOpen(true)}
                        className="h-8 gap-2 rounded-lg text-xs"
                      >
                        <BarChart3 className="h-4 w-4" />
                        All Progress
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <button
                        onClick={() => toggleProgress(selectedLecture, 'notes')}
                        className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-slate-50"
                      >
                        {progress[selectedLecture]?.notes ? (
                          <CheckSquare className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                        ) : (
                          <Square className="h-5 w-5 flex-shrink-0 text-slate-300" />
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-slate-900">Notes</p>
                          <p className="text-xs text-slate-500">Read all material</p>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => toggleProgress(selectedLecture, 'flashcards')}
                        className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-slate-50"
                      >
                        {progress[selectedLecture]?.flashcards ? (
                          <CheckSquare className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                        ) : (
                          <Square className="h-5 w-5 flex-shrink-0 text-slate-300" />
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-slate-900">Flashcards</p>
                          <p className="text-xs text-slate-500">Practice all cards</p>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => toggleProgress(selectedLecture, 'testing')}
                        className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-slate-50"
                      >
                        {progress[selectedLecture]?.testing ? (
                          <CheckSquare className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                        ) : (
                          <Square className="h-5 w-5 flex-shrink-0 text-slate-300" />
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-slate-900">Testing</p>
                          <p className="text-xs text-slate-500">Complete exam prep</p>
                        </div>
                      </button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <p className="text-sm font-semibold text-slate-900">Study workflow</p>
                    <div className="mt-4 space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${selectedContentType === 'notes' ? 'bg-slate-900' : 'bg-slate-300'}`} />
                        <span>Read notes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${selectedContentType === 'flashcards' ? 'bg-slate-900' : 'bg-slate-300'}`} />
                        <span>Practice flashcards</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${selectedContentType === 'testing' ? 'bg-slate-900' : 'bg-slate-300'}`} />
                        <span>Test yourself</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}


// Render
ReactDOM.createRoot(document.getElementById('root')).render(<LectureStudyDashboard />);
