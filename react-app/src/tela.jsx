// src/App.jsx
import { useState } from "react";
import "./index.css";

export default function Tela() {
  const [search, setSearch] = useState("");

  const suggestions = [
    { name: "The Jazz Club", desc: "Popular entre Ana e Pedro", img: "" },
    { name: "Brewery Lane", desc: "3 amigos fizeram check-in", img: "" },
    { name: "Karaoke Star", desc: "Gustavo está aqui!", img: "" },
  ];

  return (
    <div className="app">
      <header className="topbar">
        <h1>VibeCity</h1>
        <div className="top-right">
          <span className="bell">🔔</span>
          <div className="avatar">👩‍🦰</div>
        </div>
      </header>

      <div className="search">
        <span className="icon">🔍</span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar locais..."
        />
      </div>

      <main>
        <section className="welcome">
          <h2>Bem-vindo de volta, Ana!</h2>
          <p>Descubra os melhores lugares na sua cidade.</p>
        </section>

        <section className="hot">
          <h3>Locais em Alta 🔥</h3>
          <div className="cards-row">
            <div className="card">
              <div className="card-image">🏙️</div>
              <div className="card-body">
                <h4>The Golden Tap</h4>
                <p className="sub">Bar & Lounge</p>
                <div className="card-actions">
                  <button className="pill busy">Lotado</button>
                  <button className="pill">Check-in</button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image">🌇</div>
              <div className="card-body">
                <h4>Rooftop Club</h4>
                <p className="sub">Terraço</p>
                <div className="card-actions">
                  <button className="pill busy">Movimentado</button>
                  <button className="pill">Check-in</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="suggestions">
          <h3>Sugestão para Você 🌐</h3>
          <div className="suggest-list">
            {suggestions.map((s, i) => (
              <div className="suggest-item" key={i}>
                <div className="left">
                  <div className="thumb">🎵</div>
                  <div>
                    <div className="name">{s.name}</div>
                    <div className="small">{s.desc}</div>
                  </div>
                </div>
                <button className="btn-outline">Ver Local</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <button>🏠<span>Início</span></button>
        <button>📋<span>Lista</span></button>
        <button>🗺️<span>Mapa</span></button>
        <button>👥<span>Social</span></button>
        <button>👤<span>Perfil</span></button>
      </nav>
    </div>
  );
}
