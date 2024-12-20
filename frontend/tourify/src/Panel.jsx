import React, { useState } from "react";
import { FaUsers, FaUserTag, FaShoppingBag, FaTags, FaShieldAlt, FaClipboardList } from "react-icons/fa";
import { AdministrarUsuario } from "./components/AdministrarUsuario";
import { InformacionPersonal } from "./components/InformacionPersonal";
import { AdministrarProducto } from "./components/AdministrarProducto";
import { AdministrarCategorias } from "./components/AdministrarCategorias";
import { AdministrarCaracteristicas } from "./components/AdministrarCaracteristica";
import { ListaFavoritos } from "./components/ListaFavoritos";
import HistorialReservas from "./components/HistorialReservas";

const Panel = () => {
  const [activeComponent, setActiveComponent] = useState(null); // Controla qué componente mostrar
  const [loading, setLoading] = useState(false);

  const handleComponentChange = (component) => {
    setLoading(true);
    setTimeout(() => {
      setActiveComponent(component); // Cambia el componente activo después de "cargar"
      setLoading(false);
    }, 500); // Simula un pequeño tiempo de carga
  };

  return (
    <div className="container-panel">
      <div className="dashboard">
        <aside className="sidebar">
          <ul>
            <li>
              <p className="font-bold mt-8 mb-4">Dashboard</p>
              <button
                onClick={() => handleComponentChange("InformacionPersonal")}
                className="link-button"
              >
                <FaUserTag /> Información personal
              </button>
            </li>
            <li>
              <button
                onClick={() => handleComponentChange("AdministrarUsuario")}
                className="link-button"
              >
                <FaUsers /> Usuarios
              </button>
            </li>
            <li>
              <button
                onClick={() => handleComponentChange("AdministrarProducto")}
                className="link-button"
              >
                <FaShoppingBag /> Productos
              </button>
            </li>
            <li>
              <button
                onClick={() => handleComponentChange("AdministrarCategorias")}
                className="link-button"
              >
                <FaTags /> Categorías
              </button>
            </li>
            <li>
              <button
                onClick={() => handleComponentChange("AdministrarCaracteristicas")}
                className="link-button"
              >
                <FaClipboardList /> Características
              </button>
            </li>
            <li>
              <button
                onClick={() => handleComponentChange("ListaFavoritos")}
                className="link-button"
              >
                <FaClipboardList /> Lista Favoritos
              </button>
            </li>
            <li>
              <button
                onClick={() => handleComponentChange("HistorialReservas")}
                className="link-button"
              >
                <FaClipboardList /> Reservas
              </button>
            </li>
          </ul>
        </aside>

        <main className="content-panel">
          {loading ? (
            <div>Loading...</div> // Muestra un indicador de carga mientras cambia
          ) : activeComponent === "InformacionPersonal" ? (
            <InformacionPersonal />
          ) : activeComponent === "AdministrarUsuario" ? (
            <AdministrarUsuario />
          ) : activeComponent === "AdministrarProducto" ? (
            <AdministrarProducto />
          ) : activeComponent === "AdministrarCategorias" ? (
            <AdministrarCategorias />
          ) : activeComponent === "AdministrarCaracteristicas" ? (
            <AdministrarCaracteristicas />
          ) : activeComponent === "ListaFavoritos" ? (
            <ListaFavoritos />
          ) : activeComponent === "HistorialReservas" ? (
            <HistorialReservas />
          ) : (
            <div className="dashboard-summary">
              <h2>Bienvenido al Panel</h2>
              <div className="card">10 <span>Usuarios</span></div>
              <div className="card">20 <span>Reservas</span></div>
              <div className="card">50 <span>Visitantes</span></div>
              <div className="card">5 <span>Reservas</span></div>
            </div>
          )}
        </main>
        <div className="mobile-message">
            El panel de administración no está disponible en dispositivos móviles o tablet. Accede desde un dispositivo compatible para gestionar las funciones de administración.
          </div>
      </div>
    </div>
  );
};

export default Panel;
