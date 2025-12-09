// src/pages/Home.jsx
import photo from "../assets/PP noir et blanc.jpg";
import cvFile from "../assets/CV general.pdf";
import CvDevFile from "../assets/CV dev.pdf";

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

<div className="mt-6 flex gap-4">
  {/* CV classique */}
  <a
    href={cvFile}
    download
    className="inline-flex w-fit items-center justify-center rounded-lg px-5 py-3 font-semibold text-black bg-[#F3C53E] hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#F3C53E] focus:ring-offset-2"
  >
    Télécharger mon CV
  </a>

  {/* CV Développeur (bleu) */}
  <a
    href={CvDevFile}
    download
    className="inline-flex w-fit items-center justify-center rounded-lg px-5 py-3 font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2"
  >
    Télécharger mon CV de Développeur
  </a>
</div>

        </div>
      </div>
    </section>
  );
}
