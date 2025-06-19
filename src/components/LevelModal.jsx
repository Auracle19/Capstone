import React from 'react';

export default function LevelModal({ open, onClose, onSelect, progress }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-slate-900 rounded-lg p-8 max-w-xs w-full shadow-lg border border-fuchsia-600">
        <h2 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Select Level</h2>
        <div className="flex flex-col gap-3">
          <button
            className="btn1h py-2"
            onClick={() => onSelect('beginner')}
          >
            Beginner {progress.beginner && <span className="ml-2 text-green-400">✓</span>}
          </button>
          <button
            className="btn1h py-2 disabled:opacity-50"
            onClick={() => onSelect('intermediate')}
            disabled={!progress.beginner}
          >
            Intermediate {progress.intermediate && <span className="ml-2 text-green-400">✓</span>}
          </button>
          <button
            className="btn1h py-2 disabled:opacity-50"
            onClick={() => onSelect('advanced')}
            disabled={!progress.intermediate}
          >
            Advanced {progress.advanced && <span className="ml-2 text-green-400">✓</span>}
          </button>
        </div>
        <button className="mt-6 text-fuchsia-300 underline w-full" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
