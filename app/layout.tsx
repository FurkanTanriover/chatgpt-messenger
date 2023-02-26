import SideBar from "../components/SideBar";
import "../styles/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex">
          {/* sidebar */}
          <div className=" bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <SideBar />
          </div>
          {/* client provider - notification */}
          <div className="flex-1 bg-[#343541]">{children}</div>
        </div>
      </body>
    </html>
  );
}
