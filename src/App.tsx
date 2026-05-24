import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  Globe2,
  Layers3,
  Loader2,
  MessageCircleWarning,
  RefreshCw,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { GlassPanel } from "./components/primitives";
import { useLocalStorage } from "./hooks/useLocalStorage";
import {
  generateRoadmapFromInternet,
  type RoadmapPlan,
} from "./services/roadmapResearch";

const quickTopics = ["İngilis dili", "Frontend Development", "Python", "UI/UX Dizayn", "Data Analitika"];

function AmbientMouseLight() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 24 });
  const springY = useSpring(y, { stiffness: 80, damping: 24 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return <motion.div className="mouse-light" style={{ left: springX, top: springY }} />;
}

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 52 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 8,
      })),
    []
  );

  return (
    <div className="particles" aria-hidden>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          style={{ left: particle.left, top: particle.top }}
          animate={{ opacity: [0.08, 0.75, 0.08], y: [-10, 14, -10] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function EmptyState({ onPick }: { onPick: (topic: string) => void }) {
  return (
    <GlassPanel intensity="strong" className="mentor-empty">
      <div className="mentor-orb">
        <Brain size={54} />
      </div>
      <div>
        <span className="eyebrow">
          <Sparkles size={15} /> AI Mentor
        </span>
        <h1>Sən nə öyrənmək istəyirsən?</h1>
        <p>
          Mövzunu yaz, NexusOS sənə azərbaycanca ən qısa və ən real öyrənmə
          strategiyasını, roadmap-i və gündəlik tapşırıqları hazırlasın.
        </p>
        <div className="quick-topics">
          {quickTopics.map((topic) => (
            <button key={topic} onClick={() => onPick(topic)}>
              {topic}
            </button>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}

function LoadingState({ topic }: { topic: string }) {
  return (
    <GlassPanel intensity="strong" className="mentor-empty">
      <div className="mentor-orb">
        <Loader2 className="spin" size={54} />
      </div>
      <div>
        <span className="eyebrow">
          <Globe2 size={15} /> Araşdırma gedir
        </span>
        <h1>{topic} üçün strategiya hazırlanır</h1>
        <p>
          AI mentor mövzunun əsaslarını, praktik öyrənmə ardıcıllığını və hər gün
          nə etməli olduğunu bir plan halına gətirir.
        </p>
      </div>
    </GlassPanel>
  );
}

function RoadmapView({
  roadmap,
  onPick,
}: {
  roadmap: RoadmapPlan;
  onPick: (topic: string) => void;
}) {
  if (!roadmap.isKnown) {
    return (
      <GlassPanel intensity="strong" className="mentor-empty">
        <div className="mentor-orb">
          <MessageCircleWarning size={54} />
        </div>
        <div>
          <span className="eyebrow">
            <Brain size={15} /> Etibarlı sillabus tapılmadı
          </span>
          <h1>Bu mövzu haqda məlumatım yoxdur</h1>
          <p>{roadmap.summary}</p>
          <div className="quick-topics">
            {roadmap.suggestedTopics.map((topic) => (
              <button key={topic} type="button" onClick={() => onPick(topic)}>
                {topic}
              </button>
            ))}
          </div>
        </div>
      </GlassPanel>
    );
  }

  return (
    <div className="roadmap-view">
      <GlassPanel intensity="strong" className="strategy-panel">
        <div>
          <span className="eyebrow">
            <Brain size={15} /> AI Mentor Strategiyası
          </span>
          <h1>{roadmap.topic} üçün öyrənmə planın</h1>
          <p>{roadmap.summary}</p>
          {roadmap.correctionNotice && (
            <div className="correction-note">{roadmap.correctionNotice}</div>
          )}
        </div>
        <div className="strategy-meta">
          <span>Plan tipi</span>
          <strong>{roadmap.intensity}</strong>
          <small>{roadmap.generatedAt}</small>
        </div>
      </GlassPanel>

      <section className="section-block">
        <div className="section-heading">
          <Brain size={18} />
          <h2>Əsas terminlər</h2>
        </div>
        <div className="term-grid">
          {roadmap.terms.map((term) => (
            <GlassPanel key={term.name} className="term-card">
              <strong>{term.name}</strong>
              <p>{term.meaning}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <Layers3 size={18} />
          <h2>Öyrənmə sillabusu</h2>
        </div>
        <div className="tech-grid">
          {roadmap.technologies.map((technology, index) => (
            <GlassPanel key={`${technology.name}-${index}`} className="tech-card">
              <div className="tech-index">{index + 1}</div>
              <div>
                <div className="tech-topline">
                  <h3>{technology.name}</h3>
                  <span>{technology.duration}</span>
                </div>
                <p>{technology.reason}</p>
                <div className="tech-detail">
                  <strong>Nə öyrənəcəksən:</strong>
                  <span>{technology.focus}</span>
                </div>
                <div className="tech-detail">
                  <strong>Praktika:</strong>
                  <span>{technology.practice}</span>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <Target size={18} />
          <h2>Roadmap</h2>
        </div>
        <div className="phase-grid">
          {roadmap.phases.map((phase, index) => (
            <GlassPanel key={phase.title} className="phase-card">
              <div className="phase-top">
                <span>0{index + 1}</span>
                <small>{phase.duration}</small>
              </div>
              <h3>{phase.title}</h3>
              <p>{phase.goal}</p>
              <ul>
                {phase.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
              <div className="output-pill">
                <CheckCircle2 size={14} /> Nəticə: {phase.output}
              </div>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <Clock3 size={18} />
          <h2>Hər gün nə etməlisən</h2>
        </div>
        <GlassPanel className="daily-panel">
          {roadmap.dailySystem.map((item, index) => (
            <div className="daily-row" key={item}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </GlassPanel>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <Globe2 size={18} />
          <h2>Araşdırma siqnalları</h2>
        </div>
        <div className="source-grid">
          {roadmap.sources.map((source) => (
            <a href={source.url} target="_blank" rel="noreferrer" key={`${source.type}-${source.title}`}>
              <span>{source.type}</span>
              <strong>{source.title}</strong>
              <small>{source.detail}</small>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [topic, setTopic] = useState("");
  const [activeTopic, setActiveTopic] = useState("");
  const [roadmap, setRoadmap] = useLocalStorage<RoadmapPlan | null>("nexusos.azRoadmap.v5", null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createRoadmap = async (nextTopic: string) => {
    const cleanTopic = nextTopic.trim();
    if (!cleanTopic) {
      setError("Zəhmət olmasa öyrənmək istədiyin mövzunu yaz.");
      return;
    }

    setTopic(cleanTopic);
    setActiveTopic(cleanTopic);
    setError("");
    setLoading(true);

    try {
      const generated = await generateRoadmapFromInternet(cleanTopic);
      setRoadmap(generated);
    } catch {
      setError("Plan hazırlanarkən xəta baş verdi. Mövzunu yenidən göndər.");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void createRoadmap(topic);
  };

  return (
    <main className="app-shell">
      <AmbientMouseLight />
      <Particles />
      <div className="noise" />

      <section className="mentor-layout">
        <header className="topbar">
          <div className="brand">
            <Brain size={20} />
            <span>NexusOS Mentor</span>
          </div>
          <button
            className="ghost-button"
            onClick={() => {
              setRoadmap(null);
              setTopic("");
              setActiveTopic("");
              setError("");
            }}
          >
            <RefreshCw size={16} /> Sıfırla
          </button>
        </header>

        <form className="mentor-search" onSubmit={onSubmit}>
          <Search size={20} />
          <input
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            placeholder="Məsələn: Python, React, Data Analitika, İngilis dili..."
          />
          <button type="submit" disabled={loading}>
            {loading ? <Loader2 className="spin" size={18} /> : <ArrowRight size={18} />}
            Plan hazırla
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
            >
              <LoadingState topic={activeTopic} />
            </motion.div>
          ) : roadmap ? (
            <motion.div
              key={roadmap.topic}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
            >
              <RoadmapView roadmap={roadmap} onPick={createRoadmap} />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
            >
              <EmptyState onPick={createRoadmap} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
