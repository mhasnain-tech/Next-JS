import Link from "next/link";

interface Product {
  id: number;
  title: string;
  images: string[];
  discountPercentage: number;
}

// Next.js native fetch wrapper with 1-hour cache revalidation
async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://dummyjson.com/products", {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200 selection:bg-purple-500 selection:text-white">
      {/* Header Area with Subtle Glow - Matching About Page Vibe */}
      <div className="relative overflow-hidden bg-neutral-900/60 border-b border-neutral-800 py-12 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05)_0,transparent_100%)] pointer-events-none" />
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-800/30 px-3 py-1 rounded-full">
          Premium Hardware Collection
        </span>
        <h1 className="text-3xl md:text-5xl font-black mt-3 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          Our Products
        </h1>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-wrap gap-6 w-full justify-center">
          {products && products.length > 0 ? (
            products.map((card: Product) => (
              <Link key={card.id} href={`/products/${card.id}`} className="group">
                <Card data={card} />
              </Link>
            ))
          ) : (
            <div className="text-center py-20 w-full">
              <p className="text-xl text-neutral-500 font-medium">No products found in the database.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

function Card({ data }: { data: Product }) {
  // Safe extraction of the first image string from the array
  const imgUrl = data.images && data.images.length > 0 ? data.images[0] : "";

  return (
    <div className="p-4 bg-neutral-900/40 border border-neutral-800/80 hover:border-purple-500/40 w-[280px] h-[330px] rounded-2xl flex flex-col items-center justify-between relative shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_-10px_rgba(147,51,234,0.15)]">
      {/* Dynamic Discount Tag */}
      <div className="absolute top-3 right-3 px-2 py-1 text-white text-center text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-md z-10">
        -{data.discountPercentage.toFixed(0)}%
      </div>

      {/* Product Image Layer */}
      <div className="bg-neutral-950/80 border border-neutral-800/40 rounded-xl w-full h-[180px] flex items-center justify-center overflow-hidden p-3 relative group-hover:border-neutral-700/50 transition-colors duration-200">
        {imgUrl ? (
          <img
            src={imgUrl}
            className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300"
            alt={data.title}
          />
        ) : (
          <div className="text-xs text-neutral-600">No Image Available</div>
        )}
      </div>

      {/* Product Title Section */}
      <div className="w-full text-center mt-2 flex-grow flex items-center justify-center px-1">
        <h2 className="text-sm md:text-base font-bold text-neutral-200 group-hover:text-purple-400 transition-colors duration-200 line-clamp-2 leading-snug">
          {data.title}
        </h2>
      </div>

      {/* Action Prompt */}
      <div className="w-full pt-2 border-t border-neutral-800/40 text-center text-xs font-semibold text-neutral-500 group-hover:text-neutral-300 transition-colors duration-200 flex items-center justify-center gap-1">
        View Specs <span>→</span>
      </div>
    </div>
  );
}
