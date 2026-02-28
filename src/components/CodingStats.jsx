import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiGithub, FiTerminal, FiStar, FiGitCommit,
  FiCode, FiUsers, FiBookOpen, FiActivity
} from "react-icons/fi";

const GITHUB_USERNAME = "ReAww";

// --- Individual stat card ---
function StatCard({ icon, label, value, loading, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="flex flex-col gap-3 p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-white/10 transition-all group"
    >
      <div className="flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors">
        {icon}
        <span className="text-[9px] font-mono uppercase tracking-[0.3em]">{label}</span>
      </div>

      {loading ? (
        <div className="h-8 w-20 rounded-lg bg-white/5 animate-pulse" />
      ) : (
        <span className="text-3xl font-bold text-white tracking-tighter tabular-nums">
          {value ?? "—"}
        </span>
      )}
    </motion.div>
  );
}

// --- Language bar ---
function LangBar({ name, pct, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-3"
    >
      <span className="text-[10px] font-mono text-white/50 w-20 shrink-0 uppercase tracking-wider truncate">
        {name}
      </span>
      <div className="flex-1 h-[3px] bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
      <span className="text-[10px] font-mono text-white/30 w-10 text-right tabular-nums">
        {pct.toFixed(1)}%
      </span>
    </motion.div>
  );
}

// Color map for common languages
const LANG_COLORS = {
  JavaScript: "#F7DF1E", TypeScript: "#3178C6", Python: "#3572A5",
  HTML: "#E34C26", CSS: "#563D7C", PHP: "#4F5B93",
  "Jupyter Notebook": "#DA5B0B", Shell: "#89E051", Java: "#B07219",
  C: "#555555", "C++": "#F34B7D", Rust: "#DEA584",
  Go: "#00ADD8", Ruby: "#701516", Swift: "#F05138",
  Kotlin: "#A97BFF", Dart: "#00B4AB", Vue: "#41B883",
};

export default function CodingStats() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [langs, setLangs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        // 1. User profile + repo list (public, no auth needed)
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const [userData, reposData] = await Promise.all([
          userRes.json(),
          reposRes.json(),
        ]);

        if (cancelled) return;
        setProfile(userData);
        setRepos(reposData);

        // 2. Aggregate languages across all repos
        const langTotals = {};
        await Promise.allSettled(
          reposData.slice(0, 20).map(async (repo) => {
            if (repo.fork) return; // skip forks
            const langRes = await fetch(repo.languages_url);
            if (!langRes.ok) return;
            const langData = await langRes.json();
            for (const [lang, bytes] of Object.entries(langData)) {
              langTotals[lang] = (langTotals[lang] || 0) + bytes;
            }
          })
        );

        if (cancelled) return;

        const total = Object.values(langTotals).reduce((a, b) => a + b, 0);
        const sorted = Object.entries(langTotals)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 6)
          .map(([name, bytes]) => ({
            name,
            pct: total > 0 ? (bytes / total) * 100 : 0,
            color: LANG_COLORS[name] ?? "#A6A6A6",
          }));

        setLangs(sorted);
        setLoading(false);
      } catch {
        if (!cancelled) setError(true);
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => { cancelled = true; };
  }, []);

  // Compute derived stats
  const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
  const totalForks = repos.reduce((acc, r) => acc + (r.forks_count || 0), 0);
  const ownRepos = repos.filter(r => !r.fork).length;

  return (
    <section id="coding-stats" className="py-16 md:py-24 bg-[#0D0D0D]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-[#A6A6A6] font-mono tracking-[0.3em] uppercase text-xs mb-2">04. Activity Log</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">How Often Do I Code?</h3>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-white/40 font-mono text-[10px] tracking-widest uppercase">
            <FiActivity className="animate-pulse text-green-500" /> Live GitHub Data
          </div>
        </motion.div>

        {error ? (
          /* Error fallback */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 rounded-3xl bg-[#141414] border border-white/5 text-center"
          >
            <p className="text-white/20 font-mono text-xs uppercase tracking-widest mb-4">Unable to reach GitHub API</p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors"
            >
              <FiGithub /> View profile on GitHub
            </a>
          </motion.div>
        ) : (
          <div className="space-y-6">

            {/* --- Row 1: Stat cards --- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon={<FiBookOpen size={14} />} label="Repositories" value={ownRepos || profile?.public_repos} loading={loading} delay={0} />
              <StatCard icon={<FiStar size={14} />} label="Total Stars" value={totalStars} loading={loading} delay={0.1} />
              <StatCard icon={<FiGitCommit size={14} />} label="Total Forks" value={totalForks} loading={loading} delay={0.2} />
              <StatCard icon={<FiUsers size={14} />} label="Followers" value={profile?.followers} loading={loading} delay={0.3} />
            </div>

            {/* --- Row 2: Languages + Bio card --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Language breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="md:col-span-2 p-8 rounded-3xl bg-[#141414] border border-white/5"
              >
                <div className="flex items-center gap-2 mb-6">
                  <FiCode className="text-white/20" size={14} />
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Language Breakdown</span>
                </div>

                {loading ? (
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-[10px] w-16 rounded bg-white/5 animate-pulse" />
                        <div className="flex-1 h-[3px] rounded-full bg-white/5 animate-pulse" />
                      </div>
                    ))}
                  </div>
                ) : langs.length > 0 ? (
                  <div className="space-y-4">
                    {langs.map((l, i) => (
                      <LangBar key={l.name} name={l.name} pct={l.pct} color={l.color} delay={i * 0.07} />
                    ))}
                  </div>
                ) : (
                  <p className="text-white/20 text-xs font-mono">No language data found.</p>
                )}
              </motion.div>

              {/* Profile bio card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-1 w-1 bg-green-500 rounded-full animate-ping" />
                    <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest">GitHub Profile</span>
                  </div>
                  {loading ? (
                    <div className="space-y-2">
                      <div className="h-4 w-24 rounded bg-white/5 animate-pulse" />
                      <div className="h-3 w-full rounded bg-white/5 animate-pulse" />
                      <div className="h-3 w-4/5 rounded bg-white/5 animate-pulse" />
                    </div>
                  ) : (
                    <>
                      <p className="text-white font-bold tracking-tight mb-2">@{profile?.login}</p>
                      <p className="text-[#A6A6A6] text-xs leading-relaxed">
                        {profile?.bio ?? "Frontend Developer & Founder of RezCode Agency."}
                      </p>
                    </>
                  )}
                </div>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center gap-2 text-white/40 hover:text-white text-[10px] font-mono uppercase tracking-widest transition-colors group"
                >
                  <FiGithub /> View Profile
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </motion.div>
            </div>

            {/* --- Row 3: CTA --- */}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-8 rounded-3xl bg-gradient-to-r from-[#141414] to-[#0D0D0D] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-white/5 text-white">
                  <FiGithub size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Follow my open-source journey</h4>
                  <p className="text-[#A6A6A6] text-xs">Seeing every commit as a step towards mastering the tech era.</p>
                </div>
              </div>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#E5E5E5] transition-all flex items-center gap-2 shrink-0"
              >
                Visit Profile <FiTerminal />
              </a>
            </motion.div>

          </div>
        )}
      </motion.div>
    </section>
  );
}