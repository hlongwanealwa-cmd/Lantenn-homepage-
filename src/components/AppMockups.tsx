import React from 'react';
import { 
  TrendingUp, Smartphone, Landmark, ShieldCheck, CheckCircle2, 
  AlertCircle, AlertTriangle, FileText, ChevronRight, User, 
  Mail, Calendar, Download, Eye, Plus, Wrench, Menu, X, Clock
} from 'lucide-react';

// --- SCREEN 1: LANDLORD LIVE LEDGER DASHBOARD ("my-portfolio / live-ledger") ---
export function LiveLedgerScreen() {
  return (
    <div className="bg-slate-50 text-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-md font-sans w-full max-w-md mx-auto text-left select-none overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded ml-2">
            my-portfolio / live-ledger
          </span>
        </div>
        <span className="text-[10px] font-bold text-[#253c96] flex items-center gap-1 bg-[#253c96]/5 px-2 py-0.5 rounded-full">
          ● Live
        </span>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white border border-slate-100 p-3.5 rounded-xl shadow-sm">
          <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
            $ Total Collected
          </span>
          <div className="text-xl font-extrabold text-[#253c96] tracking-tight">
            R 19,500
          </div>
          <span className="text-[9px] font-sans font-medium text-emerald-600 mt-1 block">
            3 of 3 Tenants Paid
          </span>
        </div>

        <div className="bg-white border border-slate-100 p-3.5 rounded-xl shadow-sm">
          <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
            👥 Active Leases
          </span>
          <div className="text-xl font-extrabold text-slate-900 tracking-tight">
            100% Full
          </div>
          <span className="text-[9px] font-sans font-medium text-slate-500 mt-1 block">
            0 Vacancies
          </span>
        </div>
      </div>

      {/* Unresolved Maintenance Card */}
      <div className="bg-white border border-slate-150 p-4 rounded-xl shadow-sm mb-4 relative">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[9px] font-mono font-extrabold text-[#f36b2e] uppercase tracking-wider bg-[#f36b2e]/5 px-2 py-0.5 rounded">
            📷 Maintenance Ticket
          </span>
          <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
            UNRESOLVED
          </span>
        </div>
        
        <div className="flex gap-3 items-start">
          <div className="w-12 h-12 bg-slate-100 rounded-lg border border-slate-200 shrink-0 flex items-center justify-center text-slate-400 text-xs">
            {/* Simple representation of photo of tap */}
            <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center">
              <Wrench className="w-4 h-4 text-slate-500" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-slate-900 truncate">Unit 4B — Leaking Sink Pipe</h4>
            <p className="text-[10px] text-slate-500 leading-normal line-clamp-2 mt-0.5 font-sans italic">
              "Water pools in the kitchen cabinet when running the tap. Photo attached."
            </p>
            <button className="text-[10px] font-bold text-[#253c96] hover:underline mt-1.5 flex items-center gap-0.5 cursor-pointer">
              Assign Plumber <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Tenant Invoices Banner */}
      <div className="bg-[#253c96] text-white p-3.5 rounded-xl flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center font-mono text-[10px] font-black">
            ZAR
          </div>
          <div>
            <h5 className="text-[11px] font-bold leading-tight">Automatic Tenant Invoices</h5>
            <p className="text-[9px] text-slate-300">Delivered via SMS/WhatsApp</p>
          </div>
        </div>
        <span className="bg-emerald-500/20 text-emerald-300 font-mono text-[9px] font-bold py-0.5 px-2 rounded border border-emerald-500/20">
          RECONCILED
        </span>
      </div>
    </div>
  );
}

