import Image from "next/image";

export default function MyImage({ src, alt, width, height, className }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      quality={75}
      priority={src.includes("hero") || src.includes("section-hero")}
      placeholder="blur"
      blurDataURL="/images/blur-placeholder.png"
      sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   600px"
    />
  );
}
