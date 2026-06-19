import { useState } from "react";

const COLORS = {
  primary: "#2874f0",
  primaryDark: "#1a5dc7",
  yellow: "#f9a825",
  bg: "#f1f3f6",
  white: "#fff",
  text: "#212121",
  muted: "#878787",
  border: "#e0e0e0",
  green: "#388e3c",
  red: "#ff6161",
};

const products = [
  { id: 1, name: "Apple iPhone 15 Pro", price: 119999, mrp: 134900, rating: 4.6, reviews: 12340, img: "📱", category: "Mobiles", discount: 11, badge: "Bestseller" },
  { id: 2, name: "Samsung 55\" 4K OLED TV", price: 74999, mrp: 119900, rating: 4.4, reviews: 5620, img: "📺", category: "Electronics", discount: 37, badge: "Deal of the Day" },
  { id: 3, name: "Sony WH-1000XM5 Headphones", price: 22999, mrp: 29990, rating: 4.7, reviews: 8910, img: "🎧", category: "Electronics", discount: 23, badge: "Top Rated" },
  { id: 4, name: "Nike Air Max 270", price: 8995, mrp: 12995, rating: 4.3, reviews: 3400, img: "👟", category: "Fashion", discount: 30, badge: "" },
  { id: 5, name: "Dell XPS 15 Laptop", price: 149999, mrp: 179999, rating: 4.5, reviews: 2210, img: "💻", category: "Laptops", discount: 16, badge: "New Launch" },
  { id: 6, name: "boAt Airdopes 141", price: 1199, mrp: 4990, rating: 4.1, reviews: 45000, img: "🎵", category: "Electronics", discount: 75, badge: "Trending" },
  { id: 7, name: "Prestige Pressure Cooker 5L", price: 999, mrp: 1800, rating: 4.4, reviews: 18000, img: "🍳", category: "Home", discount: 44, badge: "" },
  { id: 8, name: "Levi's 511 Slim Jeans", price: 1799, mrp: 3999, rating: 4.2, reviews: 9800, img: "👖", category: "Fashion", discount: 55, badge: "Min 50% Off" },
  { id: 9, name: "ASUS ROG Gaming Chair", price: 18999, mrp: 29999, rating: 4.5, reviews: 1540, img: "🪑", category: "Furniture", discount: 36, badge: "" },
  { id: 10, name: "Himalaya Face Wash 150ml", price: 89, mrp: 140, rating: 4.3, reviews: 67000, img: "🧴", category: "Beauty", discount: 36, badge: "Most Popular" },
  { id: 11, name: "Adidas Ultraboost 22", price: 12000, mrp: 17000, rating: 4.4, reviews: 5500, img: "👟", category: "Fashion", discount: 29, badge: "" },
  { id: 12, name: "Instant Pot Duo 7-in-1", price: 7499, mrp: 12999, rating: 4.6, reviews: 22100, img: "🥘", category: "Home", discount: 42, badge: "Top Pick" },
];

const categories = [
  { name: "Mobiles", icon: "📱" }, { name: "Electronics", icon: "💡" },
  { name: "TVs", icon: "📺" }, { name: "Laptops", icon: "💻" },
  { name: "Fashion", icon: "👗" }, { name: "Home", icon: "🏠" },
  { name: "Appliances", icon: "🧊" }, { name: "Beauty", icon: "💄" },
  { name: "Toys", icon: "🧸" }, { name: "Furniture", icon: "🪑" },
  { name: "Sports", icon: "⚽" }, { name: "Grocery", icon: "🛒" },
];

const banners = [
  { bg: "#1565c0", label: "Big Billion Days Sale", sub: "Up to 80% off on everything", btn: "Shop Now", emoji: "🎉" },
  { bg: "#00695c", label: "Electronics Bonanza", sub: "Top brands at lowest prices", btn: "Explore", emoji: "⚡" },
  { bg: "#6a1b9a", label: "Fashion Fiesta", sub: "Trendy styles for everyone", btn: "Grab Deals", emoji: "👗" },
];

function StarRating({ rating }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 3, background: COLORS.green, color: "#fff", borderRadius: 3, padding: "2px 6px", fontSize: 12, fontWeight: 600 }}>
      {rating} ★
    </span>
  );
}

