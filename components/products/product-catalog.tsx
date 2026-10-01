"use client";

import { useState } from "react";
import { brands } from "@/lib/brands";
import { getCategories, products } from "@/lib/products";
import { ProductCard } from "@/components/products/product-card";

export function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("all");
  const [category, setCategory] = useState("all");
  const categories = getCategories();

  const term = query.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const brandMatch = brand === "all" || product.brand === brand;
    const categoryMatch = category === "all" || product.category === category;
    const haystack = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    const queryMatch = term.length === 0 || haystack.includes(term);
    return brandMatch && categoryMatch && queryMatch;
  });

  return (
    <div>
      <form
        className="grid gap-4 border-b border-ink/10 pb-8"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="block">
          <span className="text-xs font-medium tracking-[0.16em] text-ink/55 uppercase">Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products"
            className="mt-2 h-12 w-full rounded-full border border-ink/15 bg-white px-5 text-base text-ink outline-none placeholder:text-ink/40"
          />
        </label>

        <fieldset>
          <legend className="text-xs font-medium tracking-[0.16em] text-ink/55 uppercase">Brand</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterButton pressed={brand === "all"} onClick={() => setBrand("all")}>
              All
            </FilterButton>
            {brands.map((item) => (
              <FilterButton
                key={item.slug}
                pressed={brand === item.slug}
                onClick={() => setBrand(item.slug)}
              >
                {item.name}
              </FilterButton>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-xs font-medium tracking-[0.16em] text-ink/55 uppercase">
            Category
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterButton pressed={category === "all"} onClick={() => setCategory("all")}>
              All
            </FilterButton>
            {categories.map((item) => (
              <FilterButton
                key={item}
                pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </FilterButton>
            ))}
          </div>
        </fieldset>
      </form>

      <p className="mt-8 text-sm text-ink/60" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-ink/15 px-6 py-16 text-center">
          <p className="font-display text-2xl text-ink">No products match this search.</p>
          <button
            type="button"
            className="mt-6 text-sm font-medium text-health-deep"
            onClick={() => {
              setQuery("");
              setBrand("all");
              setCategory("all");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterButton({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`min-h-11 rounded-full border px-4 text-sm transition ${
        pressed
          ? "border-ink bg-ink text-white"
          : "border-ink/15 bg-white text-ink hover:border-ink/40"
      }`}
    >
      {children}
    </button>
  );
}
