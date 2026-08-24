import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { characters } from "../data/characters";
import "./CharacterDetails.css";

export default function CharacterDetails() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const character = characters.find((item) => item.slug === slug);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoom = () => {
    setZoomLevel((current) => {
      if (current === 1) return 1.5;
      if (current === 1.5) return 2;
      if (current === 2) return 2.5;

      setPosition({ x: 0, y: 0 });

      return 1;
    });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLImageElement>) => {
    if (zoomLevel === 1) return;

    setIsDragging(true);

    setDragStart({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    if (!isDragging || zoomLevel === 1) return;

    setPosition({
      x: event.clientX - dragStart.x,
      y: event.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetViewer = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  };

  if (!character) {
    return (
      <main className="character-not-found">
        <h1>Personagem não encontrado.</h1>

        <Link to="/characters">
          Voltar para personagens
        </Link>
      </main>
    );
  }

  return (
    <main className="character-details-page">
      <header className="character-details-header">
        <Link to="/" className="logo">
          3D ARTIST
        </Link>

        <nav className="nav">
          <Link to="/">Início</Link>
          <Link to="/characters">Personagens</Link>
          <Link to="/#about">Sobre</Link>
          <Link to="/#contact">Contato</Link>
        </nav>
      </header>

      <section className="character-details-hero">
        <div className="character-details-content">
          <span className="character-details-category">
            {character.category}
          </span>

          <h1>{character.name}</h1>

          <p>{character.description}</p>

          <Link to="/characters" className="back-link">
            ← Voltar para personagens
          </Link>
        </div>

        <div className="character-details-image">
          <img
            src={character.image}
            alt={character.name}
          />
        </div>
      </section>

      <section className="character-about">
        <div className="character-about-number">
          01
        </div>

        <div className="character-about-content">
          <span>SOBRE O PERSONAGEM</span>

          <h2>
            Design, identidade e construção visual.
          </h2>

          <p>
            {character.description}
          </p>
        </div>
      </section>

      <section className="character-tools">
        <div>
          <span className="tools-label">
            FERRAMENTAS
          </span>

          <h2>Processo de criação</h2>
        </div>

        <div className="tools-list">
          {character.tools.map((tool, index) => (
            <div className="tool-item" key={tool}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{tool}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="character-gallery-placeholder">
        <span>DETALHES DO PROJETO</span>

        <h2>Processo e desenvolvimento</h2>

        <div className="details-grid">

          {/* ESCULTURA */}

          {character.gallery?.sculpt && (
            <div
              className="process-card"
              onClick={() =>
                setSelectedImage(character.gallery?.sculpt ?? null)
              }
            >
              <img
                src={character.gallery.sculpt}
                alt={`Escultura de ${character.name}`}
              />

              <div className="process-card-info">
                <span>01</span>
                <p>Escultura</p>
              </div>

              <span className="view-image">
                VER IMAGEM ↗
              </span>
            </div>
          )}


          {/* MODELAGEM */}

          {character.gallery?.modeling && (
            <div
              className="process-card"
              onClick={() =>
                setSelectedImage(character.gallery?.modeling ?? null)
              }
            >
              <img
                src={character.gallery.modeling}
                alt={`Modelagem de ${character.name}`}
              />

              <div className="process-card-info">
                <span>02</span>
                <p>Modelagem</p>
              </div>

              <span className="view-image">
                VER IMAGEM ↗
              </span>
            </div>
          )}


          {/* TEXTURIZAÇÃO */}

          {character.gallery?.texturing && (
            <div
              className="process-card"
              onClick={() =>
                setSelectedImage(character.gallery?.texturing ?? null)
              }
            >
              <img
                src={character.gallery.texturing}
                alt={`Texturização de ${character.name}`}
              />

              <div className="process-card-info">
                <span>03</span>
                <p>Texturização</p>
              </div>

              <span className="view-image">
                VER IMAGEM ↗
              </span>
            </div>
          )}

        </div>
      </section>

      <section className="character-next">
        <span>CONTINUAR EXPLORANDO</span>

        <Link to="/characters">
          Ver todos os personagens
          <span>↗</span>
        </Link>
      </section>

      {selectedImage && (
        <div
          className="image-modal"
          onClick={resetViewer}
        >
          <button
            className="image-modal-close"
            onClick={resetViewer}
            aria-label="Fechar imagem"
          >
            ×
          </button>

          <button
            className="image-zoom-button"
            onClick={(event) => {
              event.stopPropagation();
              handleZoom();
            }}
            aria-label="Aumentar imagem"
          >
            <span className="magnifier">
              <span className="magnifier-symbol">
                {zoomLevel === 2.5 ? "−" : "+"}
              </span>
            </span>

            <span className="zoom-value">
              {Math.round(zoomLevel * 100)}%
            </span>
          </button>

          <div
            className="image-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Detalhe do processo de desenvolvimento"
              draggable={false}
              onClick={handleZoom}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                transform: `
                  translate(${position.x}px, ${position.y}px)
                  scale(${zoomLevel})
                `,
                cursor:
                  zoomLevel === 1
                    ? "zoom-in"
                    : isDragging
                      ? "grabbing"
                      : "grab",
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}