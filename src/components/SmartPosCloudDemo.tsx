import React, { useState, useEffect, useRef } from 'react';
import { 
  Barcode, 
  Printer, 
  Receipt, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  Search, 
  Wifi, 
  WifiOff, 
  Check, 
  CheckCircle2, 
  CreditCard, 
  Smartphone, 
  Sparkles, 
  RefreshCw, 
  AlertTriangle, 
  Package, 
  Clock, 
  User, 
  Phone, 
  Tag, 
  X, 
  Percent, 
  ChevronRight,
  TrendingUp,
  Download,
  Share2,
  Pause,
  Play
} from 'lucide-react';

export interface PosProduct {
  id: string;
  barcode: string;
  name: string;
  nameBn: string;
  category: string;
  costPrice: number;
  sellingPrice: number;
  stock: number;
  unit: string;
  image: string;
}

export interface CartItem extends PosProduct {
  qty: number;
}

export interface CompletedSale {
  invoiceNo: string;
  timestamp: string;
  cashier: string;
  customer: {
    name: string;
    phone: string;
    points: number;
  };
  items: CartItem[];
  subtotal: number;
  vat: number;
  discount: number;
  grandTotal: number;
  paymentMethod: 'cash' | 'bkash' | 'nagad' | 'card' | 'due';
  paidAmount: number;
  changeAmount: number;
  isOfflineSynced: boolean;
}

const INITIAL_PRODUCTS: PosProduct[] = [
  {
    id: 'p1',
    barcode: '89411001',
    name: 'Aarong Dairy Pasteurized Liquid Milk 1L',
    nameBn: 'আড়ং ডেইরি পাস্তুরিত তরল দুধ ১ লিটার',
    category: 'Dairy & Bakery',
    costPrice: 82,
    sellingPrice: 95,
    stock: 24,
    unit: 'pkt',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'p2',
    barcode: '89411002',
    name: 'Farm Fresh Brown Eggs (12 pcs Box)',
    nameBn: 'ফার্ম ফ্রেশ ব্রাউন ডিম (১২ পিস বক্স)',
    category: 'Dairy & Bakery',
    costPrice: 135,
    sellingPrice: 155,
    stock: 18,
    unit: 'box',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'p3',
    barcode: '89411003',
    name: 'Kazi & Kazi Organic Green Tea (25 Bags)',
    nameBn: 'কাজী ও কাজী অর্গানিক গ্রিন টি (২৫ টি-ব্যাগ)',
    category: 'Beverages',
    costPrice: 180,
    sellingPrice: 220,
    stock: 15,
    unit: 'box',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'p4',
    barcode: '89411004',
    name: 'Pran Frooto Mango Fruit Drink 1L Pet',
    nameBn: 'প্রাণ ফ্রুটো ম্যাঙ্গো ফ্রুট ড্রিংক ১ লিটার',
    category: 'Beverages',
    costPrice: 92,
    sellingPrice: 110,
    stock: 30,
    unit: 'bot',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'p5',
    barcode: '89411005',
    name: 'Fortune Sunlite Refined Sunflower Oil 2L',
    nameBn: 'ফরচুন সানলাইট রিফাইন্ড সানফ্লাওয়ার অয়েল ২ লিটার',
    category: 'Grocery & Staples',
    costPrice: 380,
    sellingPrice: 440,
    stock: 12,
    unit: 'can',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'p6',
    barcode: '89411006',
    name: 'Chashi Aromatic Chinigura Rice 1kg Bag',
    nameBn: 'চাষী সুগন্ধি চিনিগুঁড়া চাল ১ কেজি',
    category: 'Grocery & Staples',
    costPrice: 130,
    sellingPrice: 155,
    stock: 45,
    unit: 'bag',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'p7',
    barcode: '89411007',
    name: 'Lays American Style Cream & Onion Chips 50g',
    nameBn: 'লেস পটেটো চিপস ক্রিম অ্যান্ড অনিয়ন ৫০ গ্রাম',
    category: 'Snacks & Confectionery',
    costPrice: 38,
    sellingPrice: 50,
    stock: 50,
    unit: 'pkt',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'p8',
    barcode: '89411008',
    name: 'Olympic Energy Plus Biscuit Big Pack',
    nameBn: 'অলিম্পিক এনার্জি প্লাস বিস্কুট বিগ প্যাক',
    category: 'Snacks & Confectionery',
    costPrice: 42,
    sellingPrice: 55,
    stock: 28,
    unit: 'pkt',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'p9',
    barcode: '89411009',
    name: 'Dettol Original Germ Protection Soap 100g',
    nameBn: 'ডেটল অ্যান্টিসেপটিক সাবান ১০০ গ্রাম (৩ পিস প্যাক)',
    category: 'Personal Care',
    costPrice: 145,
    sellingPrice: 175,
    stock: 22,
    unit: 'pack',
    image: 'https://images.unsplash.com/photo-1607006314644-8c8868625e17?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'p10',
    barcode: '89411010',
    name: 'Surf Excel Quick Wash Detergent Powder 1kg',
    nameBn: 'সার্ফ এক্সেল কুইক ওয়াশ ডিটারজেন্ট পাউডার ১ কেজি',
    category: 'Household & Cleaning',
    costPrice: 215,
    sellingPrice: 250,
    stock: 14,
    unit: 'bag',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&auto=format&fit=crop&q=80'
  }
];

