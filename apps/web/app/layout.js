/**
 * Root layout for Samudra ERP web app
 */
import '../styles/globals.css';

export const metadata = {
  title: 'Samudra ERP',
  description: 'Logistics Management System for PT. Sarana Mudah Raya (Samudra Paket)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
