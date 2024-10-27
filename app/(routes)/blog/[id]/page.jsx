import Head from "next/head";
import Image from "next/image";
import { notFound } from "next/navigation"; // Para manejar cuando no se encuentra el artículo
import { articles } from "../../../../data/articles";

export default function ArticlePage({ params }) {
  const { id } = params;

  // Encuentra el artículo por su ID
  const article = articles.find((art) => art.id === id);

  // Si no se encuentra el artículo, mostramos un 404
  if (!article) {
    return notFound();
  }

  return (
    <>
      {/* Etiquetas SEO en Head */}
      <Head>
        <title>{`${article.title} - Blog DXN Perú`}</title>
        <meta
          name="description"
          content={`${article.excerpt} Descubre más sobre los productos de DXN, cómo afiliarte y beneficios exclusivos en DXN Perú.`}
        />
        <meta
          name="keywords"
          content={`DXN, productos de DXN, afiliación DXN, bienestar, salud, ${article.title}`}
        />
        <meta
          property="og:title"
          content={`${article.title} - Blog DXN Perú`}
        />
        <meta
          property="og:description"
          content={`${article.excerpt} Conoce más sobre ${article.title2} y cómo DXN contribuye a tu bienestar.`}
        />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://dxnperu.com/blog/${article.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="pt-36 max-w-[1300px] mx-auto px-4">
        <h1 className="mt-8 text-4xl font-bold text-black md:text-6xl">
          {article.title}
        </h1>
        <p className="my-4 text-gray-600">{article.date}</p>

        <div className="grid w-full grid-cols-1 gap-10 py-20 md:grid-cols-4 max-w-[1100px]">
          {/* Columna para las preguntas (más pequeña en pantallas grandes) */}
          <div className="col-span-1 text-lg font-bold md:text-xl text-slate-500">
            <p className="py-2">Preguntas frecuentes:</p>
            <a
              href=""
              className="flex items-center gap-2 py-2 hover:text-red-600"
            >
              Dónde comprar productos DXN
            </a>
            <a
              href=""
              className="flex items-center gap-2 py-2 hover:text-red-600"
            >
              Ver todos los productos
            </a>
            <a
              href=""
              className="flex items-center gap-2 py-2 hover:text-red-600"
            >
              Cómo afiliarse a DXN
            </a>
            <a
              href=""
              className="flex items-center gap-2 py-2 hover:text-red-600"
            >
              Hablar con un asesor DXN
            </a>
          </div>

          {/* Columna para la imagen (más grande en pantallas grandes) */}
          <div className="max-w-full col-span-3 prose">
            <h1 className="py-2 text-3xl font-semibold text-slate-950">
              {article.title2}
            </h1>
            <p className="text-2xl font-medium text-start text-slate-950">
              {article.excerpt}
            </p>
            <div className="flex justify-center py-10">
              <Image
                src={article.image} // Asegúrate de usar `article.image`
                alt={article.title}
                width={600}
                height={800}
                className="object-cover rounded-xl "
              />
            </div>
            <h1 className="text-3xl font-semibold text-slate-950">
              {article.title3}
            </h1>
            <div
              className="mt-4 text-xl font-medium text-slate-950"
              dangerouslySetInnerHTML={{ __html: article.content }} // Corrección aquí
            />
            <h1 className="pt-10 text-3xl font-semibold text-slate-950">
              {article.title4}
            </h1>
            <div
              className="text-xl font-medium text-slate-950"
              dangerouslySetInnerHTML={{ __html: article.descripcion }} // Corrección aquí
            />
          </div>
        </div>
      </div>
    </>
  );
}
