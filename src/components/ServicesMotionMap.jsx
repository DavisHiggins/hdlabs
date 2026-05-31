import { useState } from 'react';
import { servicesMap } from '../data/siteContent.js';
import './ServicesMotionMap.css';

const { nodes, edges } = servicesMap;
const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function ServicesMotionMap() {
  const [active, setActive] = useState(nodes[0].id);

  // Which nodes are directly connected to the active one.
  const connected = new Set();
  edges.forEach(([a, b]) => {
    if (a === active) connected.add(b);
    if (b === active) connected.add(a);
  });

  const activeNode = nodeById[active];

  return (
    <div className="smap">
      <div className="smap__stage">
        <svg className="smap__svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {edges.map(([a, b], i) => {
            const na = nodeById[a];
            const nb = nodeById[b];
            const isActive = a === active || b === active;
            return (
              <line
                key={i}
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                className={`smap__edge${isActive ? ' smap__edge--active' : ''}`}
              />
            );
          })}
        </svg>

        {nodes.map((node) => {
          const isActive = node.id === active;
          const isLinked = connected.has(node.id);
          return (
            <button
              key={node.id}
              type="button"
              className={`smap__node${isActive ? ' smap__node--active' : ''}${isLinked ? ' smap__node--linked' : ''}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setActive(node.id)}
              onFocus={() => setActive(node.id)}
              onClick={() => setActive(node.id)}
              data-cursor="button"
              aria-pressed={isActive}
            >
              <span className="smap__node-dot" />
              <span className="smap__node-label">{node.label}</span>
            </button>
          );
        })}
      </div>

      <aside className="smap__panel" aria-live="polite">
        <span className="smap__panel-micro">CURRENT MODULE</span>
        <h3 className="smap__panel-title">{activeNode.label}</h3>
        <p className="smap__panel-desc">{activeNode.desc}</p>
        <div className="smap__panel-links">
          <span className="smap__panel-links-label">Connects to</span>
          <div className="smap__chips">
            {[...connected].map((id) => (
              <button
                key={id}
                type="button"
                className="smap__chip"
                onMouseEnter={() => setActive(id)}
                onClick={() => setActive(id)}
                data-cursor="button"
              >
                {nodeById[id].label}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