const CATEGORIES = [
  'All Items',
  'Dairy & Bakery',
  'Grocery & Staples',
  'Beverages',
  'Snacks & Confectionery',
  'Personal Care',
  'Household & Cleaning'
];

interface SmartPosCloudDemoProps {
  onClose?: () => void;
  onOpenConsultation?: () => void;
}

export const SmartPosCloudDemo: React.FC<SmartPosCloudDemoProps> = ({ onOpenConsultation }) => {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<'pos' | 'inventory' | 'register'>('pos');
  
  // Offline-first simulation
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [offlineSyncedQueue, setOfflineSyncedQueue] = useState<number>(0);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Products and Cart
  const [products, setProducts] = useState<PosProduct[]>(INITIAL_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([
    { ...INITIAL_PRODUCTS[0], qty: 2 },
    { ...INITIAL_PRODUCTS[1], qty: 1 }
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Items');

  // Customer & Discount
  const [customerPhone, setCustomerPhone] = useState('01822-948123');
  const [customerName, setCustomerName] = useState('Tanvir Ahmed');
  const [loyaltyPoints, setLoyaltyPoints] = useState(140);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [vatEnabled, setVatEnabled] = useState<boolean>(true);

  // Payment & Thermal Receipt
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'bkash' | 'nagad' | 'card' | 'due'>('cash');
  const [tenderedCash, setTenderedCash] = useState<number>(500);
  const [completedOrder, setCompletedOrder] = useState<CompletedSale | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [heldCarts, setHeldCarts] = useState<CartItem[][]>([]);
  const [barcodeScanAnim, setBarcodeScanAnim] = useState<boolean>(false);

  const barcodeInputRef = useRef<HTMLInputElement>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + (item.sellingPrice * item.qty), 0);
  const vatAmount = vatEnabled ? Math.round(subtotal * 0.05) : 0;
  const grandTotal = Math.max(0, subtotal + vatAmount - discountAmount);
  const changeDue = Math.max(0, (tenderedCash || 0) - grandTotal);

  // Cart operations
  const addToCart = (product: PosProduct) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    triggerToast(`Added "${product.name.split(' ')[0]}" to cart`);
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    if (cart.length > 0) {
      setCart([]);
      triggerToast('Cart cleared');
    }
  };

  const holdCurrentOrder = () => {
    if (cart.length === 0) return;
    setHeldCarts(prev => [...prev, cart]);
    setCart([]);
    triggerToast('Order placed on HOLD #0' + (heldCarts.length + 1));
  };

  const recallHeldOrder = (index: number) => {
    const target = heldCarts[index];
    if (target) {
      setCart(target);
      setHeldCarts(prev => prev.filter((_, i) => i !== index));
      triggerToast('Recalled held order #' + (index + 1));
    }
  };

  // Barcode simulation
  const simulateBarcodeScan = (customCode?: string) => {
    setBarcodeScanAnim(true);
    setTimeout(() => setBarcodeScanAnim(false), 800);

    const targetCode = customCode || products[Math.floor(Math.random() * products.length)].barcode;
    const found = products.find(p => p.barcode === targetCode);
    if (found) {
      addToCart(found);
      triggerToast(`⚡ Scanned Barcode [${targetCode}]: ${found.name.substring(0, 20)}...`);
    } else {
      triggerToast(`❌ Barcode [${targetCode}] not found`);
    }
  };

  // Toggle Online/Offline
  const toggleOfflineMode = () => {
    if (isOnline) {
      setIsOnline(false);
      triggerToast('⚠️ Internet Disconnected: Switched to Local IndexedDB Cache');
    } else {
      setIsOnline(true);
      if (offlineSyncedQueue > 0) {
        setIsSyncing(true);
        setTimeout(() => {
          setIsSyncing(false);
          triggerToast(`✅ Auto-Synced ${offlineSyncedQueue} pending offline orders to Cloud Firestore`);
          setOfflineSyncedQueue(0);
        }, 1200);
      } else {
        triggerToast('✅ Reconnected: Cloud Sync Operational');
      }
    }
  };

  // Complete Order
  const handleCompleteSale = () => {
    if (cart.length === 0) return;

    const invoiceNo = `INV-202609-${Math.floor(1000 + Math.random() * 9000)}`;
    const saleRecord: CompletedSale = {
      invoiceNo,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      cashier: 'Rakib Hassan (Savar Terminal #01)',
      customer: {
        name: customerName,
        phone: customerPhone,
        points: loyaltyPoints + Math.floor(grandTotal / 50)
      },
      items: [...cart],
      subtotal,
      vat: vatAmount,
      discount: discountAmount,
      grandTotal,
      paymentMethod,
      paidAmount: paymentMethod === 'cash' ? tenderedCash : grandTotal,
      changeAmount: paymentMethod === 'cash' ? changeDue : 0,
      isOfflineSynced: isOnline
    };

    // Deduct stock locally
    setProducts(prev => 
      prev.map(p => {
        const inCart = cart.find(c => c.id === p.id);
        return inCart ? { ...p, stock: Math.max(0, p.stock - inCart.qty) } : p;
      })
    );

    if (!isOnline) {
      setOfflineSyncedQueue(prev => prev + 1);
    }

    setLoyaltyPoints(prev => prev + Math.floor(grandTotal / 50));
    setCompletedOrder(saleRecord);
    setIsPaymentModalOpen(false);
    setCart([]);
    triggerToast(`🎉 ${invoiceNo} Generated successfully!`);
  };

  // Filter products
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.barcode.includes(searchQuery) ||
                          p.nameBn.includes(searchQuery);
    const matchesCategory = selectedCategory === 'All Items' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full h-full bg-[#080B14] text-slate-100 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col font-sans min-h-0">
      
      {/* Toast popup */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#FF6B00] text-white px-4 py-2.5 rounded-xl shadow-2xl font-semibold text-xs flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* POS Top Terminal Ribbon */}
      <div className="bg-[#0D1322] border-b border-white/10 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Terminal info & Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF6B00] to-[#FFA149] flex items-center justify-center text-white shadow-lg font-bold text-sm">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <span>Smart POS Cloud™</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Retail v4.2
                </span>
              </h2>
            </div>
            <p className="text-[11px] text-slate-400">
              Terminal: <span className="text-slate-200 font-mono">Savar-HQ-01</span> • Cashier: <strong className="text-white">Rakib Hassan</strong>
            </p>
          </div>
        </div>

        {/* Center: Tabs */}
        <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
          <button
            onClick={() => setActiveTab('pos')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'pos' 
                ? 'bg-[#FF6B00] text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Terminal (F2)</span>
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'inventory' 
                ? 'bg-[#FF6B00] text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Inventory & Stock</span>
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'register' 
                ? 'bg-[#FF6B00] text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Daily Shift & Cash</span>
          </button>
        </div>

        {/* Right: Offline/Online resilience simulator button */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleOfflineMode}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
              isOnline
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500/30 animate-pulse'
            }`}
            title="Click to simulate an internet disconnection and test Offline-First resilience"
          >
            {isOnline ? (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cloud Synced ⚡</span>
              </>
            ) : (
              <>
                <WifiOff className="w-3.5 h-3.5 text-amber-400" />
                <span>Offline Cache Active (IndexedDB)</span>
              </>
            )}
          </button>

          {offlineSyncedQueue > 0 && (
            <span className="px-2 py-1 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-300 text-[11px] font-mono">
              {offlineSyncedQueue} Queued
            </span>
          )}

          {isSyncing && (
            <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin" />
          )}
        </div>
      </div>

      {/* Main Container by Tab */}
      {activeTab === 'pos' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 flex-1 min-h-0 overflow-hidden">
          
          {/* Left / Center: Catalog & Barcode Scanner (7 Cols) */}
          <div className="lg:col-span-7 p-4 border-r border-white/10 flex flex-col space-y-3.5 bg-[#090D18]">
            
            {/* Barcode Search Box with Simulated Fast Scanner */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  ref={barcodeInputRef}
                  type="text"
                  placeholder="Scan Barcode (e.g. 89411001) or search product name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      simulateBarcodeScan(searchQuery.trim());
                      setSearchQuery('');
                    }
                  }}
                  className="w-full pl-9 pr-24 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-hidden focus:border-[#FF6B00] transition-colors"
                />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 border border-white/10 px-1.5 py-0.5 rounded">
                  ↵ Enter
                </span>
              </div>

              {/* Fast Barcode Simulator Button */}
              <button
                onClick={() => simulateBarcodeScan()}
                className={`px-3.5 py-2.5 rounded-xl bg-[#141B2D] hover:bg-[#FF6B00] text-white text-xs font-semibold border border-white/15 transition-all flex items-center gap-1.5 shrink-0 ${
                  barcodeScanAnim ? 'bg-[#FF6B00] scale-95 ring-2 ring-orange-400' : ''
                }`}
                title="Simulate hardware laser barcode trigger"
              >
                <Barcode className="w-4 h-4 text-[#FFA149]" />
                <span className="hidden sm:inline">Simulate Scanner</span>
              </button>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg shrink-0 text-[11px] font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#FF6B00] text-white font-bold shadow-sm'
                      : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Touch Grid */}
            <div className="flex-1 overflow-y-auto max-h-[460px] grid grid-cols-2 sm:grid-cols-3 gap-2.5 pr-1">
              {filteredProducts.map((product) => {
                const inCart = cart.find(c => c.id === product.id);
                return (
                  <div
                    key={product.id}
                    onClick={() => addToCart(product)}
                    className="relative p-2.5 rounded-xl bg-[#0F1626] hover:bg-[#151E33] border border-white/10 hover:border-[#FF6B00]/60 transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.98] select-none"
                  >
                    {/* Badge if in cart */}
                    {inCart && (
                      <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#FF6B00] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                        {inCart.qty}
                      </span>
                    )}

                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-lg overflow-hidden bg-black/30">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div>
                        <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                          <Barcode className="w-3 h-3 text-slate-500" />
                          <span>{product.barcode}</span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-100 leading-tight line-clamp-2 mt-0.5">
                          {product.name}
                        </h4>
                      </div>
                    </div>

                    <div className="pt-2 mt-2 border-t border-white/5 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-extrabold text-[#FFA149] text-sm">৳ {product.sellingPrice}</span>
                        <span className="text-[10px] text-slate-500 ml-1">/{product.unit}</span>
                      </div>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        product.stock <= 15 ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-slate-400'
                      }`}>
                        Stock: {product.stock}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Helper Barcode reference */}
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFA149]" />
                <span>Tip: Click any product or tap "Simulate Scanner" to test instant barcode entry.</span>
              </span>
              <span className="font-mono text-slate-500 text-[10px] hidden sm:inline">ESC/POS 80mm Compatible</span>
            </div>
          </div>

          {/* Right: Active Billing Cart (5 Cols) */}
          <div className="lg:col-span-5 p-4 flex flex-col justify-between bg-[#0B0F1C] space-y-3.5">
            
            {/* Invoice & Customer Info Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-slate-400">ORDER NO</span>
                  <div className="font-mono font-bold text-emerald-400">#INV-202609-0842</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400">ITEMS IN CART</span>
                  <div className="font-bold text-white">{cart.reduce((s, i) => s + i.qty, 0)} units</div>
                </div>
              </div>

              {/* Customer Phone Bar */}
              <div className="p-2 rounded-xl bg-[#12192B] border border-white/10 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <div>
                    <div className="font-bold text-white text-[11px]">{customerName}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{customerPhone}</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-amber-400 font-semibold">★ {loyaltyPoints} Pts</span>
                  <div className="text-[9px] text-emerald-400 font-mono">Loyalty Tier Gold</div>
                </div>
              </div>

              {/* Held Orders quick recall */}
              {heldCarts.length > 0 && (
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-[11px] text-slate-400">Held:</span>
                  {heldCarts.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => recallHeldOrder(idx)}
                      className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono hover:bg-amber-500/30"
                    >
                      Order #{idx + 1} ({heldCarts[idx].length} items)
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto max-h-[220px] space-y-1.5 pr-1">
              {cart.length === 0 ? (
                <div className="h-40 flex flex-col items-center justify-center text-slate-500 text-xs space-y-2">
                  <ShoppingCart className="w-8 h-8 stroke-1 text-slate-600" />
                  <p>Cart is currently empty.</p>
                  <p className="text-[11px] text-slate-600">Scan or tap products on the left to start billing.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div 
                    key={item.id}
                    className="p-2.5 rounded-xl bg-[#121829] border border-white/5 flex items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-white text-xs truncate">{item.name}</h5>
                      <div className="text-[10px] font-mono text-slate-400 flex items-center gap-2 mt-0.5">
                        <span>৳ {item.sellingPrice}</span>
                        <span>•</span>
                        <span className="text-slate-500">Barcode: {item.barcode}</span>
                      </div>
                    </div>

                    {/* Qty Controls */}
                    <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-lg border border-white/10">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="p-0.5 hover:text-rose-400 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-bold text-white font-mono text-xs">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="p-0.5 hover:text-emerald-400 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Total Price & Delete */}
                    <div className="text-right min-w-[55px]">
                      <div className="font-bold text-white font-mono">
                        ৳ {item.sellingPrice * item.qty}
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Calculations Summary */}
            <div className="p-3 rounded-xl bg-[#0F1626] border border-white/10 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal ({cart.reduce((a, b) => a + b.qty, 0)} items):</span>
                <span className="font-mono text-slate-200">৳ {subtotal}</span>
              </div>

              {/* VAT toggle (5%) */}
              <div className="flex justify-between items-center text-slate-400">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={vatEnabled}
                    onChange={(e) => setVatEnabled(e.target.checked)}
                    className="rounded bg-white/10 border-white/20 text-[#FF6B00] focus:ring-0"
                  />
                  <span>NBR Retail VAT (5%):</span>
                </label>
                <span className="font-mono text-slate-200">৳ {vatAmount}</span>
              </div>

              {/* Discount Selector */}
              <div className="flex justify-between items-center text-slate-400">
                <span className="flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#FFA149]" />
                  <span>Discount:</span>
                </span>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    value={discountAmount || ''}
                    onChange={(e) => setDiscountAmount(Number(e.target.value) || 0)}
                    className="w-16 px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-right font-mono text-xs text-white"
                  />
                  <span className="text-[10px]">৳</span>
                </div>
              </div>

              {/* Net Payable Grand Total */}
              <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
                <div>
                  <span className="text-xs font-bold text-slate-300">NET PAYABLE:</span>
                  <div className="text-[10px] text-slate-500">Includes VAT & discounts</div>
                </div>
                <div className="font-extrabold text-xl text-[#FFA149] font-mono">
                  ৳ {grandTotal}
                </div>
              </div>
            </div>

            {/* POS Checkout & Action Buttons */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={holdCurrentOrder}
                  disabled={cart.length === 0}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-medium transition-colors disabled:opacity-40 flex items-center justify-center gap-1.5"
                >
                  <Pause className="w-3.5 h-3.5 text-amber-400" />
                  <span>Hold Order</span>
                </button>
                <button
                  onClick={clearCart}
                  disabled={cart.length === 0}
                  className="px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 text-xs font-medium transition-colors disabled:opacity-40 flex items-center justify-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear (F8)</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setTenderedCash(grandTotal >= 500 ? Math.ceil(grandTotal / 100) * 100 : 500);
                  setIsPaymentModalOpen(true);
                }}
                disabled={cart.length === 0}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] hover:opacity-95 text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-40"
              >
                <span>F12 — Checkout & Pay (৳ {grandTotal})</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      )}

      {/* Inventory & Stock Management Tab */}
      {activeTab === 'inventory' && (
        <div className="p-4 sm:p-6 space-y-4 bg-[#090D18] flex-1 min-h-0 overflow-y-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Package className="w-5 h-5 text-[#FF6B00]" />
                <span>Multi-Warehouse Inventory & Cost Margins</span>
              </h3>
              <p className="text-xs text-slate-400">
                Track unit cost vs selling price, live stock counts, and low-inventory alerts across branches.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setProducts(prev => prev.map(p => ({ ...p, stock: p.stock + 10 })));
                  triggerToast('Restocked +10 units to all products');
                }}
                className="px-3 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Bulk Restock (+10)</span>
              </button>
              <button
                onClick={() => triggerToast('Printing 40 barcode stickers to thermal label printer...')}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Barcode className="w-3.5 h-3.5 text-[#FFA149]" />
                <span>Print Barcode Labels</span>
              </button>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0C111F]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#12192C] text-slate-400 font-mono text-[11px] border-b border-white/10">
                <tr>
                  <th className="p-3">Barcode</th>
                  <th className="p-3">Product Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3 text-right">Cost (ক্রয়)</th>
                  <th className="p-3 text-right">Retail (বিক্রয়)</th>
                  <th className="p-3 text-right">Margin %</th>
                  <th className="p-3 text-center">Stock</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-right">Quick Restock</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {products.map(p => {
                  const marginPercent = Math.round(((p.sellingPrice - p.costPrice) / p.sellingPrice) * 100);
                  const isLow = p.stock <= 15;
                  return (
                    <tr key={p.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-mono text-[#FFA149] font-bold">{p.barcode}</td>
                      <td className="p-3 font-medium text-white max-w-[240px] truncate">{p.name}</td>
                      <td className="p-3 text-slate-400">{p.category}</td>
                      <td className="p-3 text-right font-mono text-slate-300">৳ {p.costPrice}</td>
                      <td className="p-3 text-right font-mono text-emerald-400 font-bold">৳ {p.sellingPrice}</td>
                      <td className="p-3 text-right font-mono text-slate-300">{marginPercent}%</td>
                      <td className="p-3 text-center font-mono font-bold text-white">{p.stock}</td>
                      <td className="p-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                          isLow 
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {isLow ? 'Low Stock' : 'Optimal'}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => {
                            setProducts(prev => prev.map(item => item.id === p.id ? { ...item, stock: item.stock + 5 } : item));
                            triggerToast(`Restocked +5 to ${p.name.substring(0, 15)}...`);
                          }}
                          className="px-2 py-1 rounded bg-white/5 hover:bg-[#FF6B00] text-slate-300 hover:text-white font-mono text-[11px] transition-colors"
                        >
                          +5 Stock
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Daily Shift Closing Tab */}
      {activeTab === 'register' && (
        <div className="p-4 sm:p-6 space-y-5 bg-[#090D18] flex-1 min-h-0 overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span>Daily Shift Register & Cash Drawer Reconciliation</span>
              </h3>
              <p className="text-xs text-slate-400">
                Shift #04 • Cashier: Rakib Hassan • Clock-in: 09:00 AM • Savar Dhanmondi Branch
              </p>
            </div>
            <button
              onClick={() => triggerToast('Printed Daily X-Report on Thermal Printer')}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#FFA149]" />
              <span>Print X-Report</span>
            </button>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-[#0F1626] border border-white/10">
              <span className="text-[11px] text-slate-400">Opening Float</span>
              <div className="text-lg font-bold font-mono text-white mt-1">৳ 2,500.00</div>
              <span className="text-[10px] text-slate-500">Cash in drawer at start</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0F1626] border border-white/10">
              <span className="text-[11px] text-slate-400">Gross Sales (Today)</span>
              <div className="text-lg font-bold font-mono text-[#FFA149] mt-1">৳ 38,450.00</div>
              <span className="text-[10px] text-emerald-400 font-mono">42 Invoices</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0F1626] border border-white/10">
              <span className="text-[11px] text-slate-400">Estimated Net Profit</span>
              <div className="text-lg font-bold font-mono text-emerald-400 mt-1">৳ 9,210.00</div>
              <span className="text-[10px] text-slate-500">~24% overall margin</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0F1626] border border-white/10">
              <span className="text-[11px] text-slate-400">Cloud Sync Status</span>
              <div className="text-lg font-bold font-mono text-cyan-400 mt-1">
                {isOnline ? '100% Synced' : `${offlineSyncedQueue} Local`}
              </div>
              <span className="text-[10px] text-slate-500">Zero data loss</span>
            </div>
          </div>

          {/* Split breakdown */}
          <div className="p-4 rounded-xl bg-[#0C111F] border border-white/10 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Payment Breakdown (আজকের বিক্রয়)</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center p-2 rounded bg-black/30 border border-white/5">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span>Cash in Drawer (নগদ ক্যাশ)</span>
                </span>
                <span className="font-mono font-bold text-white">৳ 21,400.00</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-black/30 border border-white/5">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2136E]"></span>
                  <span>bKash Merchant Pay (বিকাশ মার্চেন্ট)</span>
                </span>
                <span className="font-mono font-bold text-white">৳ 11,250.00</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-black/30 border border-white/5">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7931E]"></span>
                  <span>Nagad QR Digital Pay (নগদ কিউআর)</span>
                </span>
                <span className="font-mono font-bold text-white">৳ 3,300.00</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-black/30 border border-white/5">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  <span>POS Card Swipe (ভিসা / মাস্টারকার্ড)</span>
                </span>
                <span className="font-mono font-bold text-white">৳ 2,500.00</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto overscroll-contain"
          onClick={() => setIsPaymentModalOpen(false)}
        >
          <div 
            className="w-full max-w-lg bg-[#0F1626] border border-white/20 rounded-2xl p-5 shadow-2xl space-y-4 my-auto max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-base font-bold text-white">Select Payment & Complete Sale</h3>
                <p className="text-xs text-slate-400">Total Payable: <strong className="text-[#FFA149] font-mono text-sm">৳ {grandTotal}</strong></p>
              </div>
              <button 
                onClick={() => setIsPaymentModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setPaymentMethod('cash')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  paymentMethod === 'cash'
                    ? 'bg-[#FF6B00] text-white border-transparent font-bold shadow-lg'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <span className="text-xs block">Cash</span>
                <span className="text-[10px] opacity-75">নগদ টাকা</span>
              </button>
              <button
                onClick={() => setPaymentMethod('bkash')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  paymentMethod === 'bkash'
                    ? 'bg-[#E2136E] text-white border-transparent font-bold shadow-lg'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <span className="text-xs block">bKash</span>
                <span className="text-[10px] opacity-75">বিকাশ কিউআর</span>
              </button>
              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  paymentMethod === 'card'
                    ? 'bg-cyan-600 text-white border-transparent font-bold shadow-lg'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <span className="text-xs block">Card</span>
                <span className="text-[10px] opacity-75">পিওএস কার্ড</span>
              </button>
              <button
                onClick={() => setPaymentMethod('due')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  paymentMethod === 'due'
                    ? 'bg-amber-600 text-white border-transparent font-bold shadow-lg'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <span className="text-xs block">Store Due</span>
                <span className="text-[10px] opacity-75">বাকি খাতা</span>
              </button>
            </div>

            {/* If Cash: Tendered amount & Change calculation */}
            {paymentMethod === 'cash' && (
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Tendered Cash (কাস্টমার কত দিয়েছে):</span>
                  <div className="relative">
                    <input
                      type="number"
                      value={tenderedCash || ''}
                      onChange={(e) => setTenderedCash(Number(e.target.value) || 0)}
                      className="w-28 py-1 px-2 rounded-lg bg-white/10 border border-white/20 text-right font-mono text-sm font-bold text-white focus:outline-hidden focus:border-[#FF6B00]"
                    />
                    <span className="ml-1 text-slate-400">৳</span>
                  </div>
                </div>

                {/* Quick denomination chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[grandTotal, 100, 200, 500, 1000, 2000].map((amt, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTenderedCash(amt)}
                      className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 text-xs font-mono border border-white/5"
                    >
                      {idx === 0 ? 'Exact' : `৳${amt}`}
                    </button>
                  ))}
                </div>

                {/* Change Return */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold">CHANGE RETURN (ফেরত টাকা):</span>
                  <span className="font-mono text-base font-extrabold text-emerald-400">
                    ৳ {changeDue}
                  </span>
                </div>
              </div>
            )}

            {/* If bKash: Merchant QR details */}
            {paymentMethod === 'bkash' && (
              <div className="p-3.5 rounded-xl bg-[#E2136E]/10 border border-[#E2136E]/30 text-xs space-y-2 text-center">
                <div className="font-bold text-[#E2136E]">bKash Merchant Direct QR</div>
                <p className="text-slate-300">
                  Customer can scan terminal screen or pay to Merchant Wallet: <strong className="text-white">01996-921149</strong>
                </p>
                <div className="p-2 rounded bg-white text-black font-mono text-xs inline-block mx-auto">
                  TRX-AUTO-CONFIRM: VALIDATED
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCompleteSale}
                className="flex-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-all flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Confirm & Print Receipt (৳ {grandTotal})</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Completed Thermal Receipt Modal (80mm ESC/POS) */}
      {completedOrder && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto overscroll-contain"
          onClick={() => setCompletedOrder(null)}
        >
          <div 
            className="w-full max-w-sm bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-3 font-mono text-xs border border-slate-300 animate-in fade-in zoom-in-95 duration-200 my-auto max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Thermal Receipt Paper Layout */}
            <div className="text-center space-y-1 pb-3 border-b border-dashed border-slate-400">
              <h2 className="text-base font-black tracking-wider uppercase">SMART MART BD</h2>
              <p className="text-[11px] text-slate-600">Savar Super Store • Dhanmondi Point</p>
              <p className="text-[10px] text-slate-500">BIN / VAT Reg: 002918274-0101 (Mushak 6.3)</p>
              <p className="text-[10px] text-slate-500">Helpline: +880 1996-921149</p>
            </div>

            {/* Receipt Meta */}
            <div className="text-[11px] space-y-0.5 pb-2 border-b border-dashed border-slate-400">
              <div className="flex justify-between">
                <span>INVOICE:</span>
                <span className="font-bold">{completedOrder.invoiceNo}</span>
              </div>
              <div className="flex justify-between">
                <span>DATE:</span>
                <span>{completedOrder.timestamp}</span>
              </div>
              <div className="flex justify-between">
                <span>CASHIER:</span>
                <span>Rakib H. (POS-01)</span>
              </div>
              <div className="flex justify-between">
                <span>CUSTOMER:</span>
                <span>{completedOrder.customer.name}</span>
              </div>
            </div>

            {/* Items Table */}
            <div className="space-y-1 pb-2 border-b border-dashed border-slate-400">
              <div className="grid grid-cols-12 font-bold text-[10px] uppercase text-slate-600">
                <div className="col-span-6">ITEM</div>
                <div className="col-span-2 text-center">QTY</div>
                <div className="col-span-4 text-right">TOTAL</div>
              </div>
              {completedOrder.items.map((it, idx) => (
                <div key={idx} className="grid grid-cols-12 text-[11px]">
                  <div className="col-span-6 truncate font-medium">{it.name}</div>
                  <div className="col-span-2 text-center">{it.qty}</div>
                  <div className="col-span-4 text-right font-bold">৳ {it.sellingPrice * it.qty}</div>
                </div>
              ))}
            </div>

            {/* Financials */}
            <div className="space-y-1 text-[11px] pb-2 border-b border-dashed border-slate-400">
              <div className="flex justify-between">
                <span>SUBTOTAL:</span>
                <span>৳ {completedOrder.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>VAT (5%):</span>
                <span>৳ {completedOrder.vat}</span>
              </div>
              {completedOrder.discount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>DISCOUNT:</span>
                  <span>-৳ {completedOrder.discount}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-sm pt-1 border-t border-slate-400">
                <span>NET PAYABLE:</span>
                <span>৳ {completedOrder.grandTotal}</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="uppercase">PAID ({completedOrder.paymentMethod}):</span>
                <span>৳ {completedOrder.paidAmount}</span>
              </div>
              {completedOrder.changeAmount > 0 && (
                <div className="flex justify-between font-bold text-emerald-700">
                  <span>CHANGE DUE:</span>
                  <span>৳ {completedOrder.changeAmount}</span>
                </div>
              )}
            </div>

            {/* Barcode & QR Stamp */}
            <div className="text-center pt-2 space-y-1">
              <div className="inline-block bg-slate-100 p-2 rounded border border-slate-300 font-mono text-[9px] tracking-widest">
                ||| | |||| | ||||| || |||||| | |||
                <div className="mt-0.5 text-[8px] tracking-normal text-slate-500">{completedOrder.invoiceNo}</div>
              </div>
              <p className="text-[10px] font-bold text-slate-700 uppercase">THANK YOU FOR YOUR PATRONAGE!</p>
              <p className="text-[9px] text-slate-500">System powered by High-Tech Enterprise</p>
            </div>

            {/* Control Actions */}
            <div className="pt-3 border-t border-slate-300 grid grid-cols-2 gap-2 font-sans">
              <button
                onClick={() => {
                  triggerToast('🖨️ ESC/POS 80mm Print command sent to thermal device');
                }}
                className="py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Slip</span>
              </button>
              <button
                onClick={() => {
                  triggerToast(`📱 Digital slip dispatched to ${completedOrder.customer.phone} via WhatsApp`);
                }}
                className="py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>WhatsApp Slip</span>
              </button>
            </div>

            <button
              onClick={() => setCompletedOrder(null)}
              className="w-full py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#FFA149] text-white text-xs font-bold font-sans transition-colors"
            >
              Start New Sale (পরবর্তী সেল)
            </button>

          </div>
        </div>
      )}

      {/* Bottom Status Ribbon */}
      <div className="bg-[#0B0E1A] border-t border-white/10 px-4 py-2 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2 font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>ESC/POS 80mm Engine: Connected</span>
          </span>
          <span className="text-slate-600">•</span>
          <span>Cashier Shift #04</span>
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <span>Keyboard: F2 Search • F8 Clear • F12 Pay</span>
        </div>
      </div>

    </div>
  );
};
