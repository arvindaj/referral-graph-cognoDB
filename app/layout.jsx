import "./globals.css";

export const metadata = {
  title: "Waypoint — find your way in",
  description: "Trace the shortest referral path into any company through your network.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-ink text-paper min-h-screen antialiased">{children}</body>
    </html>
  );
}
