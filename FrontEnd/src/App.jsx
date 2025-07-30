import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      {/* Cabeçalho */}
      <header className="w-full bg-blue-600 py-4 text-center text-white text-2xl font-bold shadow-md">
        Minha Tela Simples
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 w-full flex items-center justify-center">
        <form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-center">Preencha seu nome</h2>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enviar
          </button>
        </form>
      </main>

      {/* Rodapé */}
      <footer className="w-full bg-gray-800 text-white py-3 text-center text-sm">
        © 2025 Minha Tela. Todos os direitos reservados.
      </footer>
    </div>
  );
}
