import Header from "../components/header/place/Header"
import styles from './Place.module.css';

export default function Place() {
    const imageUrl = "https://images.unsplash.com/photo-1504674900247-0877df9cc836";
  
    return (
        <>
            <Header text={"Empresa"}/>
            <main className={styles.main}>
            
                <div className={styles.imageWrapper}>
                    <img
                        src={imageUrl}
                        alt="VibeLounge Bar"
                        className={styles.headerImage}
                    />
                    <div className={styles.overlay}></div>
                    <div className={styles.headerText}>
                        <h1>VibeLounge Bar</h1>
                        <p>Bar e Lounge</p>
                    </div>
                </div>

            {/* Ações */}
            <div className={styles.actions}>
                {["Reservar", "Seguir local", "Compartilhar"].map((item) => (
                <button
                    key={item}
                    className="text-blue-600 font-semibold text-sm hover:underline"
                >
                    {item}
                </button>
                ))}
            </div>

            {/* Sobre o Local */}
            <section className="p-4 bg-white mt-2 rounded-lg shadow-sm">
                <h2 className="font-bold text-lg mb-2">Sobre o Local</h2>
                <p className="text-sm text-gray-700 mb-2">
                <strong>Endereço:</strong> Rua X, 123 - Centro, Dourados - MS
                </p>
                <p className="text-sm text-gray-700 mb-2">
                <strong>Horário de Funcionamento:</strong> 18h às 02h (Terça a
                Domingo)
                </p>
                <p className="text-sm text-gray-700 mb-4">
                <strong>Contatos:</strong> (67) 99999-0000
                </p>
                <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Mapa do Local
                </div>
            </section>

            {/* Serviços Oferecidos */}
            <section className="p-4 bg-white mt-2 rounded-lg shadow-sm">
                <h2 className="font-bold text-lg mb-3">Serviços Oferecidos</h2>
                <div className="flex justify-around text-center">
                <div>
                    <span className="block text-xl">🎶</span>
                    <p className="text-sm text-gray-700">Música ao Vivo</p>
                </div>
                <div>
                    <span className="block text-xl">🍹</span>
                    <p className="text-sm text-gray-700">Happy Hour</p>
                </div>
                </div>
            </section>

            {/* Promoções Atuais */}
            <section className="p-4 bg-white mt-2 rounded-lg shadow-sm">
                <h2 className="font-bold text-lg mb-3">Promoções Atuais</h2>
                <div className="rounded-xl overflow-hidden border">
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                    alt="Happy Hour de Drinks"
                    className="w-full h-36 object-cover"
                />
                <div className="p-3">
                    <h3 className="font-semibold">Happy Hour de Drinks</h3>
                    <p className="text-sm text-gray-600 mb-2">
                    Todos os dias, das 18h às 21h — Drinks em dobro!
                    </p>
                    <span className="text-xs font-medium text-pink-600">
                    Válido até 20/10
                    </span>
                </div>
                </div>
            </section>

            {/* Avaliações e Comentários */}
            <section className="p-4 bg-white mt-2 rounded-lg shadow-sm mb-8">
                <h2 className="font-bold text-lg mb-3">Avaliações e Comentários</h2>
                <div className="space-y-3">
                <div className="border rounded-lg p-3">
                    <p className="text-sm font-semibold">Fernando Lima ⭐⭐⭐⭐⭐</p>
                    <p className="text-sm text-gray-700">
                    Lugar incrível! Boa música e ótimos drinks.
                    </p>
                </div>
                <div className="border rounded-lg p-3">
                    <p className="text-sm font-semibold">Rafaela Mendes ⭐⭐⭐⭐</p>
                    <p className="text-sm text-gray-700">
                    Ambiente agradável, recomendo o happy hour!
                    </p>
                </div>
                </div>
            </section>
            </main>
        </>
    );
}
