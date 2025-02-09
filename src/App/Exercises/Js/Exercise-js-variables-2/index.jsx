import './styles.css';

export function Exercise() {
  const mathResult1 = 2 * 5;
  const mathResult2 = 3 / 2;
  // const mathResult3 = Math.pow(3,2);
  const mathResult3 = 3 ** 3;
  const mathResult4 = Math.sqrt(3);
  const mathResult4_A = mathResult4.toFixed(2)
  const mathResult5 = 3 % 2;

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje matematyczne</h2>
        <pre>
          <code>2 * 5 = {mathResult1}</code>
        </pre>
        <code>3 : 2 = {mathResult2}</code>
        <pre>
          <code>3&#178; = {mathResult3}</code>
        </pre>
        <pre>
          {/* pierwiastek z liczby */}
          <code>&#8730;3 = {mathResult4_A}</code>
        </pre>
        <pre>
          {/* modulo */}
          <code>3%2 = {mathResult5}</code>
        </pre>
      </section>
    </div>
  );
}
