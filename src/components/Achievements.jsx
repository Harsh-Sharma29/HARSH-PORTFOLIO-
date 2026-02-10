import React from 'react';

const Achievements = () => {
    return (
        <section className="max-w-4xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                Key Achievements
            </h2>
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-indigo-100 text-indigo-600 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">National Hackathon Finalist 2024</h3>
                            <p className="text-slate-600">Selected among top 10 teams out of 500+ participants for innovative AI solution.</p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-100"></div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-indigo-100 text-indigo-600 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">LeetCode Knight</h3>
                            <p className="text-slate-600">Solved 500+ algorithmic problems; consistently ranked in top 15% in weekly contests.</p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-100"></div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-indigo-100 text-indigo-600 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">Open Source Contributor</h3>
                            <p className="text-slate-600">Merged PRs to popular LangChain repositories improving documentation and examples.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