function ProductCard({ product, onAdd, inCart }) {
  return (
    <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 4, padding: 16, cursor: "pointer", transition: "box-shadow 0.2s", display: "flex", flexDirection: "column", gap: 8, position: "relative" }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
      {product.badge && (
        <div style={{ position: "absolute", top: 8, left: 8, background: COLORS.yellow, color: "#333", fontSize: 10, fontWeight: 700, borderRadius: 2, padding: "2px 6px", textTransform: "uppercase" }}>
          {product.badge}
        </div>
      )}
      <div style={{ fontSize: 52, textAlign: "center", padding: "12px 0" }}>{product.img}</div>
      <div style={{ fontSize: 13, color: COLORS.text, fontWeight: 500, lineHeight: 1.3 }}>{product.name}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <StarRating rating={product.rating} />
        <span style={{ fontSize: 12, color: COLORS.muted }}>({product.reviews.toLocaleString()})</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
        <span style={{ fontSize: 17, fontWeight: 700, color: COLORS.text }}>₹{product.price.toLocaleString()}</span>
        <span style={{ fontSize: 12, color: COLORS.muted, textDecoration: "line-through" }}>₹{product.mrp.toLocaleString()}</span>
        <span style={{ fontSize: 12, color: COLORS.green, fontWeight: 600 }}>{product.discount}% off</span>
      </div>
      <button
        onClick={() => onAdd(product)}
        style={{ marginTop: 4, padding: "8px 0", borderRadius: 3, border: "none", background: inCart ? COLORS.green : COLORS.yellow, color: inCart ? "#fff" : "#333", fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "background 0.2s" }}>
        {inCart ? "✓ Added to Cart" : "ADD TO CART"}
      </button>
    </div>
  );
}

