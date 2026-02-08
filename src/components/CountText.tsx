interface CountTextProps {
  count: number;
  label: string;
}

const CountText = ({ label, count }: CountTextProps) => {
  return (
    <section className="flex flex-row gap-4">
      <span className="typo-caption">{label}</span>
      <span>
        총{" "}
        <strong className="typo-caption font-medium text-palette-primary">
          {count}
        </strong>
        건
      </span>
    </section>
  );
};

export default CountText;
