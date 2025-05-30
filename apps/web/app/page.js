/**
 * Home page for Samudra ERP web app
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">
          Samudra ERP
        </h1>
        <p className="text-center text-lg mb-8">
          Logistics Management System for PT. Sarana Mudah Raya
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 border border-border rounded-lg bg-surface shadow-sm">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Operational Excellence</h2>
            <p className="text-text-secondary">Streamline logistics operations from pickup to delivery</p>
          </div>
          <div className="p-6 border border-border rounded-lg bg-surface shadow-sm">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Financial Control</h2>
            <p className="text-text-secondary">Manage billing, payments, and financial reporting</p>
          </div>
          <div className="p-6 border border-border rounded-lg bg-surface shadow-sm">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Field Operations</h2>
            <p className="text-text-secondary">Mobile-optimized tools for drivers and field staff</p>
          </div>
        </div>
      </div>
    </main>
  );
}
