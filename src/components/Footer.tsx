export default function Footer() {
  return (
    <footer className="bg-gray-100 py-2 text-center sticky bottom-0 text-gray-500">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} SeaFood. All rights reserved.
      </p>
    </footer>
  );
}