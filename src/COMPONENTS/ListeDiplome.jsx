import { useSelector } from "react-redux";

export default function ListeDiplome() {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <div className="aff">
      {data.map((p, i) => (
        <div className="card" key={i}>
          <h1>{p.intiuleDiplome}</h1>
          <p>{p.nomEtablissement}</p>
        </div>
      ))}
    </div>
  );
}