// --- SCREEN 2: OCCUPANCY & ARREARS DASHBOARD OVERVIEW ---
export function ArrearsDashboardScreen() {
  return (
    <div className="bg-slate-50 text-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-md font-sans w-full max-w-sm mx-auto text-left select-none overflow-hidden">
      <div className="space-y-3.5">
        {/* Occupancy Card */}
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm relative">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
            OCCUPANCY RATE
          </span>
          <div className="text-2xl font-black text-[#253c96] tracking-tight">150%</div>
          <span className="text-[10px] font-sans text-slate-500 mt-1 block">3 of 2 units occupied</span>
          <div className="absolute right-4 top-4 text-slate-300">
            <Landmark className="w-5 h-5 text-[#253c96]/30" />
          </div>
        </div>

        {/* Collection Rate Card */}
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm relative">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
            COLLECTION RATE
          </span>
          <div className="text-2xl font-black text-rose-500 tracking-tight">0%</div>
          <span className="text-[10px] font-sans text-[#f36b2e] mt-1 block">Target: 95%</span>
          <div className="absolute right-4 top-4 text-slate-300">
            <TrendingUp className="w-5 h-5 text-rose-300" />
          </div>
        </div>

        {/* Collected Card */}
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm relative">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
            COLLECTED
          </span>
          <div className="text-2xl font-black text-slate-900 tracking-tight">R0</div>
          <span className="text-[10px] font-sans text-slate-500 mt-1 block">Expected: R11,000</span>
          <div className="absolute right-4 top-4 text-slate-300">
            <FileText className="w-5 h-5 text-slate-300" />
          </div>
        </div>

        {/* Arrears Card */}
        <div className="bg-white border-2 border-rose-100 p-4 rounded-xl shadow-sm relative bg-rose-50/20">
          <span className="text-[10px] font-mono font-bold text-rose-600 uppercase tracking-wider block mb-1">
            ARREARS
          </span>
          <div className="text-2xl font-black text-rose-600 tracking-tight">R 11,000</div>
          <span className="text-[10px] font-sans font-bold text-rose-500 mt-1 block hover:underline cursor-pointer">
            Requires immediate action &rarr;
          </span>
          <div className="absolute right-4 top-4 text-rose-400">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SCREEN 3: TENANT DIRECTORY LIST ---
export function TenantDirectoryScreen() {
  const tenants = [
    { id: 'WAT6365', initials: '65', email: 'cbmthembu@hotmail.com', prop: 'Waterloo 4A' },
    { id: 'KL01988', initials: '88', email: 'hlongwanealwa@gmail.com', prop: 'Kloof 5R' },
    { id: 'KL01894', initials: '94', email: 'w.sandile@icloud.com', prop: 'Kloof 7A' }
  ];

  return (
    <div className="bg-white text-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-md font-sans w-full max-w-sm mx-auto text-left select-none overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <div>
          <h4 className="font-display font-extrabold text-sm text-slate-900">Tenant Directory</h4>
          <p className="text-[10px] text-slate-400">Master list of all assigned tenants</p>
        </div>
        <div className="bg-slate-100 px-3 py-1 rounded-xl text-center shrink-0 border border-slate-200/50">
          <span className="block text-[8px] font-mono text-slate-400 uppercase font-black">Active</span>
          <span className="text-xs font-black text-[#253c96]">3 Tenants</span>
        </div>
      </div>

      <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider grid grid-cols-12 gap-2 border-b border-slate-100 pb-2 mb-2">
        <div className="col-span-8">Tenant Details</div>
        <div className="col-span-4 text-right">Property (Room)</div>
      </div>

      <div className="space-y-2">
        {tenants.map((t, idx) => (
          <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#253c96]/10 text-[#253c96] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                {t.initials}
              </div>
              <div className="min-w-0">
                <span className="block text-xs font-bold text-slate-800 font-mono">{t.id}</span>
                <span className="block text-[10px] text-slate-400 truncate max-w-[130px] font-sans">{t.email}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-mono">
                🏠 {t.prop}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- SCREEN 4: DIGITAL LEASES VAULT ---
export function LeasesVaultScreen() {
  return (
    <div className="bg-white text-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-md font-sans w-full max-w-sm mx-auto text-left select-none overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <div>
          <h4 className="font-display font-extrabold text-sm text-slate-900">Manage Leases</h4>
          <p className="text-[10px] text-slate-400">View and manage rental agreements</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-[10px] font-bold py-1.5 px-3 rounded-lg flex items-center gap-1 shrink-0 cursor-pointer transition-colors">
          <Plus className="w-3 h-3" /> Create Lease
        </button>
      </div>

      <div className="border border-slate-150 rounded-xl p-4 shadow-sm bg-slate-50/30">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-900">Kloof <span className="text-[11px] font-mono font-medium text-slate-400">(5R)</span></h5>
              <span className="text-[10px] text-slate-400 block font-mono">Jul 1, 2026 • Mar 1, 2027</span>
            </div>
          </div>
          <span className="bg-emerald-100 text-emerald-800 font-mono text-[9px] font-bold py-0.5 px-2 rounded uppercase border border-emerald-200">
            Active
          </span>
        </div>

        {/* Tenant Details Box */}
        <div className="bg-white border border-slate-100 p-2.5 rounded-lg mb-3">
          <div className="text-[8px] font-mono text-slate-400 uppercase font-black mb-1">Tenant Details</div>
          <div className="flex justify-between items-center bg-[#253c96]/5 px-2 py-1 rounded text-[10px] font-mono text-[#253c96] font-bold mb-1.5">
            <span>Tenant ID:</span>
            <span>KL01988</span>
          </div>
          <div className="flex justify-between items-center bg-slate-50 px-2 py-1 rounded text-[9px] font-mono text-slate-500 font-bold">
            <span>USERNAME:</span>
            <span>KLO-6534</span>
          </div>
          <span className="text-[8px] text-slate-400 font-sans block mt-1 leading-tight">
            Credentials have been sent securely to the tenant's email.
          </span>
        </div>

        {/* Rent & Deposit info */}
        <div className="grid grid-cols-2 gap-3 mb-4 border-t border-b border-slate-100 py-2">
          <div>
            <span className="text-[8px] font-mono text-slate-400 uppercase font-bold block">Monthly Rent</span>
            <span className="text-xs font-black text-slate-900 font-mono">R2,500</span>
          </div>
          <div>
            <span className="text-[8px] font-mono text-slate-400 uppercase font-bold block">Deposit (R7000)</span>
            <span className="text-[10px] font-black text-emerald-600 font-mono uppercase bg-emerald-50 px-1.5 py-0.5 rounded">PAID</span>
          </div>
        </div>

        {/* Actions inside agreement */}
        <div className="space-y-1.5">
          <div className="bg-emerald-50 border border-emerald-100 p-2 rounded-lg text-[10px] text-emerald-800 font-medium flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Signed digitally by Alwande Hlongwane</span>
          </div>
          <button className="w-full bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold py-1.5 px-3 rounded-lg text-[10px] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
            <Eye className="w-3.5 h-3.5 text-slate-400" /> View Move-In Photos
          </button>
          <button className="w-full bg-[#253c96]/5 hover:bg-[#253c96]/10 text-[#253c96] font-bold py-1.5 px-3 rounded-lg text-[10px] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
            <Download className="w-3.5 h-3.5 text-[#253c96]" /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

// --- SCREEN 5: INVOICES LIST ---
export function InvoicesScreen() {
  return (
    <div className="bg-white text-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-md font-sans w-full max-w-sm mx-auto text-left select-none overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <div>
          <h4 className="font-display font-extrabold text-sm text-slate-900">Invoices</h4>
          <p className="text-[10px] text-slate-400">Automated billing & tracking</p>
        </div>
        <div className="flex gap-1">
          <button className="bg-slate-950 text-white font-mono text-[9px] font-bold py-1 px-2.5 rounded flex items-center gap-0.5 cursor-pointer">
            Statement
          </button>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-[9px] font-bold py-1 px-2.5 rounded flex items-center gap-0.5 cursor-pointer">
            + Generate
          </button>
        </div>
      </div>

      {/* Invoice Card */}
      <div className="border border-slate-150 rounded-xl shadow-sm overflow-hidden bg-slate-50/40">
        <div className="bg-white p-3.5 border-b border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <span className="text-rose-500 bg-rose-50 p-1 rounded">💵</span>
            <div>
              <span className="block text-xs font-bold text-slate-900 font-mono">KL01988-5R-JUN-2026</span>
              <span className="block text-[8px] text-slate-400 font-mono">Tenant UID: KL01988</span>
            </div>
          </div>
          <span className="bg-rose-50 text-rose-500 font-mono text-[9px] font-bold py-0.5 px-2 rounded uppercase border border-rose-100">
            UNPAID
          </span>
        </div>

        <div className="p-3.5 space-y-1.5 text-[11px] font-sans">
          <div className="flex justify-between text-slate-500">
            <span>Rent</span>
            <span className="font-bold text-slate-800 font-mono">R2,500</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Utilities</span>
            <span className="font-bold text-slate-800 font-mono">R0</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Damages/Fees</span>
            <span className="font-bold text-slate-800 font-mono">R0</span>
          </div>
          
          <div className="flex justify-between font-bold text-emerald-600 border-t border-slate-150 pt-1.5 text-xs">
            <span>Total</span>
            <span className="font-mono">R2,500</span>
          </div>

          <div className="text-[8px] font-mono text-slate-400 mt-2">
            Due Date: Jun 8, 2026
          </div>
        </div>

        <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold py-2 px-3 border-t border-slate-150 text-[10px] transition-all flex items-center justify-center gap-1 cursor-pointer">
          <Download className="w-3 h-3 text-slate-400" /> PDF
        </button>
      </div>
    </div>
  );
}

// --- SCREEN 6: MAINTENANCE TICKETS BOARD ---
export function MaintenanceTicketsScreen() {
  return (
    <div className="bg-white text-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-md font-sans w-full max-w-sm mx-auto text-left select-none overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <div>
          <h4 className="font-display font-extrabold text-sm text-slate-900">Maintenance Tickets</h4>
          <p className="text-[10px] text-slate-400">View and manage repair requests</p>
        </div>
        <div className="bg-slate-150 p-0.5 rounded-lg flex text-[10px] font-bold">
          <button className="bg-white shadow-sm text-slate-800 px-2 py-0.5 rounded-md font-sans">Tickets</button>
          <button className="text-slate-500 px-2 py-0.5 rounded-md font-sans">Inspections</button>
        </div>
      </div>

      <div className="space-y-3 max-h-[280px] overflow-y-auto">
        {/* Ticket 1 */}
        <div className="border border-slate-150 rounded-xl p-3.5 bg-slate-50/30">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900 font-sans">plumbing - Leak</h5>
                <span className="text-[8px] text-slate-400 font-mono block">Jun 26, 2026</span>
              </div>
            </div>
            <span className="bg-rose-50 text-rose-500 font-mono text-[8px] font-bold py-0.5 px-2 rounded uppercase border border-rose-100 animate-pulse">
              Open
            </span>
          </div>
          <div className="flex gap-2 text-[9px] font-bold mt-3 font-mono">
            <button className="text-[#253c96] hover:underline cursor-pointer">VIEW</button>
            <button className="text-[#f36b2e] hover:underline cursor-pointer">ATTACHMENT</button>
          </div>
        </div>

        {/* Ticket 2 */}
        <div className="border border-slate-150 rounded-xl p-3.5 bg-slate-50/10 opacity-80">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-800 font-sans">Other - Rage bait problem</h5>
                <span className="text-[8px] text-slate-400 font-mono block">Jun 25, 2026</span>
              </div>
            </div>
            <span className="bg-slate-100 text-slate-600 font-mono text-[8px] font-bold py-0.5 px-2 rounded uppercase border border-slate-200">
              Resolved
            </span>
          </div>
          <div className="flex gap-2 text-[9px] font-bold mt-3 font-mono">
            <button className="text-slate-400 hover:underline cursor-pointer">VIEW ATTACHMENT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SCREEN 7: MONTHLY STATEMENT PDF ---
export function MonthlyStatementScreen() {
  return (
    <div className="bg-white text-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xl font-sans w-full max-w-sm mx-auto text-left select-none overflow-hidden text-[9px] flex flex-col justify-between aspect-[1/1.4] relative">
      <div className="absolute top-2 right-2 font-mono text-[8px] text-slate-300 font-bold bg-slate-100 px-1.5 py-0.5 rounded">
        1 of 1
      </div>
      
      <div>
        {/* Banner */}
        <div className="bg-slate-950 text-white p-3 rounded-lg mb-4 flex items-center justify-between">
          <div>
            <span className="font-black text-xs uppercase text-[#f36b2e] tracking-tight">Lantenn</span>
            <span className="text-[7px] text-slate-400 block font-mono">Statement No: STMT-2026-8589</span>
          </div>
          <span className="text-[8px] font-extrabold uppercase font-mono tracking-widest text-slate-100 bg-white/10 px-2 py-0.5 rounded">
            Monthly Statement
          </span>
        </div>

        {/* Info grids */}
        <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-[7.5px] border-b border-slate-100 pb-2.5">
          <div>
            <span className="font-extrabold text-slate-400 block">LANDLORD</span>
            <span className="font-bold text-slate-800 block">Alwande Hlongwane</span>
            <span className="text-slate-400 block">Various Managed Properties</span>
          </div>
          <div>
            <span className="font-extrabold text-slate-400 block">PERIOD</span>
            <span className="font-bold text-slate-800 block">June 2026</span>
            <span className="text-slate-400 block">Generated: Jun 27, 2026</span>
          </div>
        </div>

        {/* Ledger Table */}
        <table className="w-full text-left font-mono text-[7px] mb-4">
          <thead>
            <tr className="bg-slate-950 text-white font-extrabold">
              <th className="p-1.5 rounded-l">DATE</th>
              <th className="p-1.5">TENANT ID</th>
              <th className="p-1.5">DESCRIPTION</th>
              <th className="p-1.5 rounded-r text-right">AMOUNT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600 font-bold">
            <tr>
              <td className="p-1.5">Jun 25, 2026</td>
              <td className="p-1.5 text-slate-900">WAT6365</td>
              <td className="p-1.5">Rent collected</td>
              <td className="p-1.5 text-slate-900 text-right">R 5,000.00</td>
            </tr>
            <tr>
              <td className="p-1.5">Jun 25, 2026</td>
              <td className="p-1.5 text-slate-900">KLO7970</td>
              <td className="p-1.5">Rent collected</td>
              <td className="p-1.5 text-slate-900 text-right">R 8,000.00</td>
            </tr>
            <tr>
              <td className="p-1.5">Jun 25, 2026</td>
              <td className="p-1.5 text-slate-900 text-[#253c96]">TEN-2026-4619</td>
              <td className="p-1.5">Rent collected</td>
              <td className="p-1.5 text-slate-900 text-right font-black">R 8,000.00</td>
            </tr>
            <tr>
              <td className="p-1.5">Jun 25, 2026</td>
              <td className="p-1.5 text-slate-900 text-[#253c96]">TEN-2026-4619</td>
              <td className="p-1.5">Rent collected</td>
              <td className="p-1.5 text-slate-900 text-right font-black">R 8,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Calculations box */}
      <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg flex flex-col gap-1 text-[8px] font-mono mb-2">
        <div className="flex justify-between text-slate-500">
          <span>Total Collections</span>
          <span className="font-bold text-slate-800">R 29,000.00</span>
        </div>
        <div className="flex justify-between text-rose-500 font-extrabold">
          <span>Platform Fee (3%)</span>
          <span>- R 870.00</span>
        </div>
        <div className="flex justify-between text-slate-900 font-black border-t border-slate-200 pt-1 text-[8.5px]">
          <span>Net Receivable</span>
          <span className="text-[#253c96]">R 28,130.00</span>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-2 text-[6.5px] font-sans text-slate-400 text-center leading-tight">
        Lantenn Property Solutions | This statement is generated automatically and reflects collections processed via the Lantenn platform. For queries, contact your account manager.
      </div>
    </div>
  );
}

// --- SCREEN 8: MOBILE NAV SIDEBAR ---
export function MobileNavSidebarScreen() {
  const menuItems = [
    { label: 'Dashboard', icon: 'LayoutGrid', active: true },
    { label: 'Properties', icon: 'Home' },
    { label: 'Tenants', icon: 'Users' },
    { label: 'Leases', icon: 'FileText' },
    { label: 'Invoices', icon: 'Calculator' },
    { label: 'Payments', icon: 'CreditCard' },
    { label: 'Banking', icon: 'Briefcase' },
    { label: 'Maintenance', icon: 'Wrench' }
  ];

  return (
    <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-md font-sans w-full max-w-sm mx-auto text-left select-none overflow-hidden aspect-[1/1.5] flex flex-col justify-between">
      {/* Drawer Header */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="font-black text-[#1A1A1A] text-sm uppercase">Lantenn</span>
        </div>
        <X className="w-5 h-5 text-slate-400" />
      </div>

      {/* Menu Links */}
      <div className="px-3 py-4 flex-1 space-y-1">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              item.active
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-100/50'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="text-slate-400 shrink-0">●</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Profile Box */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center font-display text-sm shrink-0">
            M
          </div>
          <div className="min-w-0">
            <span className="block text-xs font-extrabold text-slate-900 truncate font-mono">
              mthembuhydeen15@g...
            </span>
            <span className="block text-[8px] font-mono text-slate-400 font-extrabold tracking-widest">
              LANDLORD
            </span>
          </div>
        </div>
        <button className="text-slate-400 hover:text-slate-900 text-[11px] font-bold flex items-center gap-1.5 cursor-pointer mt-1 font-mono">
          &larr; Sign out
        </button>
      </div>
    </div>
  );
}

// --- SCREEN 8: LAPTOP DESKTOP HIGH-FIDELITY DASHBOARD ---
export function LaptopDashboardScreen() {
  const sidebarItems = [
    { label: 'Overview', active: true, icon: '🏠' },
    { label: 'Properties', active: false, icon: '🏢' },
    { label: 'Tenants', active: false, icon: '👥' },
    { label: 'Leases', active: false, icon: '📄' },
    { label: 'Payments', active: false, icon: '💳' },
    { label: 'Maintenance', active: false, icon: '🔧' },
    { label: 'Inspections', active: false, icon: '🔍' },
    { label: 'Reports', active: false, icon: '📊' },
    { label: 'Settings', active: false, icon: '⚙️' },
  ];

  const recentPayments = [
    { name: 'Thabo M.', unit: 'Unit 4B', amount: 'R 6,500', status: 'Paid' },
    { name: 'Nomsa K.', unit: 'Unit 2A', amount: 'R 6,500', status: 'Paid' },
    { name: 'Sipho D.', unit: 'Unit 1C', amount: 'R 6,500', status: 'Paid' },
  ];

  return (
    <div className="bg-[#060812] text-white rounded-xl shadow-2xl font-sans w-full overflow-hidden border border-slate-800 text-left flex h-[460px] select-none">
      {/* Sidebar Section */}
      <div className="w-[180px] bg-[#0b0e1a] border-r border-slate-900 flex flex-col justify-between p-4 shrink-0">
        <div>
          {/* Logo Brand */}
          <div className="flex items-center gap-1.5 mb-6 px-1">
            <span className="text-orange-500 font-black text-sm tracking-widest font-display">L<span className="text-white">a</span>nt<span className="text-orange-500">=</span>nn</span>
          </div>

          {/* Sidebar Navigation */}
          <nav className="space-y-1">
            {sidebarItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  item.active
                    ? 'bg-[#ff5c12]/10 text-[#ff5c12]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                }`}
              >
                <span className="text-xs">{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </nav>
        </div>

        {/* User Card */}
        <div className="flex items-center gap-2.5 pt-3 border-t border-slate-900">
          <div className="w-7 h-7 rounded-full bg-[#ff5c12]/20 text-[#ff5c12] flex items-center justify-center font-bold text-[10px]">
            S
          </div>
          <div className="min-w-0">
            <span className="block text-[10px] font-bold text-white truncate">Sandile</span>
            <span className="block text-[7px] text-slate-500 font-mono tracking-wider">PORTFOLIO</span>
          </div>
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="flex-1 bg-[#060812] p-5 flex flex-col justify-between overflow-y-auto">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
          <div>
            <h3 className="text-base font-black text-white tracking-tight">Overview</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400">Welcome back, <strong className="text-white">Sandile</strong></span>
            <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-mono">👨‍💼</div>
          </div>
        </div>

        {/* Stats Grid Dashboard widgets */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-[#0b0e1a] border border-slate-900 p-3 rounded-lg relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                Total Collected
              </span>
              <span className="text-[10px] text-emerald-500">↗</span>
            </div>
            <div className="text-base font-black text-white tracking-tight">
              R 19,500
            </div>
            <span className="text-[8px] text-emerald-400 font-medium block mt-0.5">
              3 of 3 Tenants Paid
            </span>
          </div>

          <div className="bg-[#0b0e1a] border border-slate-900 p-3 rounded-lg relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                Active Leases
              </span>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.2 rounded font-mono">100%</span>
            </div>
            <div className="text-base font-black text-white tracking-tight">
              100%
            </div>
            <span className="text-[8px] text-slate-400 font-medium block mt-0.5">
              Full occupancy
            </span>
          </div>

          <div className="bg-[#0b0e1a] border border-slate-900 p-3 rounded-lg relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                Vacancies
              </span>
              <span className="text-[9px] bg-slate-900 text-slate-500 px-1 rounded">0</span>
            </div>
            <div className="text-base font-black text-white tracking-tight">
              0
            </div>
            <span className="text-[8px] text-emerald-400 font-medium block mt-0.5">
              Nice work!
            </span>
          </div>
        </div>

        {/* Two-Column Middle row */}
        <div className="grid grid-cols-12 gap-3 flex-1 items-stretch">
          
          {/* Left: Rent Collected chart widget */}
          <div className="col-span-7 bg-[#0b0e1a] border border-slate-900 p-3 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">
                Rent Collected
              </span>
              <span className="text-[8px] text-[#ff5c12] font-semibold bg-[#ff5c12]/10 px-1.5 py-0.5 rounded">This Month</span>
            </div>

            {/* Simulated bar charts */}
            <div className="flex items-end justify-between h-[65px] pt-2 px-1">
              {[
                { label: 'Jan', h: '35%' },
                { label: 'Feb', h: '50%' },
                { label: 'Mar', h: '75%' },
                { label: 'Apr', h: '60%' },
                { label: 'May', h: '90%' },
                { label: 'Jun', h: '100%', active: true },
              ].map((bar, index) => (
                <div key={index} className="flex flex-col items-center gap-1 w-6">
                  <div className="w-full rounded-t bg-slate-800 relative overflow-hidden" style={{ height: '50px' }}>
                    <div 
                      className={`absolute bottom-0 left-0 right-0 rounded-t ${
                        bar.active ? 'bg-[#ff5c12]' : 'bg-[#ff5c12]/45'
                      }`}
                      style={{ height: bar.h }}
                    />
                  </div>
                  <span className="text-[7px] font-mono text-slate-500 uppercase">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Recent Payments widget list */}
          <div className="col-span-5 bg-[#0b0e1a] border border-slate-900 p-3 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">
                Recent Payments
              </span>
              <span className="text-[7px] text-slate-500 hover:underline cursor-pointer">View all</span>
            </div>

            <div className="space-y-1.5 flex-1 flex flex-col justify-center">
              {recentPayments.map((p, index) => (
                <div key={index} className="flex items-center justify-between text-[9px] border-b border-slate-900 pb-1 last:border-0 last:pb-0">
                  <div>
                    <span className="font-extrabold text-white block">{p.name}</span>
                    <span className="text-[7px] text-slate-400">{p.unit}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-white block font-black">{p.amount}</span>
                    <span className="text-[7px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 px-1 py-0.1 rounded font-bold uppercase tracking-wider">
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Maintenance Row Footer */}
        <div className="mt-3 bg-[#0d1226]/40 border border-slate-900 p-2.5 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-slate-950 flex items-center justify-center border border-slate-800 text-xs shrink-0">
              🛠️
            </div>
            <div>
              <span className="text-[9px] text-slate-400 block font-mono">ACTIVE TICKET</span>
              <h5 className="text-[10px] font-black text-white leading-tight">Unit 4B — Leaking Sink Pipe</h5>
            </div>
          </div>
          <span className="text-[8px] font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded uppercase">
            Unresolved
          </span>
        </div>

      </div>
    </div>
  );
}

// Helper wrapper to frame mockups inside high-quality laptops and mobile phones
export function DeviceFrame({ children, type = 'phone', className = '' }: { children: React.ReactNode; type?: 'phone' | 'laptop'; className?: string }) {
  if (type === 'phone') {
    return (
      <div className={`relative mx-auto w-full ${className || 'max-w-[280px] sm:max-w-[310px]'} bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-slate-900 ring-1 ring-white/10 overflow-hidden group`}>
        {/* Notch / Dynamic Island */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-full z-10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-slate-900" />
        </div>
        {/* Screen Bezel shadow */}
        <div className="bg-slate-950 rounded-[34px] overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[800px] shadow-2xl rounded-2xl overflow-hidden border border-slate-200/80 bg-white">
      {/* Laptop top bar */}
      <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b border-slate-200/50 select-none">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-400 shrink-0" />
          <span className="w-3 h-3 rounded-full bg-amber-400 shrink-0" />
          <span className="w-3 h-3 rounded-full bg-emerald-400 shrink-0" />
        </div>
        <div className="bg-slate-200/70 text-[10px] text-slate-500 font-mono font-bold px-4 py-0.5 rounded-md flex-1 text-center max-w-sm mx-auto flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> https://lantenn.co.za/portal
        </div>
      </div>
      {/* Laptop Screen Area */}
      <div className="p-2 sm:p-4 bg-[#FBF7F4]/40">
        {children}
      </div>
    </div>
  );
}
