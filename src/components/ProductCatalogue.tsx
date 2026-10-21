import React, { useState, useMemo } from 'react';
import { Search, Eye, Filter, ArrowUpRight, Snowflake, Check, Layers } from 'lucide-react';
import { SUN_RELIEF_PRODUCTS } from '../data/products';
import { Product, ProductCategory } from '../types';

interface ProductCatalogueProps {
  onSelectProduct: (product: Product) => void;
  onEnquireProduct: (product: Product) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({
  onSelectProduct,
  onEnquireProduct
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: ProductCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Creations', count: SUN_RELIEF_PRODUCTS.length },
    { key: 'sticks', label: 'Sticks & Candies', count: SUN_RELIEF_PRODUCTS.filter(p => p.category === 'sticks').length },
    { key: 'cones', label: 'Crisp Waffle Cones', count: SUN_RELIEF_PRODUCTS.filter(p => p.category === 'cones').length },
    { key: 'tubs', label: 'Family Tubs & Cups', count: SUN_RELIEF_PRODUCTS.filter(p => p.category === 'tubs').length }
  ];

  const filteredProducts = useMemo(() => {
    return SUN_RELIEF_PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.flavour.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E05326]">
              <Snowflake className="w-4 h-4 text-[#E05326]" />
              <span>Consumer Product Discovery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-anton uppercase text-[#1E1915] tracking-tight">
              Our Ice Cream Range
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Explore our line-up of creamy treats, from refreshing handheld fruit sticks to celebratory family dessert tubs. Each recipe is churned with real milk in our Gujarat dairy plant.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search flavours, nuts, fruits..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#E05326] focus:border-transparent transition-all shadow-xs"
              aria-label="Search ice cream flavours"
            />
          </div>
        </div>

        {/* Category Tabs (Interactive Filter Buttons per design guidelines) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.key
                  ? 'bg-[#1E1915] text-white shadow-md'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200/80'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                activeCategory === cat.key ? 'bg-stone-700 text-stone-200' : 'bg-stone-100 text-stone-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid with Varied Composition */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-stone-300 p-8">
            <p className="text-base text-stone-600 font-medium">No flavours matched your search &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 text-xs font-semibold text-[#E05326] underline hover:text-[#C94318]"
            >
              Clear filters and view all products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Product Photo Showcase */}
                <div 
                  className="relative h-72 sm:h-80 overflow-hidden bg-stone-100 cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={`Sun Relief ${product.name} packaging and ice cream`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md px-3.5 py-1.5 rounded-full"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Packaging & Details</span>
                    </button>
                  </div>

                  {/* Format tag badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-xs text-[#1E1915] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg shadow-sm">
                      {product.format}
                    </span>
                  </div>

                  {/* Flavour Accent Badge */}
                  <div className="absolute top-4 right-4">
                    <span 
                      className="text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-sm"
                      style={{ backgroundColor: product.accentColor }}
                    >
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-anton text-2xl text-[#1E1915] uppercase tracking-wide group-hover:text-[#E05326] transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xs font-medium text-stone-500">
                        {product.flavour}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Features list (Verified from authentic packaging) */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-100 text-xs text-stone-600">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-3 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 py-2.5 px-3 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Full Specs</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onEnquireProduct(product)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#C94318] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      title="Enquire to stock this product in your territory"
                    >
                      <span>Stock This</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Real Brand Integrity Disclaimer Banner */}
        <div className="mt-14 bg-stone-100/80 rounded-2xl p-5 border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-stone-700 shadow-xs shrink-0">
              <Layers className="w-5 h-5 text-[#E05326]" />
            </div>
            <div>
              <p className="font-semibold text-stone-800">Authentic Packaging & Serving Information</p>
              <p className="text-stone-500">All product visuals and names displayed above match Sun Relief&apos;s real factory packaging. Additional regional variants available upon wholesale enquiry.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('distribution');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="whitespace-nowrap px-4 py-2 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 hover:bg-stone-50 transition-colors cursor-pointer text-xs"
          >
            Request B2B Catalogue
          </button>
        </div>

      </div>
    </section>
  );
};
