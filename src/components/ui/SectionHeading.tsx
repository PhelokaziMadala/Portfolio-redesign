type SectionHeadingProps = {
  id: string
  title: string
}

export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <h2 id={id} className="mb-8 text-3xl font-semibold text-cyan-300 md:text-4xl">
      {title}
    </h2>
  )
}
