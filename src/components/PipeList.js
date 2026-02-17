export default function ManholeList({ manholes }) {
  return (
    <div>
      <h3>Manholes</h3>
      <ul>
        {manholes.map(m => (
          <li key={m.id}>
            ID: {m.id}, Status: {m.status}, Plus Code: {m.plus_code}
          </li>
        ))}
      </ul>
    </div>
  );
}
