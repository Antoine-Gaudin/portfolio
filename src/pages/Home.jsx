// src/pages/Home.jsx
import photo from "../assets/PP noir et blanc.jpg";
import cvFile from "../assets/AG_CV.pdf";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:gap-10">
        {/* Photo = 40% en ≥ md, 100% en mobile */}
        <div className="w-full md:w-[40%]">
          <img
            src={photo}
            alt="Antoine Gaudin"
            className="block w-full h-auto rounded-2xl"
          />
        </div>

        {/* Texte = 60% en ≥ md, 100% en mobile */}
        <div className="w-full md:w-[60%] mt-8 md:mt-0">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
            <span>Antoine</span>
            <br />
            <span>Gaudin</span>
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            Doté d'un fort sens des responsabilités et d'une grande capacité
            d'adaptation, je sais allier écoute, rigueur et créativité dans
            chacun de mes projets. Mon parcours m'a permis de développer des
            compétences techniques et humaines utiles dans tout type
            d'environnement professionnel.
          </p>

          <a
            href={cvFile}
            download
            className="mt-6 inline-flex w-fit items-center justify-center rounded-lg px-5 py-3 font-semibold text-black bg-[#F3C53E] hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#F3C53E] focus:ring-offset-2"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}
