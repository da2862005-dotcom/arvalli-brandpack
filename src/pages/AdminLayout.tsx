import { useState, useEffect } from 'react';
import { db, type Inquiry, type InquiryStatus } from '../lib/db';
import { Lock, Mail, RefreshCw, LogOut, Search, User, Filter, AlertCircle, Clock, Phone } from 'lucide-react';

export function AdminLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return <AdminDashboard onLogout={() => setIsAuthenticated(false)} />;
}

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@arvallibrandpack.com' && password === 'admin123') {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-975 via-navy-950 to-navy-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 to-primary-500" />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy-950 mb-2">Admin Login</h1>
          <p className="text-slate-500">Sign in to manage your inquiries</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-600 text-sm font-medium">
            <AlertCircle className="w-5 h-5 mr-2 shrink-0" />
            Invalid credentials (use admin@arvallibrandpack.com / admin123)
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-slate-400" />
              </div>
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-shadow"
                placeholder="admin@arvallibrandpack.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-slate-400" />
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-shadow"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<InquiryStatus | 'all'>('all');

  const fetchInquiries = async () => {
    setLoading(true);
    const data = await db.getInquiries();
    setInquiries(data);
    if (data.length > 0 && !selectedId) {
      setSelectedId(data[0].id);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: InquiryStatus) => {
    const updated = await db.updateInquiryStatus(id, newStatus);
    if (updated) {
      setInquiries(inquiries.map(i => i.id === id ? updated : i));
    }
  };

  const filteredInquiries = inquiries.filter(i => {
    const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase()) || 
                          i.company_name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || i.status === filter;
    return matchesSearch && matchesFilter;
  });

  const selectedInquiry = inquiries.find(i => i.id === selectedId);

  const getStatusColor = (status: InquiryStatus) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'contacted': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'quotation_sent': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'closed': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusLabel = (status: InquiryStatus) => {
    switch (status) {
      case 'new': return 'New';
      case 'contacted': return 'Contacted';
      case 'quotation_sent': return 'Quotation Sent';
      case 'closed': return 'Closed';
    }
  };

  const stats = {
    total: inquiries.length,
    new: inquiries.filter(i => i.status === 'new').length,
    contacted: inquiries.filter(i => i.status === 'contacted').length,
    closed: inquiries.filter(i => i.status === 'closed').length,
  };

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-navy-950 text-white min-h-screen">
        <div className="p-6 border-b border-white/10">
          <span className="text-2xl font-bold text-white tracking-tight block">Arvalli BrandPack</span>
          <span className="text-[10px] font-medium text-primary-500 uppercase tracking-widest">Admin Dashboard</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center px-4 py-3 bg-white/10 text-white rounded-xl font-medium">
            <User className="w-5 h-5 mr-3" />
            Inquiries
          </a>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={onLogout}
            className="flex items-center w-full px-4 py-3 text-red-400 hover:bg-white/5 rounded-xl font-medium transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 p-4 sm:px-8 flex justify-between items-center shrink-0">
          <h2 className="text-xl font-bold text-navy-950">Inquiries Management</h2>
          <div className="flex items-center space-x-4">
            <button 
              onClick={fetchInquiries}
              className="p-2 text-slate-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              title="Refresh"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin text-primary-600' : ''}`} />
            </button>
            <button className="md:hidden p-2 text-red-500" onClick={onLogout}>
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Stats Row */}
        <div className="p-4 sm:px-8 shrink-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Leads', val: stats.total, color: 'text-navy-900', bg: 'bg-white' },
              { label: 'New', val: stats.new, color: 'text-blue-600', bg: 'bg-white' },
              { label: 'Contacted', val: stats.contacted, color: 'text-amber-600', bg: 'bg-white' },
              { label: 'Closed', val: stats.closed, color: 'text-green-600', bg: 'bg-white' }
            ].map((s, i) => (
              <div key={i} className={`p-4 rounded-xl border border-slate-200 shadow-sm ${s.bg}`}>
                <p className="text-xs font-bold text-slate-500 uppercase">{s.label}</p>
                <p className={`text-2xl font-bold ${s.color} mt-1`}>{s.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Layout Split */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden p-4 sm:px-8 gap-6 pb-8">
          
          {/* Left: List */}
          <div className="w-full lg:w-1/3 bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-100 space-y-3 shrink-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search name or company..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                />
              </div>
              <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-hide">
                <Filter className="w-4 h-4 text-slate-400 shrink-0" />
                {['all', 'new', 'contacted', 'quotation_sent', 'closed'].map(f => (
                  <button 
                    key={f}
                    onClick={() => setFilter(f as any)}
                    className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap transition-colors ${
                      filter === f ? 'bg-navy-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {f === 'all' ? 'All' : getStatusLabel(f as any)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {filteredInquiries.length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-sm">No inquiries found.</div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {filteredInquiries.map(inquiry => (
                    <button
                      key={inquiry.id}
                      onClick={() => setSelectedId(inquiry.id)}
                      className={`w-full text-left p-4 hover:bg-primary-50/50 transition-colors ${selectedId === inquiry.id ? 'bg-primary-50/50' : ''}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-500 text-white flex items-center justify-center font-bold shadow-sm shrink-0">
                            {inquiry.name.substring(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold text-navy-950 text-sm">{inquiry.name}</p>
                            <p className="text-xs text-slate-500">{inquiry.company_name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <span className={`px-2 py-1 text-[10px] font-bold rounded-md border ${getStatusColor(inquiry.status)}`}>
                          {getStatusLabel(inquiry.status)}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {new Date(inquiry.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-full lg:w-2/3 bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden shadow-sm">
            {selectedInquiry ? (
              <div className="flex-1 overflow-y-auto">
                {/* Detail Header */}
                <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-500 text-white flex items-center justify-center text-xl font-bold shadow-md">
                      {selectedInquiry.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-950">{selectedInquiry.name}</h3>
                      <p className="text-primary-600 font-semibold text-sm">{selectedInquiry.company_name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 font-medium mb-1">Current Status</p>
                    <span className={`px-3 py-1.5 text-xs font-bold rounded-lg border inline-block ${getStatusColor(selectedInquiry.status)}`}>
                      {getStatusLabel(selectedInquiry.status)}
                    </span>
                  </div>
                </div>

                {/* Detail Body */}
                <div className="p-6 space-y-8">
                  {/* Status Actions */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Update Status</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['new', 'contacted', 'quotation_sent', 'closed'] as InquiryStatus[]).map(s => (
                        <button
                          key={s}
                          onClick={() => handleStatusUpdate(selectedInquiry.id, s)}
                          disabled={selectedInquiry.status === s}
                          className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                            selectedInquiry.status === s 
                              ? `${getStatusColor(s)} opacity-50 cursor-not-allowed ring-2 ring-offset-1 ring-${getStatusColor(s).split(' ')[1].split('-')[1]}-500` 
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {getStatusLabel(s)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 border-b border-slate-100 pb-2">Contact Details</h4>
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 text-slate-400 mr-3" />
                        <a href={`tel:${selectedInquiry.phone}`} className="text-navy-900 font-medium hover:text-primary-600">{selectedInquiry.phone}</a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 text-slate-400 mr-3" />
                        <a href={`mailto:${selectedInquiry.email}`} className="text-navy-900 font-medium hover:text-primary-600">{selectedInquiry.email}</a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 text-slate-400 mr-3" />
                        <span className="text-slate-600 font-medium">{new Date(selectedInquiry.created_at).toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 border-b border-slate-100 pb-2">Project Details</h4>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Budget Range</p>
                        <p className="text-sm font-bold text-navy-900 bg-slate-100 px-3 py-1.5 rounded-md inline-block">{selectedInquiry.budget}</p>
                      </div>
                    </div>
                  </div>

                  {/* Requirement Box */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Requirement Description</h4>
                    <div className="bg-primary-50/30 border border-primary-100 rounded-xl p-5">
                      <p className="text-navy-900 text-sm leading-relaxed whitespace-pre-wrap">
                        {selectedInquiry.requirement}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-slate-400 text-sm p-8 text-center">
                Select an inquiry from the list to view details
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
