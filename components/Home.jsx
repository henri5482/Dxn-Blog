import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { articles } from "../data/articles";

export default function Blog() {
  const featuredArticle = articles[0]; // Artículo destacado
  const otherArticles = articles.slice(1, 10); // Otros 3 artículos

  return (
    <>
      {/* Etiquetas SEO en Head */}
      <Head>
        <title>Nuestras noticias y artículos - Blog Informativo</title>
        <meta name="description" content="Explora las últimas noticias y artículos de interés en nuestro blog. Encuentra temas variados y actualizados." />
        <meta name="keywords" content="noticias, artículos, blog informativo, novedades, actualizaciones" />
        <meta property="og:title" content="Nuestras noticias y artículos - Blog Informativo" />
        <meta property="og:description" content="Explora las últimas noticias y artículos de interés en nuestro blog. Encuentra temas variados y actualizados." />
        <meta property="og:image" content="/path/to/featured-image.jpg" />
        <meta property="og:url" content="https://tudominio.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Contenido principal */}
      <div className="pt-36 px-2 max-w-[1300px] mx-auto">
        <h1 className="text-4xl font-bold text-black xl:text-7xl">
          Nuestras noticias y artículos.
        </h1>

        {/* Artículo destacado */}
        <div className="flex max-md:flex-col gap-6 xl:justify-between py-2 max-w-[1300px] mx-auto">
          <Link
            href={`/blog/${featuredArticle.id}`} 
            className="flex py-3 mt-6 text-lg text-white transition duration-300 rounded-lg max-md:flex-col xl:justify-between md:text-xl "
            aria-label={`Leer artículo destacado: ${featuredArticle.title}`}
          >
            <div>
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                width={4000}
                height={800}
                className="rounded-3xl"
              />
            </div>
            <div className="flex flex-col xl:px-10 md:items-start md:text-start ">
              <div className="flex mb-4">
                <p className="text-[18px] text-slate-600 font-semibold py-2 schibsted-grotesk">
                  {featuredArticle.date}
                </p>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-slate-800 text-start bebas-neue-regular sm:text-3xl hover:text-red-600">
                {featuredArticle.title}
              </h2>
              <p className="mb-6 text-base text-gray-600 text-start max-md:text-start">
                {featuredArticle.excerpt}
              </p>
            </div>
          </Link>
        </div>

        {/* Lista de otros artículos */}
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-3">
          {otherArticles.map((article) => (
            <article key={article.id} className="rounded-3xl">
              <Link href={`/blog/${article.id}`} aria-label={`Leer artículo: ${article.title}`}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="rounded-3xl w-full max-h-[300px]"
                />
                <p className="text-[18px] text-slate-600 font-semibold schibsted-grotesk">
                  {article.date}
                </p>
                <h3 className="text-2xl font-bold text-slate-900">
                  {article.title}
                </h3>
                <p className="block mt-4 font-semibold text-red-600 hover:underline">
                  Leer más
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
