import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Play, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'rideops',
    path: '/rideops',
    name: 'RideOps',
    subtitle: '即時運力監控中心',
    description: '叫車平台營運儀表板 — 追蹤司機分佈、訂單趨勢、供需熱區與即時營運警示。以地理位置與動態數據為核心的淺色專業風格。',
    tags: ['O2O 運力', '地圖視覺化', 'Light Mode'],
    icon: Car,
    accent: 'black',
    bgHover: 'hover:border-gray-400',
    iconBg: 'bg-black',
    tagStyle: 'bg-gray-100 text-gray-700',
  },
  {
    id: 'streampulse',
    path: '/streampulse',
    name: 'StreamPulse',
    subtitle: '內容營運戰情室',
    description: '影音串流平台數據儀表板 — 監控訂閱營收、流失率、熱播內容完播率與觀看裝置分佈。沉穩深色系的 B2B 影音數據風格。',
    tags: ['SaaS 訂閱制', '內容分析', 'Dark Mode'],
    icon: Play,
    accent: 'indigo-600',
    bgHover: 'hover:border-indigo-400',
    iconBg: 'bg-indigo-600',
    tagStyle: 'bg-indigo-50 text-indigo-700',
  },
];

const Portal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <span className="text-lg font-bold tracking-tight text-gray-900">Dashboard Portfolio</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl w-full">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">營運數據儀表板作品集</h1>
            <p className="text-gray-500 mt-2 text-base">針對不同商業場景打造的全端數據視覺化解決方案</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <button
                  key={project.id}
                  onClick={() => navigate(project.path)}
                  className={`group text-left bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-300 ${project.bgHover} hover:shadow-lg`}
                >
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${project.iconBg} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
                      <p className="text-sm text-gray-500">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${project.tagStyle}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
                    <span>查看完整 Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <p className="text-xs text-gray-400 text-center">
            Built with React + TypeScript + Tailwind CSS + ECharts
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portal;