function Banner({ banners, current }) {
  const b = banners[current];
  return (
    <div style={{ background: b.bg, borderRadius: 6, padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#fff", minHeight: 180 }}>
      <div>
        <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>{b.label}</div>
        <div style={{ fontSize: 15, opacity: 0.85, marginBottom: 20 }}>{b.sub}</div>
        <button style={{ padding: "10px 28px", borderRadius: 3, border: "none", background: "#fff", color: b.bg, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{b.btn}</button>
      </div>
      <div style={{ fontSize: 80 }}>{b.emoji}</div>
    </div>
  );
}

function CartSidebar({ cart, onRemove, onClose }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <div style={{ position: "fixed", top: 0, right: 0, width: 360, height: "100vh", background: COLORS.white, boxShadow: "-4px 0 24px rgba(0,0,0,0.15)", zIndex: 1000, display: "flex", flexDirection: "column" }}>
      <div style={{ background: COLORS.primary, color: "#fff", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 17, fontWeight: 700 }}>My Cart ({cart.reduce((s, i) => s + i.qty, 0)})</span>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer" }}>✕</button>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {cart.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: 60, color: COLORS.muted }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🛒</div>
            <div style={{ fontSize: 15 }}>Your cart is empty</div>
          </div>
        ) : cart.map(item => (
          <div key={item.id} style={{ display: "flex", gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${COLORS.border}` }}>
            <div style={{ fontSize: 36 }}>{item.img}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{item.name}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: COLORS.text }}>₹{item.price.toLocaleString()}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
                <span style={{ fontSize: 12, color: COLORS.muted }}>Qty: {item.qty}</span>
                <button onClick={() => onRemove(item.id)} style={{ fontSize: 11, color: COLORS.red, background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div style={{ padding: 20, borderTop: `1px solid ${COLORS.border}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 700, marginBottom: 14 }}>
            <span>Total Amount</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <button style={{ width: "100%", padding: "13px 0", background: COLORS.primary, color: "#fff", border: "none", borderRadius: 3, fontWeight: 700, fontSize: 15, cursor: "pointer", letterSpacing: 0.5 }}>
            PLACE ORDER
          </button>
        </div>
      )}
    </div>
  );
}

export default function FlipkartClone() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [banner, setBanner] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const toggleWishlist = (id) => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: COLORS.bg, minHeight: "100vh" }}>
      {/* Navbar */}
      <header style={{ background: COLORS.primary, padding: "0 20px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 16, height: 56 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 2, minWidth: 100 }}>
            <span style={{ color: "#fff", fontSize: 22, fontWeight: 800, fontStyle: "italic" }}>Flipkart</span>
            <span style={{ fontSize: 10, color: COLORS.yellow, fontStyle: "italic", marginBottom: 3 }}>✦ Plus</span>
          </div>

          {/* Search */}
          <div style={{ flex: 1, display: "flex", background: "#fff", borderRadius: 3, overflow: "hidden", maxWidth: 600 }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder='Search for products, brands and more'
              style={{ flex: 1, border: "none", outline: "none", padding: "10px 14px", fontSize: 14, color: COLORS.text }}
            />
            <button style={{ background: COLORS.primary, border: "none", padding: "0 18px", color: "#fff", fontSize: 20, cursor: "pointer" }}>🔍</button>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {["Login", "Become a Seller", "More ▾"].map(link => (
              <span key={link} style={{ color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>{link}</span>
            ))}
            <button onClick={() => setCartOpen(true)} style={{ background: "none", border: "none", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, position: "relative" }}>
              🛒 Cart
              {cartCount > 0 && (
                <span style={{ position: "absolute", top: -8, right: -8, background: COLORS.yellow, color: "#333", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800 }}>{cartCount}</span>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Category Bar */}
      <div style={{ background: COLORS.white, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 0, overflowX: "auto", padding: "0 8px" }}>
          {[{ name: "All", icon: "🏪" }, ...categories].map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "10px 16px", border: "none", background: "none", cursor: "pointer", borderBottom: activeCategory === cat.name ? `3px solid ${COLORS.primary}` : "3px solid transparent", color: activeCategory === cat.name ? COLORS.primary : COLORS.text, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", minWidth: 72 }}>
              <span style={{ fontSize: 22 }}>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 12px" }}>
        {/* Banner */}
        <div style={{ marginBottom: 20 }}>
          <Banner banners={banners} current={banner} />
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 10 }}>
            {banners.map((_, i) => (
              <button key={i} onClick={() => setBanner(i)} style={{ width: i === banner ? 20 : 8, height: 8, borderRadius: 4, border: "none", background: i === banner ? COLORS.primary : COLORS.border, cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </div>

        {/* Flash sale strip */}
        <div style={{ background: COLORS.white, borderRadius: 4, padding: "12px 20px", marginBottom: 16, display: "flex", alignItems: "center", gap: 16, border: `1px solid ${COLORS.border}` }}>
          <span style={{ fontSize: 18, fontWeight: 800, color: COLORS.text }}>⚡ Flash Sale</span>
          <span style={{ color: COLORS.muted, fontSize: 13 }}>Ends in</span>
          {["02", "14", "37"].map((t, i) => (
            <span key={i} style={{ background: COLORS.text, color: "#fff", borderRadius: 3, padding: "2px 8px", fontSize: 15, fontWeight: 700 }}>{t}</span>
          ))}
          <span style={{ color: COLORS.muted, fontSize: 13, marginLeft: "auto" }}>Hurry! Limited stock</span>
        </div>

        {/* Section title */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: COLORS.text, margin: 0 }}>
            {search ? `Results for "${search}"` : activeCategory === "All" ? "Top Deals for You" : `${activeCategory} Deals`}
          </h2>
          <span style={{ fontSize: 13, color: COLORS.primary, cursor: "pointer", fontWeight: 600 }}>{filtered.length} products</span>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: COLORS.muted }}>
            <div style={{ fontSize: 52, marginBottom: 12 }}>🔍</div>
            <div style={{ fontSize: 16 }}>No products found for "{search}"</div>
            <div style={{ fontSize: 13, marginTop: 6 }}>Try different keywords</div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {filtered.map(product => (
              <div key={product.id} style={{ position: "relative" }}>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  style={{ position: "absolute", top: 8, right: 8, zIndex: 2, background: "none", border: "none", fontSize: 18, cursor: "pointer" }}>
                  {wishlist.includes(product.id) ? "❤️" : "🤍"}
                </button>
                <ProductCard product={product} onAdd={addToCart} inCart={cart.some(c => c.id === product.id)} />
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <footer style={{ marginTop: 40, background: COLORS.text, color: "#fff", borderRadius: 6, padding: "32px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 28, marginBottom: 28 }}>
            {[
              { title: "About", links: ["About Us", "Careers", "Press", "Corporate Info"] },
              { title: "Help", links: ["Payments", "Shipping", "Cancellation", "FAQ", "Report Infringement"] },
              { title: "Policy", links: ["Return Policy", "Terms Of Use", "Security", "Privacy"] },
              { title: "Social", links: ["Facebook", "Twitter", "YouTube", "Instagram"] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: 12, color: "#aaa", fontWeight: 700, marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>{col.title}</div>
                {col.links.map(link => (
                  <div key={link} style={{ fontSize: 13, color: "#ccc", marginBottom: 6, cursor: "pointer" }}>{link}</div>
                ))}
              </div>
            ))}
            <div>
              <div style={{ fontSize: 12, color: "#aaa", fontWeight: 700, marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>Mail Us</div>
              <div style={{ fontSize: 12, color: "#ccc", lineHeight: 1.8 }}>Flipkart Internet Private Limited,<br />Buildings Alyssa, Begonia &<br />Clove Embassy Tech Village,<br />Bengaluru 560103, India</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #444", paddingTop: 20, display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            {["🛡️ Secure", "⚡ Fast Delivery", "↩️ Easy Returns", "🏆 Top Brands"].map(item => (
              <span key={item} style={{ fontSize: 13, color: "#bbb" }}>{item}</span>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 14, fontSize: 12, color: "#666" }}>© 2024 Flipkart.com — Clone built with React</div>
        </footer>
      </main>

      {/* Cart Sidebar */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 999 }} />
          <CartSidebar cart={cart} onRemove={removeFromCart} onClose={() => setCartOpen(false)} />
        </>
      )}
    </div>
  );
}
