import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center mt-16 w-full">
      <div className="flex flex-col gap-8 justify-center items-center w-full">
        <SocialMedia />
        <p>Copyright © 2025 Bartłomiej Perucki</p>
      </div>
    </footer>
  );
}
